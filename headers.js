// セキュリティ強化用HTTPレスポンスヘッダー定義
const securityHeaders = [
  // DNSプリフェッチを有効化（外部リソースの名前解決を高速化）
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },

  // 他サイトからのiframe埋め込みを禁止（クリックジャッキング対策）
  { key: "X-Frame-Options", value: "DENY" },

  // HTTPS強制（2年間）+ サブドメイン含む + preloadリスト登録前提
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },

  // MIMEタイプの推測を禁止（XSS対策）
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },

  // リファラー送信を同一オリジンのみに制限
  {
    key: "Referrer-Policy",
    value: "same-origin",
  },

  // ブラウザAPIの利用を明示的に制限
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },

  // コンテンツの読み込み元を制限（XSS・データ漏洩対策）
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // TODO: 本番では unsafe-eval / unsafe-inline を外すのが理想
      "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://www.clarity.ms",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https:",
      "font-src 'self' data:",
      "connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://*.clarity.ms https://c.bing.com https://vitals.vercel-insights.com",
    ].join("; "),
  },
];

module.exports = securityHeaders;
