<template>
  <div>
    <DemoItem label="基本示例 1">
      <div>
        <div class="demo-margin-v-10">
          <ImButton>Button</ImButton>
          <ImButton color="primary">Primary</ImButton>
          <ImButton color="base">Base</ImButton>
          <ImButton color="success">Success</ImButton>
        </div>
        <div class="demo-margin-v-10">
          <ImButton color="info">Info</ImButton>
          <ImButton color="warn">Warn</ImButton>
          <ImButton color="danger">Danger</ImButton>
          <ImButton color="#bace64">#bace64</ImButton>
        </div>
      </div>
    </DemoItem>
    <DemoItem label="基本示例 2">
      <div>
        <div class="demo-margin-v-10">
          <ImButton>主色按钮</ImButton>
          <ImButton color="primary">主色按钮</ImButton>
          <ImButton color="base">基础按钮</ImButton>
          <ImButton color="success">成功按钮</ImButton>
        </div>
        <div class="demo-margin-v-10">
          <ImButton color="info">信息按钮</ImButton>
          <ImButton color="warn">警告按钮</ImButton>
          <ImButton color="danger">危险按钮</ImButton>
          <ImButton color="#bace64">色号按钮</ImButton>
        </div>
      </div>
    </DemoItem>
    <DemoItem label="文本">
      <div>
        <div class="demo-margin-v-10">
          <ImButton text>Button</ImButton>
          <ImButton text color="primary">Primary</ImButton>
          <ImButton text color="base">Base</ImButton>
          <ImButton text color="success">Success</ImButton>
        </div>
        <div class="demo-margin-v-10">
          <ImButton text color="info">Info</ImButton>
          <ImButton text color="warn">Warn</ImButton>
          <ImButton text color="danger">Danger</ImButton>
          <ImButton text color="#bace64">#bace64</ImButton>
        </div>
        <div class="demo-margin-v-10">
          <ImButton text disabled>Info</ImButton>
          <ImButton text disabled color="warn">Warn</ImButton>
          <ImButton text disabled color="danger">Danger</ImButton>
          <ImButton text disabled color="#bace64">#bace64</ImButton>
        </div>
      </div>
    </DemoItem>
    <DemoItem label="路由和超链接">
      <template #desc>
        通过给 ImButton 组件设置 to 或 href 属性，将
      </template>
      <div>
        <DemoSubItem title="路由" desc="设置 to 属性">
          <ImButton color="info" to="/alert/base">To Alert</ImButton>
        </DemoSubItem>
        <DemoSubItem title="超链接" desc="设置 href 属性">
          <ImButton color="info" target="_blank" href="https://www.baidu.com">To Baidu</ImButton>
        </DemoSubItem>
      </div>
    </DemoItem>
    <DemoItem label="loading">
      <div>
        <div class="demo-padding-v-5">
          <ImButton @click="onAlert">弹窗</ImButton>
          <ImButton @click="onAlert" loading>弹窗</ImButton>
          <ImButton @click="onAlert" color="danger">弹窗</ImButton>
          <ImButton @click="onAlert" color="danger" loading>弹窗</ImButton>
          <ImButton @click="onAlert" color="#123456">弹窗</ImButton>
          <ImButton @click="onAlert" color="#123456" loading>弹窗</ImButton>
          <ImButton @click="onAlert" color="#123456" text>弹窗</ImButton>
          <ImButton @click="onAlert" color="#123456" text loading>弹窗</ImButton>
        </div>
        <div class="demo-padding-v-5">
          <ImButton @click="onAlert" color="warn" text>弹窗</ImButton>
          <ImButton @click="onAlert" color="warn" text loading>弹窗</ImButton>
          <ImButton @click="onAlert" color="info">弹窗</ImButton>
          <ImButton @click="onAlert" color="info" loading>弹窗</ImButton>
          <ImButton @click="onAlert" color="base" text>弹窗</ImButton>
          <ImButton @click="onAlert" color="base" text loading>弹窗</ImButton>
          <ImButton @click="onAlert" color="#f59926" text>弹窗</ImButton>
          <ImButton @click="onAlert" color="#f59926" text loading>弹窗</ImButton>
        </div>
      </div>
    </DemoItem>
    <DemoItem label="圆角按钮 :radius=true">
      <div>
        <div class="demo-margin-v-10">
          <ImButton radius>主色按钮</ImButton>
          <ImButton radius color="primary">主色按钮</ImButton>
          <ImButton radius color="base">基础按钮</ImButton>
          <ImButton radius color="success">成功按钮</ImButton>
        </div>
        <div class="demo-margin-v-10">
          <ImButton radius color="info">信息按钮</ImButton>
          <ImButton radius color="warn">警告按钮</ImButton>
          <ImButton radius color="danger">危险按钮</ImButton>
          <ImButton radius color="#bace64">色号按钮</ImButton>
        </div>
      </div>
    </DemoItem>
    <DemoItem label="外边框按钮 :outline=true">
      <div class="demo-padding-10 button-bg">
        <div class="demo-margin-v-10">
          <ImButton outline>主色按钮</ImButton>
          <ImButton outline color="primary">主色按钮</ImButton>
          <ImButton outline color="base">基础按钮</ImButton>
          <ImButton outline color="success">成功按钮</ImButton>
        </div>
        <div class="demo-margin-v-10">
          <ImButton outline color="info">信息按钮</ImButton>
          <ImButton outline color="warn">警告按钮</ImButton>
          <ImButton outline color="danger">危险按钮</ImButton>
          <ImButton outline color="#bace64">色号按钮</ImButton>
        </div>
      </div>
    </DemoItem>
    <DemoItem label="虚线边框按钮 :dashed=true">
      <div class="demo-padding-10 button-bg">
        <div class="demo-margin-v-10">
          <ImButton dashed>主色按钮</ImButton>
          <ImButton dashed color="primary">主色按钮</ImButton>
          <ImButton dashed color="base">基础按钮</ImButton>
          <ImButton dashed color="success">成功按钮</ImButton>
        </div>
        <div class="demo-margin-v-10">
          <ImButton dashed color="info">信息按钮</ImButton>
          <ImButton dashed color="warn">警告按钮</ImButton>
          <ImButton dashed color="danger">危险按钮</ImButton>
          <ImButton dashed color="#bace64">色号按钮</ImButton>
        </div>
      </div>
    </DemoItem>
    <DemoItem label="幽灵按钮 :ghost=true">
      <div>
        <div class="demo-padding-10 button-bg">
          <div class="demo-margin-v-10">
            <ImButton ghost>主色按钮</ImButton>
            <ImButton ghost color="primary">主色按钮</ImButton>
            <ImButton ghost color="base">基础按钮</ImButton>
            <ImButton ghost color="success">成功按钮</ImButton>
          </div>
          <div class="demo-margin-v-10">
            <ImButton ghost color="info">信息按钮</ImButton>
            <ImButton ghost color="warn">警告按钮</ImButton>
            <ImButton ghost color="danger">危险按钮</ImButton>
            <ImButton ghost color="#bace64">色号按钮</ImButton>
          </div>
        </div>
      </div>
    </DemoItem>
    <DemoItem label="幽灵按钮 :ghost=true; 应用多样式">
      <div>
        <div class="demo-padding-10 button-bg">
          <div class="demo-margin-v-10">
            <ImButton ghost>主色按钮</ImButton>
            <ImButton ghost dashed color="primary">主色按钮</ImButton>
            <ImButton ghost dashed color="base">基础按钮</ImButton>
            <ImButton ghost outline color="success">成功按钮</ImButton>
          </div>
          <div class="demo-margin-v-10">
            <ImButton ghost outline color="info">信息按钮</ImButton>
            <ImButton ghost radius color="warn">警告按钮</ImButton>
            <ImButton ghost radius color="danger">危险按钮</ImButton>
            <ImButton ghost color="#bace64">色号按钮</ImButton>
          </div>
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
        <ImButton @click="onRandomColor" :color="randomColor">随机生成颜色: {{randomColor}}</ImButton>
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
  import {getRandomColor} from '../util';

  export const ButtonBase = {
    name: 'ButtonBase',
    components: {ImButton},
    data() {
      return {
        randomColor: null,
      };
    },
    methods: {
      onDisabledClick() {
        console.log('lllllllllllllllllll');
      },
      onRandomColor() {
        this.randomColor = getRandomColor();
      },
      onAlert() {
        alert('你点击了弹窗');
      },
    },
    created() {
      this.onRandomColor();
    },
  };
  export default ButtonBase;
</script>
<style scoped lang="scss">
  .button-bg {
    background: #DDD;
  }
</style>
