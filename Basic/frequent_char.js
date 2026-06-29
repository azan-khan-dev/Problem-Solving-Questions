function mostFrequentChar(str) {
  const freq = {};
  let max = 0, result = "";
  for (const ch of str) {
    freq[ch] = (freq[ch] || 0) + 1;
    if (freq[ch] > max) {
      max = freq[ch];
      result = ch;
    }
  }
  return result;
}
console.log(mostFrequentChar("mississippi"))