function findMissingRanges(nums, lo, hi) {
  const result = [];
  let prev = lo - 1;

  for (let i = 0; i <= nums.length; i++) {
    const curr = i < nums.length ? nums[i] : hi + 1;
    if (curr - prev >= 2) {
      result.push([prev + 1, curr - 1]);
    }
    prev = curr;
  }
  return result;
}

