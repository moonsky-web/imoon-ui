export function defineProperty(obj, key, setting) {
  Object.defineProperty(obj, key, setting);
  return obj;
}

export function defineValueOf(
  obj, key, value,
  enumerable = true,
  configurable = true,
  writable = true) {
  return defineProperty(obj, key, {
    configurable: configurable,
    enumerable: enumerable,
    writable: writable,
    value: value,
  });
}

export function defineGetterSetter(
  obj, key, get, set,
  enumerable = true,
  configurable = true) {
  return defineProperty(obj, key, {
    configurable: configurable,
    enumerable: enumerable,
    get: get,
    set: set,
  });
}

export function defineDefaultGetter(obj, value) {
  return defineGetterSetter(obj, 'default', function () {
    return value;
  });
}

export function defineReadonly(obj, key, value) {
  return defineValueOf(obj, key, value, true, true, false);
}
