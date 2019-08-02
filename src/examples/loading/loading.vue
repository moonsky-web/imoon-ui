<template>
  <div>
    <ImButton @click="visible=true">显示</ImButton>
    <ImLoading @click="visible=false" :visible="visible"></ImLoading>
  </div>
</template>

<script>
  /* eslint-disable */
  import {ImButton} from '../../packages/button';
  import {ImLoading} from '../../packages/loading';

  export default {
    name: 'ImLoadingDemo',
    components: {ImButton, ImLoading},
    data(){
      return {
        visible: false
      }
    }
  };
</script>

<style scoped>

</style>
