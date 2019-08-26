<template>
  <DemoContainer :props="props">
    <div slot="detail">
      Button 演示
    </div>
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
            values: [...COLOR_NAMES, '#rgb'],
            default: null,
            desc: '颜色，预定义颜色或 RGB 色值',
          },
          {
            name: 'size',
            type: 'String',
            values: [...autoSizeValid.sizes, 'auto'],
            default: null,
            desc: '尺寸，预定义尺寸，或使用 font-size。',
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
            desc: '是否透明按钮（幽灵）',
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
            desc: '路由导航',
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
            desc(h) {
              return h('span', {}, ['图标', h('span', {style: {color: 'red'}}, ['(未实现)'])]);
            },
          },
        ];
      },
    },
  };
  export default Button;
</script>

<style scoped>

</style>
