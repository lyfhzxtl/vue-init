'use strict'
const path = require('path');
const webpack = require('webpack');
const HtmlWebapckPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HappyPack = require('happypack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const devMode = process.env.NODE_ENV !== 'production';

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}
module.exports = {
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.js',
      '@': resolve('src')
    },
    extensions: ['.js', '.vue'],
    // 优先采用ES6的代码
    mainFields: ['jsnext: main', 'browser', 'main']
  },
  //解析入口起点 
  context: path.resolve(__dirname, '../'),
  entry: {
    app: './src/main.js'
  },
  output: {
    // 所有文件的输出目录
    path: path.resolve(__dirname, '../dist'),
    filename: devMode ? 'js/[name].[hash].js' : 'js/[name].[chunkhash].js',
    // 魔法注释
    // chunkFilename: 'js/[name].js',
    // 输出解析文件的目录，url 相对于 HTML 页面
    publicPath: devMode ? '/' : '/'
  },
  externals: {
    'vue': 'Vue',
    'vue-router': 'VueRouter',
    'vuex': 'Vuex',
    'axios': 'axios',
    'vant': 'vant'
  },
  optimization: {
    runtimeChunk: {
      name: 'manifest'
    },
    splitChunks: {
      chunks: 'async',
      minChunks: 2,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      name: false,
      cacheGroups: {
        vendor: {
          name: 'vendor',
          // chunks 有三个可选值，”initial”, “async” 和 “all”. 分别对应优化时只选择初始的chunks，所需要的chunks 还是所有chunk
          chunks: 'initial',
          priority: -10,
          reuseExistingChunk: false,
          test: /[\\/]node_modules[\\/]/
        }
      }
    }
  },
  module: {
    rules: [
      //vue
      {
        test: /\.vue$/,
        use: ['vue-loader']
      },
      //es6
      {
        test: /\.js$/,
        use: 'happypack/loader?id=babel',
        include: [resolve('src'), resolve('test')]
      },
      // eslint
      /* {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src'), resolve('test')],
        options: {
          formatter: require('eslint-friendly-formatter'),
          // 不符合Eslint规则时只警告(默认运行出错)
          // emitWarning: !config.dev.showEslintErrorsInOverlay
        }
      }, */
      //jsx
      /* {
      test: /\.jsx$/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react']
        }
      }]
      }, */
      //sass
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ]
      },
      //less
      /* {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      }, */
      //css
      /* {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      }, */
      //图片
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10240,
            name: path.posix.join('static', 'img/[name].[hash:7].[ext]')
          }
        }]
      },
      // 字体文件
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10240,
            name: path.posix.join('static', 'fonts/[name].[hash:7].[ext]')
          }
        }]
      },
      //视频或音频
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10240,
            name: path.posix.join('static', 'media/[name].[hash:7].[ext]')
          }
        }]
      }
      // ts，需要在webpack.config.js同级目录下创建一个tsconfig.json文件，里面可以是一个空对象
      /* {
        test: /\.ts$/,
        use: ['ts-loader']
      } */
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '../')
    }),
    new VueLoaderPlugin(),
    new HappyPack({
      // 用唯一的标识符id来代表当前的HappyPack 处理一类特定的文件
      id: 'babel',
      // 如何处理.js文件，用法和Loader配置是一样的
      loaders: ['babel-loader']
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: devMode ? 'css/[name].css' : 'css/[name].[hash].css',
      chunkFilename: devMode ? 'css/[id].css' : 'css/[id].[hash].css',
    }),
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, '../public'),
      to: './',
      ignore: ['*.html']
    }]),
    new HtmlWebapckPlugin({
      template: './public/index.html',
      filename: '../views/index.html',
      hash: true
    }),
    new webpack.HashedModuleIdsPlugin(),
    // new BundleAnalyzerPlugin()
  ]
}
