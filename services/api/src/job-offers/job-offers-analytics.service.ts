import { Injectable } from '@nestjs/common';
import { PrismaService } from '../commons/prisma/prisma.service';

@Injectable()
export class JobOffersAnalyticsService {
  constructor(private readonly prisma: PrismaService) {}

  async getFunnelAnalytics() {
    const historyEntries = await this.prisma.jobStatusHistory.findMany({
      orderBy: { createdAt: 'asc' },
    });

    const statusCounts = await this.prisma.jobOffer.groupBy({
      by: ['status'],
      _count: { _all: true },
    });

    const counts: Record<string, number> = {};
    for (const item of statusCounts) {
      counts[item.status] = item._count._all;
    }

    const stageTransitions: Record<string, number> = {
      SAVED: 0,
      APPLIED: 0,
      INTERVIEWING: 0,
      OFFER: 0,
      REJECTED: 0,
      ARCHIVED: 0,
    };

    const rejectionDropOffs: Record<string, number> = {
      AFTER_APPLICATION: 0,
      AFTER_INTERVIEW: 0,
      PRE_APPLICATION: 0,
    };

    for (const entry of historyEntries) {
      if (stageTransitions[entry.toStatus] !== undefined) {
        stageTransitions[entry.toStatus]++;
      }

      if (entry.toStatus === 'REJECTED') {
        switch (entry.fromStatus) {
          case 'APPLIED':
            rejectionDropOffs.AFTER_APPLICATION++;
            break;
          case 'INTERVIEWING':
            rejectionDropOffs.AFTER_INTERVIEW++;
            break;
          default:
            rejectionDropOffs.PRE_APPLICATION++;
            break;
        }
      }
    }

    const appliedCount = stageTransitions.APPLIED || counts.APPLIED || 0;
    const interviewingCount = stageTransitions.INTERVIEWING || counts.INTERVIEWING || 0;
    const offerCount = stageTransitions.OFFER || counts.OFFER || 0;

    // --- CALCOLO SANKEY NODES & LINKS (5 STADI) ---
    // 1. Estrazione dati aggregati da DB per Source & Priority
    const allOffersWithEval = await this.prisma.jobOffer.findMany({
      select: {
        id: true,
        source: true,
        status: true,
        evaluation: {
          select: { priority: true },
        },
      },
    });

    const sourcePriorityCounts: Record<string, Record<string, number>> = {};
    const priorityStatusCounts: Record<string, Record<string, number>> = {};
    const sourceTotals: Record<string, number> = {};
    const priorityTotals: Record<string, number> = {
      HIGH: 0,
      MEDIUM: 0,
      LOW: 0,
      DISQUALIFIED: 0,
      UNANALYZED: 0,
    };

    for (const o of allOffersWithEval) {
      const src = o.source;
      sourceTotals[src] = (sourceTotals[src] ?? 0) + 1;

      const prio = o.evaluation ? o.evaluation.priority : 'UNANALYZED';
      priorityTotals[prio] = (priorityTotals[prio] ?? 0) + 1;

      if (!sourcePriorityCounts[src]) sourcePriorityCounts[src] = {};
      sourcePriorityCounts[src][prio] = (sourcePriorityCounts[src][prio] ?? 0) + 1;

      if (!priorityStatusCounts[prio]) priorityStatusCounts[prio] = {};
      priorityStatusCounts[prio][o.status] = (priorityStatusCounts[prio][o.status] ?? 0) + 1;
    }

    // === ROUTING PER-OFFER BASATO SULLA HISTORY ===
    // Determina per ciascuna offerta il percorso reale:
    // - offersEverSaved: set di jobOfferId che hanno mai raggiunto lo stato SAVED
    // - offersArchivedAfterSaved: set di jobOfferId che sono passati da SAVED ad ARCHIVED
    //   (= scartati DOPO la selezione, ma PRIMA di candidarsi → app_ARCHIVED)
    const offersEverSaved = new Set(
      historyEntries.filter((e) => e.toStatus === 'SAVED').map((e) => e.jobOfferId),
    );
    const offersArchivedAfterSaved = new Set(
      historyEntries
        .filter((e) => e.fromStatus === 'SAVED' && e.toStatus === 'ARCHIVED')
        .map((e) => e.jobOfferId),
    );

    // Calcolo routing prio → sel per costruire i link con conteggi accurati
    const prioSelCounts: Record<string, { new: number; archived: number; saved: number }> = {};
    let selNewTotal = 0;
    let selArchivedTotal = 0;

    for (const offer of allOffersWithEval) {
      const prio = offer.evaluation?.priority ?? 'UNANALYZED';
      // DISQUALIFIED e UNANALYZED sono terminali in col. 1: non proseguono
      if (prio === 'DISQUALIFIED' || prio === 'UNANALYZED') continue;

      if (!prioSelCounts[prio]) prioSelCounts[prio] = { new: 0, archived: 0, saved: 0 };

      const everSaved = offersEverSaved.has(offer.id);
      if (everSaved) {
        // L'offerta ha raggiunto SAVED (e potenzialmente oltre) → sel_SAVED
        prioSelCounts[prio].saved++;
      } else if (offer.status === 'ARCHIVED') {
        // Archiviata senza mai essere stata salvata → sel_ARCHIVED (terminale col. 2)
        prioSelCounts[prio].archived++;
        selArchivedTotal++;
      } else {
        // Ancora in NEW o non ancora esaminata dall'utente → sel_NEW (terminale col. 2)
        prioSelCounts[prio].new++;
        selNewTotal++;
      }
    }

    const selSavedTotal = offersEverSaved.size;
    const appArchivedCount = offersArchivedAfterSaved.size;
    const appAppliedCount = appliedCount;
    const rejAfterApp = rejectionDropOffs.AFTER_APPLICATION || 0;
    const intTotal = interviewingCount;
    const offTotal = offerCount;
    const rejAfterInt = rejectionDropOffs.AFTER_INTERVIEW || 0;

    const sankeyNodes: { id: string; name: string; category: 'source' | 'priority' | 'selection' | 'application' | 'outcome'; count: number }[] = [];
    const sankeyLinks: { source: string; target: string; value: number }[] = [];

    // === COLONNA 0: Fonti Estrattori ===
    const sourceLabels: Record<string, string> = {
      ARBEITNOW: 'Arbeitnow',
      REMOTIVE: 'Remotive',
      JOBICY: 'Jobicy',
      WE_WORK_REMOTELY: 'WeWorkRemotely',
      HIMALAYAS: 'Himalayas',
      REMOTEOK: 'RemoteOK',
      MANUAL: 'Inseriti a mano',
    };

    for (const [srcKey, total] of Object.entries(sourceTotals)) {
      sankeyNodes.push({ id: `src_${srcKey}`, name: sourceLabels[srcKey] ?? srcKey, category: 'source', count: total });
    }

    // === COLONNA 1: Priorità AI (DISQUALIFIED e UNANALYZED sono terminali) ===
    const priorityLabels: Record<string, string> = {
      HIGH: 'Alta Priorità',
      MEDIUM: 'Media Priorità',
      LOW: 'Bassa Priorità',
      DISQUALIFIED: 'Squalificati dall\'AI',
      UNANALYZED: 'In attesa di analisi',
    };

    for (const [prioKey, total] of Object.entries(priorityTotals)) {
      if (total > 0) {
        sankeyNodes.push({ id: `prio_${prioKey}`, name: priorityLabels[prioKey] ?? prioKey, category: 'priority', count: total });
      }
    }

    // Link Col 0 → Col 1 (Fonti → Priorità AI)
    for (const [srcKey, prioMap] of Object.entries(sourcePriorityCounts)) {
      for (const [prioKey, count] of Object.entries(prioMap)) {
        if (count > 0) sankeyLinks.push({ source: `src_${srcKey}`, target: `prio_${prioKey}`, value: count });
      }
    }

    // === COLONNA 2: Selezione Utente ===
    // sel_NEW: non esaminati (terminale)
    // sel_ARCHIVED: scartati direttamente (terminale)
    // sel_SAVED: selezionato dall'utente per candidarsi (transito → evento passato)
    if (selNewTotal > 0) sankeyNodes.push({ id: 'sel_NEW', name: 'Non esaminati', category: 'selection', count: selNewTotal });
    if (selArchivedTotal > 0) sankeyNodes.push({ id: 'sel_ARCHIVED', name: 'Scartati', category: 'selection', count: selArchivedTotal });
    if (selSavedTotal > 0) sankeyNodes.push({ id: 'sel_SAVED', name: 'Selezionato', category: 'selection', count: selSavedTotal });

    // Link Col 1 → Col 2 (Priorità → Selezione, solo HIGH/MEDIUM/LOW)
    for (const [prioKey, counts] of Object.entries(prioSelCounts)) {
      if (counts.new > 0) sankeyLinks.push({ source: `prio_${prioKey}`, target: 'sel_NEW', value: counts.new });
      if (counts.archived > 0) sankeyLinks.push({ source: `prio_${prioKey}`, target: 'sel_ARCHIVED', value: counts.archived });
      if (counts.saved > 0) sankeyLinks.push({ source: `prio_${prioKey}`, target: 'sel_SAVED', value: counts.saved });
    }

    // === COLONNA 3: Decisione Candidatura ===
    // app_ARCHIVED: salvati ma ritirati prima di candidarsi (terminale)
    // app_APPLIED: candidatura inviata (transito → evento passato)
    if (appArchivedCount > 0) sankeyNodes.push({ id: 'app_ARCHIVED', name: 'Ritirato', category: 'application', count: appArchivedCount });
    if (appAppliedCount > 0) sankeyNodes.push({ id: 'app_APPLIED', name: 'Candidato', category: 'application', count: appAppliedCount });

    // Link Col 2 → Col 3
    if (appArchivedCount > 0) sankeyLinks.push({ source: 'sel_SAVED', target: 'app_ARCHIVED', value: appArchivedCount });
    if (appAppliedCount > 0) sankeyLinks.push({ source: 'sel_SAVED', target: 'app_APPLIED', value: appAppliedCount });

    // === COLONNA 4: Esito Candidatura ===
    // app_REJECTED: rifiutati dopo candidatura (terminale)
    // out_INTERVIEWING: invitati a colloquio (transito → evento passato)
    if (rejAfterApp > 0) sankeyNodes.push({ id: 'app_REJECTED', name: 'Rifiutato', category: 'application', count: rejAfterApp });
    if (intTotal > 0) sankeyNodes.push({ id: 'out_INTERVIEWING', name: 'Invitato a colloquio', category: 'outcome', count: intTotal });

    // Link Col 3 → Col 4
    if (rejAfterApp > 0) sankeyLinks.push({ source: 'app_APPLIED', target: 'app_REJECTED', value: rejAfterApp });
    if (intTotal > 0) sankeyLinks.push({ source: 'app_APPLIED', target: 'out_INTERVIEWING', value: intTotal });

    // === COLONNA 5: Esito Finale ===
    // out_OFFER: offerta ricevuta (terminale)
    // out_REJECTED: rifiutato dopo colloquio (terminale)
    if (offTotal > 0) sankeyNodes.push({ id: 'out_OFFER', name: 'Offerta ricevuta', category: 'outcome', count: offTotal });
    if (rejAfterInt > 0) sankeyNodes.push({ id: 'out_REJECTED', name: 'Rifiutato post-colloquio', category: 'outcome', count: rejAfterInt });

    // Link Col 4 → Col 5
    if (offTotal > 0) sankeyLinks.push({ source: 'out_INTERVIEWING', target: 'out_OFFER', value: offTotal });
    if (rejAfterInt > 0) sankeyLinks.push({ source: 'out_INTERVIEWING', target: 'out_REJECTED', value: rejAfterInt });

    // Raggruppamento link duplicati (aggregazione source-target)
    const mergedLinksMap = new Map<string, number>();
    for (const link of sankeyLinks) {
      const key = `${link.source}->${link.target}`;
      mergedLinksMap.set(key, (mergedLinksMap.get(key) ?? 0) + link.value);
    }

    const finalLinks = Array.from(mergedLinksMap.entries()).map(([key, value]) => {
      const [source, target] = key.split('->');
      return { source, target, value };
    });

    // Filtra nodi che non hanno link collegati o conteggio 0
    const activeNodeIds = new Set<string>();
    finalLinks.forEach((l) => {
      activeNodeIds.add(l.source);
      activeNodeIds.add(l.target);
    });
    const finalNodes = sankeyNodes.filter((n) => activeNodeIds.has(n.id) && n.count > 0);

    return {
      statusCounts: counts,
      stageTransitions,
      rejectionDropOffs,
      conversionRates: {
        applicationToInterview: appliedCount > 0 ? (interviewingCount / appliedCount) * 100 : 0,
        interviewToOffer: interviewingCount > 0 ? (offerCount / interviewingCount) * 100 : 0,
        overallSuccessRate: appliedCount > 0 ? (offerCount / appliedCount) * 100 : 0,
      },
      sankey: {
        nodes: finalNodes,
        links: finalLinks,
      },
    };
  }
}
