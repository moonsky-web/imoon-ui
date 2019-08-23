<template>
  <div>
    <DemoItem label="基本输入框">
      <div class="demo-padding-10">
        <div class="demo-margin-v-10">
          <ImInput/>
          <ImInput placeholder="placeholder"/>
          <ImInput placeholder="color=warn" color="warn"/>
        </div>
      </div>
    </DemoItem>

    <DemoItem label="圆角边框输入框 :radius=true">
      <div class="demo-padding-10">
        <div class="demo-margin-v-10">
          <ImInput radius placeholder="radius color=info" color="info"/>
          <ImInput radius placeholder="radius color=success" color="success"/>
          <ImInput radius placeholder="radius color=danger" color="danger"/>
        </div>
      </div>
    </DemoItem>

    <DemoItem label="幽灵输入框 :ghost=true">
      <div class="demo-padding-10 input-bg">
        <div class="demo-margin-v-10">
          <ImInput ghost color="danger" placeholder="ghost color=danger"/>
          <ImInput ghost color="success" placeholder="ghost color=success"/>
          <ImInput ghost color="#5e08ec" placeholder="ghost color=#5e08ec"/>
        </div>
      </div>
    </DemoItem>

    <DemoItem label="可编辑性">
      <div>
        <div class="demo-padding-10">
          <ImInput v-model="value"/>
        </div>
        <div class="demo-padding-10">
          <ImInput viewonly value="viewonly"/>
          <ImInput viewonly value="readonly"/>
          <ImInput viewonly value="disabled"/>
        </div>
        <div class="demo-padding-10">
          <ImInput v-model="value" viewonly color="danger" placeholder="viewonly color=danger"/>
          <ImInput v-model="value" readonly color="success" placeholder="readonly color=success"/>
          <ImInput v-model="value" disabled color="#5e08ec" placeholder="disabled color=#5e08ec"/>
        </div>
        <div class="demo-padding-10">
          <ImInput v-model="value" viewonly color="danger" placeholder="ghost color=danger"/>
          <ImInput v-model="value" readonly color="success" placeholder="ghost color=success"/>
          <ImInput v-model="value" disabled color="#5e08ec" placeholder="ghost color=#5e08ec"/>
        </div>
        <div class="demo-padding-10 input-bg">
          <ImInput v-model="value" viewonly ghost color="danger" placeholder="ghost color=danger"/>
          <ImInput v-model="value" readonly ghost color="success" placeholder="ghost color=success"/>
          <ImInput v-model="value" disabled ghost color="#5e08ec" placeholder="ghost color=#5e08ec"/>
        </div>
        <div class="demo-padding-10 input-bg">
          <ImInput v-model="value" viewonly ghost color="#34fa50" placeholder="ghost color=danger"/>
          <ImInput v-model="value" readonly ghost color="success" placeholder="ghost color=success"/>
          <ImInput v-model="value" disabled ghost color="#5e08ec" placeholder="ghost color=#5e08ec"/>
        </div>
      </div>
    </DemoItem>

  </div>
</template>
<script>
  import {ImInput} from '../../packages/input';

  export const InputBase = {
    name: 'InputBase',
    components: {ImInput},
    data() {
      return {
        value: '可编辑性输入框值',
      };
    },
  };
  export default InputBase;
</script>
<style scoped lang="scss">
  .input-bg {
    background: #DDD;
  }
</style>