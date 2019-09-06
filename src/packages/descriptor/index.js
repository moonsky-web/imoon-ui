import {nameFactory, runtimeError} from '../../utils';
import {splitAttrs} from '../../utils/vnode';

const READONLY = {};

function getChildren(slots, {text}, defaultText) {
  return (slots && slots.length) ? slots : [text === true ? defaultText : (text || defaultText)];
}

function mergeAttrs(sourceData, sourceAttrs, destructAttrs) {
  const {attrs: attrsArgs = READONLY} = sourceData;
  const {props: propsDeclare = READONLY} = destructAttrs;
  const attributes = {...attrsArgs, ...sourceAttrs};
  return {...sourceData, ...splitAttrs(attributes, propsDeclare)};
}

function requireRender(target) {
  if (target === functionalRender) {
    runtimeError(`Stack overflow: ${name}`);
  }
}

function functionalRender(h, context) {
  let {props} = context, {attrs} = props;
  if (attrs !== false) {
    attrs = attrs === null ? READONLY : attrs;
    const attrsType = typeof (attrs);
    if (attrsType === 'function') {
      requireRender(attrs);
      return attrs(h, context);
    }

    let {tag, defaultText: text} = props;
    let {data, children: slots} = context;
    if (attrsType !== 'object') {
      return h(tag || 'span', data, getChildren(slots, {text: attrs}, text));
    }

    if (typeof (attrs.render) === 'function') {
      requireRender(attrs.render);
      data = mergeAttrs(data, attrs, attrs);
      return h(attrs, data, getChildren(slots, attrs, text));
    }

    // 默认 attrs 里的 tag
    // 其次 tag 默认值
    // 再次根据是否包含 href 值决定是 a 或者 span 标签
    tag = attrs.tag || tag || (('href' in attrs) ? 'a' : 'span');
    if (typeof (tag) === 'object') {
      data = mergeAttrs(data, attrs, tag);
    }
    return h(tag, data, getChildren(slots, attrs, text));
  }
}

/**
 * 简单节点描述器
 * attrs：
 * - false：相当于 v-if="false"，不渲染当前节点
 * - true（一个空节点）：<span></span>
 * - String: <span>内容</span>
 * - Object:
 * -     其中的 tag 属性时渲染的节点名，text 属性是文本内容
 * -     其他属性都是属性，如 class、style
 * - Function：渲染函数，接受一个参数 $createElement
 * @type {{name: string, props: {attrs: {type: any[], default: null},
 * text: StringConstructor, tag: any[]}, render: ImDescriptor.render}}
 */
export const ImDescriptor = {
  install(Vue) {
    nameFactory.install(Vue, ImDescriptor);
  },
  name: nameFactory().thisName('Descriptor'),
  functional: true,
  props: {
    attrs: {
      type: [String, Boolean, Object, Function],
      default: null,
    },
    /**
     * 默认文本内容
     */
    defaultText: String,
    /**
     * 默认标签
     */
    tag: [String, Object],
  },
  render: functionalRender,
};

export default ImDescriptor;
