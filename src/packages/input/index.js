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

export const ImInput = factory.create({
  functional: true, props,
  render(h, {data, props = READONLY, injections: {$providedProps = READONLY} = READONLY}) {
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
  },
});

export const ImInputClearable = factory.create('clearable', {
  mixins: [inputExpandMixin],
  props: {
    clearable: typeBoolean(true),
  },
  render(h, context = this) {
    const {clearable, $listeners, $props, onInput, currentValue: value} = context;
    return h('div', {class: clsClear}, [
      h(ImInput, {
        props: {...$props, value},
        on: {...$listeners, input: onInput},
      }),
      clearable ? h('div', {class: clsClearIcon}, [
        h(ImWinClose, {
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
    },
  },
});
