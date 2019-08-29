<template>
  <ul>
    <li class="demo-item" v-for="name in names" :key="name">
      <div class="demo-icon">
        <ImIcon :name="name"/>
      </div>
      <div class="demo-icon-name">{{name}}</div>
    </li>
  </ul>
</template>

<script>
  import {ImIcon} from '../../packages/icon';
  import {names} from './icon-names';

  export const IconBase = {
    name: 'IconBase',
    components: {ImIcon},
    data() {
      return {names};
    },
    computed: {},
  };
  export default IconBase;
</script>

<style lang="scss">
  .demo-item {
    padding: 20px 0 0;
    list-style: none;
    margin: 10px 10px 10px 0;
    display: inline-block;
    width: 100px;
    text-align: center;
    box-sizing: border-box;
    height: 140px;
    vertical-align: middle;
    box-shadow: 0 0 0 #fff;
    transition-duration: .3s;
    border-radius: 8px;

    &:hover {
      /*box-shadow: 0 0 12px #2C3E50;*/
      box-shadow: 0 0 12px #aaa;
    }
  }

  .demo-icon {
    height: 60px;
    line-height: 60px;
    font-size: 32px;
    box-sizing: border-box;
    transition-duration: .3s;
    cursor: pointer;

    &:hover {
      font-size: 60px;
    }
  }

  .demo-icon-name {
    padding: 10px 0;
  }
</style>
