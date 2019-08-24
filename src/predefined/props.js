import {autoColorValid, autoSizeValid} from '../utils/validator';
import {typeBoolean} from '../utils/props';

export const inputBaseProps = {
  value: {default: null},
  placeholder: String,
  inputClass: [String, Object, Array],
  color: {
    type: String,
    validator: autoColorValid,
  },
  size: {
    type: String,
    validator: autoSizeValid,
  },
  viewonly: typeBoolean(),
  readonly: typeBoolean(),
  disabled: typeBoolean(),
  block: typeBoolean(),
  ghost: typeBoolean(),
  radius: typeBoolean(),
  autofocus: typeBoolean(),// 未实现
};
