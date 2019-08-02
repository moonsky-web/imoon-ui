import {nameFactory} from '../../utils';
import {typeNullBoolean, typeString} from '../../utils/props';
import {colorRegister} from './style';
import {autoColorValid, autoSizeValid} from '../../utils/validator';
import {addDynamicCSS, cssBooleanCreator} from '../../utils/style';

const subNs = 'btn', readonly = Object.freeze({});
const creator = nameFactory(subNs), clsBtn = creator();
const colorCreator = addDynamicCSS(subNs, colorRegister);
const btnBooleanCreator = cssBooleanCreator((name, val) => {
  return val ? creator(name) : '';
}, 'block', 'ghost', 'dashed', 'outline', 'radius');

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
    block: typeNullBoolean(),
    ghost: typeNullBoolean(),
    dashed: typeNullBoolean(),
    outline: typeNullBoolean(),
    radius: typeNullBoolean(),
    to: typeString(),
  },
  render(h, {
    props, data, children, injections: {$providedProps = readonly} = readonly,
  }) {
    const {class: cls, attrs = {}} = data, {color, size, to} = props;
    const names = btnBooleanCreator(props, $providedProps);
    const className = `${clsBtn} ${colorCreator(color)} ${size ? creator(size) : ''}`;
    const settings = {
      ...data, attrs, class: cls ? [cls, className, ...names] : [className, ...names],
    };
    let tag = 'button';
    if (to) {
      tag = 'a';
      attrs.href = to;
    }
    return h(tag, settings, children);
  },
};

export default ImButton;
