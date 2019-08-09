import {nameFactory, READONLY} from '../../utils';
import {addDynamicCSS, cssBooleanCreator} from '../../utils/style';
import {inputColorRegister} from './style';
import {inputBaseProps as props} from '../../predefined/props';
import {ImWinClose} from '../win-ctrl';
import {typeBoolean} from '../../utils/props';
import {convertListeners} from '../../utils/vnode';
import {inputExpandMixin} from '../../predefined/mixins';

const subNs = 'input';
const factory = nameFactory(subNs),
  clsInput = factory(),
  clsView = factory('viewonly'),
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
  render(h, {data, parent}) {
    const {on = READONLY, props: {value, placeholder} = READONLY} = data;
    const {input = noneInput} = on;
    const onInput = convertListeners(input, parent);
    return h('input', {
      ...data, on: {
        ...on, input: ({target: {value}}) => {
          onInput(value);
        },
      },
      domProps: {value, placeholder},
    });
  },
}, Viewonly = {
  functional: true,
  name: factory.thisName('Viewonly'),
  props: {
    placeholder: {},
  },
  render(h, {data, children}) {
    data.class.push(clsView);
    return h('span', data, children);
  },
};

function render(h, {data, props = READONLY, injections: {$providedProps = READONLY} = READONLY}) {
  const {class: classArgs} = data, {viewonly, value, color, size} = props;
  const className = `${clsInput} ${inputColorCreator(color)} ${size ? factory(size) : ''}`;
  const computedClass = inputBooleanCreator(props, $providedProps);

  const settings = {
    ...data, props,
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
  props,
  render,
};

export const ImInputClear = {
  install(Vue) {
    factory.install(Vue, ImInputClear);
  },
  name: factory.thisName('clearable'),
  mixins: [inputExpandMixin],
  props: {
    clearable: typeBoolean(true),
  },
  computed: {
    currentValue: {
      get(vm) {
        return vm.cacheValue;
      },
      set(value) {
        value = this.computeOriginalValue(value);
        this.cacheValue = value;
      },
    },
  },
  render(h, context = this) {
    const {clearable, $listeners, $props} = context;
    const onInput = convertListeners([context.onInput]);

    return h('div', {class: clsClear}, [
      h(ImInput, {
        props: {...$props, value: context.currentValue},
        on: {...$listeners, input: onInput},
      }),
      clearable ? h('div', {class: clsClearIcon}, [
        h(ImWinClose, {
          props: {rightMiddle: true},
          on: {
            click() {
              onInput(null);
            },
          },
        }),
      ]) : null,
    ]);
  },
  methods: {
    onInput(value) {
      this.currentValue = value;
      const {$listeners: {input = noneInput} = READONLY} = this;
      input(value);
    },
  },
};

export const ImInputClearable = ImInputClear;

export const ImInputClearable0 = {
  install(Vue) {
    factory.install(Vue, ImInputClearable0);
  },
  name: factory.thisName('clearable'),
  functional: true,
  props: {
    ...props,
    clearable: typeBoolean(true),
  },
  render(h, context) {
    const {data, props: {clearable}, parent} = context;
    const {class: clazz, style, on = {}} = data;
    const {input = noneInput} = on;
    delete context.data.class;
    delete context.data.style;

    const currInput = convertListeners(input, parent);
    return h('div', {class: [clsClear, clazz], style}, [
      render(h, context),
      clearable ? h('div', {class: clsClearIcon}, [
        h(ImWinClose, {
          props: {rightMiddle: true},
          on: {
            click() {
              currInput(null);
            },
          },
        }),
      ]) : null,
    ]);
  },
};
