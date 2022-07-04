const withImages = require("next-images");
module.exports = {
	images: {
		domains: ["localhost"],
	},
	async rewrites() {
		return [
			{
				source: "/:path*",
				destination: "http://localhost:5000/:path*",
			},
		];
	},
};
