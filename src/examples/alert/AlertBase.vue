<template>
  <div>

    <DemoItem label="基本示例">
      <div class="demo-flex-1">
        <ImAlert v-model="firstVisible">这是一个基本使用示例</ImAlert>
        <ImAlert
          v-model="firstVisible"
          v-for="color in colors"
          :key="color"
          :color="color">这是一个预定义颜色 [ {{color}} ] 的 ImAlert。
        </ImAlert>
      </div>
      <div class="demo-default-box">
        <ImButton @click="firstVisible=!firstVisible">
          {{firstVisible?'隐藏':'显示'}}
        </ImButton>
      </div>
    </DemoItem>

    <DemoItem label="带有标题">
      <template #desc>
        通过给 ImAlert 额外设置一个 title 属性用于设置标题。
        <p>
          <strong>注意：</strong>
          可能会影响内容显示的有三种方式，title、description 和默认 slot 都可能，接下来会一一展示。
        </p>
      </template>
      <ImAlert title="标题" color="danger">这是一个带有标题的使用示例</ImAlert>
    </DemoItem>

    <DemoItem label="分别设置 title、description 和默认 slot 演示">
      <div class="demo-width-full">
        <DemoSubItem title="只设置 title">
          <ImAlert
            v-model="attrVisible" :color="currentColor"
            title="标题：这是一个只设置 title 的 ImAlert。"/>
        </DemoSubItem>
        <DemoSubItem title="只设置 description">
          <ImAlert
            v-model="attrVisible" :color="currentColor"
            description="内容：这是一个只设置 description 的 ImAlert。"/>
        </DemoSubItem>
        <DemoSubItem title="只设置 default slot">
          <ImAlert v-model="attrVisible" :color="currentColor">
            内容：这是一个只设置默认插槽的 ImAlert。
          </ImAlert>
        </DemoSubItem>
        <DemoSubItem title="$ 设置 title 和 description">
          <ImAlert
            v-model="attrVisible" title="标题"
            :color="currentColor" description="内容：description"/>
        </DemoSubItem>
        <DemoSubItem title="$ 设置 title 和 default slot">
          <ImAlert
            v-model="attrVisible" title="标题"
            :color="currentColor">
            内容：同时设置 title 和默认插槽。
          </ImAlert>
        </DemoSubItem>
        <DemoSubItem title="$ 设置 description 和 default slot">
          <template #desc>
            <span class="demo-color-warn">
              <strong>注</strong>
              这个库所有可能会出现属性和插槽冲突的地方，都以插槽优先，因为插槽可以定义更多行为。如：
            </span>
          </template>
          <ImAlert
            v-model="attrVisible" description="内容：description"
            :color="currentColor">
            <span>
              内容：同时设置 description 和默认插槽，会以插槽优先。
            </span>
            <ImButton
              size="xs" :color="currentColor"
              @click="onCurrentColor">点一下试试
            </ImButton>
          </ImAlert>
        </DemoSubItem>
        <DemoSubItem title="# 设置 title、 description 和 default slot">
          <ImAlert
            v-model="attrVisible" title="标题"
            :color="currentColor" description="内容：description">
            内容：同时设置 description 和默认插槽，会以插槽优先。
          </ImAlert>
        </DemoSubItem>
      </div>
      <div>
        <ImButton :color="currentColor" block @click="onCurrentColor">切换颜色</ImButton>
        <ImButton :color="currentColor" block @click="attrVisible=!attrVisible">
          {{attrVisible?'隐藏':'显示'}}
        </ImButton>
      </div>
    </DemoItem>

    <DemoItem label="自定义颜色演示（同上）">
      <template #desc>
        这是一个可以自定义颜色的 ImAlert，通过给 color 属性设置 rgb 颜色色号自定义 ImAlert 的颜色，
        这里点击“切换颜色”会随机生成一个色号供查看。
      </template>
      <div class="demo-flex-1">
        <ImAlert v-model="customColorVisible" :color="customColor">
          这是一个随机生成颜色的示例，当前色值：{{customColor || 'null'}}
        </ImAlert>
      </div>
      <div class="demo-default-box">
        <ImButton :color="customColor" @click="onCustomColor" block>切换颜色</ImButton>
        <ImButton :color="customColor" @click="customColorVisible=!customColorVisible" block>
          {{customColorVisible?'隐藏':'显示'}}
        </ImButton>
      </div>
    </DemoItem>

    <DemoItem label="不同尺寸演示">
      <template #desc>
        不同尺寸 ImAlert 演示。
      </template>
      <div class="demo-flex-1">
        <ImAlert
          v-for="size in sizes"
          :key="size"
          v-model="sizeVisible"
          :size="size">这是一个基本使用示例, size="{{size}}"
        </ImAlert>
      </div>
      <div class="demo-default-box">
        <ImButton @click="sizeVisible=!sizeVisible" block>
          {{sizeVisible?'隐藏':'显示'}}
        </ImButton>
      </div>
    </DemoItem>
  </div>
</template>
<script>
  /* eslint-disable */
  import {ImButton} from '../../packages/button';
  import {ImAlert} from '../../packages/alert';
  import {autoColorValid, autoSizeValid} from '../../utils/validator';
  import {getRandomColor} from '../util';

  export const AlertBase = {
    name: 'AlertBase',
    components: {ImAlert, ImButton},
    data() {
      return {
        colors: autoColorValid.colors,
        sizes: autoSizeValid.sizes,

        currentColor: null,

        customColor: null,
        customColorVisible: true,

        sizeVisible: true,

        attrVisible: true,

        firstVisible: true,
        switchVisible: true,
        closeable: true,
        closeableWithModel: true,
      };
    },
    methods: {
      onCurrentColor() {
        this.currentColor = getRandomColor();
      },
      onCustomColor() {
        this.customColor = getRandomColor();
      },
      onBeforeCreate() {
        console.log('onBeforeCreate');
      },
      onCreating() {
        console.log('onCreating');
      },
      onCreate() {
        console.log('onCreate');
      },
      onCreated() {
        console.log('onCreated');
      },
      onBeforeClose() {
        console.log('onBeforeClose');
      },
      onClosing() {
        console.log('onClosing');
      },
      onClose() {
        console.log('onClose');
      },
      onClosed() {
        console.log('onClosed');
      },
    },
  };
  export default AlertBase;
</script>
<style scoped lang="scss">

  .demo-color-warn {
    color: #af6d1b;
  }

  .demo-alert-table {
    width: 100%;
    border: 1px solid #DDD;
    border-collapse: collapse;

    & th,
    & td {
      border: 1px solid #DDD;
    }

    & th {
      padding: 0 12px;
    }

    & td {
      padding: 12px;
    }
  }
</style>
