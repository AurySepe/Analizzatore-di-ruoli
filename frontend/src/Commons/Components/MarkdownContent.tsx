import React from 'react';

function parseInlineMarkdown(text: string): React.ReactNode[] {
  // Regex to match code (`code`), bold (**bold**), italic (*italic*)
  const regex = /(`[^`]+`|\*\*[^*]+\*\*|__[^_]+__|(?<!\*)\*[^*]+\*(?!\*)|(?<!_)_[^_]+_(?!_))/g;
  const parts = text.split(regex);

  return parts.map((part, index) => {
    if (!part) return null;

    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code
          key={index}
          className="rounded-md bg-slate-100 px-1.5 py-0.5 font-mono text-xs font-semibold text-indigo-700 ring-1 ring-slate-200"
        >
          {part.slice(1, -1)}
        </code>
      );
    }

    if ((part.startsWith('**') && part.endsWith('**')) || (part.startsWith('__') && part.endsWith('__'))) {
      return (
        <strong key={index} className="font-bold text-slate-900">
          {parseInlineMarkdown(part.slice(2, -2))}
        </strong>
      );
    }

    if ((part.startsWith('*') && part.endsWith('*')) || (part.startsWith('_') && part.endsWith('_'))) {
      return (
        <em key={index} className="italic text-slate-800">
          {parseInlineMarkdown(part.slice(1, -1))}
        </em>
      );
    }

    return part;
  });
}

export const MarkdownContent: React.FC<{
  content: string | null | undefined;
  className?: string;
}> = ({ content, className = '' }) => {
  if (!content || !content.trim()) {
    return null;
  }

  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let currentList: React.ReactNode[] = [];
  let inList = false;

  const flushList = () => {
    if (inList && currentList.length > 0) {
      elements.push(
        <ul key={`ul-${elements.length}`} className="my-2 space-y-1.5 pl-4 list-disc marker:text-indigo-500">
          {currentList}
        </ul>,
      );
      currentList = [];
      inList = false;
    }
  };

  lines.forEach((rawLine, index) => {
    const line = rawLine.trimEnd();
    const trimmed = line.trim();

    if (!trimmed) {
      flushList();
      return;
    }

    // List items: '- ', '* '
    if (/^[-*]\s+/.test(trimmed)) {
      inList = true;
      const listText = trimmed.replace(/^[-*]\s+/, '');
      currentList.push(
        <li key={`li-${index}`} className="text-sm leading-6 text-slate-800">
          {parseInlineMarkdown(listText)}
        </li>,
      );
      return;
    }

    // Headings
    if (trimmed.startsWith('#')) {
      flushList();
      const match = trimmed.match(/^(#{1,6})\s+(.*)$/);
      if (match) {
        const level = match[1].length;
        const headingText = match[2];
        const headingContent = parseInlineMarkdown(headingText);

        if (level === 1) {
          elements.push(
            <h1 key={`h-${index}`} className="mt-4 mb-2 text-xl font-extrabold text-slate-900">
              {headingContent}
            </h1>,
          );
        } else if (level === 2) {
          elements.push(
            <h2 key={`h-${index}`} className="mt-4 mb-2 text-lg font-bold text-slate-900">
              {headingContent}
            </h2>,
          );
        } else {
          elements.push(
            <h3 key={`h-${index}`} className="mt-3 mb-1 text-base font-semibold text-slate-900">
              {headingContent}
            </h3>,
          );
        }
        return;
      }
    }

    // Regular paragraph line
    flushList();
    elements.push(
      <p key={`p-${index}`} className="my-1 text-sm leading-6 text-slate-800">
        {parseInlineMarkdown(line)}
      </p>,
    );
  });

  flushList();

  return <div className={`space-y-1 ${className}`}>{elements}</div>;
};
