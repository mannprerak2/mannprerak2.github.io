/**
 * Utility to map tech stack names and tags to beautiful, contrasting Tailwind classes.
 */
export function getTagStyles(tag: string): string {
  const clean = tag.toLowerCase().trim();
  
  if (clean.includes('flutter') || clean === 'dart') {
    return 'bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-950/30 dark:text-cyan-300 dark:border-cyan-900/40';
  }
  if (clean.includes('python') || clean.includes('django') || clean === 'mysql') {
    return 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/30 dark:text-blue-300 dark:border-blue-900/40';
  }
  if (clean.includes('java') || clean.includes('spring') || clean.includes('c/c++') || clean === 'c++') {
    return 'bg-red-50 text-red-700 border-red-200 dark:bg-red-950/30 dark:text-red-300 dark:border-red-900/40';
  }
  if (clean.includes('web') || clean.includes('svelte') || clean.includes('html') || clean.includes('js') || clean.includes('ts')) {
    return 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/30 dark:text-emerald-300 dark:border-emerald-900/40';
  }
  if (clean.includes('google') || clean.includes('gsoc') || clean.includes('peer bonus')) {
    return 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/30 dark:text-amber-300 dark:border-amber-900/40';
  }
  if (clean.includes('unity') || clean.includes('runner') || clean.includes('game') || clean.includes('puzzle')) {
    return 'bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/30 dark:text-purple-300 dark:border-purple-900/40';
  }
  if (clean.includes('git') || clean.includes('docker') || clean.includes('linux')) {
    return 'bg-zinc-100 text-zinc-700 border-zinc-300 dark:bg-zinc-800/40 dark:text-zinc-350 dark:border-zinc-700/40';
  }
  
  return 'bg-slate-50 text-slate-700 border-slate-200 dark:bg-slate-900/30 dark:text-slate-300 dark:border-slate-800/40';
}
