/// <reference types="vitest" />
import react from "@vitejs/plugin-react"
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
    "process.env.NEXT_PUBLIC_API_URL": JSON.stringify("http://localhost:3000/"),
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./setupTests.js"],
    // Server Componentのテスト用設定
    server: {
      deps: {
        inline: ["server-only"],
      },
    },
  },
})
