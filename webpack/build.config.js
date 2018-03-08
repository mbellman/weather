const commonConfig = require('./common.config.js');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = Object.assign(commonConfig, {
  plugins: [
    new FriendlyErrorsWebpackPlugin(),
    new UglifyJsWebpackPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled',
      generateStatsFile: true,
      statsFilename: '../analysis/stats.json'
    })
  ].concat(commonConfig.resolve.plugins)
});
