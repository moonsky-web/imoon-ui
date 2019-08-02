import {nameFactory} from '../../utils';

export const ImRenderer = {
  install(Vue) {
    nameFactory.install(Vue, ImRenderer);
  },
  name: nameFactory().thisName('Renderer'),
  functional: true,
  props: {
    render: {
      type: Function,
      default: function () {
      },
    },
  },
  render(h, ctx) {
    return ctx.props.render(h, ctx);
  },
};

export default ImRenderer;
