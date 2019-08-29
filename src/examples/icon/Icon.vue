<template>
  <DemoContainer :props="props">
    <div slot="detail">
      ImIcon 演示
    </div>
  </DemoContainer>
</template>

<script>
  import {ImIcon} from '../../packages/icon';

  export const Icon = {
    name: 'Icon',
    components: {ImIcon},
    computed: {
      props() {
        return [];
      },
    },
  };
  export default Icon;
</script>

<style scoped>

</style>
