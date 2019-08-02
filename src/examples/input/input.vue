<template>
  <div>
    <imInput/>
    <imInput color="primary"/>
    <imInput color="#df83ac"/>
  </div>
</template>

<script>
  /* eslint-disable */
  import {ImInput} from '../../packages/input';
  import {ImButton} from '../../packages/button';

  export default {
    name: 'input.vue',
    components: {ImInput, ImButton},
  };
</script>

<style scoped>

</style>
