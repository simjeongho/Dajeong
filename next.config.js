const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
	compress: true,
	images: {
		domains: ["localhost", "*", process.env.IMAGE_AMAZON],
		remotePatterns: [
			{
				protocol: "http",
				hostname: "localhost",
				port: "5000",
				pathname: "/account123/**",
			},
		],
	},
});
