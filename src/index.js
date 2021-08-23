/*
 * @Description:
 * @Author: Hexon
 * @Date: 2021-08-20 18:24:36
 * @LastEditors: Hexon
 * @LastEditTime: 2021-08-23 18:59:53
 */

//index.js
class Animal {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}
const constVariable = "const";
console.log("constVariable: ", constVariable);

const dog = new Animal("dog");
