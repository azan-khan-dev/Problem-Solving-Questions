function topWords(text, n) {
  const words = text.toLowerCase().match(/[a-z']+/g) || [];
  const counts = {};
  for (const w of words) counts[w] = (counts[w] || 0) + 1;

  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, n)
    .map(([word, count]) => ({ word, count }));
}