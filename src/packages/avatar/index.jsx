import {nameFactory} from '../../utils';
import {ImIcon} from '../icon';
import {typeBoolean, typeString} from '../../utils/props';
import {onEvent} from '../../utils/dom';

const avatar = 'avatar';

const factory = nameFactory(avatar);

const clsAvatar = factory(),
  clsImage = factory('image'),
  clsRadius = factory('radius'),
  clsAction = factory('action');

export const ImAvatar = factory.create({
  props: {
    /**
     * 图片资源路径
     */
    src: String,
    alt: String,
    icon: typeString('user'),
    /**
     * 默认图标
     */
    size: {
      type: String,
      default: 'md',
    },
    /**
     * 上传路径
     * 两种上传方式：一种是上传裁剪后的图片，一种是上传原图片+裁剪坐标信息
     * 看哪种能实现
     */
    actionUrl: String,
    radius: typeBoolean(),
  },
  data() {
    return {
      unloaded: false,
    };
  },
  render(h, context = this) {
    const {$props: props, click, unloaded, icon: name} = context;
    const {src, radius} = props;
    return h('div', {class: [clsAvatar, {[clsRadius]: radius}]}, [
      unloaded ? h(ImIcon, {props: {name}}) : h('img', {class: clsImage, attrs: {src}, ref: 'img'}),
      h('div', {class: clsAction, on: {click}}, [h(ImIcon, {props: {name: 'camera'}})]),
    ]);
  },
  methods: {
    click() {
      console.log('change image ...');
    },
  },
  mounted() {
    onEvent(this.$refs.img, 'error', (...args) => {
      this.unloaded = true;
    });
  },
});