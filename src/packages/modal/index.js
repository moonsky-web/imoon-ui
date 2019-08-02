import {nameFactory} from '../../utils';
import {typeBoolean} from '../../utils/props';

const subNs = 'modal', visible = 'visible', updateVisible = `update:${visible}`;
const creator = nameFactory(subNs);

export const ImModal = {
  install(Vue) {
    creator.install(Vue, ImModal);
  },
  name: creator.thisName(),
  functional: true,
  model: {
    prop: visible,
    event: updateVisible,
  },
  props: {
    [visible]: typeBoolean(),
  },
  render(h, context) {

  },
};
