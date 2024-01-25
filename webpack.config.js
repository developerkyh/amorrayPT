const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    stats: 'errors-only', // 에러가 발생할 때만 출력    //https://webpack.kr/configuration/stats/
    entry: {
      app: ['./src/index.js'],
    },
    module: {
        rules: [
            {
                test: /\.js$|jsx/,
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env', '@babel/preset-react'],
                },
            },
            {
              test: /\.s[ac]ss$/i,
              use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './dist/index.html'
        }),
        new webpack.LoaderOptionsPlugin({
            debug:true, // 디버그 쓸 수 있는 공간을 다 디버그로 달아준다는것
        }),
    ],
    devServer: {
        historyApiFallback: true
    }, 
    externals: {
        // global app config object
        config: JSON.stringify({
            apiUrl: 'http://localhost:4000'
        })
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
			"@": path.resolve(__dirname, "./src/"),
		},
    },
}
