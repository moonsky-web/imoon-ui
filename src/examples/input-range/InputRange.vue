<template>
  <div>
    <div>
      <ImInput></ImInput>
    </div>
    <div style="margin-top: 10px;">
      <ImInputRange></ImInputRange>
    </div>
  </div>
</template>

<script>
  import {ImInput} from '../../packages/input';
  import {ImInputRange} from '../../packages/input-range';

  export const InputRange = {
    name: 'InputRange',
    components: {ImInput, ImInputRange},
  };
  export default InputRange;
</script>

<style scoped>

</style>
