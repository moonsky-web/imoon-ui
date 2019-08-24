<template>
  <DemoContainer :props="props" :slots="slots" :events="events">
    <div slot="detail">
      Alert 演示
    </div>
  </DemoContainer>
</template>

<script>
  import {autoSizeValid, COLOR_NAMES} from '../../utils/validator';

  export const Alert = {
    name: 'Alert',
    computed: {
      events() {
        return [];
      },
      slots() {
        return [
          {
            name: 'title',
            desc: '标题插槽',
          },
          {
            name: 'default',
            desc: '内容插槽',
          },
          {
            name: 'close',
            desc: '关闭插槽',
          },
        ];
      },
      props() {
        return [
          {
            name: 'visible',
            type: 'Boolean',
            values: null,
            default: true,
            desc: '是否显示, 可通过 v-model 或 :visible.sync 实现可关闭的 Alert',
          },
          {
            name: 'title',
            type: 'String',
            values: null,
            default: null,
            desc: '标题',
          },
          {
            name: 'description',
            type: 'String',
            values: null,
            default: null,
            desc: '内容',
          },
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
            values: [...autoSizeValid.names, 'auto'],
            default: null,
            desc: '尺寸，预定义尺寸，或使用 font-size。',
          },
          {
            name: 'dashed',
            type: 'Boolean',
            values: null,
            default: false,
            desc: '是否虚线边框',
          },
          {
            name: 'radius',
            type: Boolean,
            values: null,
            default: false,
            desc: '是否圆角',
          },
          {
            name: 'icon',
            type: 'String',
            values: null,
            default: null,
            desc: '图标（未实现）',
          },
        ];
      },
    },
  };
  export default Alert;
</script>

<style scoped>

</style>
