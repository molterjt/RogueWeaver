const path = require('path')
const webpack = require('webpack')  //eslint-disable-line
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const PRODUCTION = process.env.NODE_ENV === 'production'
const CONTEXT_PATH = path.resolve(__dirname, "src/")
const OUTPUT_PATH = path.resolve(__dirname, 'dist/')

module.exports = {
  entry   : './app.js',
  context : CONTEXT_PATH,
  output  : {
    path     : OUTPUT_PATH,
    filename : 'build.js',
  },
  module: {
    rules: [
      {
        test : /\.pug$/,
        use  : 'pug-loader',
      },
      {
        test    : /\.vue$/,
        loader  : 'vue-loader',
        options : {
          loaders: {
            scss: [
              'vue-style-loader',
              'css-loader',
              'sass-loader',
            ],
          },
        },
      },
      {
        enforce : "pre",
        test    : /\.js$/,
        exclude : /node_modules/,
        loader  : "eslint-loader",
        options : {
          fix: !PRODUCTION,
        },
      },
      {
        test    : /\.js$/,
        exclude : /node_modules/,
        loader  : "babel-loader",
      },
      {
        test : /\.css$/,
        use  : ['css-loader'],
      },
      {
        test : /\.scss$/,
        use  : [
          'css-loader',
          'postcss-loader',
          'sass-loader',
          'prepend-scss-includes-loader',
        ],
      },
      {
        test    : /\.(png|jpg|gif|svg)$/,
        loader  : 'file-loader',
        options : {
          name: '[name].[ext]?[hash]',
        },
      },
    ],
  },
  resolve: {
    alias: {
      Src: CONTEXT_PATH,
    },
  },
  devServer: {
    contentBase        : '../dist',
    historyApiFallback : true,
    noInfo             : false,
  },
  devtool : 'inline-source-map',
  plugins : [
    new CleanWebpackPlugin([OUTPUT_PATH]),
    new HtmlWebpackPlugin({
      template : 'index.pug',
      filename : 'index.html',
      favicon  : 'assets/favicon.ico',
    }),
    new CopyWebpackPlugin([
      { from: './assets' },
    ]),
  ],
}

if (PRODUCTION) {
  module.exports.devtool = 'source-map'
  module.exports.plugins = module.exports.plugins.concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new UglifyJsPlugin({
      uglifyOptions: {
        minimize : true,
        compress : true,
      },
    }),
  ])
}
