function minWindow(s, t) {
  if (t.length === 0 || s.length === 0) return "";

  const need = {};
  for (const c of t) need[c] = (need[c] || 0) + 1;

  let required = Object.keys(need).length;
  let formed = 0;
  const windowCounts = {};

  let left = 0, right = 0;
  let result = [Infinity, 0, 0]; // length, left, right

  while (right < s.length) {
    const c = s[right];
    windowCounts[c] = (windowCounts[c] || 0) + 1;

    if (need[c] && windowCounts[c] === need[c]) {
      formed++;
    }

    while (left <= right && formed === required) {
      if (right - left + 1 < result[0]) {
        result = [right - left + 1, left, right];
      }
      const leftChar = s[left];
      windowCounts[leftChar]--;
      if (need[leftChar] && windowCounts[leftChar] < need[leftChar]) {
        formed--;
      }
      left++;
    }

    right++;
  }

  return result[0] === Infinity ? "" : s.slice(result[1], result[2] + 1);
}

console.log(minWindow("ADOBECODEBANC", "ABC")); 