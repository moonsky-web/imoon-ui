import {colorValid} from './validator';
import {nameFactory, nextId, runtimeError} from './index';
import {appendChild, createElement} from './dom';
import {arrJoin} from './array';
import {isColorStr} from './color';
import {onceSpace} from './str';

const CACHE = {}, registers = {};
const DEFAULT = colorValid.default, READONLY = Object.freeze({});

function createRegisters(name, color) {
  const regs = registers, cache = CACHE, style = Object.keys(regs).map(subNs => {
    const currentName = (cache[subNs] || READONLY)[color];
    if (currentName) {
      return '';
    } else {
      (cache[subNs] || (cache[subNs] = {}))[color] = name;
      return onceSpace(regs[subNs](name, color));
    }
  }).join(' ').trim();
  console.log(name, color, cache);
  if (style) {
    const css = createElement('style');
    css.type = 'text/css';
    css.innerHTML = arrJoin(style);
    appendChild(css, document.head);
  }
}

/**
 * 动态自定义颜色样式
 * @param subNs 组件名
 * @param register 接受三个参数：(唯一类名，颜色色值，当前组件基本类名), 返回值为计算后的样式
 * @param config
 * @returns {Function}
 */
export function addDynamicCSS(
  subNs, register, {
    supportColor = true,
    supportRgb = true,
  } = READONLY) {
  if (!(supportRgb || supportColor)) {
    return () => '';
  }

  const creator = nameFactory(subNs), preDef = {}, ns = creator();
  if (supportColor) {
    colorValid.colors.forEach(value => {
      preDef[value] = creator(value);
    });
  }

  registers[subNs] = (name, color) => register(name, color, ns);
  return function (color) {
    if (!color) {
      return '';
    }

    color = color.toLowerCase();
    if (supportColor) {
      let name = preDef[color] || (CACHE[subNs] || READONLY)[color];
      if (name) {
        return name;
      }
    }

    if (supportRgb && isColorStr(color)) {
      let name = nextId();
      createRegisters(name, color);
      return name;
    }

    const error = `Got an error value: [${color}]. Must match of rgb color value.`;
    runtimeError(error, error);
    return creator(DEFAULT);
  };
}

function getValue(name, props, providedProps) {
  let value = props[name];
  return value === null ? (providedProps[name] || null) : value;
}

export function cssBooleanCreator(cssCreator, ...args) {
  return function (props = READONLY, providedProps = READONLY) {
    return args.map(arg => {
      return cssCreator(arg, getValue(arg, props, providedProps));
    });
  };
}

export function isCssLength(str) {
  return /((\d+)|(\d?.\d+)(px|em|rem|%|vw|vh|in|cm|mm|pt|pc|ex|ch|vmin|vmax))/.test(str);
}
