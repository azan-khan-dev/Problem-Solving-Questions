function createSearcher(fetchFn, delay) {
  let timer = null;
  let latestId = 0;

  return function search(query) {
    clearTimeout(timer);
    const callId = ++latestId;

    return new Promise((resolve, reject) => {
      timer = setTimeout(async () => {
        try {
          const result = await fetchFn(query);
          if (callId === latestId) resolve(result);
          // else: stale result, silently ignored
        } catch (err) {
          if (callId === latestId) reject(err);
        }
      }, delay);
    });
  };
}