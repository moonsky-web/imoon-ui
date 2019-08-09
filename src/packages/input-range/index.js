import {nameFactory, runtimeError} from '../../utils';
import {ImInputClearable} from '../input';
import {inputBaseProps} from '../../predefined/props';
import {autoColorValid, autoSizeValid} from '../../utils/validator';
import {typeBoolean} from '../../utils/props';

const subNs = 'InputRange';
const factory = nameFactory(subNs), name = factory.thisName();

const clsRange = factory(),
  clsIn = factory('in'),
  clsBox = factory('box'),
  clsArrow = factory('arrow'),
  clsBlock = factory('block');

const defaultBooleanArray = typeBoolean(false, [Boolean, Array]);

function computeProp(value) {
  if (Array.isArray(value)) {
    const length = value.length;
    if (length === 1) {
      return [value[0], value[0]];
    } else if (length === 2) {
      return [...value];
    } else {
      runtimeError(`Error prop value: ${value.join(', ')}`);
    }
  } else {
    return [value, value];
  }
}

export const ImInputRange = {
  install(Vue) {
    factory.install(Vue, ImInputRange);
  },
  name,
  props: {
    ...inputBaseProps,
    value: [String, Array],
    placeholder: [String, Array],

    // value: {default: null},
    // placeholder: String,
    inputClass: [String, Object, Array],
    color: {
      type: String,
      validator: autoColorValid,
    },
    size: {
      type: String,
      validator: autoSizeValid,
    },
    viewonly: defaultBooleanArray,
    readonly: defaultBooleanArray,
    disabled: defaultBooleanArray,
    block: defaultBooleanArray,
    ghost: defaultBooleanArray,
    dashed: defaultBooleanArray,
    radius: defaultBooleanArray,
    autofocus: defaultBooleanArray,// 未实现
    clearable: defaultBooleanArray,
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
