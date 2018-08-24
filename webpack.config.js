const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = function(env) {
	return {
		entry: './src/index.js',
		mode: env.production ? 'production' : 'development',
		devServer: {
			contentBase: path.resolve(__dirname, 'dist'),
			historyApiFallback: true
		},
		module: {
			rules: [
				{
					enforce: 'pre',
					test: /\.js$/,
					exclude: /node_modules/,
					loader: 'eslint-loader'
				},
				{
					test: /\.js$/,
					exclude: /node_modules/,
					loader: 'babel-loader'
				},
				{
					test: /\.scss$/,
					use: ['style-loader', 'css-loader', 'sass-loader']
				},
				{
					test: /\.css$/,
					use: ['style-loader', 'css-loader']
				}
			]
		},
		plugins: [
			new HtmlWebPackPlugin({
				template: './index.html',
				filename: './index.html'
			})
		]
	};
};
