import {nameFactory} from '../../utils';
import {typeBoolean, typeNullBoolean, typeString} from '../../utils/props';
import {colorRegister} from './style';
import {autoColorValid, autoSizeValid} from '../../utils/validator';
import {addDynamicCSS, cssBooleanCreator} from '../../utils/style';
import {classBlock} from '../../utils/class';
import {clearEvent} from '../../utils/dom';

const subNs = 'button', readonly = Object.freeze({});
const factory = nameFactory(subNs), clsBtn = factory(), clsTxt = factory('text');
const colorCreator = addDynamicCSS(subNs, colorRegister);
const btnBooleanCreator = cssBooleanCreator(
  (name, val) => val ? factory(name) : '',
  'ghost', 'dashed', 'outline', 'radius');

export const ImButton = factory.create({
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
    href: String,
    disabled: typeBoolean(),
    loading: typeBoolean(),
    append: typeBoolean(),
    replace: typeBoolean(),
  },
  render(h, {
    props, data, children, parent, injections: {$providedProps = readonly} = readonly,
  }) {
    const {class: cls, attrs = {}} = data,
      {color, size, text, block, append, replace, to, href, disabled, loading} = props;
    const names = text ? [clsTxt] : btnBooleanCreator(props, $providedProps);
    const classes = [
      clsBtn, ...names, classBlock(block), cls || '',
      colorCreator(color), size ? factory(size) : '',
    ], settings = {...data, attrs, class: classes};
    let tag = to || href ? 'a' : 'button';

    if (disabled || loading) {
      settings.nativeOn = null;
      settings.on = {
        click: clearEvent,
      };
      if (disabled) {
        attrs.disabled = 'disabled';
      } else {
        attrs.loading = 'loading';
      }
    } else if (to) {
      if (parent && parent.$router) {
        settings.props = {to, append, replace};
        tag = 'RouterLink';
      } else {
        attrs.href = to;
      }
    } else if (href) {
      attrs.href = href;
    }
    return h(tag, settings, children);
  },
});

export default ImButton;
