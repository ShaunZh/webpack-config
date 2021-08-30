/*
 * @Description:
 * @Author: Hexon
 * @Date: 2021-08-27 18:33:17
 * @LastEditors: Hexon
 * @LastEditTime: 2021-08-30 19:48:28
 */
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    react: ['vue', 'vue-router'],
  },
  mode: 'production',
  output: {
    filename: '[name].dll.[hash:6].js',
    path: path.resolve(__dirname, 'dist', 'dll'),
    library: '[name]_dll', //暴露给外部使用
    //libraryTarget 指定如何暴露内容，缺省时就是 var
  },
  plugins: [
    new webpack.DllPlugin({
      //name和library一致
      name: '[name]_dll',
      path: path.resolve(__dirname, 'dist', 'dll', 'manifest.json'), //manifest.json的生成路径
    }),
  ],
};
