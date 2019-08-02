/**
 * 最多保留一个空格
 * @param str
 * @returns {*}
 */
export function onceSpace(str) {
  return str.replace(/\s+/g, ' ');
}

/**
 * 去掉所有空格
 * @param str
 * @returns {*}
 */
export function noneSpace(str) {
  return str.replace(/\s/g, '');
}

/**
 * 字符串前填充
 * @param str
 * @param toLen
 * @param padChar
 * @returns {string}
 */
export function padStart(str, toLen, padChar) {
  let len = str.length;
  return len < toLen ? (new Array(toLen - len + 1).join(padChar) + str) : str;
}

/**
 * 字符串后填充
 * @param str
 * @param toLen
 * @param padChar
 * @returns {string}
 */
export function padEnd(str, toLen, padChar) {
  let len = str.length;
  return len < toLen ? (str + new Array(toLen - len + 1).join(padChar)) : str;
}

export function toString(obj) {
  return obj && obj.toString();
}

export function toLower(obj) {
  return toString(obj).toLowerCase();
}

const CHARS_REGEXP = /([:\-_]+(.))/g;
const MOZ_REGEXP = /^moz([A-Z])/;

/**
 * 驼峰命名
 * @param name
 * @returns {*}
 */
export function camelcase(name) {
  return name.replace(CHARS_REGEXP, function (undef, sep, letter, offset) {
    return offset ? letter.toUpperCase() : letter;
  }).replace(MOZ_REGEXP, 'Moz$1');
}

/**
 * 驼峰命名转中划线
 * @param str
 * @returns {*}
 */
export function camelcaseToHyphen(str) {
  return toLower(str.replace(/([a-z])([A-Z])/g, '$1-$2'));
}

/**
 * 首字母大写
 * @param str
 * @returns {string}
 */
export function firstUpperCase(str) {
  return str.charAt(0).toUpperCase() + str.toString().slice(1);
}

/**
 * 首字母小写
 * @param str
 * @returns {string}
 */
export function firstLowerCase(str) {
  return str.charAt(0).toLowerCase() + str.toString().slice(1);
}
