<template>
  <div>
    <ImInputNumber ref="num" v-model="currentValue" :precision="1" :max="3"></ImInputNumber>
    <ImInputNumber color="danger" v-model="currentValue" :precision="1" :max="3"></ImInputNumber>
    <div style="width: 5vh; height: 5vh; background: #008B45"></div>
    <input type="number" max="10" step="0.2">
    <ImButton @click="stepUp">step up</ImButton>
  </div>
</template>

<script>
  import {ImInputNumber} from '../../packages/input-number';
  import {ImButton} from '../../packages/button';

  console.log(ImInputNumber);
  export const ImInputNumberDemo = {
    name: 'InputNumber',
    components: {ImInputNumber, ImButton},
    data() {
      return {
        currentValue: 2.8,
      };
    },
    methods: {
      stepUp() {
        this.$refs.num.onStepUp();
      },
    },
  };
  export default ImInputNumberDemo;
</script>

<style scoped>

</style>