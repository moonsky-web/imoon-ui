import {PropsProvider} from './PropsProvider'
import {PropsProviderBase} from './PropsProviderBase'

export const PropsProviderRoute = {
  path: '/props-provider',
  name: PropsProvider.name,
  component: PropsProvider,
  children: [
    {
      path: '/props-provider/base',
      name: PropsProviderBase.name,
      component: PropsProviderBase,
      meta: {
        title: '基础演示',
      },
    },
    {path: '/props-provider', redirect: '/props-provider/base'},
  ],
  meta: {title: 'Input 输入框'},
};
