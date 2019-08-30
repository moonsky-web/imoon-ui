import {nameFactory} from '../../utils';
import {addDynamicCSS, cssBooleanCreator} from '../../utils/style';
import {inputColorRegister} from './style';
import {inputBaseProps as props} from '../../predefined/props';
import {ImWinClose} from '../win-ctrl';
import {typeBoolean} from '../../utils/props';
import {convertListeners} from '../../utils/vnode';
import {inputExpandMixin} from '../../predefined/mixins';
import {classBlock} from '../../utils/class';

const subNs = 'Input', OBJ = {};
const factory = nameFactory(subNs),
  clsInput = factory(),
  clsClear = factory('clearable'),
  clsClearIcon = factory('clearIcon');
const inputColorCreator = addDynamicCSS(subNs, inputColorRegister);
const inputBooleanCreator = cssBooleanCreator((name, val) =>
  val ? factory(name) : null, 'ghost', 'radius');

function noneInput() {
}

const Default = {
  functional: true,
  name: factory.thisName('Default'),
  props: {value: null},
  render(h, {data, parent}) {
    const {
      // eslint-disable-next-line
      on = OBJ, attrs: {value: v, ...attrs} = OBJ,
      props: {value, placeholder, readonly, disabled} = OBJ,
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
    data: {attrs: {value, ...attrs}, ...rest}, children,
  }) {
    rest.attrs = attrs;
    attrs.viewonly = 1;
    return h('span', rest, children);
  },
};

export const inputFactory = factory;

export const ImInput = factory.create({
  functional: true, props,
  render(h, {
    data, props = OBJ,
    injections: {$providedProps = OBJ} = OBJ,
  }) {
    const {class: classArgs, attrs = {}} = data, {viewonly, value, color, size, block} = props;
    const classes = [
      classBlock(block), clsInput,
      `${inputColorCreator(color)} ${size ? factory(size) : ''}`,
      ...inputBooleanCreator(props, $providedProps)], settings = {
      ...data, props, attrs,
      class: classes,
    };
    if (classArgs) {
      classes.push(classArgs);
    }
    if (viewonly) {
      return h(Viewonly, settings, [value]);
    } else {
      if (props.autofocus) {
        attrs.autofocus = props.autofocus;
      }
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
    let {clearable, isEditable, $listeners, $props,
      $attrs, onInput, currentValue: value} = context;
    let {size} = $props;
    return h('div', {
      class: [
        clsClear, classBlock($props.block),
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
