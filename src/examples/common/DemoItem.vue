<template>
  <div class="demo-item-style">
    <h4 class="demo-padding-bottom-10 demo-item-label" v-if="label">{{label}}</h4>
    <div class="demo-item-desc">
      <slot name="desc">{{desc}}</slot>
    </div>
    <div class="demo-item-content" ref="content" :class="{'keep-display-flex':!nonFlex}">
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
      desc: String,
      nonFlex: Boolean,
    },
    methods: {},
  };
  export default DemoItem;
</script>

<style scoped lang="scss">
  .demo-item-style {
    padding: 10px 20px 20px;
    margin: 30px 0;
    border-radius: 8px;
    box-shadow: 0 0 6px #ccc;
    transition-duration: .3s;

    &:hover, &:focus-within {
      box-shadow: 0 0 12px #aaa;
    }
  }

  .demo-item-label {
    padding: 0 10px;
    line-height: 42px;
    margin-bottom: 20px;

    &::after {
      content: '';
      margin: 0 auto;
      display: block;
      width: 100%;
      border-bottom: 1px solid #aaa;
    }
  }

  .demo-item-content {
    padding: 0 8px;
  }

  .demo-item-desc {
    margin-bottom: 18px;
    padding: 0 12px;
    line-height: 24px;
    font-size: 14px;
    color: #595959;
  }
</style>
