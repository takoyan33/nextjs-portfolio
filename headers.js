module.exports = [
	{
		key: "X-DNS-Prefetch-Control",
		value: "on",
		// ブラウザが外部ドメインのDNS解決を事前に行う機能を制御する
		// "on" にすることで、パフォーマンスを向上させることができる
	},
	{
		key: "Strict-Transport-Security",
		value: "max-age=63072000; includeSubDomains; preload",
		// HSTS (HTTP Strict Transport Security) を設定し、HTTPS接続を強制する
		// "max-age=63072000" は 2年間（秒単位）
		// "includeSubDomains" によりサブドメインも適用対象に
		// "preload" はHSTSプリロードリストに登録可能にする
	},
	// todo: Server が決まってる場合は設定できる
	// {
	//     key: 'Server',
	//     value: 'Apache', // phony server value
	//     // サーバーの種類を隠すために偽の値を設定することができる
	// },
	{
		key: "X-Content-Type-Options",
		value: "nosniff",
		// ブラウザが MIME タイプを勝手に判別するのを防ぐ (MIME スニッフィング防止)
		// セキュリティリスクを低減する
	},
	{
		key: "X-Frame-Options",
		value: "sameorigin",
		// クリックジャッキング攻撃を防ぐために、
		// 他のサイトがこのサイトを iframe に埋め込むことを防ぐ
	},
	{
		key: "X-XSS-Protection",
		value: "1; mode=block",
		// クロスサイトスクリプティング(XSS)の簡易的な対策
		// XSSが検出された場合、ページのレンダリングをブロックする
	},
	{
		key: "Referrer-Policy",
		value: "same-origin",
		// リファラー（参照元URL）の送信ポリシーを制御する
		// "same-origin" は同一オリジンのリクエストにのみリファラーを送信
	},
	{
		key: "Permissions-Policy",
		value: "camera=*",
		// 各種ブラウザのAPI権限を制御する
		// "camera=*" はカメラのアクセスをすべてのオリジンで許可（本番環境では制限推奨）
	},
]
