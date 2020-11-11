/*
 * @Descripttion: 路由
 * @Author: Maorui
 * @Date: 2020-10-29 14:17:38
 * @LastEditTime: 2020-11-11 16:40:49
 */
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Test from '../views/Test.vue';
import About from '../views/About.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About,
  },
  {
    path: '/test',
    name: 'Test',
    component: Test,
  },
];

const router = createRouter({
  // eslint-disable-next-line no-undef
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
