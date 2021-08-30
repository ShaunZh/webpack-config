/*
 * @Description:
 * @Author: Hexon
 * @Date: 2021-08-25 16:42:09
 * @LastEditors: Hexon
 * @LastEditTime: 2021-08-30 18:59:19
 */

const baseConfig = require('./webpack.base');
const { merge } = require('webpack-merge');
const Webpack = require('webpack');
const ESLintPlugin = require('eslint-webpack-plugin');

const eslintPluginOptions = {
  extensions: ['js', 'ts', 'tsx'],
};
const config = merge(baseConfig, {
  devServer: {
    port: 8000,
    hot: true,
    compress: true,
  },
  plugins: [new Webpack.HotModuleReplacementPlugin(), new ESLintPlugin(eslintPluginOptions)],
});

console.log('dev config: ', config);

module.exports = config;
