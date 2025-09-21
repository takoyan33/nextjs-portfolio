import react from "@vitejs/plugin-react"
import { defineConfig } from "vitest/config"
import path from "path"

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"hooks": path.resolve(__dirname, "./hooks"),
		},
	},
	define: {
		"process.env.NEXT_PUBLIC_API_URL": JSON.stringify("http://localhost:3000/"),
	},
	test: {
		environment: "jsdom",
		setupFiles: ["./setupTests.js"],
		// Server Componentのテスト用設定
		server: {
			deps: {
				inline: ["server-only"]
			}
		}
	},
})
