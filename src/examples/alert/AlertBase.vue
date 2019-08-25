<template>
  <div>

    <DemoItem label="基本示例">
      <template #desc>
        这是一个绑定有生命周期的 Alert，课通过控制台查看
      </template>
      <div class="demo-flex-1">
        <ImAlert
          v-model="firstVisible"
          @onBeforeCreate="onBeforeCreate"
          @onCreating="onCreating"
          @onCreated="onCreated"
          @onCreate="onCreate"
          @onBeforeClose="onBeforeClose"
          @onClosing="onClosing"
          @onClose="onClose"
          @onClosed="onClosed"
        >这是一个基本使用示例
        </ImAlert>
      </div>
      <div class="demo-default-box">
        <ImButton @click="firstVisible=!firstVisible">
          {{firstVisible?'隐藏':'显示'}}
        </ImButton>
      </div>
    </DemoItem>

    <DemoItem label="带有标题示例">
      <ImAlert title="标题">这是一个带有标题的使用示例</ImAlert>
    </DemoItem>

    <DemoItem label="只设置 title">
      <ImAlert title="标题"/>
    </DemoItem>

    <DemoItem label="设置 title 和 description">
      <ImAlert title="标题" description="内容：今天的表演很精彩"/>
    </DemoItem>

    <DemoItem label="可控制显示或隐藏">
      <div class="demo-flex-1">
        <ImAlert :visible="switchVisible">可通过传入 visible 参数控制 Alert 的显示或隐藏</ImAlert>
      </div>
      <div class="demo-default-box">
        <ImButton @click="switchVisible=!switchVisible">
          {{switchVisible?'隐藏':'显示'}}
        </ImButton>
      </div>
    </DemoItem>

    <DemoItem label="通过 :visible.sync 控制显示关闭按钮">
      <div class="demo-flex-1">
        <ImAlert :visible.sync="closeable">可通过 :visible.sync="visibility" 设置可关闭警告</ImAlert>
      </div>
      <div class="demo-default-box">
        <ImButton @click="closeable=!closeable">
          {{closeable?'隐藏':'显示'}}
        </ImButton>
      </div>
    </DemoItem>

    <DemoItem label="通过 v-model 控制显示关闭按钮">
      <div class="demo-flex-1">
        <ImAlert v-model="closeableWithModel">可通过 v-model="visibility" 设置可关闭警告</ImAlert>
      </div>
      <div class="demo-default-box">
        <ImButton @click="closeableWithModel=!closeableWithModel">
          {{closeableWithModel?'隐藏':'显示'}}
        </ImButton>
      </div>
    </DemoItem>

    <DemoItem label="圆角">
      <div class="demo-flex-1">
        <ImAlert radius>设置属性 :radius="true"</ImAlert>
      </div>
    </DemoItem>

    <DemoItem label="虚线边框">
      <div class="demo-flex-1">
        <ImAlert dashed>设置属性 :dashed="true"</ImAlert>
      </div>
    </DemoItem>

    <DemoItem label="虚线边框 + 圆角">
      <div class="demo-flex-1">
        <ImAlert dashed radius>设置属性 :dashed="true" :radius="true"</ImAlert>
      </div>
    </DemoItem>
  </div>
</template>
<script>
  /* eslint-disable */
  import {ImButton} from '../../packages/button';
  import {ImAlert} from '../../packages/alert';

  export const AlertBase = {
    name: 'AlertBase',
    components: {ImAlert, ImButton},
    data() {
      return {
        firstVisible: true,
        switchVisible: true,
        closeable: true,
        closeableWithModel: true,
      };
    },
    methods: {
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

</style>
