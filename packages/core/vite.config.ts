import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "./dist",
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "@blro/body-scroll-lock",
      fileName(format) {
        if (format === "es") return "body-scroll-lock.mjs";
        return "body-scroll-lock.cjs";
      },
    },
  },
  resolve: {
    alias: {
      "~": resolve(__dirname, "src/"),
      "#playground": resolve(__dirname, "playground/"),
    },
  },
});
