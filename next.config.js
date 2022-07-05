const nextConfig = {
	images: {
		domains: ["localhost:5000", "*"],
		remotePatterns: [
			{
				protocol: "http",
				hostname: "localhost",
				port: "5000",
				pathname: "/account123/**",
			},
		],
	},
	async rewrites() {
		return [
			{
				source: `/:path*`,
				destination: `http://localhost:5000/:path*`,
			},
			{
				source: `/Album`,
				destination: `http://localhost:5000/singleAlbum/getList`,
			},
		];
	},
};

module.exports = nextConfig;
