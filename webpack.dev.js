/*
 * @Description:
 * @Author: Hexon
 * @Date: 2021-08-25 16:42:09
 * @LastEditors: Hexon
 * @LastEditTime: 2021-08-30 15:42:54
 */

const baseConfig = require("./webpack.base");
const { merge } = require("webpack-merge");
const Webpack = require("webpack");

const config = merge(baseConfig, {
  devServer: {
    port: 8000,
    hot: true,
    compress: true,
  },
  plugins: [new Webpack.HotModuleReplacementPlugin()],
});

console.log("dev config: ", config);

module.exports = config;
