<template>
  <div>
    <DemoItem label="size=lg">
      <ImAlert size="lg">size="lg"; 大</ImAlert>
    </DemoItem>

    <DemoItem label="size=md">
      <ImAlert size="md">size=md; size 默认即为 md 等同于不设置；</ImAlert>
    </DemoItem>

    <DemoItem label="size=sm">
      <ImAlert size="sm">size=sm; 小</ImAlert>
    </DemoItem>

    <DemoItem label="size=xs">
      <ImAlert size="xs">size=xs; 最小</ImAlert>
    </DemoItem>

    <DemoItem label="size=auto; 自定义尺寸">
      <ImAlert title="自定义尺寸" size="auto" style="font-size: 32px;">
        size="auto" style="font-size: 32px;"
      </ImAlert>
    </DemoItem>

    <DemoItem label="size=auto; 自定义尺寸">
      <div class="demo-flex-1">
        <ImAlert size="auto" style="font-size: 24px;" v-model="closeable">
          size="auto" style="font-size: 24px;"
        </ImAlert>
      </div>
      <div class="demo-default-box">
        <ImButton @click="closeable=!closeable">
          {{closeable?'隐藏':'显示'}}
        </ImButton>
      </div>
    </DemoItem>

    <DemoItem label="size=auto; 自定义尺寸">
      <ImAlert size="auto" style="font-size: 24px;" color="danger" v-model="closeable">
        size="auto" style="font-size: 24px;"
      </ImAlert>
    </DemoItem>

    <DemoItem label="size=auto; 自定义尺寸">
      <ImAlert size="auto" style="font-size: 24px;" color="#af59af" v-model="closeable">
        size="auto" style="font-size: 24px;"
      </ImAlert>
    </DemoItem>

  </div>
</template>
<script>
  import {ImAlert} from '../../packages/alert';
  import {ImButton} from '../../packages/button';

  export const AlertSize = {
    name: 'AlertSize',
    components: {ImAlert, ImButton},
    data() {
      return {
        closeable: true,
      };
    },
  };
  export default AlertSize;
</script>
<style scoped lang="scss"></style>
