import {nameFactory, READONLY} from '../../utils';
import {typeBoolean, typeString} from '../../utils/props';
import {ImTransition} from '../transition';
import {autoColorValid, autoSizeValid} from '../../utils/validator';
import {addDynamicCSS, cssBooleanCreator} from '../../utils/style';
import {rgbaColor} from '../../utils/color';
import {ImWinClose} from '../win-ctrl';
import {alertVisibleName} from '../../default';

const subNs = 'alert', EMPTY = Object.freeze([]),
  visible = alertVisibleName,
  updateVisible = `update:${visible}`;
const creator = nameFactory(subNs),
  clsAlert = creator(),
  clsClose = creator('close'),
  clsTitle = creator('title');
const alertColorCreator = addDynamicCSS(subNs, (className, color, namespaced) =>
  `.${namespaced}.${className}{color:${color};background:${rgbaColor(color, 0.1)};}`);
const alertBooleanCreator = cssBooleanCreator((name, val) => {
  return val ? creator(name) : '';
}, 'dashed', 'radius');

const createTitle = (h, title) => h('div', {
  class: clsTitle,
}, [title]);

export const ImAlert = creator.create({
  functional: true,
  model: {
    prop: visible,
    event: updateVisible,
  },
  props: {
    [visible]: typeBoolean(true),
    title: typeString(),
    description: typeString(),
    icon: typeString(),
    color: {
      type: String,
      validator: autoColorValid,
    },
    size: {
      type: String,
      validator: autoSizeValid,
    },
    dashed: typeBoolean(),
    radius: typeBoolean(),
  },
  render(h, {
    listeners, props = READONLY, data, slots,
    injections: {$providedProps = READONLY} = READONLY,
  }) {
    const {visible} = props;
    if (visible) {
      const {[updateVisible]: updateSync, ...on} = listeners;
      const {title, description: desc, closeText, color, size} = props, {class: classArgs} = data;

      const className = `${clsAlert} ${alertColorCreator(color)} ${size ? creator(size) : ''}`;
      const computedClass = alertBooleanCreator(props, $providedProps);
      const mergedClass = classArgs ? [classArgs, className,
        ...computedClass] : [className, ...computedClass];

      const {title: titleSlots = EMPTY, close = EMPTY, default: defaults = EMPTY} = slots();

      const titleNode = titleSlots.length ? h('div', {class: clsTitle}, titleSlots)
        : (defaults.length ? (title ? createTitle(h, title) : null) : (desc && title ? createTitle(h, title) : null));
      const defaultNode = defaults.length ? defaults : (desc ? [desc] : [title]);
      const closeNode = updateSync || close.length ? h('div', {
        class: clsClose,
        on: {
          click: typeof (updateSync) === 'function' ? () => {
            updateSync(false);
          } : () => {
            updateSync.forEach(fn => {
              fn(false);
            });
          },
        },
      }, close.length ? close : [
        closeText ? (0) : h(ImWinClose, READONLY),
      ]) : null;
      return h(ImTransition, {on}, [
        h('div', {...data, class: mergedClass}, [titleNode, ...defaultNode, closeNode]),
      ]);
    }
  },
});

export default ImAlert;
