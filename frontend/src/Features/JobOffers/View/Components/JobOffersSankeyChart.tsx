import React, { useMemo, useState, useRef, useCallback, useEffect } from 'react';
import { sankey as d3Sankey, sankeyLinkHorizontal, type SankeyNode, type SankeyLink } from 'd3-sankey';
import { ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import type { components } from '@/Core/OpenApi/schema';

type SankeyDataDto = components['schemas']['SankeyDataDto'];

interface NodeData {
  id: string;
  name: string;
  category: 'source' | 'priority' | 'selection' | 'application' | 'outcome';
  count: number;
}

interface LinkData {
  source: string;
  target: string;
  value: number;
  realValue: number;
}

type ExtendedNode = SankeyNode<NodeData, LinkData>;
type ExtendedLink = SankeyLink<NodeData, LinkData>;

interface HoverState {
  type: 'node' | 'link';
  id?: string;
  sourceId?: string;
  targetId?: string;
  name?: string;
  value: number;
  percentage?: number;
  x: number;
  y: number;
}

const CATEGORY_COLORS: Record<string, { fill: string; stroke: string; text: string; bg: string }> = {
  source: { fill: '#3b82f6', stroke: '#1d4ed8', text: '#1e40af', bg: 'bg-blue-50 text-blue-700 ring-blue-200' },
  // Colonna 1: Priorità AI
  priority_HIGH: { fill: '#10b981', stroke: '#047857', text: '#065f46', bg: 'bg-emerald-50 text-emerald-700 ring-emerald-200' },
  priority_MEDIUM: { fill: '#f59e0b', stroke: '#b45309', text: '#92400e', bg: 'bg-amber-50 text-amber-700 ring-amber-200' },
  priority_LOW: { fill: '#94a3b8', stroke: '#64748b', text: '#475569', bg: 'bg-slate-100 text-slate-700 ring-slate-200' },
  priority_DISQUALIFIED: { fill: '#ef4444', stroke: '#b91c1c', text: '#991b1b', bg: 'bg-rose-50 text-rose-700 ring-rose-200' },
  priority_UNANALYZED: { fill: '#cbd5e1', stroke: '#94a3b8', text: '#64748b', bg: 'bg-slate-50 text-slate-600 ring-slate-200' },
  // Colonna 2: Selezione Utente
  selection_SAVED: { fill: '#6366f1', stroke: '#4338ca', text: '#3730a3', bg: 'bg-indigo-50 text-indigo-700 ring-indigo-200' },
  selection_NEW: { fill: '#0ea5e9', stroke: '#0369a1', text: '#075985', bg: 'bg-sky-50 text-sky-700 ring-sky-200' },
  selection_ARCHIVED: { fill: '#64748b', stroke: '#334155', text: '#1e293b', bg: 'bg-slate-100 text-slate-700 ring-slate-300' },
  // Colonna 3: Decisione Candidatura
  application_APPLIED: { fill: '#8b5cf6', stroke: '#6d28d9', text: '#5b21b6', bg: 'bg-purple-50 text-purple-700 ring-purple-200' },
  application_ARCHIVED: { fill: '#64748b', stroke: '#334155', text: '#1e293b', bg: 'bg-slate-100 text-slate-700 ring-slate-300' },
  // Colonna 4: Esito Candidatura
  application_REJECTED: { fill: '#f43f5e', stroke: '#be123c', text: '#9f1239', bg: 'bg-rose-50 text-rose-700 ring-rose-200' },
  outcome_INTERVIEWING: { fill: '#0284c7', stroke: '#0369a1', text: '#075985', bg: 'bg-sky-50 text-sky-700 ring-sky-200' },
  // Colonna 5: Esito Finale
  outcome_OFFER: { fill: '#059669', stroke: '#047857', text: '#065f46', bg: 'bg-emerald-50 text-emerald-800 ring-emerald-300' },
  outcome_REJECTED: { fill: '#dc2626', stroke: '#991b1b', text: '#7f1d1d', bg: 'bg-rose-100 text-rose-800 ring-rose-300' },
};

/**
 * Funzione di ponderazione sublineare dei volumi.
 * Permette ai rami con volumi piccoli di avere uno spessore visibile
 * senza essere soffocati dai grandi volumi.
 */
function computeVisualWeight(value: number): number {
  if (value <= 0) return 0;
  return Math.round(Math.pow(value, 0.48) * 12);
}

/**
 * Restituisce la colonna fissa (depth) di un nodo nel layout Sankey a 6 colonne.
 * Questo valore viene passato a d3-sankey tramite nodeAlign() per forzare
 * un layout a colonne predefinite invece dell'algoritmo automatico.
 *
 * Col 0: Fonti estrattori   (src_*)
 * Col 1: Priorità AI        (prio_*)
 * Col 2: Selezione Utente   (sel_*)
 * Col 3: Decisione Cand.    (app_ARCHIVED, app_APPLIED)
 * Col 4: Esito Candidatura  (app_REJECTED, out_INTERVIEWING)
 * Col 5: Esito Finale       (out_OFFER, out_REJECTED)
 */
function getNodeDepth(nodeId: string): number {
  if (nodeId.startsWith('src_')) return 0;
  if (nodeId.startsWith('prio_')) return 1;
  if (nodeId.startsWith('sel_')) return 2;
  if (nodeId === 'app_ARCHIVED' || nodeId === 'app_APPLIED') return 3;
  if (nodeId === 'app_REJECTED' || nodeId === 'out_INTERVIEWING') return 4;
  if (nodeId === 'out_OFFER' || nodeId === 'out_REJECTED') return 5;
  return 0;
}

function getNodeColor(node: ExtendedNode) {
  if (node.id.startsWith('prio_')) {
    const pKey = node.id.replace('prio_', '');
    return CATEGORY_COLORS[`priority_${pKey}`] || CATEGORY_COLORS.source;
  }
  if (node.id.startsWith('sel_')) {
    const sKey = node.id.replace('sel_', '');
    return CATEGORY_COLORS[`selection_${sKey}`] || CATEGORY_COLORS.source;
  }
  if (node.id.startsWith('app_')) {
    const aKey = node.id.replace('app_', '');
    return CATEGORY_COLORS[`application_${aKey}`] || CATEGORY_COLORS.source;
  }
  if (node.id.startsWith('out_')) {
    const oKey = node.id.replace('out_', '');
    return CATEGORY_COLORS[`outcome_${oKey}`] || CATEGORY_COLORS.source;
  }
  return CATEGORY_COLORS.source;
}

export const JobOffersSankeyChart: React.FC<{
  readonly data: SankeyDataDto;
  readonly width?: number;
  readonly height?: number;
}> = ({ data, width = 1140, height = 580 }) => {
  const [hovered, setHovered] = useState<HoverState | null>(null);

  // Riferimenti per container e SVG
  const containerRef = useRef<HTMLDivElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);

  // Zoom & Pan state (minimo 1.0, massimo 4.0)
  const [scale, setScale] = useState(1);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const isDraggingRef = useRef(false);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const [isDraggingState, setIsDraggingState] = useState(false);

  const margin = { top: 24, right: 130, bottom: 25, left: 18 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const { graphNodes, graphLinks } = useMemo(() => {
    if (!data.nodes.length || !data.links.length) {
      return { graphNodes: [], graphLinks: [] };
    }

    const nodesCopy: ExtendedNode[] = data.nodes.map((d) => ({
      ...d,
      count: d.count,
    }));

    const nodeMap = new Map<string, ExtendedNode>();
    nodesCopy.forEach((n) => nodeMap.set(n.id, n));

    // Calcolo iniziale con peso compresso
    const linksCopy: ExtendedLink[] = data.links
      .filter((l) => nodeMap.has(l.source) && nodeMap.has(l.target) && l.value > 0)
      .map((l) => ({
        source: l.source,
        target: l.target,
        realValue: l.value,
        value: computeVisualWeight(l.value),
      }));

    // PRINCIPIO DI CONSERVAZIONE DEL FLUSSO VISIVO:
    // Per ogni stadio intermedio (priority, selection, application), la somma dei pesi uscenti
    // deve coincidere esattamente con la somma dei pesi entranti (inSum === outSum).
    // Questo garantisce che la barra del nodo abbia ESATTAMENTE la stessa identica altezza
    // sia dei nastri in ingresso che dei nastri in uscita, senza parti di barra scoperte o disallineate.
    const intermediateStages: NodeData['category'][] = ['priority', 'selection', 'application'];
    for (const stage of intermediateStages) {
      const stageNodes = nodesCopy.filter((n) => n.category === stage);
      for (const node of stageNodes) {
        const inLinks = linksCopy.filter((l) => l.target === node.id);
        const outLinks = linksCopy.filter((l) => l.source === node.id);

        if (inLinks.length > 0 && outLinks.length > 0) {
          const inSum = inLinks.reduce((acc, l) => acc + l.value, 0);
          const outRealSum = outLinks.reduce((acc, l) => acc + l.realValue, 0);

          if (outRealSum > 0) {
            for (const ol of outLinks) {
              ol.value = Math.max(1, Math.round((ol.realValue / outRealSum) * inSum));
            }
          }
        }
      }
    }

    const sankeyGenerator = d3Sankey<NodeData, LinkData>()
      .nodeId((d) => d.id)
      // Forza il layout a 6 colonne fisse tramite depth per nodo
      .nodeAlign((node) => getNodeDepth((node as ExtendedNode).id))
      // Nodi con link uscenti (di transito) in cima, terminali in fondo
      .nodeSort((a, b) => {
        const aTerminal = (a as ExtendedNode).sourceLinks?.length === 0 ? 1 : 0;
        const bTerminal = (b as ExtendedNode).sourceLinks?.length === 0 ? 1 : 0;
        return aTerminal - bTerminal;
      })
      .nodeWidth(18)
      .nodePadding(48)
      .extent([
        [0, 0],
        [innerWidth, innerHeight],
      ]);

    try {
      const computed = sankeyGenerator({
        nodes: nodesCopy,
        links: linksCopy,
      });
      return { graphNodes: computed.nodes, graphLinks: computed.links };
    } catch (e) {
      console.error('Errore nel calcolo del layout Sankey:', e);
      return { graphNodes: [], graphLinks: [] };
    }
  }, [data, innerWidth, innerHeight]);

  const pathGenerator = sankeyLinkHorizontal<NodeData, LinkData>();

  // Zoom da toolbar (centrato sul centro visibile del canvas)
  const zoomAtPoint = useCallback((factor: number, centerX: number, centerY: number) => {
    setScale((prevScale) => {
      const nextScale = Math.min(Math.max(+(prevScale * factor).toFixed(3), 1.0), 4.0);
      setTranslate((prevTranslate) => {
        if (nextScale <= 1.0) return { x: 0, y: 0 };
        return {
          x: centerX - (centerX - prevTranslate.x) * (nextScale / prevScale),
          y: centerY - (centerY - prevTranslate.y) * (nextScale / prevScale),
        };
      });
      return nextScale;
    });
  }, []);

  const handleZoomIn = useCallback(() => {
    zoomAtPoint(1.2, width / 2, height / 2);
  }, [zoomAtPoint, width, height]);

  const handleZoomOut = useCallback(() => {
    zoomAtPoint(1 / 1.2, width / 2, height / 2);
  }, [zoomAtPoint, width, height]);

  const handleResetZoom = useCallback(() => {
    setScale(1);
    setTranslate({ x: 0, y: 0 });
  }, []);

  // Pan handlers
  const handleMouseDown = useCallback((e: React.MouseEvent<SVGSVGElement>) => {
    if (e.button !== 0) return;
    isDraggingRef.current = true;
    dragStartRef.current = {
      x: e.clientX - translate.x,
      y: e.clientY - translate.y,
    };
    setIsDraggingState(true);
  }, [translate]);

  const handleMouseMove = useCallback((e: React.MouseEvent<SVGSVGElement>) => {
    if (!isDraggingRef.current) return;
    setTranslate({
      x: e.clientX - dragStartRef.current.x,
      y: e.clientY - dragStartRef.current.y,
    });
  }, []);

  const handleMouseUp = useCallback(() => {
    isDraggingRef.current = false;
    setIsDraggingState(false);
  }, []);

  // Zoom-to-Cursor con rotellina del mouse: registrato come listener nativo { passive: false }
  // per bloccare lo scorrimento della pagina web (preventDefault) ed evitare lo sfasamento delle coordinate.
  // Clamp minimo a 1.0: permette di ritornare alla dimensione iniziale al 100%, ma non oltre.
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onNativeWheel = (e: WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();

      const svgEl = svgRef.current;
      if (!svgEl) return;

      const rect = svgEl.getBoundingClientRect();
      const mouseX = ((e.clientX - rect.left) / rect.width) * width;
      const mouseY = ((e.clientY - rect.top) / rect.height) * height;

      // Smorzamento progressivo
      const zoomFactor = Math.exp(-e.deltaY * 0.0012);

      setScale((prevScale) => {
        const nextScale = Math.min(Math.max(+(prevScale * zoomFactor).toFixed(3), 1.0), 4.0);
        setTranslate((prevTranslate) => {
          if (nextScale <= 1.0) return { x: 0, y: 0 };
          return {
            x: mouseX - (mouseX - prevTranslate.x) * (nextScale / prevScale),
            y: mouseY - (mouseY - prevTranslate.y) * (nextScale / prevScale),
          };
        });
        return nextScale;
      });
    };

    container.addEventListener('wheel', onNativeWheel, { passive: false });
    return () => {
      container.removeEventListener('wheel', onNativeWheel);
    };
  }, [width, height]);

  if (!graphNodes.length || !graphLinks.length) {
    return (
      <div className="flex h-96 items-center justify-center rounded-3xl border border-dashed border-slate-200 bg-white p-6 text-slate-500 shadow-sm">
        <p className="text-sm font-medium">Dati insufficienti per generare il diagramma di flusso.</p>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-4 sm:p-6 shadow-sm overscroll-contain"
      style={{ touchAction: 'none' }}
    >
      {/* Toolbar di Controllo Zoom & Reset */}
      <div className="absolute right-4 bottom-4 sm:right-6 sm:bottom-6 z-10 flex items-center gap-1.5 rounded-2xl border border-slate-200/80 bg-white/90 p-1.5 shadow-md backdrop-blur-md">
        <button
          type="button"
          onClick={handleZoomIn}
          title="Ingrandisci (Zoom +)"
          className="flex h-8 w-8 items-center justify-center rounded-xl text-slate-600 transition hover:bg-slate-100 hover:text-slate-950 active:scale-95"
        >
          <ZoomIn className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={handleZoomOut}
          disabled={scale <= 1.0}
          title="Rimpicciolisci (Zoom -)"
          className="flex h-8 w-8 items-center justify-center rounded-xl text-slate-600 transition hover:bg-slate-100 hover:text-slate-950 active:scale-95 disabled:opacity-40 disabled:pointer-events-none"
        >
          <ZoomOut className="h-4 w-4" />
        </button>
        <div className="h-4 w-[1px] bg-slate-200" />
        <button
          type="button"
          onClick={handleResetZoom}
          title="Ripristina visuale (100%)"
          className="flex items-center gap-1.5 rounded-xl px-2.5 py-1 text-xs font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-950 active:scale-95"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          <span>{Math.round(scale * 100)}%</span>
        </button>
      </div>

      <svg
        ref={svgRef}
        viewBox={`0 0 ${width} ${height}`}
        className={`w-full h-auto select-none ${isDraggingState ? 'cursor-grabbing' : 'cursor-grab'}`}
        style={{ minWidth: width, maxHeight: height + 60 }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <defs>
          {/* Gradienti lineari per ciascun link */}
          {graphLinks.map((link, idx) => {
            const srcNode = link.source as ExtendedNode;
            const tgtNode = link.target as ExtendedNode;
            const srcColor = getNodeColor(srcNode);
            const tgtColor = getNodeColor(tgtNode);
            const gradId = `link-gradient-${srcNode.id}-${tgtNode.id}-${idx}`;

            return (
              <linearGradient
                key={gradId}
                id={gradId}
                gradientUnits="userSpaceOnUse"
                x1={srcNode.x1 ?? 0}
                x2={tgtNode.x0 ?? 0}
              >
                <stop offset="0%" stopColor={srcColor.fill} stopOpacity={0.4} />
                <stop offset="100%" stopColor={tgtColor.fill} stopOpacity={0.4} />
              </linearGradient>
            );
          })}
        </defs>

        {/* Gruppo principale con Zoom e Pan centrati */}
        <g transform={`translate(${translate.x}, ${translate.y}) scale(${scale})`}>
          <g transform={`translate(${margin.left}, ${margin.top})`}>
            {/* Links (Nastri) */}
            {graphLinks.map((link, idx) => {
              const srcNode = link.source as ExtendedNode;
              const tgtNode = link.target as ExtendedNode;
              const pathData = pathGenerator(link) || '';
              const gradId = `link-gradient-${srcNode.id}-${tgtNode.id}-${idx}`;

              const isRelated =
                hovered?.type === 'node'
                  ? hovered.id === srcNode.id || hovered.id === tgtNode.id
                  : hovered?.type === 'link'
                    ? hovered.sourceId === srcNode.id && hovered.targetId === tgtNode.id
                    : true;

              // Usiamo il valore reale al 100% per i tooltip e le etichette
              const actualValue = link.realValue ?? link.value;
              const srcRealCount = srcNode.count ?? 0;

              return (
                <path
                  key={`link-${idx}`}
                  d={pathData}
                  fill="none"
                  stroke={`url(#${gradId})`}
                  strokeWidth={Math.max(2.5, link.width || 0)}
                  strokeOpacity={hovered ? (isRelated ? 0.85 : 0.08) : 0.45}
                  className="transition-all duration-200 cursor-pointer hover:stroke-opacity-90"
                  onMouseMove={(e) => {
                    setHovered({
                      type: 'link',
                      sourceId: srcNode.id,
                      targetId: tgtNode.id,
                      name: `${srcNode.name} → ${tgtNode.name}`,
                      value: actualValue,
                      percentage: srcRealCount > 0 ? Math.round((actualValue / srcRealCount) * 100) : undefined,
                      x: e.clientX,
                      y: e.clientY,
                    });
                  }}
                  onMouseLeave={() => setHovered(null)}
                />
              );
            })}

            {/* Nodes (Rettangoli & Badge) */}
            {graphNodes.map((node) => {
              const color = getNodeColor(node);
              const isHovered = hovered?.type === 'node' && hovered.id === node.id;
              const isRelated =
                hovered?.type === 'link'
                  ? hovered.sourceId === node.id || hovered.targetId === node.id
                  : true;

              // I nodi nella metà destra (col 3, 4, 5) hanno le etichette a sinistra della barra
              const isRightSide = getNodeDepth(node.id) >= 3;
              const actualNodeCount = node.count;

              return (
                <g
                  key={`node-${node.id}`}
                  className="transition-opacity duration-200 cursor-pointer"
                  opacity={hovered && !isHovered && !isRelated ? 0.35 : 1}
                  onMouseMove={(e) => {
                    setHovered({
                      type: 'node',
                      id: node.id,
                      name: node.name,
                      value: actualNodeCount,
                      x: e.clientX,
                      y: e.clientY,
                    });
                  }}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* Rettangolo Nodo */}
                  <rect
                    x={node.x0}
                    y={node.y0}
                    width={(node.x1 || 0) - (node.x0 || 0)}
                    height={Math.max(5, (node.y1 || 0) - (node.y0 || 0))}
                    rx={4}
                    fill={color.fill}
                    stroke={color.stroke}
                    strokeWidth={1}
                    className="transition-transform duration-150 hover:brightness-110"
                  />

                  {/* Etichetta di Testo e Conteggio Reale */}
                  <text
                    x={isRightSide ? (node.x0 || 0) - 8 : (node.x1 || 0) + 8}
                    y={((node.y0 || 0) + (node.y1 || 0)) / 2}
                    dy="0.35em"
                    textAnchor={isRightSide ? 'end' : 'start'}
                    className="select-none pointer-events-none text-xs font-medium fill-slate-700"
                  >
                    <tspan className="font-semibold fill-slate-950">{node.name}</tspan>{' '}
                    <tspan className="font-bold fill-slate-500">({actualNodeCount.toLocaleString('it-IT')})</tspan>
                  </text>
                </g>
              );
            })}
          </g>
        </g>
      </svg>

      {/* Floating Tooltip con Coordinate assolute del viewport */}
      {hovered && (
        <div
          className="fixed pointer-events-none z-50 rounded-2xl border border-slate-200 bg-white/95 px-4 py-2.5 shadow-xl backdrop-blur-sm text-xs space-y-1 transform -translate-x-1/2 -translate-y-full -mt-2"
          style={{ left: hovered.x, top: hovered.y }}
        >
          <p className="font-semibold text-slate-900">{hovered.name}</p>
          <div className="flex items-center gap-2 text-slate-600">
            <span className="font-bold text-slate-950 text-sm">{hovered.value.toLocaleString('it-IT')}</span>
            <span>annunci</span>
            {hovered.percentage !== undefined && (
              <span className="rounded-full bg-slate-100 px-2 py-0.5 font-semibold text-slate-700">
                {hovered.percentage}%
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
