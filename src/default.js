import {contains, isPrimitive} from './utils/predicates';

/**
 * 组件名命名空间
 * @type {string}
 */
export const namespace = 'im';
/**
 * 组件名采用命名空间作为前缀
 * @type {boolean}
 */
export const namespacedComponentName = true;
/**
 * 组件名首字母大写;
 * 仅在{@link namespacedComponentName} === true 时有效;
 * 当{@link namespacedComponentName} === false 时，组件名首字母总是大写;
 * @type {boolean}
 */
export const capitalize = true;
/**
 * 列表：lg、md、sm、xs 其中一个
 * @type {string}
 */
export const defaultSizeName = 'md';
/**
 * 无意义，但不能修改
 * @type {string}
 */
export const defaultColorName = 'primary';
/**
 * 自定义颜色变换相关
 * @type {number}
 */
// hover 变换步长
export const hoverAmount = 6;
// active 变换步长
export const activeAmount = 6;
// hover 不透明度
export const hoverOpacity = 0.2;
// active、focus 不透明度
export const activeOpacity = 0.4;

export const visibleName = 'visible';

export const alertVisibleName = visibleName;

/**
 * 动画事件
 * @type {{
 * 'before-appear': string,
 * 'after-enter': string[],
 * appear: string,
 * 'appear-canceled': string,
 * 'after-leave': string[],
 * 'enter-canceled': string,
 * leave: string,
 * 'before-leave': string,
 * 'before-enter': string,
 * 'leave-canceled': string,
 * enter: string,
 * 'after-appear': string
 * }}
 */
export const transitionHooks = {
  // 带有 first 修饰的
  'before-appear': 'onBeforeFirstCreate',
  'appear': 'onFirstCreating',
  'after-appear': 'onFirstCreated',
  'appear-canceled': 'onFirstCreateCanceled',
  // 不带 first 修饰的
  'before-enter': 'onBeforeCreate',
  'enter': 'onCreating',
  'after-enter': ['onCreate', 'onCreated'],
  'enter-canceled': 'onCreateCanceled',
  'before-leave': 'onBeforeClose',
  'leave': 'onClosing',
  'after-leave': ['onClose', 'onClosed'],
  'leave-canceled': 'onCloseCanceled',
};

export const DEFAULTS = {
  namespace,
  namespacedComponentName,
  capitalize,
  defaultSizeName,
  defaultColorName,
  hoverAmount,
  activeAmount,
  hoverOpacity,
  activeOpacity,
  transitionHooks,
};

const defaultOptions = {
  color: 'primary',
  size: 'md',
  visible: 'visible',
}, specialKeys = ['size', 'color'];

export function defaultProp(type, subject) {
  const {
    [`$$${namespace}-default-options`]:
      options = defaultOptions,
    // eslint-disable-next-line
  } = Vue.protorype;
  const {[type]: types} = options;
  if (contains(specialKeys, type)) {
    const {[subject]: opts} = options;
    if (opts) {
      if (opts[type] !== undefined) {
        return opts[type];
      }
    }
  }
  return isPrimitive(types) ? types : types[subject];
}

export default DEFAULTS;
