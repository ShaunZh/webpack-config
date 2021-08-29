/*
 * @Description:
 * @Author: Hexon
 * @Date: 2021-08-27 11:32:24
 * @LastEditors: Hexon
 * @LastEditTime: 2021-08-27 15:10:58
 */
import { createRouter, createWebHashHistory } from "vue-router";
import HelloWorld from "@/components/HelloWorld";
const TestDynamicLoader = () =>
  import(
    /* webpackChunkName: "test-dynamic-loader" */ "@/components/TestDynamicLoader"
  );

const routes = [
  { path: "/", component: HelloWorld },
  { path: "/TestDynamicLoader", component: TestDynamicLoader },
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});

export default router;
