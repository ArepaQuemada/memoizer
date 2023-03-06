export const memoizer = (callback) => {
  const cache = new Map();
  return (...args) => {
    const key = args.toString();
    const hasKey = cache.has(key);
    if (!hasKey) {
      const resultFromCallback = callback(...args);
      cache.set(key, resultFromCallback);
      return resultFromCallback;
    }
    return cache.get(key);
  };
};
