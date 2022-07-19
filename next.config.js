const nextConfig = {
	images: {
		domains: ["localhost", "*", "simbwatda.s3.ap-northeast-2.amazonaws.com"],
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
			{
				source: `/Album/singleAlbum/:postNum`,
				destination: `http://localhost:5000/singleAlbum/getDetail/:postNum`,
			},
		];
	},
};

module.exports = nextConfig;
