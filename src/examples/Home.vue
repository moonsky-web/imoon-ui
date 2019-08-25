<template>
  <div class="home">
    <div style="padding: 20px;">
      <div>选择一个，查看演示</div>
      <div>支付宝开源图表工具：http://antv.alipay.com/zh-cn/index.html</div>
    </div>
  </div>
</template>
<script>
  /* eslint-disable */
  import {ImButton} from '../packages/button';

  export const Home = {
    name: 'ImHome',
    components: {ImButton},
  };
  export default Home;
</script>
<style scoped lang="scss">
  .outer {
    padding: 20px;
    background: teal;
  }

  .inner {
    padding: 20px;
    background: #9A6E3A;
  }

  .target {
    display: inline-block;
    padding: 10px 15px;
    background: #07A;
    color: #FFF;
    border: 5px solid #000;
    cursor: pointer;
    transition-duration: .3s;

    &:hover {
      background: lighten(#07A, 6);
    }

    &:active {
      background: darken(#07A, 6);
    }
  }

  .default-gap {
    height: 20px;
  }
</style>
