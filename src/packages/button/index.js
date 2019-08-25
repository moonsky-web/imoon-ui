import {nameFactory} from '../../utils';
import {typeBoolean, typeNullBoolean, typeString} from '../../utils/props';
import {colorRegister} from './style';
import {autoColorValid, autoSizeValid} from '../../utils/validator';
import {addDynamicCSS, cssBooleanCreator} from '../../utils/style';
import {classBlock} from '../../utils/class';

const subNs = 'btn', readonly = Object.freeze({});
const creator = nameFactory(subNs), clsBtn = creator(), clsTxt = creator('text');
const colorCreator = addDynamicCSS(subNs, colorRegister);
const btnBooleanCreator = cssBooleanCreator(
  (name, val) => val ? creator(name) : '',
  'ghost', 'dashed', 'outline', 'radius');

export const ImButton = {
  install(Vue) {
    creator.install(Vue, ImButton);
  },
  name: creator.thisName(),
  functional: true,
  props: {
    color: {
      type: String,
      validator: autoColorValid,
    },
    size: {
      type: String,
      validator: autoSizeValid,
    },
    text: typeBoolean(),
    block: typeNullBoolean(),
    ghost: typeNullBoolean(),
    dashed: typeNullBoolean(),
    outline: typeNullBoolean(),
    radius: typeNullBoolean(),
    to: typeString(),
    disabled: typeBoolean(),
    loading: typeBoolean(),
  },
  render(h, {
    props, data, children, parent, injections: {$providedProps = readonly} = readonly,
  }) {
    const {class: cls, attrs = {}} = data, {color, size, text, to, disabled, block} = props;
    const names = text ? [clsTxt] : btnBooleanCreator(props, $providedProps);
    const classes = [
      clsBtn, classBlock(block), ...names,
      `${colorCreator(color)} ${size ? creator(size) : ''}`,
    ], settings = {...data, attrs, class: classes};
    if (cls) {
      classes.push(cls);
    }
    let tag = 'button';
    if (disabled) {
      settings.on = null;
      settings.nativeOn = null;
      attrs.disabled = 'disabled';
    } else if (to) {
      if (parent && parent.$router) {
        settings.props = {to};
        tag = 'RouterLink';
      } else {
        attrs.href = to;
        tag = 'a';
      }
    }
    return h(tag, settings, children);
  },
};

export default ImButton;
