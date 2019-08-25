<template>
  <div class="demo-item-style">
    <h4 class="demo-padding-bottom-10 demo-item-label" v-if="label">{{label}}</h4>
    <div class="demo-item-desc">
      <slot name="desc">{{desc}}</slot>
    </div>
    <div class="demo-item-content" ref="content" :class="{'keep-display-flex':!notFlex}">
      <slot></slot>
    </div>
    <div>
      <div class="demo-display-flex demo-item-expand">
        <div class="demo-flex-1 demo-align-left"></div>
        <div class="demo-flex-1 demo-align-center demo-item-pointer" @click="showCode=!showCode">
          <a class="demo-show-code">{{showCode?'隐藏':'查看'}}代码</a>
        </div>
        <div class="demo-flex-1 demo-align-right"></div>
      </div>
      <div v-show="showCode">
        <slot name="code"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export const DemoItem = {
    name: 'DemoItem',
    props: {
      label: String,
      desc: String,
      notFlex: Boolean,
    },
    computed: {
      currentPath() {
        return `#${this.$router.currentRoute.fullPath}`;
      },
    },
    data() {
      return {
        showCode: false,
      };
    },
    methods: {},
    created() {
    },
  };
  export default DemoItem;
</script>

<style scoped lang="scss">
  .demo-item-style {
    padding: 10px 20px 10px;
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

  .demo-display-flex {
    display: flex;
    padding: 6px 12px 0;
    /*fle*/
  }

  .demo-item-expand {
    margin-top: 12px;
    line-height: 38px;
  }

  .demo-flex-1 {
    width: 33.33%;
    border-top: 1px dashed transparent;
  }

  .demo-item-pointer {
    cursor: pointer;
    border-radius: 5px;

    &:hover {
      background: #f2f2f2;
    }
  }

  .demo-show-code {
    $current-color: #4169E1;
    $step: 12;

    padding: 0 5px;
    line-height: 24px;
    color: $current-color;
    border-bottom: 1px solid transparent;
    text-decoration: none;
    transition-duration: .3s;
    user-select: none;

    &:hover {
      color: lighten($current-color, $step);
      border-color: lighten($current-color, $step);
    }

    &:active {
      color: darken($current-color, $step);
      border-color: darken($current-color, $step);
    }
  }
</style>
