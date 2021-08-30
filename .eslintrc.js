/*
 * @Description:
 * @Author: Hexon
 * @Date: 2021-08-30 15:35:42
 * @LastEditors: Hexon
 * @LastEditTime: 2021-08-30 16:03:36
 */

module.exports = {
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  rules: {
    "@typescript-eslint/no-var-requires": off,
  },
};
