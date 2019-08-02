<template>
  <div>
    <ImInputItem>
      <span slot="prepend">标签</span>
    </ImInputItem>
  </div>
</template>

<script>
  /* eslint-disable */
  import {ImInputItem} from '../../packages/input-item';

  console.log(ImInputItem);

  export default {
    name: 'inputitemDemo',
    components: {ImInputItem},
  };
</script>

<style scoped>

</style>
