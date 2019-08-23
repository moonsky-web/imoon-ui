<template>
  <div>
    <DemoItem label="基本输入框">
      <div class="demo-padding-10">
        <div class="demo-margin-v-10">
          <ImInputNumber/>
          <ImInputNumber placeholder="placeholder"/>
          <ImInputNumber placeholder="color=warn" color="warn"/>
        </div>
      </div>
    </DemoItem>

    <DemoItem label="圆角边框输入框 :radius=true">
      <div class="demo-padding-10">
        <div class="demo-margin-v-10">
          <ImInputNumber radius placeholder="radius color=info" color="info"/>
          <ImInputNumber radius placeholder="radius color=success" color="success"/>
          <ImInputNumber radius placeholder="radius color=danger" color="danger"/>
        </div>
      </div>
    </DemoItem>

    <DemoItem label="幽灵输入框 :ghost=true">
      <div class="demo-padding-10 input-bg">
        <div class="demo-margin-v-10">
          <ImInputNumber ghost color="danger" placeholder="ghost color=danger"/>
          <ImInputNumber ghost color="success" placeholder="ghost color=success"/>
          <ImInputNumber ghost color="#5e08ec" placeholder="ghost color=#5e08ec"/>
        </div>
      </div>
    </DemoItem>

    <DemoItem label="可编辑性">
      <div>
        <div class="demo-padding-10">
          <ImInputNumber v-model="value"/>
        </div>
        <div class="demo-padding-10">
          <ImInputNumber viewonly value="viewonly"/>
          <ImInputNumber viewonly value="readonly"/>
          <ImInputNumber viewonly value="disabled"/>
        </div>
        <div class="demo-padding-10">
          <ImInputNumber v-model="value" viewonly color="danger" placeholder="viewonly color=danger"/>
          <ImInputNumber v-model="value" readonly color="success" placeholder="readonly color=success"/>
          <ImInputNumber v-model="value" disabled color="#5e08ec" placeholder="disabled color=#5e08ec"/>
        </div>
        <div class="demo-padding-10">
          <ImInputNumber v-model="value" viewonly color="danger" placeholder="ghost color=danger"/>
          <ImInputNumber v-model="value" readonly color="success" placeholder="ghost color=success"/>
          <ImInputNumber v-model="value" disabled color="#5e08ec" placeholder="ghost color=#5e08ec"/>
        </div>
        <div class="demo-padding-10 input-bg">
          <ImInputNumber v-model="value" viewonly ghost color="danger" placeholder="ghost color=danger"/>
          <ImInputNumber v-model="value" readonly ghost color="success" placeholder="ghost color=success"/>
          <ImInputNumber v-model="value" disabled ghost color="#5e08ec" placeholder="ghost color=#5e08ec"/>
        </div>
        <div class="demo-padding-10 input-bg">
          <ImInputNumber v-model="value" viewonly ghost color="#34fa50" placeholder="ghost color=danger"/>
          <ImInputNumber v-model="value" readonly ghost color="success" placeholder="ghost color=success"/>
          <ImInputNumber v-model="value" disabled ghost color="#5e08ec" placeholder="ghost color=#5e08ec"/>
        </div>
      </div>
    </DemoItem>

  </div>
</template>
<script>
  import {ImInputNumber} from '../../packages/input-number';
  import {ImInput, ImInputClearable} from '../../packages/input';

  export const InputNumber = {
      name: 'InputNumber',
      components: {ImInputNumber, ImInput, ImInputClearable},
    }
  ;
  export default InputNumber;
</script>