const { merge } = require("webpack-merge");
const path = require("path");
const common = require("./webpack.common.js");

module.exports = merge(common, {
	mode: "development",
	devServer: {
		contentBase: path.join(__dirname, "../dist"),
		compress: true,
		port: 9000,
		open: true,
		inline: true,
		hot: false,
	},
	devtool: "inline-source-map",
});
