import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/**/*.ts"],
  minify: true,
  sourcemap: true,
  clean: true,
  dts: true,
  format: ["iife", "cjs", "esm"],
});
