<template>
  <div class="demo-sub-item-container">
    <h5 class="demo-sub-item-title" v-if="title">{{title}}</h5>
    <div class="demo-sub-item-desc">
      <slot name="desc">
        <span v-if="desc">{{desc}}</span>
      </slot>
    </div>
    <div class="demo-sub-item-main">
      <slot/>
    </div>
  </div>
</template>
<script>
  export const DemoSubItem = {
    name: 'DemoSubItem',
    props: {
      title: String,
      desc: String,
    },
  };

  export default DemoSubItem;
</script>
<style lang="scss" scoped>
  .demo-sub-item-container {
    & + #{&} {
      margin-top: 12px;
    }
  }

  .demo-sub-item-title {
    padding: 0 16px;
    line-height: 32px;
  }

  .demo-sub-item-desc {
    padding: 0 12px;
    font-size: 12px;
    line-height: 28px;
  }

  .demo-sub-item-main {
    padding: 0 12px;
  }
</style>