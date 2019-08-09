import {nameFactory} from '../../utils';
import {typeBoolean} from '../../utils/props';

const subNs = 'win', empty = {};
const factory = nameFactory(subNs),
  ctrlCreator = factory.next('ctrl'),
  clsCtrl = ctrlCreator(),
  clsClose = factory('close'),
  clsRMid = factory('closeRm'),
  clsCloseIcon = factory('close-icon');

/**
 * 提供基本关闭控件；
 * 需要父组件提供：
 * - 放置 close 图标位置的盒子
 * @type {{functional: boolean, name: *, render(*, {data: *}): *}}
 */
export const ImWinClose = factory.create('Close', {
  functional: true,
  props: {
    middleRight: typeBoolean(true),
  },
  render(h, {data, props: {middleRight: rm}}) {
    const {class: classes = {}} = data;
    return h('div', {
      ...data, class: [clsClose, classes, {[clsRMid]: rm}],
    }, [h('i', {class: clsCloseIcon})]);
  },
});

export const ImWinCtrl = factory.create('Ctrl', {
  functional: true,
  props: {
    closeBtn: typeBoolean(true),
    fullscreenBtn: typeBoolean(),
    maxBtn: typeBoolean(),
    // 依赖于 maxBtn
    restoreBtn: typeBoolean(true),
    minBtn: typeBoolean(),
  },
  render(h, {
    props: {minBtn, restoreBtn, maxBtn, fullscreenBtn, closeBtn},
    data = empty,
  }) {
    const {class: classes = empty} = data;
    const children = [];
    if (minBtn) {

    }
    if (maxBtn) {
      if (restoreBtn) {
      } else {
      }
    }
    if (fullscreenBtn) {
    }
    if (closeBtn) {
      children.push(h(ImWinClose));
    }
    return h('div', {
      class: [
        ...classes,
        clsCtrl,
      ],
    }, children);
  },
});

export default ImWinCtrl;

