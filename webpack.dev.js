/*
 * @Description:
 * @Author: Hexon
 * @Date: 2021-08-25 16:42:09
 * @LastEditors: Hexon
 * @LastEditTime: 2021-08-26 19:37:23
 */

const baseConfig = require("./webpack.base");
const { merge } = require("webpack-merge");

const config = {
  devServer: {
    port: 3000, //默认是8080
  },
};

module.exports = merge(baseConfig, config);
