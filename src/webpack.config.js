const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const compiler = require('vue-template-compiler');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
    mode: process.env.NODE_ENV || 'production',
    // mode: process.env.NODE_ENV || 'development',
    devServer: {
        contentBase: path.join(__dirname, '/dist/'),
        hot: true,
        publicPath: '/dist/',
        compress: true,
        port: 3000,
        historyApiFallback: {
          disableDotRule: true // Router를 사용할 경우 refresh 했을때 현페이지 유지
        },
        // open:true,
        headers: {
          // "Access-Control-Allow-Origin": "localhost:22",
          "Access-Control-Allow-Origin": "http://10.41.76.139",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
          "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        }
      },
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: ['style-loader', 'css-loader', 'sass-loader']
        }
      ]
    }
  }
