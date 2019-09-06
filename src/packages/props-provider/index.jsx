import {eachObject, nameFactory} from '../../utils';

const propsProvider = 'propsProvider';

const factory = nameFactory(propsProvider);

function renamedSlots(h, slots) {
  const result = [];
  eachObject(slots, (children, name) => {
    result.push(children.map(child => h('template', {slot: name}, [child])));
  });
  return result.flat();
}

export const ImPropsProvider = factory.create({
  render(h, {$slots} = this) {
    return h('template', {}, renamedSlots(h, $slots));
  },
  provide: {
    $providedProps() {
      return this.$attrs;
    },
  },
});

export default ImPropsProvider;
