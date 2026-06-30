function chunkBy(arr, predicate) {
  if (arr.length === 0) return [];
  const result = [[arr[0]]];

  for (let i = 1; i < arr.length; i++) {
    const lastChunk = result[result.length - 1];
    if (predicate(arr[i], arr[i - 1])) {
      result.push([arr[i]]);
    } else {
      lastChunk.push(arr[i]);
    }
  }
  return result;
}

