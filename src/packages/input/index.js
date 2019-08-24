import {nameFactory, READONLY} from '../../utils';
import {addDynamicCSS, cssBooleanCreator} from '../../utils/style';
import {inputColorRegister} from './style';
import {inputBaseProps as props} from '../../predefined/props';
import {ImWinClose} from '../win-ctrl';
import {typeBoolean} from '../../utils/props';
import {convertListeners} from '../../utils/vnode';
import {inputExpandMixin} from '../../predefined/mixins';
import {clsGap, clsGapBlock} from '../../utils/class';

const subNs = 'Input';
const factory = nameFactory(subNs),
  clsInput = factory(),
  clsView = factory('viewonly'),
  clsClear = factory('clearable'),
  clsClearIcon = factory('clearIcon');
const inputColorCreator = addDynamicCSS(subNs, inputColorRegister, {supportColor: false});
const inputBooleanCreator = cssBooleanCreator((name, val) => {
  return val ? factory(name) : null;
}, 'ghost', 'radius');

function noneInput() {
}

const Default = {
  functional: true,
  name: factory.thisName('Default'),
  props: {value: null},
  render(h, {data, parent}) {
    const {
      // eslint-disable-next-line
      on = READONLY, attrs: {value: v, ...attrs} = READONLY,
      props: {value, placeholder, readonly, disabled} = READONLY,
    } = data;
    const {input = noneInput} = on;
    const onInput = convertListeners(input, parent);
    const domProps = {value, placeholder};
    if (readonly) {
      attrs.readonly = 'readonly';
    }
    if (disabled) {
      attrs.disabled = 'disabled';
    }
    return h('input', {
      ...data, on: {
        ...on, input: ({target: {value}}) => {
          onInput(value);
        },
      },
      domProps, attrs,
    });
  },
}, Viewonly = {
  functional: true,
  name: factory.thisName('Viewonly'),
  props: {placeholder: null, value: null},
  render(h, {
    // eslint-disable-next-line
    data: {attrs: {value: v, ...attrs}, ...rest}, children
  }) {
    rest.class.push(clsView);
    rest.attrs = attrs;
    return h('span', rest, children);
  },
};

export const inputFactory = factory;

export const ImInput = factory.create({
  functional: true, props,
  render(h, {data, props = READONLY, injections: {$providedProps = READONLY} = READONLY}) {
    const {class: classArgs} = data, {viewonly, value, color, size, block} = props;
    const classes = [
      {[clsGapBlock]: block},
      clsGap, clsInput,
      `${inputColorCreator(color)} ${size ? factory(size) : ''}`,
      ...inputBooleanCreator(props, $providedProps)], settings = {
      ...data, props,
      class: classes,
    };
    if (classArgs) {
      classes.push(classArgs);
    }
    if (viewonly) {
      return h(Viewonly, settings, [value]);
    } else {
      return h(Default, settings);
    }
  },
});

export const ImInputClearable = factory.create('clearable', {
  inheritAttrs: false,
  mixins: [inputExpandMixin],
  props: {
    clearable: typeBoolean(true),
  },
  render(h, context = this) {
    let {clearable, isEditable, $listeners, $props, $attrs, onInput, currentValue: value} = context;
    let {size} = $props;
    return h('div', {
      class: [
        clsClear, clsGap,
        {[clsGapBlock]: $props.block},
        size ? factory(size) : null],
    }, [
      h(ImInput, {
        props: {...$props, value}, attrs: $attrs,
        on: {...$listeners, input: onInput},
        ref: 'input',
      }),
      clearable && isEditable ? h('div', {class: clsClearIcon}, [
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
    getRefInput() {
      return this.$refs.input;
    },
    onInput(value) {
      this.currentValue = value;
    },
  },
});
