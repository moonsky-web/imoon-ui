<template>
  <div>
    <DemoContainer
      label="ImDivider 分割线演示"
      :props="props"
      :slots="slots">
      <template #detail>
        ImDivider 是一个很简单的组件，用法也很简单，不提供多种颜色的切换
      </template>
    </DemoContainer>
  </div>
</template>
<script>
  import {ImDivider} from '../../packages/divider';

  export const Divider = {
    name: 'Divider',
    components: {ImDivider},
    computed: {
      props() {
        return [
          {
            name: 'dashed',
            type: Boolean,
            default: false,
            desc: '是否是虚线分割线',
          },
          {
            name: 'left',
            type: String,
            default: null,
            desc: '分割线左标签',
          },
          {
            name: 'center',
            type: String,
            default: null,
            desc: '分割线中标签',
          },
          {
            name: 'right',
            type: String,
            default: null,
            desc: '分割线右标签',
          },
        ];
      },
      slots() {
        return [
          {
            name: '--',
            desc: '默认左标签插槽（优先于 left prop）',
          },
          {
            name: 'left',
            desc: '左标签插槽（优先于默认插槽）',
          },
          {
            name: 'center',
            desc: '中标签插槽',
          },
          {
            name: 'right',
            desc: '右标签插槽',
          },
        ];
      },
    },
  };
  export default Divider;
</script>
<style lang="scss" scoped>
</style>