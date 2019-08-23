<template>
  <div>
    <DemoItem label="基本示例 1">
      <ImButton>Button</ImButton>
      <ImButton color="primary">Primary</ImButton>
      <ImButton color="base">Base</ImButton>
      <ImButton color="success">Success</ImButton>
      <ImButton color="info">Info</ImButton>
      <ImButton color="warn">Warn</ImButton>
      <ImButton color="danger">Danger</ImButton>
      <ImButton color="#bace64">#bace64</ImButton>
    </DemoItem>
    <DemoItem label="基本示例 2">
      <ImButton>按钮</ImButton>
      <ImButton color="primary">按钮</ImButton>
      <ImButton color="base">按钮</ImButton>
      <ImButton color="success">按钮</ImButton>
      <ImButton color="info">按钮</ImButton>
      <ImButton color="warn">按钮</ImButton>
      <ImButton color="danger">按钮</ImButton>
      <ImButton color="#bace64">按钮</ImButton>
    </DemoItem>
    <DemoItem label="圆角按钮 :radius=true">
      <ImButton radius>按钮</ImButton>
      <ImButton radius color="primary">按钮</ImButton>
      <ImButton radius color="base">按钮</ImButton>
      <ImButton radius color="success">按钮</ImButton>
      <ImButton radius color="info">按钮</ImButton>
      <ImButton radius color="warn">按钮</ImButton>
      <ImButton radius color="danger">按钮</ImButton>
      <ImButton radius color="#bace64">按钮</ImButton>
    </DemoItem>
    <DemoItem label="外边框按钮 :outline=true">
      <div class="demo-padding-10 button-bg">
        <ImButton outline>按钮</ImButton>
        <ImButton outline color="primary">按钮</ImButton>
        <ImButton outline color="base">按钮</ImButton>
        <ImButton outline color="success">按钮</ImButton>
        <ImButton outline color="info">按钮</ImButton>
        <ImButton outline color="warn">按钮</ImButton>
        <ImButton outline color="danger">按钮</ImButton>
        <ImButton outline color="#bace64">按钮</ImButton>
      </div>
    </DemoItem>
    <DemoItem label="虚线边框按钮 :dashed=true">
      <div class="demo-padding-10 button-bg">
        <ImButton dashed>按钮</ImButton>
        <ImButton dashed color="primary">按钮</ImButton>
        <ImButton dashed color="base">按钮</ImButton>
        <ImButton dashed color="success">按钮</ImButton>
        <ImButton dashed color="info">按钮</ImButton>
        <ImButton dashed color="warn">按钮</ImButton>
        <ImButton dashed color="danger">按钮</ImButton>
        <ImButton dashed color="#bace64">按钮</ImButton>
      </div>
    </DemoItem>
    <DemoItem label="幽灵按钮 :ghost=true">
      <div>
        <div class="demo-padding-10 button-bg">
          <ImButton ghost>按钮</ImButton>
          <ImButton ghost color="primary">按钮</ImButton>
          <ImButton ghost color="base">按钮</ImButton>
          <ImButton ghost color="success">按钮</ImButton>
          <ImButton ghost color="info">按钮</ImButton>
          <ImButton ghost color="warn">按钮</ImButton>
          <ImButton ghost color="danger">按钮</ImButton>
          <ImButton ghost color="#bace64">按钮</ImButton>
        </div>
        <div class="demo-padding-10 button-bg">
          <ImButton ghost>按钮</ImButton>
          <ImButton ghost dashed color="primary">按钮</ImButton>
          <ImButton ghost dashed color="base">按钮</ImButton>
          <ImButton ghost outline color="success">按钮</ImButton>
          <ImButton ghost outline color="info">按钮</ImButton>
          <ImButton ghost radius color="warn">按钮</ImButton>
          <ImButton ghost radius color="danger">按钮</ImButton>
          <ImButton ghost color="#bace64">按钮</ImButton>
        </div>
      </div>
    </DemoItem>
    <DemoItem label="不同尺寸">
      <div>
        <ImButton>按钮</ImButton>
        <ImButton size="lg">按钮</ImButton>
        <ImButton size="md">按钮</ImButton>
        <ImButton size="sm">按钮</ImButton>
        <ImButton size="xs">按钮</ImButton>
      </div>
    </DemoItem>
    <DemoItem label="禁用">
      <div>
        <ImButton disabled to="#/button/base" @click="onDisabledClick">按钮</ImButton>
        <ImButton disabled size="lg">按钮</ImButton>
        <ImButton disabled size="md">按钮</ImButton>
        <ImButton disabled size="sm">按钮</ImButton>
        <ImButton disabled size="xs" @click="onDisabledClick">按钮</ImButton>
      </div>
    </DemoItem>
    <DemoItem label="自定义颜色">
      <div>
        <ImButton color="#567">按钮</ImButton>
        <ImButton color="#556677">按钮</ImButton>
        <ImButton color="#ac94de">按钮</ImButton>
        <ImButton color="#aa5511">按钮</ImButton>
        <ImButton color="#cafb09" style="color:#000;">按钮</ImButton>
      </div>
    </DemoItem>
    <DemoItem label="自定义尺寸">
      <div>
        <ImButton color="danger" size="auto" style="font-size: 24px;">按钮</ImButton>
        <ImButton color="warn" size="auto" style="font-size: 24px;">24px</ImButton>
        <ImButton color="info" size="auto" style="font-size: 20px;">20px</ImButton>
        <ImButton color="#bace64" size="auto" style="font-size: 32px;">32px</ImButton>
      </div>
    </DemoItem>
  </div>
</template>
<script>
  /* eslint-disable */
  import {ImButton} from '../../packages/button';

  export const ButtonBase = {
    name: 'ButtonBase',
    components: {ImButton},
    data() {
      return {};
    },
    methods: {
      onDisabledClick() {
        console.log('lllllllllllllllllll');
      },
    },
  };
  export default ButtonBase;
</script>
<style scoped lang="scss">
  .button-bg {
    background: #DDD;
  }
</style>
