var path = require('path');
var webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

console.log("bundle will be deployed on: " + path.resolve(__dirname, 'dist'));

module.exports = {
    context: __dirname,
    entry: [
        './src/index.js',
    ],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, './dist'),
        publicPath : "/"
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
        ]
    },
    devtool: 'eval',
    resolve: {
        alias:{ react:'react' },
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new UglifyJsPlugin()
    ]
};