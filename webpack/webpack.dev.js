const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
	mode: "development",
	entry: "./src/index.js",
	output: {
		filename: "[name].js",
		path: path.resolve(__dirname, "../dist"),
		clean: true,
	},
	devServer: {
		contentBase: path.join(__dirname, "../dist"),
		compress: true,
		port: 9000,
		open: true,
		inline: true,
		hot: false,
	},
	plugins: [
		new HtmlWebpackPlugin({ template: "./src/index.html" }),
		new MiniCssExtractPlugin(),
		new CopyWebpackPlugin({
			patterns: [{ from: "src/assets", to: "dist/assets" }],
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
		],
	},
	devtool: "inline-source-map",
};
