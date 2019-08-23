import {Input} from './Input';
import {InputBase} from './InputBase';
import {InputNumber} from './InputNumber';
import {AutoComplete} from './AutoCompete';
import {InputClearable} from './InputClearable';

export const InputRoutes = [
  {
    path: '/input',
    name: Input.name,
    component: Input,
    children: [
      {
        path: '/input/base',
        name: InputBase.name,
        component: InputBase,
        meta: {
          title: '基础演示',
        },
      },
      {
        path: '/input/clearable',
        name: InputClearable.name,
        component: InputClearable,
        meta: {
          title: '可清空输入框',
        },
      },
      {
        path: '/input/number',
        name: InputNumber.name,
        component: InputNumber,
        meta: {
          title: '数字输入框',
        },
      },
      {
        path: '/input/auto-complete',
        name: AutoComplete.name,
        component: AutoComplete,
        meta: {
          title: '自动完成',
        },
      },
      {path: '/input', redirect: '/input/base'},
    ],
    meta: {groupId: '[Input]', title: 'Input 输入框'},
  },
];