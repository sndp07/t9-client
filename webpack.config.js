
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const PRODUCTION_MODE = 'production';
const DEVELOPMENT_MODE = 'development';

module.exports = {
    entry: ['@babel/polyfill', './src/index.js'],
    module: {
        rules: [{
            test: /\.(js)$/,
            exclude: '/node-modules/',
            use: {
                loader: 'babel-loader'
            }
        },
        {
            test: /\.scss$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/template.html'
        })
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundel.js'
    },
    mode: process.env.NODE_ENV === PRODUCTION_MODE ? PRODUCTION_MODE : DEVELOPMENT_MODE,
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        hot: true,
        open: true
    },
}