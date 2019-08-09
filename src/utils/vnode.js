import {eachObject} from './index';
import {typeOf} from './predicates';

export function convertListeners(listeners, thisValue) {
  return Array.isArray(listeners) ? (...args) => {
    listeners.forEach(fn => fn.apply(thisValue, args));
  } : listeners;
}

/**
 * 拆分父组件的 attrs，根据子组件 propsObj 描述拆分为 props 和 attrs
 * @param $attrs
 * @param propsObj
 * @returns {{attrs, props, on: *}}
 */
export function splitAttrs($attrs, propsObj) {
  const attrs = {}, props = {};
  eachObject($attrs, (value, name) => {
    (name in propsObj ? props : attrs)[name] = value;
  });
  return {attrs, props};
}

const classMergeEnum = {
  Array(classArgs, computedClass) {
    classArgs.push(computedClass);
    return classArgs;
  },
  Object(classArgs, computedClass) {
    classArgs[computedClass] = true;
    return classArgs;
  },
  String(classArgs, computedClass) {
    return [classArgs, computedClass];
  },
};

function defaultMerge(classArgs, computedClass) {
  return computedClass || null;
}

/**
 * 合并实参 class
 * @param classArgs
 * @param computedClass
 * @returns {*|string}
 */
export function mergeClass(classArgs, computedClass) {
  return (classMergeEnum[typeOf(classArgs)] || defaultMerge)(classArgs, computedClass);
}
