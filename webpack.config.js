const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  stats: {
      children: true
  },
  devServer: {
    static: {
      directory: path.resolve(process.cwd(), "./dist/")
    },
    watchFiles: [
      path.resolve(process.cwd(), "./public/index.html")
    ],
    // compress: true,
    port: 3000,
    historyApiFallback: {
      disableDotRule: true // Router를 사용할 경우 refresh 했을때 현페이지 유지
    },
  },
  entry: {
    app: [
      './src/index',
      './src/App',
      './src/assets/styles/adminPT',
    ],
  },
  output: {
    path: path.resolve(__dirname, './dist'), // 뱉어낼 파일 경로
    publicPath: '/', // 파일들이 위치할 서버상의 경로
    filename: 'app.js',
    clean: true
  },
  resolve: {
    modules: [
      path.resolve(__dirname, 'src'), 'node_modules'],
      extensions: ['.js', '.jsx','.scss','.html'],
  },
  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            '@babel/preset-env', 
            ['@babel/preset-react', {"runtime": "automatic"}]
          ],
        },
      },     
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
              sourceMap: true,
              url: false,
            }
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  "autoprefixer",
                ]
              }
            }
          },
          "sass-loader"
        ],
      },
    ]
  },
  plugins: [
    // Extracts CSS into separate files
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "[id].css"
    }),
    // new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(process.cwd(), "./dist/index.html"),
      filename: "./index.html",
      inject: false, // index 주입 false
      hash: true,
      minify: { // (https://github.com/kangax/html-minifier)
        collapseWhitespace: false, // 문서 트리의 텍스트 노드에 공헌하는 공백 축소
        removeAttributeQuotes: false, // 따옴표
        removeComments: false // 주석
      }
    }),
    new webpack.DefinePlugin({
      'process.env.REACT_APP_API_URL': JSON.stringify(process.env.REACT_APP_API_URL),
    })
  ],
  externals: {
    // global app config object
    config: JSON.stringify({
        apiUrl: 'http://localhost:4000'
    })
  },
}
