/*
 * @Description:
 * @Author: Hexon
 * @Date: 2021-08-20 18:24:36
 * @LastEditors: Hexon
 * @LastEditTime: 2021-08-20 18:24:52
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

const dog = new Animal("dog");
