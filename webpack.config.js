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
		extensions: ['', '.js', '.jsx'] // app consists of these files
	},
	output: {
		path: PATHS.build,
		filename: 'bundle.js' // is bundled into the build folder as bundle
	},
	plugins: [
		new HtmlwebpackPlugin({ // deploys html file every time built.
			template: './utils/index.html',
			title: 'minimal-react',
			appMountId: 'app',
			hash: true
		})
	],
	module: {
		loaders: [
			{   // checks scss
				test: /\.scss$/,
				loader: 'style!css!sass'
			},
			{   // handles next gen javascript
				test: /\.jsx?$/,
				loaders: ['babel?cacheDirectory'],
				include: PATHS.app
			}
		]
	}
};

if (TARGET === 'start' || !TARGET) { // creates dev environment
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
				'process.env.NODE_ENV': JSON.stringify('production') // really cuts down file size of bundle
			}),
			new Clean(['.'], PATHS.build), // cleans build path pre-build
			new webpack.optimize.UglifyJsPlugin({ // cuts down bundle size.
				compress: {
					warnings: false
				}
			})
		]
	});
}
