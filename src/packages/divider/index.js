import {nameFactory} from '../../utils';
import {typeBoolean, typeString} from '../../utils/props';

const subNs = 'divider', factory = nameFactory(subNs);

const clsDivider = factory(),
  left = factory('left'),
  center = factory('center'),
  right = factory('right');

export const ImDivider = factory.create({
  functional: true,
  props: {
    vertical: typeBoolean(),
    leftContent: typeString(),
    centerContent: typeString(),
    rightContent: typeString(),
  },
  render(h, {
    props: {vertical, leftContent, centerContent, rightContent},
    data: {class: cls, ...setting}, slots,
  }) {
    setting.class = {...cls, clsDivider};
    return h('div', setting, []);
  },
});