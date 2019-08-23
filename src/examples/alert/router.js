import {Alert} from './Alert';
import {AlertBase} from './AlertBase';
import {AlertColor} from './AlertColor';
import {AlertSize} from './AlertSize';

export const AlertRoutes = [
  {
    path: '/alert',
    name: 'Alert',
    component: Alert,
    children: [
      {
        path: '/alert/base',
        name: AlertBase.name,
        component: AlertBase,
        meta: {
          title: '基础演示',
        },
      },
      {
        path: '/alert/color',
        name: AlertColor.name,
        component: AlertColor,
        meta: {
          title: '颜色切换',
        },
      },
      {
        path: '/alert/size',
        name: AlertSize.name,
        component: AlertSize,
        meta: {
          title: '自定义尺寸',
        },
      },
      {path: '/alert', redirect: '/alert/base'},
    ],
    meta: {groupId: '[Alert]', title: 'Alert 警告'},
  },
];
