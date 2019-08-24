<template>
  <div v-if="data">
    <h4 v-if="label" class="demo-api-sub-title">{{label}}</h4>
    <ApiTable :data="data" :columns="columns"/>
  </div>
</template>
<script>
  import {ApiTable} from './ApiTable';

  export const ApiItem = {
    name: 'ApiItem',
    components: {ApiTable},
    props: {
      label: String,
      data: {
        type: Array,
        default() {
          return [];
        },
      },
      columns: Array,
    },
  };
  export default ApiItem;
</script>
<style lang="scss">
  .demo-api-sub-title {
    padding: 0 12px;
    line-height: 42px;
  }
</style>