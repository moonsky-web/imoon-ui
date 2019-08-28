import {nameFactory} from '../../utils';
import {typeBoolean, typeString} from '../../utils/props';

const subNs = 'divider',
  factory = nameFactory(subNs);

const clsDivider = factory(),
  clsDashed = factory('dashed'),
  clsVertical = factory('vertical'),
  clsLeft = factory('left'),
  clsCenter = factory('center'),
  clsRight = factory('right');

function slotFactory(h, slots, text, cls) {
  return slots && slots.length ? h('div', {class: cls}, slots) : (text ? h('div', {class: cls}, [text]) : null);
}

export const ImDivider = factory.create({
  functional: true,
  props: {
    vertical: typeBoolean(),
    dashed: typeBoolean(),
    left: typeString(),
    center: typeString(),
    right: typeString(),
  },
  render(h, {
    props: {vertical, dashed, left: leftText, center: centerText, right: rightText},
    data: {class: cls, ...setting}, slots,
  }) {
    setting.class = [cls, {[clsDashed]: dashed}, vertical ? clsVertical : clsDivider];
    if (vertical) {
      return h('div', setting);
    } else {
      const {default: dft, left, center, right} = slots();
      return h('div', setting, [
        slotFactory(h, left || dft, leftText, clsLeft),
        slotFactory(h, center, centerText, clsCenter),
        slotFactory(h, right, rightText, clsRight)]);
    }
  },
});

export default ImDivider;