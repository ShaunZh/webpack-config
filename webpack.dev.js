/*
 * @Description:
 * @Author: Hexon
 * @Date: 2021-08-25 16:42:09
 * @LastEditors: Hexon
 * @LastEditTime: 2021-08-27 16:18:37
 */

const baseConfig = require("./webpack.base");
const { merge } = require("webpack-merge");
const Webpack = require("webpack");
const path = require("path");

const config = {
  devServer: {
    port: 8000,
    hot: true,
    compress: true,
  },
  plugins: [new Webpack.HotModuleReplacementPlugin()],
};

module.exports = merge(baseConfig, config);
