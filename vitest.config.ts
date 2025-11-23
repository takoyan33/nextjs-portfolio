/// <reference types="vitest" />
import react from "@vitejs/plugin-react"
import { playwright } from "@vitest/browser-playwright"
import path from "path"
import { defineConfig } from "vitest/config"

const isBrowser = process.env.VITEST_BROWSER === "true"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      hooks: path.resolve(__dirname, "./hooks"),
      "@": path.resolve(__dirname, "./app"),
    },
  },
  define: {
    "process.env.NEXT_PUBLIC_API_URL": JSON.stringify("http://localhost:3001/"),
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: isBrowser ? ["./setupTests.browser.ts"] : ["./setupTests.js"],
    // Server Componentのテスト用設定
    server: {
      deps: {
        inline: ["server-only"],
      },
    },
    browser: {
      enabled: isBrowser,
      provider: playwright(),
      instances: [
        {
          browser: "chromium",
        },
      ],
    },
  },
})
