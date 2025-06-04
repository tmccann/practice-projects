import { defineConfig as defineVitestConfig } from "vitest/config";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineVitestConfig({
  plugins: [tailwindcss()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/tests/setup.ts",
    include: ["src/**/*.{test,spec}.{js,ts,jsx,tsx}"],
    typecheck: {
      tsconfig: "./tsconfig.app.json",
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});
