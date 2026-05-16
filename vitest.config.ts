/// <reference types="vitest" />
import react from "@vitejs/plugin-react"
import { playwright } from "@vitest/browser-playwright"
import path from "path"
import { defineConfig } from "vitest/config"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      hooks: path.resolve(__dirname, "./hooks"),
      "@": path.resolve(__dirname, "./"),
    },
  },
  define: {
    "process.env.BASE_API_URL": JSON.stringify("http://localhost:3001/"),
    "process.env.NEXT_PUBLIC_API_URL": JSON.stringify("http://localhost:3001/"),
  },
  test: {
    globals: true,
    projects: [
      {
        extends: true,
        test: {
          name: "browser",
          setupFiles: "./setupTests.browser.ts",
          include: ["**/*.browser.test.tsx"],
          environment: "jsdom",
          browser: {
            enabled: true,
            headless: true,
            viewport: {
              width: 414,
              height: 896,
            },
            provider: playwright({
              contextOptions: {
                deviceScaleFactor: 1,
              },
            }),
            instances: [
              {
                browser: "chromium",
              },
            ],
            expect: {
              toMatchScreenshot: {
                comparatorOptions: {
                  threshold: 0.2,
                },
              },
            },
          },
        },
      },
      {
        extends: true,
        test: {
          name: "node",
          include: ["**/*.node.test.tsx"],
          setupFiles: "./setupTests.js",
          environment: "jsdom",
          // Server Componentのテスト用設定
          server: {
            deps: {
              inline: ["server-only"],
            },
          },
        },
      },
    ],
  },
})
