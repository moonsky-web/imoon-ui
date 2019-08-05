<template>
  <div>
    <imInput/>
    <imInput color="primary"/>
    <imInput color="#df83ac"/>
    <ImInputClearable v-model="clearableValue" @blur="onClearableBlur()"/>
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
      };
    },
    methods: {
      onClearableBlur() {
        console.log(this.clearableValue);
      },
    },
  };
</script>

<style scoped>

</style>
