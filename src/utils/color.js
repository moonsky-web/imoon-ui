import {executeParse, isColor} from './color/regexp';
import {activeAmount, activeOpacity, hoverAmount, hoverOpacity} from '../default';

// default color
const COLOR = '#FAFAFA';

// inner function

function maxTo(num, to = 255) {
  return num < to ? (num > 0 ? num : 0) : to;
}

const roundNum = Math.round;

/*
 * [begin] export function
 */

// invert 反色
const invertRgbMap = parsed => parsed.map(num => 255 - num);
const invertRgbaMap = parsed => parsed.map((num, idx) => (idx > 2 ? 1 : 255) - num);

export function invertColor(color) {
  return executeParse(color, invertRgbMap, invertRgbaMap);
}

// lighten 亮化
export function lighten(color, amount) {
  return !amount ? color : executeParse(color,
    parsed => parsed.map(num => maxTo(num + amount, 255)),
    parsed => parsed.map((num, idx) => idx > 2 ? num : maxTo(num + amount, 255)),
    COLOR);
}

export function hover(color, amount = hoverAmount) {
  return lighten(color, amount);
}

// darken 暗化
export function darken(color, amount) {
  return !amount ? color : executeParse(color,
    parsed => parsed.map(num => maxTo(num - amount, 255)),
    parsed => parsed.map((num, idx) => idx > 2 ? num : maxTo(num - amount, 255)),
    COLOR);
}

export function active(color, amount = activeAmount) {
  return darken(color, amount);
}

// centeredColor
export function centeredColor(color, amount, defaultColor) {
  amount = amount || 25;

  function colorAmount(bit) {
    return roundNum(bit < 128
      ? (bit < amount ? bit + amount : bit - amount)
      : (bit > (255 - amount) ? bit - amount : bit + amount));
  }

  return executeParse(color, parsed => parsed.map(colorAmount),
    parsed => parsed.map((num, idx) => idx > 2 ? num : colorAmount(num)),
    defaultColor || COLOR);
}

// rgbColor
const rgbColorMap = p => p;

export function rgbColor(color) {
  return executeParse(color, rgbColorMap, rgbColorMap, list => `rgb(${list[0]},${list[1]},${list[2]})`);
}

// rgbaColor
export function rgbaColor(color, opacity) {
  opacity = !opacity && opacity !== 0 ? 0.3 : opacity;

  function parsed(p) {
    p[3] = opacity;
  }

  return opacity ? executeParse(color, parsed, parsed, null,
    list => `rgba(${list[0]},${list[1]},${list[2]},${list[3]})`) : color;
}

export function hoverRgba(color, amount = hoverAmount, opacity = hoverOpacity) {
  return rgbaColor(hover(color, amount), opacity);
}

export function activeRgba(color, amount = activeAmount, opacity = activeOpacity) {
  return rgbaColor(active(color, amount), opacity);
}

// isColorStr
export const isColorStr = isColor;

/*
 * [end] export function
 */
