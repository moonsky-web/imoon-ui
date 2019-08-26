import {active, hover, hoverRgba, activeRgba} from '../../../utils/color';

/**
 * 自定义按钮样式
 */
export function colorRegister(colorClass, color, namespaced) {
  const clazz = `.${namespaced}.${colorClass}`,
    classNs = `${clazz}.${namespaced}`, not = ':not([loading])';
  return `${clazz}{background:${color};border-color:${color};color:#fff;}
    ${clazz}${not}:hover{background:${hover(color)};border-color:${hover(color)};
      box-shadow: 0 0 0 1px ${hoverRgba(color)};z-index:1;}
    ${clazz}${not}:active{background:${active(color)};border-color:${active(color)};
      box-shadow: 0 0 0 3px ${activeRgba(color)};}
    ${classNs}-text{color:${color}}
    ${classNs}-text:hover{color:${hover(color,12)}}
    ${classNs}-text:active{color:${active(color,12)}}
    ${classNs}-auto${not}:hover{box-shadow: 0 0 0 .1em ${hoverRgba(color)};}
    ${classNs}-auto${not}:active{box-shadow: 0 0 0 .2em ${activeRgba(color)};}
    ${classNs}-outline,${classNs}-dashed{color:${color};background:#fff;}
    ${classNs}-ghost{color:${color};background:transparent;}
    ${classNs}-outline:hover,${classNs}-dashed:hover,
    ${classNs}-ghost:hover{color:#fff;background:${hover(color)};}`;
}

export default colorRegister;
