//next.config.js

module.exports = {
	eslint: {
		ignoreDuringBuilds: true,
	},
	env: {
		NEXT_PUBLIC_API_URL:
			process.env.NODE_ENV === "development"
				? "http://localhost:3000/"
				: "https://to-you-design.vercel.app/",
	},
}
