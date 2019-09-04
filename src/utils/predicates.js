const CORE_STR = Object.prototype.toString;

export function contains(arrOrStr, val) {
  return arrOrStr && arrOrStr.indexOf(val) >= 0;
}

export function nativeToString(val) {
  return CORE_STR.call(val);
}

export function toType(val) {
  return typeof (val);
}

export function typeOf(val) {
  return nativeToString(val).slice(8, -1);
}

export function isTrue(val) {
  return val === true;
}

export function isFalse(val) {
  return val === false;
}

export function isDef(val) {
  return val !== undefined;
}

export function isUndef(val) {
  return val === undefined;
}

export function isNull(val) {
  return val === null;
}

export const isArray = Array.isArray;

export function insOf(obj, ctor) {
  return obj instanceof ctor;
}

export function isString(val) {
  return toType(val) === 'string' || typeOf(val) === 'String';
}

export function isRegExp(value) {
  return insOf(value, RegExp) || typeOf(value) === 'RegExp';
}

export function isPrimitive(value) {
  let type = typeof value;
  return type === 'string' ||
    type === 'number' ||
    type === 'boolean';
}

export function isOrigin(value) {
  return !value || isPrimitive(value);
}

export function isObject(val) {
  return typeof val === 'object';
}

export function isPlainObject(val) {
  return val && typeOf(val) === 'Object';
}

export function isFunction(val) {
  return toType(val) === 'function';
}

export function isWindow(val) {
  return typeOf(val) === 'Window' && hasKey(val, 'setTimeout');
}

export function isBoolean(val) {
  return toType(val) === 'boolean' || typeOf(val) === 'Boolean';
}

export function isNumber(val) {
  return toType(val) === 'number' || typeOf(val) === 'Number';
}

export function hasKey(obj, key) {
  return key in obj;
}

export function hasOwnKey(obj, key) {
  return obj.hasOwnProperty(key);
}

/**
 * 支持数组、字符串和对象
 * @param src
 * @param item
 * @returns {boolean}
 */
export function oneOf(src, item) {
  for (let key in src) {
    if (src[key] === item) {
      return true;
    }
  }
  return false;
}

export function containsAny(src, items) {
  for (let item of items) {
    if (contains(src, item)) {
      return true;
    }
  }
  return false;
}

export function containsAll(src, items) {
  for (let item of items) {
    if (!contains(src, item)) {
      return false;
    }
  }
  return true;
}

export function matchAny(src, regexps) {
  for (let reg of regexps) {
    reg.lastIndex = 0;
    if (reg.test(src)) {
      return true;
    }
  }
  return false;
}

export function matchAll(src, regexps) {
  for (let reg of regexps) {
    reg.lastIndex = 0;
    if (!reg.test(src)) {
      return false;
    }
  }
  return true;
}
