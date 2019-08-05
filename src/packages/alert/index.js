import {nameFactory, READONLY, runtimeError} from '../../utils';
import {typeBoolean, typeString} from '../../utils/props';
import {ImTransition} from '../transition';
import {autoColorValid, autoSizeValid, colorValid} from '../../utils/validator';
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
  clsTitle = creator('title'),
  clsCloseIcon = creator('close-icon');
const alertColorCreator = addDynamicCSS(subNs, (className, color, namespaced) =>
  `.${namespaced}.${className}{color:${color};background:${rgbaColor(color, 0.1)};}`);
const alertBooleanCreator = cssBooleanCreator((name, val) => {
  return val ? creator(name) : '';
}, 'dashed', 'radius');

function noneEvent() {
  runtimeError(`请使用 v-model 或 .sync 绑定 ${visible}.`, 'log');
}

export const ImAlert = {
  install(Vue) {
    creator.install(Vue, ImAlert);
  },
  name: creator.thisName(),
  functional: true,
  model: {
    prop: visible,
    event: updateVisible,
  },
  props: {
    [visible]: typeBoolean(true),
    closeable: typeBoolean(true),
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
      const {[updateVisible]: updateSync = noneEvent, ...on} = listeners;
      const {closeable, title, color, size} = props, {class: classArgs} = data;

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
          closeable ? h('div', {
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
          }, close.length ? close : [
            h(ImWinClose, {props: {rightMiddle: true}}),
          ]) : '',
        ]),
      ]);
    }
  },
};

export default ImAlert;
