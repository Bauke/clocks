import process from "node:process";

import {defineConfig} from "vite";

const path = (location: string) => new URL(location, import.meta.url).pathname;

const outDir = path("build/");
const sourceDir = path("source/");

const dev = process.env.NODE_ENV === "development";

export default defineConfig({
  build: {
    minify: !dev,
    sourcemap: dev,
    outDir,
  },
  root: sourceDir,
});
