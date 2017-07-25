var path = require('path')
var webpack = require('webpack');

module.exports = {
    entry: path.join(__dirname, '/client/index.js'),
    output: {
        path: path.join(__dirname, '/client'),
        filename: 'bundle.js',
    },
    devServer: {

    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.join(__dirname, 'client'),
                loaders: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                include: path.join(__dirname, 'client'),
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    devtool: '#inline-source-map'
}