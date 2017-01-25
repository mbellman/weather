const failPlugin = require('webpack-fail-plugin');

module.exports = {
    entry: './index',

    output: {
        filename: './dist/weather.js'
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],

        modulesDirectories: [
            "src/"
        ]
    },
 
    devtool: 'source-map',

    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader' }
        ]
    },

    plugins: [
        failPlugin
    ]
};