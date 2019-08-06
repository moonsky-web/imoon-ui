import {nameFactory, READONLY} from '../../utils';
import {addDynamicCSS, cssBooleanCreator} from '../../utils/style';
import {inputColorRegister} from './style';
import {inputBaseProps} from '../../predefined/props';
import {ImWinClose} from '../win-ctrl';
import {typeBoolean} from '../../utils/props';

const subNs = 'input';
const factory = nameFactory(subNs),
  clsInput = factory(),
  viewonly = factory('viewonly'),
  clsClear = factory('clearable'),
  clsClearIcon = factory('clearIcon');
const inputColorCreator = addDynamicCSS(subNs, inputColorRegister);
const inputBooleanCreator = cssBooleanCreator((name, val) => {
  return val ? factory(name) : '';
}, 'block', 'ghost', 'dashed', 'radius');

function noneInput() {
}

const Default = {
  functional: true,
  name: factory.thisName('Default'),
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
  name: factory.thisName('Viewonly'),
  props: {
    placeholder: {},
  },
  render(h, {data, children}) {
    data.class.push(viewonly);
    return h('span', data, children);
  },
};

function render(h, {data, props = READONLY, injections: {$providedProps = READONLY} = READONLY}) {
  const {class: classArgs} = data, {viewonly, value, color, size} = props;
  const className = `${clsInput} ${inputColorCreator(color)} ${size ? factory(size) : ''}`;
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
}

export const ImInput = {
  install(Vue) {
    factory.install(Vue, ImInput);
  },
  name: factory.thisName(),
  functional: true,
  props: inputBaseProps,
  render,
};

export const ImInputClearable = {
  install(Vue) {
    factory.install(Vue, ImInputClearable);
  },
  name: factory.thisName('clearable'),
  functional: true,
  props: {
    ...inputBaseProps,
    clearable: typeBoolean(true),
  },
  render(h, context) {
    const {data, props: {clearable}} = context;
    const {class: clazz, style, ...rest} = data;
    const {on: {input = noneInput} = {}} = rest;
    delete context.data.class;
    delete context.data.style;
    return h('div', {class: [clsClear, clazz], style}, [
      render(h, context),
      clearable ? h('div', {class: clsClearIcon}, [
        h(ImWinClose, {
          props: {rightMiddle: true},
          on: {
            click() {
              input(null);
            },
          },
        }),
      ]) : null,
    ]);
  },
};
