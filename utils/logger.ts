import pino from "pino"

const isDev = process.env.NODE_ENV !== "production" && process.env.VERCEL !== "1"

let stream
if (isDev && typeof window === "undefined") {
  try {
    const pretty = require("pino-pretty")
    stream = pretty({
      colorize: true,
    })
  } catch (e) {
    console.warn("pino-pretty could not be loaded", e)
  }
}

/**
開発環境かつサーバーサイドの場合のみ pino-pretty を使用
Next.js (Turbopack) 環境下で transport を使うと worker のパス解決エラーになるため、
@see docs/pino.md
 */
export const logger = pino(
  {
    level: process.env.LOG_LEVEL || "info",
  },
  stream,
)
