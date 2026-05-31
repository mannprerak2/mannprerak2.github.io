/**
 * Simple utility to parse basic Markdown formatting (bold, inline code, links, and bullet lists) into HTML.
 */
export function parseMarkdown(text: string): string {
  if (!text) return '';
  
  // Format bold text
  let html = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  
  // Format inline code blocks
  html = html.replace(/`(.*?)`/g, '<code class="bg-zinc-100 dark:bg-zinc-800/80 px-1 py-0.5 rounded text-xs font-mono text-brand-600 dark:text-brand-400">$1</code>');
  
  // Format links
  html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-brand-600 dark:text-brand-400 hover:underline font-semibold">$1</a>');
  
  // Format bullet lists and paragraphs
  const lines = html.split('\n');
  let inList = false;
  const processedLines = [];

  for (let line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith('- ')) {
      if (!inList) {
        processedLines.push('<ul class="list-disc ml-4 space-y-1 my-2">');
        inList = true;
      }
      processedLines.push(`<li class="leading-relaxed">${trimmed.substring(2)}</li>`);
    } else {
      if (inList) {
        processedLines.push('</ul>');
        inList = false;
      }
      if (trimmed) {
        processedLines.push(`<p class="mb-3 leading-relaxed">${trimmed}</p>`);
      }
    }
  }

  if (inList) {
    processedLines.push('</ul>');
  }

  return processedLines.join('');
}
