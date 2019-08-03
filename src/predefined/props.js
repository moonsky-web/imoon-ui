import {autoColorValid, autoSizeValid} from '../utils/validator';
import {typeBoolean} from '../utils/props';

export const inputBaseProps = {
  value: {},
  color: {
    type: String,
    validator: autoColorValid,
  },
  size: {
    type: String,
    validator: autoSizeValid,
  },
  viewonly: typeBoolean(),
  block: typeBoolean(),
  ghost: typeBoolean(),
  dashed: typeBoolean(),
  radius: typeBoolean(),
  autofocus: typeBoolean(),// 未实现
};