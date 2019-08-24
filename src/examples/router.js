import Vue from 'vue';
import Router from 'vue-router';
import Home from './Home.vue';

import {AlertRoutes} from './alert/router';
import {ButtonRoutes} from './button/router';
import {InputRoutes} from './input/router';

Vue.use(Router);

export const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    ...AlertRoutes,
    ...ButtonRoutes,
    ...InputRoutes,
    {
      path: '/icon',
      name: 'Icon',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './icon/iconDemo.vue'),
    },
    {
      path: '/input-item',
      name: 'InputItem Demo',
      component: () => import('./input-item/input-item-demo.vue'),
      meta: {groupId: '[Input]'},
    },
    {
      path: '/input-range',
      name: 'InputRange',
      component: () => import('./input-range/InputRange.vue'),
      meta: {groupId: '[Input]'},
    },
    {
      path: '/descriptor',
      name: 'Descriptor Demo',
      component: () => import('./descriptor/descriptor.vue'),
    },
    {
      path: '/modal',
      name: 'Modal Demo',
      component: () => import('./modal/modal-base.vue'),
    },
    {
      path: '/loading',
      name: 'Loading Demo',
      component: () => import('./loading/loading.vue'),
    },
  ],
});

export default router;
