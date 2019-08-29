import {nameFactory} from '../../utils';

const imageresizer = 'imageresizer';

const factory = nameFactory(imageresizer);

export const ImImageResizer = factory.create({
  props: {},
  render(h) {
    return h('div', {}, []);
  },
});