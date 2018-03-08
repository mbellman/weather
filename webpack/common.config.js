const path = require('path');
const TsconfigPathsWebpackPlugin = require('tsconfig-paths-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './source/index.ts'
  },
  module: {
    rules: [
      {
        test: /\.less/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'less-loader' }
        ]
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      },
    ]
  },
  output: {
    filename: 'app.js',
    path: path.resolve('./build')
  },
  resolve: {
    plugins: [
      new TsconfigPathsWebpackPlugin(),
      new webpack.ContextReplacementPlugin(
        /(.+)?angular(\\|\/)core(.+)?/,
        path.resolve(__dirname, './source')
      ),
      new webpack.NoEmitOnErrorsPlugin()
    ],
    extensions: ['.js', '.ts', '.less'],
    modules: ['source', 'node_modules']
  }
};
