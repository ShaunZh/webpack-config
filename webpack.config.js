/*
 * @Description:
 * @Author: Hexon
 * @Date: 2021-08-23 18:44:17
 * @LastEditors: Hexon
 * @LastEditTime: 2021-08-23 20:05:52
 */
const HtmlWebpackPlugin = require("html-webpack-plugin");
const dev = process.env.NODE_ENV === "development";
const config = require("./public/config")[dev ? "dev" : "build"];

module.exports = {
  mode: dev ? "development" : "production",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
      config: config.template,
      // minify: {
      //   removeAttributeQuotes: false, //是否删除属性的双引号
      //   collapseWhitespace: false, //是否折叠空白
      // },
      // hash: true,
    }),
  ],
};
