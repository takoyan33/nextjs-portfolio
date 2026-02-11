import pino from "pino"

const isDev = process.env.NODE_ENV !== "production"

// 開発環境かつサーバーサイドの場合のみ pino-pretty を使用
// Next.js (Turbopack) 環境下で transport を使うと worker のパス解決エラーになるため、
// ストリームとして直接渡す方式を採用
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

export const logger = pino(
  {
    level: process.env.LOG_LEVEL || "info",
  },
  stream,
)
