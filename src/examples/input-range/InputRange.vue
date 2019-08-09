<template>
  <div>
    <div>
      <ImInput></ImInput>
    </div>
    <div style="margin-top: 10px;">
      <ImInputRange class="width-100"></ImInputRange>
    </div>
    <div style="margin-top: 10px;">
      <ImInputClearable
        @blur="onBlur"
        placeholder="placeholder"
        v-model="currentValue"/>
    </div>
  </div>
</template>

<script>
  /* eslint-disable */
  import {ImInput} from '../../packages/input';
  import {ImInputClearable} from '../../packages/input';
  import {ImInputRange} from '../../packages/input-range';

  export const InputRange = {
    name: 'InputRange',
    components: {ImInput, ImInputRange, ImInputClearable},
    data() {
      return {
        currentValue: null,
      };
    },
    methods: {
      onInput() {
      },
      onBlur() {
        console.log(this.currentValue)
      },
    },
  };
  export default InputRange;
</script>

<style scoped>
  .width-100 {
  }
</style>
