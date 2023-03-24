import { Callback } from "../types";
import { createHash } from "../utils/create-hash";

export const memoizer = <T>(callback: Callback<T>) => {
  const cache = new Map<string, ReturnType<Callback<T>>>();

  return (...args: T[]): ReturnType<Callback<T>> => {
    const key = createHash(args);
    const hasKey = cache.has(key);

    if (!hasKey) {
      const resultFromCallback = callback(...args) as ReturnType<Callback<T>>;
      cache.set(key, resultFromCallback);
      return resultFromCallback;
    }
    return cache.get(key);
  };
};
