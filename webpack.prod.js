/*
 * @Description:
 * @Author: Hexon
 * @Date: 2021-08-25 16:42:16
 * @LastEditors: Hexon
 * @LastEditTime: 2021-08-26 18:25:51
 */
const baseConfig = require("./webpack.base");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const config = {
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css", // 将css放到打包后的单独目录下
    }),
  ],
  optimization: {
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      `...`,
      new CssMinimizerPlugin(),
    ],
  },
};

module.exports = merge(baseConfig, config);