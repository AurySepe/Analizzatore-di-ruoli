import React, { useMemo } from 'react';

interface DiffPart {
  value: string;
  added?: boolean;
  removed?: boolean;
}

function diffWords(oldStr: string, newStr: string): DiffPart[] {
  if (!oldStr) return [{ value: newStr, added: true }];
  if (!newStr) return [];

  const oldWords = oldStr.split(/(\s+|[.,;:!?()'"])/).filter(Boolean);
  const newWords = newStr.split(/(\s+|[.,;:!?()'"])/).filter(Boolean);

  const N = oldWords.length;
  const M = newWords.length;

  // Optimized DP array (two rows) if necessary, but N, M are usually small (< 300 words)
  const dp: number[][] = Array.from({ length: N + 1 }, () => new Array(M + 1).fill(0));

  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= M; j++) {
      if (oldWords[i - 1].toLowerCase() === newWords[j - 1].toLowerCase()) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  let i = N;
  let j = M;
  const result: DiffPart[] = [];

  while (i > 0 || j > 0) {
    if (i > 0 && j > 0 && oldWords[i - 1].toLowerCase() === newWords[j - 1].toLowerCase()) {
      result.unshift({ value: newWords[j - 1] });
      i--;
      j--;
    } else if (j > 0 && (i === 0 || dp[i][j - 1] >= dp[i - 1][j])) {
      result.unshift({ value: newWords[j - 1], added: true });
      j--;
    } else if (i > 0 && (j === 0 || dp[i][j - 1] < dp[i - 1][j])) {
      result.unshift({ value: oldWords[i - 1], removed: true });
      i--;
    }
  }

  // Merge consecutive parts
  const merged: DiffPart[] = [];
  for (const part of result) {
    const last = merged[merged.length - 1];
    if (last && !!last.added === !!part.added && !!last.removed === !!part.removed) {
      last.value += part.value;
    } else {
      merged.push({ ...part });
    }
  }

  return merged;
}

export const DiffText: React.FC<{
  baseText: string;
  newText: string;
  highlightAdded?: boolean;
  className?: string;
}> = ({ baseText, newText, highlightAdded = true, className = '' }) => {
  const parts = useMemo(() => diffWords(baseText, newText), [baseText, newText]);

  if (!highlightAdded) {
    return <span className={className}>{newText}</span>;
  }

  return (
    <span className={className}>
      {parts.map((part, index) => {
        if (part.removed) {
          return null; // Don't display removed base words in the new text
        }
        if (part.added) {
          return (
            <mark
              key={index}
              className="rounded-md bg-emerald-100 px-1 py-0.5 font-bold text-emerald-950 underline decoration-emerald-500 decoration-2 shadow-2xs ring-1 ring-emerald-300"
            >
              {part.value}
            </mark>
          );
        }
        return <React.Fragment key={index}>{part.value}</React.Fragment>;
      })}
    </span>
  );
};
