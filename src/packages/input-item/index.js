import {nameFactory, runtimeError} from '../../utils';
import {ImInput} from '../input';

const subNs = 'input-item';
const creator = nameFactory(subNs), clsInputItem = creator();

export const ImInputItem = {
  install(Vue) {
    creator.install(Vue, ImInputItem);
  },
  name: creator.thisName(),
  functional: true,
  render(h, context) {
    runtimeError('未完成任务......');
    const {data, children} = context;
    console.log(context);
    console.log(children);
    return h('div', {
      class: clsInputItem,
    }, [
      h(ImInput),
    ]);
  },
};
