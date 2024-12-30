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
		NEXT_PUBLIC_CLARITY_ID:
			process.env.NODE_ENV === "development" ? "pbadl6xwcf" : "pbadl6xwcf",
		NEXT_PUBLIC_GATAG:
			process.env.NODE_ENV === "development" ? "G-R47KRGK42T" : "G-R47KRGK42T",
		NEXT_PUBLIC_BACKEND_API_URL:
			process.env.NODE_ENV === "development"
				? "https://to-you-design-api.onrender.com/"
				: "https://to-you-design-api.onrender.com/",
	},
}
