<template>
  <DemoContainer
    :props="props"
    label="Input 演示">
  </DemoContainer>
</template>

<script>
  import {COLOR_NAMES, autoSizeValid} from '../../utils/validator';

  export const Input = {
    name: 'Input',
    computed: {
      props() {
        return [
          {
            name: 'value',
            type: null,
            default: '--',
            desc: '可用 v-model 绑定值',
          },
          {
            name: 'color',
            type: String,
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
            default: null,
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
            name: 'viewonly',
            type: Boolean,
            default: false,
            desc: '是否只显示内容',
          },
          {
            name: 'readonly',
            type: Boolean,
            default: false,
            desc: '是否只读',
          },
          {
            name: 'disabled',
            type: Boolean,
            default: false,
            desc: '是否禁用',
          },
          {
            name: 'block',
            type: Boolean,
            default: false,
            desc: '是否块级输入框',
          },
          {
            name: 'ghost',
            type: Boolean,
            default: false,
            desc: '是否幽灵输入框，用于深色背景',
          },
          {
            name: 'radius',
            type: Boolean,
            default: false,
            desc: '是否圆角输入框',
          },
          {
            name: 'autofocus',
            type: Boolean,
            default: false,
            desc: '是否自动聚焦',
          },
        ];
      },
    },
  };
  export default Input;
</script>

<style scoped>

</style>
