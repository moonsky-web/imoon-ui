<template>
  <div>
    <DemoItem label="color=danger">
      <ImAlert color="danger">这是一个 color="danger" 的 ImAlert</ImAlert>
    </DemoItem>
    <DemoItem label="color=info">
      <ImAlert color="info">这是一个 color="info" 的 ImAlert</ImAlert>
    </DemoItem>
    <DemoItem label="color=base">
      <ImAlert color="base">这是一个 color="base" 的 ImAlert</ImAlert>
    </DemoItem>
    <DemoItem label="color=warn">
      <ImAlert color="warn">这是一个 color="warn" 的 ImAlert</ImAlert>
    </DemoItem>
    <DemoItem label="color=primary">
      <ImAlert color="primary" title="color 设置为主色等同于不设置">
        这是一个 color="primary" 的 ImAlert
      </ImAlert>
    </DemoItem>
    <DemoItem label="color=#259741; 用 RGB 色号自定义 ImAlert 颜色">
      <ImAlert color="#259741">
        这是一个 color="#259741" 的 ImAlert
      </ImAlert>
    </DemoItem>
    <DemoItem label="color=#259741; 用 RGB 色号自定义 ImAlert 颜色">
      <ImAlert color="#259741" radius>
        这是一个 color="#259741" 的 ImAlert, :radius="true"
      </ImAlert>
    </DemoItem>
    <DemoItem label="color=rgb(124,159,124); 用 RGB 色号自定义 ImAlert 颜色">
      <ImAlert color="rgb(124,159,124)">
        这是一个 color="rgb(124,159,124)" 的 ImAlert
      </ImAlert>
    </DemoItem>
    <DemoItem label="color=rgb(124,159,124); 用 RGB 色号自定义 ImAlert 颜色">
      <ImAlert color="rgb(124,159,124)" dashed>
        这是一个 color="rgb(124,159,124)" 的 ImAlert,  :dashed="true"
      </ImAlert>
    </DemoItem>
    <DemoItem label="color=danger">
      <ImAlert color="danger" dashed radius>
        这是一个 color="danger" 的 ImAlert
      </ImAlert>
    </DemoItem>
  </div>
</template>
<script>
  import {ImAlert} from '../../packages/alert';
  import {ImButton} from '../../packages/button';

  export const AlertColor = {
    name: 'AlertColor',
    components: {ImAlert, ImButton},
  };
  export default AlertColor;
</script>
<style scoped lang="scss"></style>
