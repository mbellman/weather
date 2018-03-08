const commonConfig = require('./common.config.js');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const webpack = require('webpack');

module.exports = Object.assign(commonConfig, {
  devServer: {
    contentBase: [
      './build',
      './demo'
    ],
    hot: true,
    port: 1234,
    quiet: true
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: ['Demo: http://localhost:1234']
      }
    }),
    new webpack.HotModuleReplacementPlugin()
  ].concat(commonConfig.resolve.plugins)
});
