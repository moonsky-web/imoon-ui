import {nameFactory, READONLY} from '../../utils';
import {addDynamicCSS, cssBooleanCreator} from '../../utils/style';
import {inputColorRegister} from './style';
import {inputBaseProps} from '../../predefined/props';

const subNs = 'input';
const creator = nameFactory(subNs), clsInput = creator(),
  viewonly = creator('viewonly');
const inputColorCreator = addDynamicCSS(subNs, inputColorRegister);
const inputBooleanCreator = cssBooleanCreator((name, val) => {
  return val ? creator(name) : '';
}, 'block', 'ghost', 'dashed', 'radius');

function noneInput() {
}

const Default = {
  functional: true,
  name: creator.thisName('Default'),
  render(h, {data, listeners}) {
    const {input = noneInput} = listeners;
    const settings = {
      ...data,
      on: {
        ...listeners,
        input: function (e) {
          input(e.target.value);
        },
      },
    };
    return h('input', settings);
  },
}, Viewonly = {
  functional: true,
  name: creator.thisName('Viewonly'),
  props: {
    placeholder: {},
  },
  render(h, {data, children}) {
    data.class.push(viewonly);
    return h('span', data, children);
  },
};

export const ImInput = {
  install(Vue) {
    creator.install(Vue, ImInput);
  },
  name: creator.thisName(),
  functional: true,
  props: inputBaseProps,
  render(h, {data, props = READONLY, injections: {$providedProps = READONLY} = READONLY}) {
    const {class: classArgs} = data, {viewonly, value, color, size} = props;
    const className = `${clsInput} ${inputColorCreator(color)} ${size ? creator(size) : ''}`;
    const computedClass = inputBooleanCreator(props, $providedProps);
    const settings = {
      ...data,
      class: classArgs ? [classArgs, className, ...computedClass] : [className, ...computedClass],
    };
    if (viewonly) {
      return h(Viewonly, settings, [value]);
    } else {
      return h(Default, settings);
    }
  },
};
