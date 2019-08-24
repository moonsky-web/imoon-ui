import {defaultColorName, defaultSizeName} from '../default';
import {defineDefaultGetter, defineGetterSetter} from './core';
import {contains} from './predicates';
import {isColorStr} from './color';

export const STYLE_NAMES = ['outline', 'dashed', 'ghost', 'circle', 'disabled'];

/*
 * size validator
 */

const SIZE_NAMES = ['lg', 'md', 'sm', 'xs'];

export function sizeValid(v, allowAutoSize = false) {
  return contains(SIZE_NAMES, v) || (allowAutoSize && v === 'auto');
}

export function autoSizeValid(v, allowAutoSize = true) {
  return sizeValid(v, allowAutoSize);
}

defineDefaultGetter(sizeValid, defaultSizeName);
defineDefaultGetter(autoSizeValid, defaultSizeName);
defineGetterSetter(autoSizeValid, 'names', () => [...SIZE_NAMES]);

/*
 * color validator
 */

export const COLOR_NAMES = ['primary', 'success', 'base', 'info', 'warn', 'danger'];

defineDefaultGetter(colorValid, defaultColorName);
defineGetterSetter(colorValid, 'colors', getColors);
defineDefaultGetter(autoColorValid, defaultColorName);
defineGetterSetter(autoColorValid, 'colors', getColors);

autoColorValid.colorValid = colorValid;
autoColorValid.isOptional = isColorStr;

function getColors() {
  return [...COLOR_NAMES];
}

export function colorValid(v) {
  return contains(COLOR_NAMES, v);
}

export function autoColorValid(value) {
  return colorValid(value) || isColorStr(value);
}

