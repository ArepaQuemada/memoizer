import { memoizer } from "./memoizer/memoizer";

const sumaYResta = (a: number, b: number) => {
  for (let i = 0; i < 9_000_000_000; i++) {}
  return a + b;
};

const memoizedSumaYResta = memoizer(sumaYResta);

console.log("result slow ", memoizedSumaYResta(1, 2));
console.log("result cache ", memoizedSumaYResta(1, 2));
