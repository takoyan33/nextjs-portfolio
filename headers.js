module.exports = [
	{
		key: "X-DNS-Prefetch-Control",
		value: "on",
		// ブラウザが外部ドメインのDNS解決を事前に行う機能を制御する
		// "on" にすることで、パフォーマンスを向上させることができる
	},
	{
		key: "Strict-Transport-Security",
		value: "max-age=63072000;",
		// HSTS (HTTP Strict Transport Security) を設定し、HTTPS接続を強制する
		// "max-age=63072000" は 2年間（秒単位）
		// "includeSubDomains" によりサブドメインも適用対象に

	},
	{
		key: "X-Content-Type-Options",
		value: "nosniff",
		// ブラウザが MIME タイプを勝手に判別するのを防ぐ (MIME スニッフィング防止)
		// セキュリティリスクを低減する
	},
	{
		key: "Referrer-Policy",
		value: "same-origin",
		// リファラー（参照元URL）の送信ポリシーを制御する
		// "same-origin" は同一オリジンのリクエストにのみリファラーを送信
	},
	{
		key: "Permissions-Policy",
		value: "camera=()",
		// 各種ブラウザのAPI権限を制御する
	},
]
