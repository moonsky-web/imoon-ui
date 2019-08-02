import {active, hover, hoverRgba, activeRgba} from '../../../utils/color';

/**
 * 自定义按钮样式
 */
export function colorRegister(colorClass, color, namespaced) {
  const clazz = `.${namespaced}.${colorClass}`;
  return `${clazz}{background:${color};border-color:${color};color:#fff;}
    ${clazz}:hover{background:${hover(color)};border-color:${hover(color)};
      box-shadow: 0 0 0 1px ${hoverRgba(color)};z-index:1;}
    ${clazz}:active{background:${active(color)};border-color:${active(color)};
      box-shadow: 0 0 0 3px ${activeRgba(color)};}
    ${clazz}.${namespaced}-auto:hover{box-shadow: 0 0 0 .1em ${hoverRgba(color)};}
    ${clazz}.${namespaced}-auto:active{box-shadow: 0 0 0 .2em ${activeRgba(color)};}
    ${clazz}.${namespaced}-outline,${clazz}.${namespaced}-dashed{color:${color};background:#fff;}
    ${clazz}.${namespaced}-ghost{color:${color};background:transparent;}
    ${clazz}.${namespaced}-outline:hover,${clazz}.${namespaced}-dashed:hover,${clazz}.${namespaced}-ghost:hover{
      color:#fff;background:${hover(color)};}`;
}

export default colorRegister;
