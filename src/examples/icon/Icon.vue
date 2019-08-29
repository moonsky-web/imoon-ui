<template>
  <DemoContainer
    label="ImIcon 演示"
    :props="props">
    <template #detail>
      ImIcon 图标引用自 <a target="_blank" href="https://ant.design/index-cn">Ant Design</a> 图标库
    </template>
  </DemoContainer>
</template>

<script>
  import {ImButton} from '../../packages/button';
  import {ImIcon} from '../../packages/icon';

  export const Icon = {
    name: 'Icon',
    components: {ImIcon, ImButton},
    computed: {
      props() {
        return [
          {name: 'name', type: String},
        ];
      },
    },
  };
  export default Icon;
</script>

<style scoped>

</style>
