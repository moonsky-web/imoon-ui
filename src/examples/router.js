import Vue from 'vue';
import Router from 'vue-router';
import Home from './Home.vue';

import {AlertRoute} from './alert/router';
import {ButtonRoute} from './button/router';
import {InputRoute} from './input/router';
import {DividerRoute} from './divider/router';
import {IconRoute} from './icon/router';
import {AvatarRoute} from './avatar/route';
import {PropsProviderRoute} from './propsmanager';

Vue.use(Router);

function setGroupId(route, id) {
  let {meta} = route;
  if (!meta && id) {
    route.meta = {groupId: id};
  } else if (id) {
    meta.groupId = id;
  }
  return route;
}

export const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    setGroupId(AlertRoute, '1. 组件'),
    setGroupId(ButtonRoute, '1. 组件'),
    setGroupId(InputRoute, '1. 组件'),
    setGroupId(DividerRoute, '1. 组件'),
    setGroupId(IconRoute, '1. 组件'),
    setGroupId(AvatarRoute, '1. 组件'),
    setGroupId(PropsProviderRoute, '2. 服务'),
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
