export function typeWith(type, value) {
  return {type, default: value};
}

export function typeBoolean(value = false, type = Boolean) {
  return typeWith(type, value);
}

export function typeNullBoolean(type = Boolean) {
  return typeBoolean(null, type);
}

export function typeString(value, type = String) {
  return typeWith(type, value);
}

export function typeObject(value = function () {
  return {};
}, type = Object) {
  return typeWith(type, value);
}

export function typeArray(value = function () {
  return [];
}, type = Array) {
  return typeWith(type, value);
}
