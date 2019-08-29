import {nameFactory} from '../../utils';

const factory = nameFactory('icon'), iconName = factory();

export const ImIcon = factory.create({
  functional: true,
  props: {
    name: String,
  },
  render(h, {props: {name}, data: {class: cls, ...setting}}) {
    return name ? h('i', {...setting, class: [cls, iconName, factory(name)]}) : null;
  },
});

export default ImIcon;
