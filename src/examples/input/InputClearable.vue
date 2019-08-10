<template>
  <div>
    <div class="current-container">
      <ImInputClearable radius value="radius"/>
      <ImInput radius value="radius"/>
      <ImInputClearable radius color="danger" value="radius"/>
      <ImInputClearable radius color="#99ceff" value="radius"/>
    </div>
    <div class="current-container">
      <ImInputClearable dashed value="dashed"/>
      <ImInput dashed value="dashed"/>
      <ImInputClearable dashed color="danger" value="dashed"/>
    </div>
    <div class="current-container" style="background: #99ceff;">
      <ImInputClearable ghost value="ghost"/>
      <ImInput ghost value="ghost"/>
    </div>
    <div class="current-container">
      <ImInputClearable block value="block"/>
      <ImInput block value="block"/>
    </div>
    <div class="current-container">
      <ImInputClearable viewonly value="viewonly"/>
      <ImInput viewonly value="viewonly"/>
    </div>
    <div class="current-container">
      <ImInputClearable readonly value="readonly"/>
      <ImInput readonly value="readonly"/>
    </div>
    <div class="current-container">
      <ImInputClearable name="name" disabled value="disabled"/>
      <ImInput name="name" disabled value="disabled"/>
    </div>
    <div class="current-container">
      <ImInputClearable name="name" size="lg" value="lg"/>
      <ImInput name="name" size="lg" value="lg"/>
    </div>
    <div class="current-container">
      <ImInputClearable name="name" size="sm" value="sm"/>
      <ImInput name="name" size="sm" value="sm"/>
    </div>
    <div class="current-container">
      <ImInputClearable name="name" size="xs" value="xs"/>
      <ImInput name="name" size="xs" value="xs"/>
    </div>
  </div>
</template>

<script>
  /* eslint-disable */
  import {ImInputClearable, ImInput} from '../../packages/input';

  export const InputClearable = {
    name: 'InputClearable',
    components: {ImInputClearable, ImInput},
  };
  export default InputClearable;
</script>

<style scoped>
  .current-container {
    padding: 10px;
  }
</style>