const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
	entry: {
		index: "./src/index.js",
		"my-carousel": "./src/assets/js/my-carousel.js",
		"my-svg": "./src/assets/js/my-svg.js",
	},
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "../dist"),
		clean: true,
	},
	plugins: [
		new HtmlWebpackPlugin({ template: "./src/index.html" }),
		new MiniCssExtractPlugin({
			filename: "[name].[contenthash].css",
			chunkFilename: "[id].[contenthash].css",
		}),
		new CopyWebpackPlugin({
			patterns: [
				{ from: "src/assets", to: "assets" },
				{ from: "src/styles", to: "styles" },
			],
		}),
	],
	module: {
		rules: [
			{
				test: /\.(sc|c)ss$/,
				use: [
					{ loader: MiniCssExtractPlugin.loader },
					{
						loader: "css-loader",
					},
					{ loader: "sass-loader" },
				],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: "asset/resource",
			},
			{
				test: /\.?js$/,
				exclude: /(node_modules)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
					},
				},
			},
		],
	},
	optimization: {
		minimizer: [new CssMinimizerPlugin()],
	},
};
