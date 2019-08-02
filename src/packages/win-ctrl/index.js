import {nameFactory} from '../../utils';
import {typeBoolean} from '../../utils/props';

const subNs = 'win', empty = {};
const creator = nameFactory(subNs),
  ctrlCreator = creator.next('ctrl'),
  clsCtrl = ctrlCreator(),
  clsClose = creator('close'),
  clsCloseIcon = creator('close-icon');

export const ImWinClose = {
  name: creator.thisName('Close'),
  functional: true,
  render(h, {data}) {
    const {class: classes = {}} = data;
    return h('div', {
      ...data, class: [clsClose, classes],
    }, [
      h('i', {class: clsCloseIcon}),
    ]);
  },
};

export const ImWinCtrl = {
  name: creator.thisName('Ctrl'),
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
};

export default ImWinCtrl;

