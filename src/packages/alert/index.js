import {nameFactory, READONLY, runtimeError} from '../../utils';
import {typeBoolean, typeString} from '../../utils/props';
import {ImTransition} from '../transition';
import {autoColorValid, autoSizeValid} from '../../utils/validator';
import {addDynamicCSS, cssBooleanCreator} from '../../utils/style';
import {rgbaColor} from '../../utils/color';
import {ImWinClose} from '../win-ctrl';
import {alertVisibleName} from '../../default';

const subNs = 'alert', EMPTY = [],
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

export const ImAlert = creator.create({
  functional: true,
  model: {
    prop: visible,
    event: updateVisible,
  },
  props: {
    [visible]: typeBoolean(true),
    title: typeString(),
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
      const {title, color, size} = props, {class: classArgs} = data;

      const className = `${clsAlert} ${alertColorCreator(color)} ${size ? creator(size) : ''}`;
      const computedClass = alertBooleanCreator(props, $providedProps);
      const mergedClass = classArgs ? [classArgs, className,
        ...computedClass] : [className, ...computedClass];

      const {title: titleSlots = EMPTY, close = EMPTY, ...rest} = slots();

      return h(ImTransition, {on}, [
        h('div', {...data, class: mergedClass}, [
          titleSlots.length ? h('div', {
            class: clsTitle,
          }, titleSlots) : (title ? h('div', {
            class: clsTitle,
          }, [title]) : ''),
          ...Object.values(rest).flat(),
          updateSync ? h('div', {
            class: clsClose,
            on: {
              click: typeof (updateSync) === 'function' ? function () {
                updateSync(false);
              } : function () {
                updateSync.forEach(fn => {
                  fn(false);
                });
              },
            },
          }, close.length ? close : [h(ImWinClose, READONLY)]) : null,
        ]),
      ]);
    }
  },
});

export default ImAlert;
