import {nameFactory} from '../../utils';
import {ImIcon} from '../icon';
import {select} from '../../utils/dom';

const backTop = 'backTop';

const factory = nameFactory(backTop);

const clsTop = factory();

export const ImBackTop = factory.create({
  props: {
    target: String,
    bottom: {type: Number, default: 40},
    right: {type: Number, default: 40},
  },
  data() {
    return {cachePosition: 'static', cache$el: null};
  },
  render(h, {click} = this) {
    return (<div class={clsTop} onClick={click}>
      <ImIcon name="caret-up"/>
    </div>);
  },
  methods: {
    click() {
      const parentEl = this.getParentEl();
      console.log(parentEl);
      console.log(parentEl.scrollTop);
      console.log(parentEl.scrollHeight);
      console.log(parentEl.offsetTop);
      console.log(parentEl.offsetHeight);
      // parentEl.scrollTop = 0;
      // this.scrollToTop();
      console.log(this.$el.scrollTop);
      parentEl.scrollTop = 0;
    },
    scrollToTop() {
      let step = 0;
      const parentEl = this.getParentEl(), interval = setInterval(() => {
        if (parentEl.scrollTop > 0) {
          step += 10;
          parentEl.scrollTop -= step;
        } else {
          clearInterval(interval);
        }
      }, 20);
    },
    getParentEl() {
      const {target, $el} = this;
      return target ? select(target) : $el.parentNode;
    },
    setCachePosition() {
      this.$nextTick(() => {
        const $el = this.getParentEl(), position = this.cachePosition =
          document.defaultView.getComputedStyle($el).position;
        if (position === 'static') {
          $el.style.position = 'relative';
        }
      });
    },
  },
  mounted() {
    this.setCachePosition();
  },
  beforeDestroy() {
    this.cache$el = this.getParentEl();
  },
  destroy() {
    const {cache$el: $el, cachePosition} = this;
    if ($el && cachePosition !== 'static') {
      $el.style.position = cachePosition;
    }
  },
});