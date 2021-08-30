/*
 * @Description:
 * @Author: Hexon
 * @Date: 2021-08-25 16:42:16
 * @LastEditors: Hexon
 * @LastEditTime: 2021-08-30 19:48:33
 */
const baseConfig = require('./webpack.base');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const config = {
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css', // 将css放到打包后的单独目录下
    }),
    new CleanWebpackPlugin(),
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
