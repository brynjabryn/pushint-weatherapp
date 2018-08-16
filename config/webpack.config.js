// Helper: root() is defined at the bottom
const path = require('path');
const webpack = require('webpack');

const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const StringReplacePlugin = require('string-replace-webpack-plugin');

module.exports = (function makeWebpackConfig() {
  let config = {
    devtool: 'eval-source-map',
    entry: {
      app: './src/webpack.entry.js'
    },
    output: {
      path: root('../dist'),
      publicPath: 'http://localhost:8200/',
      filename: 'js/[name].js',
      chunkFilename: '[id].chunk.js'
    },
    resolve: {
      extensions: ['.ts', '.js', '.json', '.css', '.scss', '.html']
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        chunksSortMode: 'dependency'
      })
    ],
    devServer: {
      contentBase: './src',
      historyApiFallback: true,
      quiet: true,
      stats: 'minimal'
    }
  };
  return config;
})();

// Helper functions
function root(...args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}
