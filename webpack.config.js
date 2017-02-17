var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackOnBuildPlugin = require('on-build-webpack');
var packageJson = require('./package.json')

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: {
    app:'./main',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js'
  },
  resolve: {
		root: path.resolve(__dirname),
		extensions: ['', '.js', '.jsx'],
    alias: {
    }
	},
  module: {
    loaders: [
      { test: /\.(js|jsx)$/, exclude: [ /node_modules/ ], loader: 'babel' },
      { test: /\.json$/, loader: 'json' },
      { test: /\.html$/, loader: 'raw' },
      { test: /\.(css|less)$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!less-loader') },
      { test: /\.(png|jpg|gif)$/, loader: 'file-loader' },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&minetype=application/font-woff' },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' }
    ],
    noParse: [
      /handsontable\.full\.js/,
      /engine.io.js/
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('[name].css', { allChunks: true }),
    new HtmlWebpackPlugin({filename: 'index.html', template:'src/index.html'}),
    new WebpackOnBuildPlugin(stats=>{
      console.log('Last build: ' + (new Date(stats.startTime)));
    }),
    new webpack.DefinePlugin({ VERSION: JSON.stringify(packageJson.version) })
    //new webpack.optimize.UglifyJsPlugin({minimize: true})
  ],
  devServer: {
    stats: 'minimal'
  },
  devtool: 'source-map'
};
