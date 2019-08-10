<template>
  <div>
    <div>
      <imInput v-model="defaultValue"/>
      <imInput color="primary" v-model="defaultValue"/>
      <imInput color="#df83ac" :value="defaultValue"/>
    </div>
    <div>
      <imInput color="#df83ac" :value="clearableValue"/>
      <ImInputClearable
        placeholder="placeholder"
        v-model="clearableValue"
        @change="onChangeValue"
        @blur="onClearableBlur()"/>
    </div>
  </div>
</template>

<script>
  /* eslint-disable */
  import {ImInput, ImInputClearable} from '../../packages/input';
  import {ImButton} from '../../packages/button';

  export default {
    name: 'ImInputDemo',
    components: {ImInput, ImButton, ImInputClearable},
    data() {
      return {
        clearableValue: 12,
        defaultValue: 123,
      };
    },
    methods: {
      onChangeValue() {
      },
      onClearableBlur() {
        console.log(this.clearableValue);
        setTimeout(() => {
          console.log(this.clearableValue);
        }, 1000);
      },
    },
  };
</script>

<style scoped>

</style>
