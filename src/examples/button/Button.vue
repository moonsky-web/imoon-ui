<template>
  <DemoContainer
    label="Button 演示"
    :props="props">
  </DemoContainer>
</template>

<script>
  import {autoSizeValid, COLOR_NAMES} from '../../utils/validator';

  export const Button = {
    name: 'Button',
    computed: {
      props() {
        return [
          {
            name: 'color',
            type: 'String',
            default: null,
            desc(h) {
              return h('div', {}, [
                '预定义颜色 [ ',
                ...COLOR_NAMES.reduce((total, now, idx, arr) => {
                  total.push(h('code', {class: 'demo-api-prop-code'}, [now]));
                  if (idx < arr.length - 1) {
                    total.push(',');
                  }
                  return total;
                }, []),
                ' ] 或 RGB 色值',
              ]);
            },
          },
          {
            name: 'size',
            type: 'String',
            values: [...autoSizeValid.sizes, 'auto'],
            default: null,
            // desc: '预定义尺寸，或使用 font-size。',
            desc(h) {
              return h('div', {}, [
                '预定义尺寸 [ ',
                ...autoSizeValid.sizes.reduce((total, now, idx, arr) => {
                  total.push(h('code', {class: 'demo-api-prop-code'}, [now]));
                  if (idx < arr.length - 1) {
                    total.push(',');
                  }
                  return total;
                }, []),
                ' ] 或 ',
                h('code', {class: 'demo-api-prop-code'}, ['auto']),
                ' 色值',
              ]);
            },
          },
          {
            name: 'block',
            type: Boolean,
            values: null,
            default: false,
            desc: '是否块级按钮',
          },
          {
            name: 'ghost',
            type: Boolean,
            values: null,
            default: false,
            desc: '是否透明按钮（幽灵按钮）',
          },
          {
            name: 'dashed',
            type: Boolean,
            values: null,
            default: false,
            desc: '是否虚线边框',
          },
          {
            name: 'outline',
            type: Boolean,
            values: null,
            default: false,
            desc: '是否外边框按钮',
          },
          {
            name: 'radius',
            type: Boolean,
            values: null,
            default: false,
            desc: '是否圆角按钮',
          },
          {
            name: 'text',
            type: Boolean,
            values: null,
            default: false,
            desc: '是否文字按钮',
          },
          {
            name: 'to',
            type: String,
            values: null,
            default: null,
            desc(h) {
              return h('div', {}, [
                h('a', {
                  attrs: {
                    href: 'https://router.vuejs.org/zh/guide/essentials/navigation.html',
                    target: '_blank',
                  },
                }, ['VueRouter 编程式导航']),
                '，如果没有使用路由，将直接设为超链接',
              ]);
            },
          },
          {
            name: 'replace',
            type: Boolean,
            values: null,
            default: null,
            desc: '相当于 VueRouter replace',
          },
          {
            name: 'append',
            type: Boolean,
            values: null,
            default: null,
            desc: '相当于 VueRouter append',
          },
          {
            name: 'href',
            type: String,
            values: null,
            default: null,
            desc: '普通 a 标签的 href 属性，当和 to 同时出现时，to 优先',
          },
          {
            name: 'disabled',
            type: Boolean,
            values: null,
            default: false,
            desc: '是否禁用',
          },
          {
            name: 'loading',
            type: Boolean,
            values: null,
            default: false,
            desc: '是否加载状态，loading 状态按钮不能触发事件',
          },
          {
            name: 'icon',
            type: String,
            values: null,
            default: false,
            desc: '图标',
          },
        ];
      },
    },
  };
  export default Button;
</script>

<style lang="scss">
  .demo-api-prop-code {
    display: inline-block;
    padding: 0 4px;
    height: 16px;
    line-height: 18px;
    background: rgba(132, 155, 161, .1);
    color: rgb(105, 123, 108);
    border: 1px solid rgba(132, 155, 161, .4);
    border-radius: 4px;

    & + #{&} {
      margin-left: 5px;
    }
  }
</style>
