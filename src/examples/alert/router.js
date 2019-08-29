import {Alert} from './Alert';
import {AlertBase} from './AlertBase';

export const AlertRoute = {
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
    {path: '/alert', redirect: '/alert/base'},
  ],
  meta: {title: 'Alert 警告'},
};
