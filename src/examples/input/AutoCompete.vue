<template>
  <div>
    <DemoItem label="基本输入框">
      <div class="demo-padding-10">
        <div class="demo-margin-v-10">
          <ImAutoComplete v-model="value" :options="strList"/>
          <ImAutoComplete v-model="value" :options="objList" prop="name"/>
          <ImInput v-model="value"/>
        </div>
        <div class="demo-margin-v-10">
          <ImInputClearable v-model="value"/>
          <ImInput v-model="value"/>
          <ImInputNumber/>
        </div>
      </div>
    </DemoItem>
  </div>
</template>
<script>
  import {ImAutoComplete} from '../../packages/auto-complete';
  import {ImInput, ImInputClearable} from '../../packages/input';
  import {ImInputNumber} from '../../packages/input-number';

  export const AutoComplete = {
    name: 'AutoComplete',
    components: {ImAutoComplete, ImInput, ImInputClearable, ImInputNumber},
    data() {
      return {
        value: null,
      };
    },
    computed: {
      objList() {
        return this.strList.map(str => ({name: str}));
      },
      strList() {
        return [
          '麻花藤',
          '倪艳红',
          '诗雨珠',
          '马芸',
          '洪夫人',
          '黄晓明',
          '狄安娜',
          '李宇春',
          '张韶涵',
          '张绍刚',
          '池子',
          '刘芸',
          '尤朝勇',
          '卢鹏',
          '常颖',
          '电脑',
          '鼠标',
          '张雨涵',
          '冯绍峰',
          '赵丽颖',
          '宋鸿兵',
        ];
      },
    },
  };
  export default AutoComplete;
</script>