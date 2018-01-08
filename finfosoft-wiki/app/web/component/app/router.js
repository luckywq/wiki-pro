import Vue from 'vue';

import VueRouter from 'vue-router';

import Nav from './Nav';
import Login from './login/Login';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: '/app',
  routes: [
    {
      path: '/',
      component: Nav
    },
    {
      path: '/Nav',
      component: Nav
    },
    {
      path: '/Login',
      component: Login
    }
  ]
});

export default router;
