import {Divider} from './Divider';
import {DividerBase} from './DividerBase';

export const DividerRoutes = [
  {
    path: '/divider',
    name: 'Divider',
    component: Divider,
    children: [
      {
        path: '/divider/base',
        name: DividerBase.name,
        component: DividerBase,
        meta: {
          title: '基础演示',
        },
      },
      {path: '/divider', redirect: '/divider/base'},
    ],
    meta: {groupId: '[Divider]', title: 'Divider 分割线'},
  },
];