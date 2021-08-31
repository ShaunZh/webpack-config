/*
 * @Description:
 * @Author: Hexon
 * @Date: 2021-08-25 16:42:16
 * @LastEditors: Hexon
 * @LastEditTime: 2021-08-31 13:41:07
 */
const Webpack = require('webpack');
const { merge } = require('webpack-merge');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');

const baseConfig = require('./webpack.base');

console.log('path: ', path.resolve(__dirname, './dist/dll/vendor-manifest'), path.resolve(__dirname, 'dist', 'dll'));
const config = {
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css', // 将css放到打包后的单独目录下
    }),
    // 打包时不清除dll文件夹下的文件，因为只有在dll中的文件改变了才会重新生成dll
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['!dll'],
    }),

    new Webpack.DllReferencePlugin({
      manifest: require(path.resolve(__dirname, './dist/dll/vendor-manifest')),
      // manifest文件所在的绝对路径
      context: path.resolve(__dirname, 'dist', 'dll'),
    }),
    new HtmlWebpackTagsPlugin({
      tags: ['dll/vendor.dll.js'],
    }),
  ],
  optimization: {
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      '...',
      new CssMinimizerPlugin(),
    ],
  },
};

module.exports = merge(baseConfig, config);
