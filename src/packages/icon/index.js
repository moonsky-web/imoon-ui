import {nameFactory} from '../../utils';

const creator = nameFactory('icon'), iconName = creator();

export const ImIcon = {
  install(Vue) {
    creator.install(Vue, ImIcon);
  },
  name: creator.thisName(),
  functional: true,
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  render(h, {props: {name}, attrs, listeners}) {
    return h('i', {
      attrs,
      on: listeners,
      class: [iconName, creator(name)],
    }, []);
  },
};

export default ImIcon;
