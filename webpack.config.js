const path = require('path'); // handles & transforms file paths.
const merge = require('webpack-merge'); // merges stuff, not sure really.
const webpack = require('webpack'); // webpack runs this whole thing.
const HtmlwebpackPlugin = require('html-webpack-plugin'); // helps serve webpack bundle.
const Clean = require('clean-webpack-plugin'); // cleans build folder pre-build.

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
	app: path.join(__dirname, 'app'),
	build: path.join(__dirname, 'build')
};

process.env.BABEL_ENV = TARGET;

const common = {
	entry: PATHS.app,
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	output: {
		path: PATHS.build,
		filename: 'bundle.js'
	},
	plugins: [
		new HtmlwebpackPlugin({
			template: './utils/index.html',
			title: 'Costa Magic Mirror',
			appMountId: 'app',
			hash: true
		})
	],
	module: {
		loaders: [
			{
				test: /\.scss$/,
				loader: 'style!css!sass'
			},
			{
				test: /\.jsx?$/,
				loaders: ['babel?cacheDirectory'],
				include: PATHS.app
			}
		]
	}
};

if (TARGET === 'start' || !TARGET) {
	module.exports = merge(common, {
		devtool: 'eval-source-map',
		devServer: {
			historyApiFallback: true,
			hot: true,
			inline: true,
			progress: true,
			stats: 'errors-only',
			host: process.env.HOST,
			port: process.env.PORT
		},
		plugins: [
			new webpack.HotModuleReplacementPlugin()
		]
	});
}

if (TARGET === 'build') {
	module.exports = merge(common, {
		plugins: [
			new webpack.DefinePlugin({
				'process.env.NODE_ENV': JSON.stringify('production')
			}),
			new Clean(['.'], PATHS.build),
			new webpack.optimize.UglifyJsPlugin({
				compress: {
					warnings: false
				}
			})
		]
	});
}
