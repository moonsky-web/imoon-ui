import {autoColorValid, autoSizeValid} from '../utils/validator';
import {typeBoolean} from '../utils/props';
import {defaultProp} from '../default';
import {isBoolean, isNumber, isPlainObject, isString} from '../utils/predicates';

export function definitionProps(subject, props) {
  const reProps = {}, keys = Object.keys(props), len = keys.length;
  for (let i = 0; i < len; i++) {
    let key = keys[i], propVal = props[key], propObj;
    if (isPlainObject(propVal)) {
      const {default: dft, ...rest} = propVal;
      rest.default = dft === undefined ? defaultProp(key, subject) : dft;
      propObj = rest;
    } else if (isString(propVal)) {
      propObj = {type: String, default: propVal};
    } else if (isBoolean(propVal)) {
      propObj = {type: Boolean, default: propVal};
    } else if (isNumber(propVal)) {
      propObj = {type: Number, default: propVal};
    } else {
      propObj = propVal;
    }
    reProps[key] = propObj;
  }
  return reProps;
}

export const inputBaseProps = {
  value: {default: null},
  placeholder: String,
  inputClass: [String, Object, Array],
  color: {
    type: String,
    validator: autoColorValid,
    default: defaultProp('color', 'input'),
  },
  size: {
    type: String,
    validator: autoSizeValid,
    default: defaultProp('size', 'input'),
  },
  viewonly: typeBoolean(),
  readonly: typeBoolean(),
  disabled: typeBoolean(),
  block: typeBoolean(),
  ghost: typeBoolean(),
  radius: typeBoolean(),
  autofocus: typeBoolean(),
};
