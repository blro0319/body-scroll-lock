import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "./dist",
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      fileName: "index",
      formats: ["cjs", "es"],
    },
  },
  resolve: {
    alias: {
      "~": resolve(__dirname, "src/"),
      "#playground": resolve(__dirname, "playground/"),
    },
  },
});
