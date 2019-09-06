import {nameFactory} from '../../utils';

export const ImRenderer = nameFactory('Renderer').create({
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
});

export default ImRenderer;
