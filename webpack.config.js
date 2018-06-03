const { CheckerPlugin } = require('awesome-typescript-loader');
const { TsConfigPathsPlugin } = require('awesome-typescript-loader');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: __dirname,
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    main: './_typescript/main.ts'
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      loader: 'awesome-typescript-loader'
    }, {
      test: /\.scss$/,
      use: [{
        loader: MiniCssExtractPlugin.loader,
      }, {
        loader: "css-loader"
      }, {
        loader: "sass-loader",
        options: {
          includePaths: ["absolute/path/a", "absolute/path/b"]
        }
      }]
    }]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './assets'),
    publicPath: '/assets/'
  },
  plugins: [
    new CheckerPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
};
