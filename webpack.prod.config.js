const Path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const nodeModulesDir = Path.resolve('node_modules');

module.exports = {
	mode: 'production',
	entry: Path.resolve('./src/index.tsx'),
	output: {
		path: `${__dirname}/dist`,
		filename: 'bundle.js',
	},
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
		modules: [
			// context,
			nodeModulesDir,
		],
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.ts(x?)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'ts-loader',
					},
				],
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(jpg|png)$/,
				use: {
					loader: 'url-loader',
				},
			},
		],
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: Path.join(__dirname, 'src/assets/index.html'),
			dev: true,
		}),
	],
};
