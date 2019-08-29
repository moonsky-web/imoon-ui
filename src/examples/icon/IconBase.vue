<template>
  <ul>
    <li
      :key="icon.name"
      class="demo-item"
      :style="{color:icon.color}"
      v-for="icon in icons">
      <div class="demo-icon">
        <ImIcon :name="icon.name"/>
      </div>
      <div class="demo-icon-name">{{icon.name}}</div>
      <div class="demo-current-switch">
        <ImIcon name="swap" @click="onClickSwitch(icon)"/>
      </div>
    </li>
  </ul>
</template>

<script>
  import {ImIcon} from '../../packages/icon';
  import {names} from './icon-names';
  import {getRandomColor} from '../util';

  export const IconBase = {
    name: 'IconBase',
    components: {ImIcon},
    data() {
      return {icons: names.map(name => ({color: null, name}))};
    },
    computed: {},
    methods: {
      onClickSwitch(icon) {
        icon.color = getRandomColor().toUpperCase();
      },
    },
  };
  export default IconBase;
</script>

<style lang="scss">
  .demo-item {
    position: relative;
    padding: 20px 0 0;
    list-style: none;
    margin: 10px 10px 10px 0;
    display: inline-block;
    width: 100px;
    text-align: center;
    box-sizing: border-box;
    height: 140px;
    vertical-align: middle;
    box-shadow: 0 0 1px #aaa;
    transition-duration: .3s;
    border-radius: 8px;

    &:hover {
      /*box-shadow: 0 0 12px #2C3E50;*/
      box-shadow: 0 0 12px #aaa;

      & > .demo-current-switch {
        visibility: visible;
      }
    }
  }

  .demo-current-switch {
    visibility: hidden;
    height: 16px;
    padding: 2px;
    position: absolute;
    right: 8px;
    top: 4px;
    font-size: 14px;
    cursor: pointer;
    border: 1px solid transparent;
    transition-duration: .3s;
    border-radius: 3px;

    &:hover {
      border-color: #ddd;
    }

    &:active {
      border-color: #999;
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
