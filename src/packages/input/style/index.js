import {active, activeRgba, hover, hoverRgba} from '../../../utils/color';

export function inputColorRegister(inputComputedClass, color, namespaced) {
  const clazz = `.${namespaced}.${inputComputedClass}`;
  return `${clazz}{border-color:${color};}
    ${clazz}.${namespaced}-ghost{color:${color};}
    ${clazz}.${namespaced}-ghost:hover,${clazz}.${namespaced}-ghost:active,
    ${clazz}.${namespaced}-ghost:focus{color:#000;}
    ${clazz}:hover{border-color: ${hover(color)};
      box-shadow: 0 0 0 3px ${hoverRgba(color)};}
    ${clazz}:active,${clazz}:focus{border-color: ${active(color)};
      box-shadow: 0 0 0 3px ${activeRgba(color)};}`;
}

export default inputColorRegister;
