/*
 * @Description:
 * @Author: Hexon
 * @Date: 2021-08-23 18:44:17
 * @LastEditors: Hexon
 * @LastEditTime: 2021-08-25 19:24:33
 */
const dev = process.env.NODE_ENV === "development";
const devConfig = require("./webpack.dev");
const prodConfig = require("./webpack.prod");
const config = dev === "development" ? devConfig : prodConfig;

console.log("config: ", config);
module.exports = {
  ...config,
};
