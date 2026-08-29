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
      SCREENING: 0,
      INTERVIEWING: 0,
      OFFER: 0,
      ACCEPTED: 0,
      REJECTED: 0,
      ARCHIVED: 0,
    };

    const rejectionDropOffs: Record<string, number> = {
      AFTER_APPLICATION: 0,
      AFTER_SCREENING: 0,
      AFTER_INTERVIEW: 0,
      AFTER_OFFER: 0,
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
          case 'SCREENING':
            rejectionDropOffs.AFTER_SCREENING++;
            break;
          case 'INTERVIEWING':
            rejectionDropOffs.AFTER_INTERVIEW++;
            break;
          case 'OFFER':
            rejectionDropOffs.AFTER_OFFER++;
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
    const acceptedCount = stageTransitions.ACCEPTED || counts.ACCEPTED || 0;

    return {
      statusCounts: counts,
      stageTransitions,
      rejectionDropOffs,
      conversionRates: {
        applicationToInterview: appliedCount > 0 ? (interviewingCount / appliedCount) * 100 : 0,
        interviewToOffer: interviewingCount > 0 ? (offerCount / interviewingCount) * 100 : 0,
        offerToAcceptance: offerCount > 0 ? (acceptedCount / offerCount) * 100 : 0,
        overallSuccessRate: appliedCount > 0 ? (acceptedCount / appliedCount) * 100 : 0,
      },
    };
  }
}
