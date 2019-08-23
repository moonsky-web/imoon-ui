<template>
  <div style="padding: 10px 0;">
    <h4 class="demo-padding-bottom-10" v-if="label">{{label}}</h4>
    <div>
      <slot name="info">{{info}}</slot>
    </div>
    <div class="keep-display-flex">
      <slot></slot>
    </div>
    <div>
      <slot name="code"></slot>
    </div>
  </div>
</template>

<script>
  export const DemoItem = {
    name: 'DemoItem',
    props: {
      label: String,
      info: String,
    },
  };
  export default DemoItem;
</script>

<style scoped>

</style>
