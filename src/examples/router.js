import Vue from 'vue';
import Router from 'vue-router';
import Home from './Home.vue';

Vue.use(Router);

export const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/icon',
      name: 'Icon',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './icon/iconDemo.vue'),
    },
    {
      path: '/alert',
      name: 'Alert',
      component: () => import('./alert/alert.vue'),
    },
    {
      path: '/alerts',
      name: 'Alerts Demo',
      component: () => import('./alert/alert-demo.vue'),
    },
    {
      path: '/button',
      name: 'Button',
      component: () => import('./button/button.vue'),
    },
    {
      path: '/buttons',
      name: 'Buttons Demo',
      component: () => import('./button/button-demo.vue'),
    },
    {
      path: '/input',
      name: 'Input',
      component: () => import('./input/input.vue'),
    },
    {
      path: '/input-clearable',
      name: 'InputClearable',
      component: () => import('./input/InputClearable.vue'),
    },
    {
      path: '/inputs',
      name: 'Inputs Demo',
      component: () => import('./input/inputDemo.vue'),
    },
    {
      path: '/input-item',
      name: 'InputItem Demo',
      component: () => import('./input-item/input-item-demo.vue'),
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
    {
      path: '/auto-complete',
      name: 'AutoComplete',
      component: () => import('./auto-complete/auto-complete.vue'),
    },
    {
      path: '/input-number',
      name: 'InputNumber',
      component: () => import('./input-number/InputNumber.vue'),
    },
    {
      path: '/input-range',
      name: 'InputRange',
      component: () => import('./input-range/InputRange.vue'),
    },
  ],
});

export default router;
