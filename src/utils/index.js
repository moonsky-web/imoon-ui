import {capitalize, namespace, namespacedComponentName} from '../default';
import {camelcase, camelcaseToHyphen, firstLowerCase, firstUpperCase, toLower} from './str';
import {isString} from './predicates';

/**
 * UID
 * @returns {string}
 */
export function nextId() {
  return `${namespace}-uid-${decimalToHex((Math.random() + '').substr(2, 8))}`;
}

/**
 * 首字母大写的组件名
 * @param componentName
 * @param ns
 * @returns {string}
 */
function firstUpper(componentName, ns = namespace) {
  return `${firstUpperCase(ns)}${componentName
    ? firstUpperCase(componentName) : ''}`;
}

/**
 * 首字母小写的组件名
 * @param componentName
 * @param ns
 * @returns {string}
 */
function firstLower(componentName, ns = namespace) {
  return `${firstLowerCase(ns)}${componentName 
    ? firstUpperCase(componentName) : ''}`;
}

/**
 * 不可修改的空对象，做默认值或标记用
 * @type {Readonly<{}>}
 */
export const READONLY = Object.freeze({});

function installComponent(Vue, component) {
  Vue.component(component.name, component);
}

function getClassName(subNs, defaultNamespace = namespace) {
  subNs = (subNs || '').trim();
  // subNs 的首尾不能是 '-'，可以加这个检查
  const nowSubNs = camelcaseToHyphen(subNs), nowNs = camelcaseToHyphen(defaultNamespace);
  const componentNs = `${camelcase(nowNs)}${firstUpperCase(camelcase(nowSubNs))}`;
  const nowClassNs = nowSubNs ? `${nowNs}-${nowSubNs}` : nowNs;

  function className(v) {
    if ((v = (v || '').trim())) {
      return toLower(`${nowClassNs}-${camelcaseToHyphen(v)}`);
    } else if (nowClassNs === nowNs && subNs !== false) {
      runtimeError('Got an empty sub namespace.');
    } else {
      return nowClassNs;
    }
  }

  const thisName = namespacedComponentName
    ? (capitalize
      ? (componentName => firstUpper(componentName, componentNs))
      : (componentName => firstLower(componentName, componentNs)))
    : ((componentName, alwaysNamespaced = false) => alwaysNamespaced
      ? firstUpper(componentName, componentNs || 'im')
      : `${firstUpperCase(componentName)}`);

  className.install = installComponent;
  /**
   * 创建一个逐渐，target 和 src 分别是逐渐构造和名字，部分前后
   * @param target
   * @param src
   * @returns {*}
   */
  className.create = (target, src) => {
    [target, src] = isString(target) ? [src, target] : [target, src];
    target.install = target.install || (Vue => installComponent(Vue, target));
    target.name = target.name || thisName(src);
    return target;
  };

  className.thisName = thisName;
  className.next = function (nextSubNs) {
    return getClassName(nextSubNs, nowClassNs);
  };

  return className;
}

/**
 * 组件类名工厂
 * 附带一个 componentName 属性函数，返回带有命名空间的组件名称
 * @param subNs
 * @returns {Function}
 */
export function nameFactory(subNs = false) {
  return getClassName(subNs);
}

nameFactory.install = installComponent;

/**
 * 错误消息
 * @param msg 消息内容
 * @param type 是否只打印
 */
export function runtimeError(msg, type) {
  if (type === true) {
    throw new Error(msg);
  } else if (type === false) {
    // eslint-disable-next-line
    console.error(new Error(msg));
  } else {
    // eslint-disable-next-line
    (console[type] || console.error)(msg);
  }
}

export function eachObject(obj, fn) {
  const keys = Object.keys(obj), len = keys.length;
  for (let i = 0; i < len; i++) {
    const key = keys[i], item = obj[key];
    if (fn.call(item, item, key, obj) === false) {
      break;
    }
  }
  return obj;
}

export function eachCount(count, fn) {
  for (let i = 0; i < count; i++) {
    if (fn.call(i, i, i, count) === false) {
      break;
    }
  }
}

export function eachArray(arr, fn, len) {
  if (arr && (len = len || arr.length)) {
    for (let i = 0; i < len; i++) {
      let item = arr[i];
      if (fn.call(item, item, i, arr) === false) {
        break;
      }
    }
  }
  return arr;
}

export function copyTo(from, to) {
  for (let key in from) {
    to[key] = from[key];
  }
  return to;
}

export const toInt = parseInt;
export const toFloat = parseFloat;

export function decimalToHex(num) {
  return toInt(num).toString(16);
}
