<template>
  <div>
    <DemoItem label="基本示例">
      <div class="demo-padding-h-10">
        <div class="demo-padding-v-5">
          <ImButton
            v-for="(color) in colors" :key="color"
            :color="color">{{color||'default'}}
          </ImButton>
        </div>
      </div>
    </DemoItem>
    <DemoItem label="Icon 图标">
      <div>
        <ImButton><span style="vertical-align: middle"><ImIcon name="close"/></span>关闭</ImButton>
        <ImButton icon="close"></ImButton>
        <ImButton radius icon="folder-open">代开</ImButton>
      </div>
    </DemoItem>
    <DemoItem label="圆角按钮 :radius=true">
      <div class="demo-padding-10">
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
      <template #desc>
        幽灵按钮将默认背景色设置为透明，可用于深色背景上。
      </template>
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
    </DemoItem>
    <DemoItem label="路由和超链接">
      <template #desc>
        通过给 ImButton 组件设置 to 或 href 属性，将
      </template>
      <div>
        <DemoSubItem title="路由" desc="设置 to 属性">
          <ImButton v-for="color in colors" :key="color" :color="color" to="/alert/base">路由</ImButton>
        </DemoSubItem>
        <DemoSubItem title="超链接" desc="设置 href 属性">
          <ImButton v-for="color in colors" :key="color" :color="color" target="_blank" href="https://www.baidu.com">
            链接
          </ImButton>
        </DemoSubItem>
        <DemoSubItem title="普通按钮" desc="尺寸对比">
          <ImButton v-for="color in colors" :key="color" :color="color">按钮</ImButton>
        </DemoSubItem>
      </div>
    </DemoItem>
    <DemoItem label="loading">
      <div class="demo-padding-h-10" @click="onClickChange">
        <div class="demo-padding-v-5">
          下列按钮都绑定了同一事件（生成一个随机数）：{{currentValue}}
        </div>
        <div class="demo-padding-v-5">
          <ImButton
            v-for="(color, index) in colors" :key="color" @click="onClickChange(index)"
            :color="color">{{color||'default'}}
          </ImButton>
        </div>
        <div class="demo-padding-v-5">
          <ImButton
            v-for="(color, index) in colors" :key="color" @click="onClickChange(index)"
            :color="color" loading>{{color||'default'}}
          </ImButton>
        </div>
        <div class="demo-padding-v-5">
          <ImButton
            v-for="(color, index) in colors" :key="color" @click="onClickChange(index)"
            :color="color" text>{{color||'default'}}
          </ImButton>
        </div>
        <div class="demo-padding-v-5">
          <ImButton
            v-for="(color, index) in colors" :key="color" @click="onClickChange(index)"
            :color="color" text loading>{{color||'default'}}
          </ImButton>
        </div>
        <div class="demo-padding-v-5">
          <ImButton
            v-for="(color, index) in colors" :key="color" @click="onClickChange(index)"
            :color="color" radius>{{color||'default'}}
          </ImButton>
        </div>
        <div class="demo-padding-v-5">
          <ImButton
            v-for="(color, index) in colors" :key="color" @click="onClickChange(index)"
            :color="color" radius loading>{{color||'default'}}
          </ImButton>
        </div>
        <div class="demo-padding-v-5">
          <ImButton
            v-for="(color, index) in colors" :key="color" @click="onClickChange(index)"
            :color="color" radius dashed>{{color||'default'}}
          </ImButton>
        </div>
        <div class="demo-padding-v-5">
          <ImButton
            v-for="(color, index) in colors" :key="color" @click="onClickChange(index)"
            :color="color" radius dashed loading>{{color||'default'}}
          </ImButton>
        </div>
        <div class="demo-padding-v-5 button-bg">
          <ImButton
            v-for="(color, index) in colors" :key="color" @click="onClickChange(index)"
            :color="color" radius ghost>{{color||'default'}}
          </ImButton>
        </div>
        <div class="demo-padding-v-5 button-bg">
          <ImButton
            v-for="(color, index) in colors" :key="color" @click="onClickChange(index)"
            :color="color" radius ghost loading>{{color||'default'}}
          </ImButton>
        </div>
        <div class="demo-padding-v-5 button-bg">
          <ImButton
            v-for="(color, index) in colors" :key="color" @click="onClickChange(index)"
            :color="color" radius ghost dashed>{{color||'default'}}
          </ImButton>
        </div>
        <div class="demo-padding-v-5 button-bg">
          <ImButton
            v-for="(color, index) in colors" :key="color" @click="onClickChange(index)"
            :color="color" radius ghost dashed loading>{{color||'default'}}
          </ImButton>
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
  import {ImIcon} from '../../packages/icon';
  import {getRandomColor} from '../util';

  export const ButtonBase = {
    name: 'ButtonBase',
    components: {ImButton, ImIcon},
    data() {
      return {
        colors: [null, ...ImButton.props.color.validator.colors, '#123456'],
        randomColor: null,
        currentValue: null,
      };
    },
    methods: {
      onDisabledClick() {
        console.log('lllllllllllllllllll');
      },
      onRandomColor() {
        this.randomColor = getRandomColor();
      },
      onClickChange(index) {
        this.currentValue = Math.random();
        if (index === this.colors.length - 1) {
          this.colors[index] = getRandomColor().toUpperCase();
        }
      },
    },
    created() {
      this.onRandomColor();
      this.onClickChange();
    },
  };
  export default ButtonBase;
</script>
<style scoped lang="scss">
  .button-bg {
    background: #DDD;
  }
</style>
