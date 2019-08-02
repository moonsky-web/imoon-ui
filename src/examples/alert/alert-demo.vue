<template>
  <div>
    <div class="demo-gaps display-flex">
      <div class="flex-grow-1 padding-10">
        <ImAlert title="天气">今天天气很不错</ImAlert>
      </div>
      <div class="flex-grow-1 padding-10">
        <ImAlert dashed>今天天气很不错</ImAlert>
      </div>
      <div class="flex-grow-1 padding-10">
        <ImAlert radius>今天天气很不错</ImAlert>
      </div>
      <div class="flex-grow-1 padding-10">
        <ImAlert radius dashed>今天天气很不错</ImAlert>
      </div>
    </div>
    <div class="demo-gaps display-flex">
      <div class="flex-grow-1 padding-10">
        <ImAlert color="base">今天天气很不错</ImAlert>
      </div>
      <div class="flex-grow-1 padding-10">
        <ImAlert color="base" dashed>今天天气很不错</ImAlert>
      </div>
      <div class="flex-grow-1 padding-10">
        <ImAlert color="base" radius>今天天气很不错</ImAlert>
      </div>
      <div class="flex-grow-1 padding-10">
        <ImAlert color="base" radius dashed>今天天气很不错</ImAlert>
      </div>
    </div>
    <div class="demo-gaps display-flex">
      <div class="flex-grow-1 padding-10">
        <ImAlert color="info">今天天气很不错</ImAlert>
      </div>
      <div class="flex-grow-1 padding-10">
        <ImAlert color="info" dashed>今天天气很不错</ImAlert>
      </div>
      <div class="flex-grow-1 padding-10">
        <ImAlert color="info" radius>今天天气很不错</ImAlert>
      </div>
      <div class="flex-grow-1 padding-10">
        <ImAlert color="info" radius dashed>今天天气很不错</ImAlert>
      </div>
    </div>
    <div class="demo-gaps display-flex">
      <div class="flex-grow-1 padding-10">
        <ImAlert color="warn">今天天气很不错</ImAlert>
      </div>
      <div class="flex-grow-1 padding-10">
        <ImAlert color="warn" dashed>今天天气很不错</ImAlert>
      </div>
      <div class="flex-grow-1 padding-10">
        <ImAlert color="warn" radius>今天天气很不错</ImAlert>
      </div>
      <div class="flex-grow-1 padding-10">
        <ImAlert color="warn" radius dashed>今天天气很不错</ImAlert>
      </div>
    </div>
    <div class="demo-gaps display-flex">
      <div class="flex-grow-1 padding-10">
        <ImAlert color="danger">今天天气很不错</ImAlert>
      </div>
      <div class="flex-grow-1 padding-10">
        <ImAlert color="danger" dashed>今天天气很不错</ImAlert>
      </div>
      <div class="flex-grow-1 padding-10">
        <ImAlert color="danger" radius>今天天气很不错</ImAlert>
      </div>
      <div class="flex-grow-1 padding-10">
        <ImAlert color="danger" radius dashed>今天天气很不错</ImAlert>
      </div>
    </div>
    <div class="demo-gaps display-flex">
      <div class="flex-grow-1 padding-10">
        <ImAlert color="#df83ac">今天天气很不错</ImAlert>
      </div>
      <div class="flex-grow-1 padding-10">
        <ImAlert color="#df83ac" dashed>今天天气很不错</ImAlert>
      </div>
      <div class="flex-grow-1 padding-10">
        <ImAlert color="#df83ac" radius>今天天气很不错</ImAlert>
      </div>
      <div class="flex-grow-1 padding-10">
        <ImAlert color="#df83ac" radius dashed>今天天气很不错</ImAlert>
      </div>
    </div>
    <div class="demo-gaps display-flex">
      <div class="flex-grow-1 padding-10">
        <ImAlert size="lg" color="#df83ac">今天天气很不错</ImAlert>
      </div>
      <div class="flex-grow-1 padding-10">
        <ImAlert size="md" color="danger" dashed>今天天气很不错</ImAlert>
      </div>
      <div class="flex-grow-1 padding-10">
        <ImAlert size="sm" color="warn" radius>今天天气很不错</ImAlert>
      </div>
      <div class="flex-grow-1 padding-10">
        <ImAlert size="xs" color="info" radius dashed>今天天气很不错</ImAlert>
      </div>
    </div>
    <div class="demo-gaps display-flex">
      <div class="flex-grow-1 padding-10">
        <ImAlert style="font-size: 28px;" color="#df83ac">今天天气很不错</ImAlert>
      </div>
      <div class="flex-grow-1 padding-10">
        <ImAlert style="font-size: 20px;" color="danger" dashed>今天天气很不错</ImAlert>
      </div>
    </div>
    <div class="demo-gaps display-flex">
      <div class="flex-grow-1 padding-10">
        <ImAlert style="font-size: 24px;" color="warn" radius>今天天气很不错</ImAlert>
      </div>
      <div class="flex-grow-1 padding-10">
        <ImAlert style="font-size: 28px;" color="info" radius dashed>今天天气很不错</ImAlert>
      </div>
    </div>
    <div class="demo-gaps display-flex">
      <div class="flex-grow-1 padding-10">
        <ImAlert color="warn" radius>
          今天天气很不错
          <i slot="close">知道了</i>
        </ImAlert>
      </div>
    </div>
  </div>
</template>
<script>
  /* eslint-disable */
  import {ImAlert} from '../../packages/alert';

  export default {
    name: 'ImAlertDemo',
    components: {ImAlert},
  };
</script>
<style>
  .display-flex {
    display: flex;
  }

  .flex-grow-1 {
    flex-grow: 1;
  }

  .padding-10 {
    padding: 5px;
  }
</style>
