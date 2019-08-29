import {Icon} from './Icon';
import {IconBase} from './IconBase';

export const IconRoute = {
  path: '/icon',
  name: 'Icon',
  component: Icon,
  children: [
    {
      path: '/icon/base',
      name: IconBase.name,
      component: IconBase,
      meta: {
        title: '基础演示',
      },
    },
    {path: '/icon', redirect: '/icon/base'},
  ],
  meta: {title: 'Icon 图标'},
};
