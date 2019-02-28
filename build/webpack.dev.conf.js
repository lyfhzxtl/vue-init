'use strict'
const baseWebpackConfig = require('./webpack.base.conf');
const webpack = require('webpack');
const merge = require('webpack-merge');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const path = require('path');
module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  // devtool: 'cheap-module-eval-source-map',
  /* devServer: {
    port: 8008,
    disableHostCheck: true,
    contentBase: path.join(__dirname, '../dist'),
    proxy: {
      '/cross/*': {
        target: 'https://static.missevan.com',
        changeOrigin: true,
        pathRewrite: {
          '^/cross': '/'
        },
      }
    }
  }, */
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new FriendlyErrorsPlugin()
  ]
})
