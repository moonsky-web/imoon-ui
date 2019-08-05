import {nameFactory} from '../../utils';
import {ImInputClearable} from '../input';
import {inputBaseProps} from '../../predefined/props';

const subNs = 'InputRange';
const factory = nameFactory(subNs), name = factory.thisName();

const clsRange = factory(),
  clsIn = factory('in'),
  clsBox = factory('box'),
  clsArrow = factory('arrow'),
  clsBlock = factory('block');

function propType() {
  return [String, Array];
}

export const ImInputRange = {
  install(Vue) {
    factory.install(Vue, ImInputRange);
  },
  name,
  props: {
    ...inputBaseProps,
    value: propType(),
    placeholder: propType(),
  },
  render(h, context = this) {
    const {$props} = context;
    const {color, size, viewonly, ghost, dashed, radius, block, autofocus} = $props;

    const props = {color, size, viewonly, ghost, dashed, radius};

    return h('div', {class: [clsRange, {[clsBlock]: block}]}, [
      h('div', {class: clsIn}, [
        h(ImInputClearable, {class: clsBox, props: {...props, autofocus}}),
        h('div', {
          class: clsArrow,
        }, ['~']),
        h(ImInputClearable, {class: clsBox, props}),
      ]),
    ]);
  },
};
