import {toFloat, toInt} from '../index';
import {noneSpace, padStart} from '../str';

const REGEXP = {
  get color3() {
    const regexp = /^#([\dA-F])([\dA-F])([\dA-F])$/i;
    regexp.isColor3 = true;
    return regexp;
  },
  get color6() {
    return /^#([\dA-F]{2})([\dA-F]{2})([\dA-F]{2})$/i;
  },
  get rgb() {
    return /rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/i;
  },
  get rgba() {
    return /rgba\((\d{1,3},)(\d{1,3},)(\d{1,3},)(0?(?:\.\d+))\)/i;
  },
  get transparent() {
    return /rgba\((\d{1,3},){3}0}\)/i;
  },
}, mapToDecimal = toFloat, originOut = v => v;

function reset(colorReg) {
  colorReg.lastIndex = 0;
  return colorReg;
}

/**
 * 字符串数字转换成十六进制数
 * @param numStr
 */
function mapToHex(numStr) {
  return toInt(numStr, 16);
}

function parseOfReg(reg, map, color, handler, parsed) {
  if ((parsed = reset(reg).exec(noneSpace(color)))) {
    parsed = parsed.slice(1);
    if (reg.isColor3) {
      parsed = parsed.map(v => v + v);
    }
    const args = parsed.map(map);
    return handler.call(parsed[0], args) || args;
  }
  return false;
}

// assert

export function isColor(str) {
  return reset(REGEXP.color6).exec(str = noneSpace(str)) ||
    reset(REGEXP.rgb).exec(str) ||
    reset(REGEXP.rgba).exec(str) ||
    reset(REGEXP.color3).exec(str);
}

// begin

/**
 * 匹配执行
 * @param color 原始 color
 * @param rgbMap RGB 色处理函数，接受一个数组，数组项是经过转换的十进制色值，必须返回一个等长同样是十进制色值的数组（下同）
 * @param rgbaMap RGBA 色处理函数，返回的数组第四位必须是一个位于区间 [0, 1] 的值代表透明度
 * @param ifRgba0 透明色默认值
 * @param resultCall 接受一个数组，这个数字是 rgbMap 或 rgbaMap 的返回值，最终结果处理函数，如存在的话会覆盖透明色默认值
 * @returns {*}
 */
export function doParse(color, rgbMap, rgbaMap, ifRgba0, resultCall) {
  return parseColor6(color, rgbMap, resultCall) ||
    parseColor3(color, rgbMap, resultCall) ||
    parseRgb(color, rgbMap, resultCall) ||
    parseRgba0(color, rgbaMap, resultCall || (ifRgba0 && (() => ifRgba0))) ||
    parseRgba(color, rgbaMap, resultCall) || color;
}

export function parseRgba0(color, handler, resultCall) {
  let parsed = parseOfReg(REGEXP.transparent, mapToDecimal, color, handler);
  return parsed === false ? false
    : (resultCall ? resultCall(parsed) :
      `rgba(${parsed[0]},${parsed[1]},${parsed[2]},${parsed[3]})`);
}

export function parseRgba(color, handler, resultCall) {
  let parsed = parseOfReg(REGEXP.rgba, mapToDecimal, color, handler);
  return parsed === false ? false
    : (resultCall ? resultCall(parsed) :
      `rgba(${parsed[0]},${parsed[1]},${parsed[2]},${parsed[3]})`);
}

export function parseRgb(color, handler, resultCall) {
  let parsed = parseOfReg(REGEXP.rgb, mapToDecimal, color, handler);
  return parsed === false ? false
    : (resultCall ? resultCall(parsed) :
      `rgb(${parsed[0]},${parsed[1]},${parsed[2]})`);
}

export function parseColor3(color, handler, resultCall) {
  let parsed = parseOfReg(REGEXP.color3, mapToHex, color, handler);
  return parsed === false ? false
    : (resultCall || returnColor)(parsed);
}

export function parseColor6(color, handler, resultCall) {
  let parsed = parseOfReg(REGEXP.color6, mapToHex, color, handler);
  return parsed === false ? false
    : (resultCall || returnColor)(parsed);
}

// end

function returnColor(parsed) {
  return noneSpace(`#
    ${toHexAndPadStart0(parsed[0])}
    ${toHexAndPadStart0(parsed[1])}
    ${toHexAndPadStart0(parsed[2])}`);
}

/*
 * 将十进制数转换为十六进制数
 * 返回值不少于两位，前面加 0
 */
function toHexAndPadStart0(numStr) {
  return padStart(numStr.toString(16), 2, '0');
}

export function toHexColor(color) {
  return doParse(color, originOut, originOut, null, returnColor);
}
