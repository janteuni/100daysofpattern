var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var StatsWriterPlugin = require('webpack-stats-plugin').StatsWriterPlugin;

const appConfig  = {

  entry   : './index.js',
  output : {
    path: path.join(__dirname, '../dist'),
    filename : 'bundle-[hash].js'
  },

  module : {
    loaders : [

      // load js
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'babel?stage=0'
        ]
      },

      // load scss
      {
        test: /\.scss/,
        loader: ExtractTextPlugin.extract('style', 'css!autoprefixer!sass'),
        exclude: /node_modules/
      },

      // load fonts
      {
        test: /\.(woff|eot|svg|ttf|otf)\?.*$/,
        loader: 'url'
      },

      // load assets
      {
        test: /\.png$/,
        loader: "file"
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin('style-[hash].css', { allChunks: true }),

    new webpack.DefinePlugin({
      'process.env': {
        ISBROWSER: JSON.stringify(true),
        NODE_ENV: JSON.stringify('production')
      }
    }),

    // optimizations
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({ compressor: { warnings: false } }),
    // write stats
    new StatsWriterPlugin({
      transform: function (data) {
        return JSON.stringify({
          main: data.assetsByChunkName.main[0],
          style: data.assetsByChunkName.main[1]
        })
      }
    })
  ]
};

export default appConfig;
