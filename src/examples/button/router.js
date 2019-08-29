import {Button} from './Button';
import {ButtonBase} from './ButtonBase';

export const ButtonRoute = {
  path: '/button',
  name: 'Button',
  component: Button,
  children: [
    {
      path: '/button/base',
      name: ButtonBase.name,
      component: ButtonBase,
      meta: {
        title: '基础演示',
      },
    },
    {path: '/button', redirect: '/button/base'},
  ],
  meta: {title: 'Button 按钮'},
};
