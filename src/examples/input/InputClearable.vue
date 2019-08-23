<template>
  <div>
    <DemoItem label="基本输入框">
      <div class="demo-padding-10">
        <div class="demo-margin-v-10">
          <ImInputClearable/>
          <ImInputClearable placeholder="placeholder"/>
          <ImInputClearable placeholder="color=warn" color="warn"/>
        </div>
      </div>
    </DemoItem>

    <DemoItem label="圆角边框输入框 :radius=true">
      <div class="demo-padding-10">
        <div class="demo-margin-v-10">
          <ImInputClearable radius placeholder="radius color=info" color="info"/>
          <ImInputClearable radius placeholder="radius color=success" color="success"/>
          <ImInputClearable radius placeholder="radius color=danger" color="danger"/>
        </div>
      </div>
    </DemoItem>

    <DemoItem label="幽灵输入框 :ghost=true">
      <div class="demo-padding-10 input-bg">
        <div class="demo-margin-v-10">
          <ImInputClearable ghost color="danger" placeholder="ghost color=danger"/>
          <ImInputClearable ghost color="success" placeholder="ghost color=success"/>
          <ImInputClearable ghost color="#5e08ec" placeholder="ghost color=#5e08ec"/>
        </div>
      </div>
    </DemoItem>

    <DemoItem label="可编辑性">
      <div>
        <div class="demo-padding-10">
          <ImInputClearable v-model="value"/>
        </div>
        <div class="demo-padding-10">
          <ImInputClearable viewonly value="viewonly"/>
          <ImInputClearable viewonly value="readonly"/>
          <ImInputClearable viewonly value="disabled"/>
        </div>
        <div class="demo-padding-10">
          <ImInputClearable v-model="value" viewonly color="danger" placeholder="viewonly color=danger"/>
          <ImInputClearable v-model="value" readonly color="success" placeholder="readonly color=success"/>
          <ImInputClearable v-model="value" disabled color="#5e08ec" placeholder="disabled color=#5e08ec"/>
        </div>
        <div class="demo-padding-10">
          <ImInputClearable v-model="value" viewonly color="danger" placeholder="ghost color=danger"/>
          <ImInputClearable v-model="value" readonly color="success" placeholder="ghost color=success"/>
          <ImInputClearable v-model="value" disabled color="#5e08ec" placeholder="ghost color=#5e08ec"/>
        </div>
        <div class="demo-padding-10 input-bg">
          <ImInputClearable v-model="value" viewonly ghost color="danger" placeholder="ghost color=danger"/>
          <ImInputClearable v-model="value" readonly ghost color="success" placeholder="ghost color=success"/>
          <ImInputClearable v-model="value" disabled ghost color="#5e08ec" placeholder="ghost color=#5e08ec"/>
        </div>
        <div class="demo-padding-10 input-bg">
          <ImInputClearable v-model="value" viewonly ghost color="#34fa50" placeholder="ghost color=danger"/>
          <ImInputClearable v-model="value" readonly ghost color="success" placeholder="ghost color=success"/>
          <ImInputClearable v-model="value" disabled ghost color="#5e08ec" placeholder="ghost color=#5e08ec"/>
        </div>
      </div>
    </DemoItem>

  </div>
</template>
<script>
  import {ImInputClearable} from '../../packages/input';

  export const InputClearable = {
    name: 'InputClearable',
    components: {ImInputClearable},
    data() {
      return {
        value: '可编辑性输入框值',
      };
    },
  };
  export default InputClearable;
</script>
<style scoped lang="scss">
  .input-bg {
    background: #DDD;
  }
</style>