const path = require('path'),
      merge = require('webpack-merge'),
      webpack = require('webpack'),
      HtmlwebpackPlugin = require('html-webpack-plugin');

const TARGET = process.env.npm_lifecycle_event,
      PATHS = {
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
      template: 'utils/index.html',
      title: 'Minimal React Starter Kit',
      appMountId: 'app'
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

if ( TARGET === 'start' || !TARGET ) {
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

if ( TARGET === 'build' ) {
  module.exports = merge(common, {});
}
