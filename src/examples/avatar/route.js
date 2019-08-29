import {Avatar} from './Avatar';
import {AvatarBase} from './AvatarBase';

export const AvatarRoute = {
  path: '/avatar',
  name: 'Avatar',
  component: Avatar,
  children: [
    {
      path: '/avatar/base',
      name: AvatarBase.name,
      component: AvatarBase,
      meta: {
        title: '基础演示',
      },
    },
    {path: '/avatar', redirect: '/avatar/base'},
  ],
  meta: {title: 'Avatar 头像'},
};
