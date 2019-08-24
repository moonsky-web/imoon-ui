<template>
  <div>
    <DemoItem label="基本输入框">
      <div class="demo-padding-10">
        <div class="demo-margin-v-10">
          <ImInputNumber/>
          <ImInputNumber placeholder="placeholder"/>
          <ImInputNumber placeholder="color=warn"/>
        </div>
      </div>
    </DemoItem>

    <DemoItem label="圆角边框输入框 :radius=true">
      <div class="demo-padding-10">
        <div class="demo-margin-v-10">
          <ImInputNumber radius placeholder="radius color=info"/>
          <ImInputNumber radius placeholder="radius color=success"/>
          <ImInputNumber radius placeholder="radius color=danger"/>
        </div>
      </div>
    </DemoItem>

    <DemoItem label="幽灵输入框 :ghost=true">
      <div class="demo-padding-10 input-bg">
        <div class="demo-margin-v-10">
          <ImInputNumber ghost placeholder="ghost color=danger"/>
          <ImInputNumber ghost placeholder="ghost color=success"/>
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
          <ImInputNumber v-model="value" viewonly placeholder="viewonly color=danger"/>
          <ImInputNumber v-model="value" readonly placeholder="readonly color=success"/>
          <ImInputNumber v-model="value" disabled color="#5e08ec" placeholder="disabled color=#5e08ec"/>
        </div>
        <div class="demo-padding-10">
          <ImInputNumber v-model="value" viewonly placeholder="ghost color=danger"/>
          <ImInputNumber v-model="value" readonly placeholder="ghost color=success"/>
          <ImInputNumber v-model="value" disabled color="#5e08ec" placeholder="ghost color=#5e08ec"/>
        </div>
        <div class="demo-padding-10 input-bg">
          <ImInputNumber v-model="value" viewonly ghost placeholder="ghost color=danger"/>
          <ImInputNumber v-model="value" readonly ghost placeholder="ghost color=success"/>
          <ImInputNumber v-model="value" disabled ghost color="#5e08ec" placeholder="ghost color=#5e08ec"/>
        </div>
        <div class="demo-padding-10 input-bg">
          <ImInputNumber v-model="value" viewonly ghost color="#34fa50" placeholder="ghost color=danger"/>
          <ImInputNumber v-model="value" readonly ghost placeholder="ghost color=success"/>
          <ImInputNumber v-model="value" disabled ghost color="#5e08ec" placeholder="ghost color=#5e08ec"/>
        </div>
      </div>
    </DemoItem>

    <DemoItem label="不同尺寸对比演示 size=lg|md|sm|xs">
      <div class="demo-padding-10">
        <div class="demo-margin-v-10">
          <ImInputNumber placeholder="ghost color=danger"/>
          <ImInputNumber size="lg" placeholder="ghost color=success"/>
          <ImInputNumber size="sm" color="#5e08ec" placeholder="ghost color=#5e08ec"/>
        </div>
        <div class="demo-margin-v-10">
          <ImInputClearable placeholder="ghost color=danger"/>
          <ImInputClearable size="lg" placeholder="ghost color=success"/>
          <ImInputClearable size="sm" color="#5e08ec" placeholder="ghost color=#5e08ec"/>
        </div>
        <div class="demo-margin-v-10">
          <ImInput placeholder="ghost color=danger"/>
          <ImInput size="lg" placeholder="ghost color=success"/>
          <ImInput size="sm" color="#5e08ec" placeholder="ghost color=#5e08ec"/>
        </div>
      </div>
    </DemoItem>

    <DemoItem label="不同尺寸对比演示 size=lg|md|sm|xs">
      <div class="demo-padding-10">
        <div class="demo-margin-v-10">
          <ImInputNumber placeholder="ghost color=danger"/>
          <ImInputNumber size="xs" placeholder="ghost color=success"/>
          <ImInputNumber size="md" color="#5e08ec" placeholder="ghost color=#5e08ec"/>
        </div>
        <div class="demo-margin-v-10">
          <ImInputClearable placeholder="ghost color=danger"/>
          <ImInputClearable size="xs" placeholder="ghost color=success"/>
          <ImInputClearable size="md" color="#5e08ec" placeholder="ghost color=#5e08ec"/>
        </div>
        <div class="demo-margin-v-10">
          <ImInput placeholder="ghost color=danger"/>
          <ImInput size="xs" placeholder="ghost color=success"/>
          <ImInput size="md" color="#5e08ec" placeholder="ghost color=#5e08ec"/>
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
      data() {
        return {
          value: '可编辑性输入框值',
        };
      },
    }
  ;
  export default InputNumber;
</script>