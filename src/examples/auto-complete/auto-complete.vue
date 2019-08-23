<template>
  <div>
    <div style="height: 660px;">
      <ImAutoComplete
        v-show="showAutoComplete" :readonly="readonly"
        :options="options" prop="name" v-model="modelValue"
        placeholder="请输入内容" :limit="limit"/>
      <div style="height: 200px;"></div>
      <ImAutoComplete
        v-show="showAutoComplete"
        color="danger" :readonly="readonly"
        :options="options" prop="name"
        placeholder="请输入内容" :limit="limit"/>
      <div style="height: 200px;"></div>
      <ImAutoComplete
        v-show="showAutoComplete"
        color="danger" :readonly="readonly"
        :options="options" prop="name"
        placeholder="请输入内容" :limit="limit"/>
    </div>
    <div style="padding: 15px 0;">
      <ImAutoComplete
        block
        color="danger"
        :readonly="readonly"
        :options="options"
        prop="name"
        placeholder="请输入内容"
        :limit="15"
      ></ImAutoComplete>
    </div>
    <div style="display: flex;">
      <div style="width: 800px;">
        <ImButton @click="readonly=!readonly">切换 Readonly</ImButton>
        <ImButton @click="showAutoComplete=!showAutoComplete">Show</ImButton>
      </div>
      <div>
        <ImAutoComplete
          v-show="showAutoComplete"
          color="danger"
          :readonly="readonly"
          :options="options"
          prop="name"
          placeholder="请输入内容"
          :limit="limit"
        ></ImAutoComplete>
      </div>
    </div>
  </div>
</template>

<script>
  import {ImAutoComplete} from '../../packages/auto-complete';
  import {ImButton} from '../../packages/button';

  export default {
    name: 'auto-complete',
    components: {ImAutoComplete, ImButton},
    data() {
      return {
        readonly: false,
        showAutoComplete: true,
        limit: 10,
        modelValue: '123',
        options: [
          {name: '111111111111111111111111111111'},
          {name: 'asdfas'},
          {name: 'asdfasd'},
          {name: '1234567890'},
          {name: 'asdfasd'},
          {name: '1234567890'},
          {name: '234567890'},
          {name: 'fafasdfasdfasdsdf'},
          {name: '23fasdf4567890'},
          {name: '12asdfasd345asdfasdfasd67890'},
          {name: '23asdfasdf4567890'},
          {name: '1234567890'},
          {name: '23asdffasd45cfasdfasd67890'},
          {name: '123asdf4567890'},
          {name: '234567890'},
          {name: '1234567890'},
          {name: '2345fasdfasd67890'},
          {name: '123456fasdfasdf7890'},
          {name: '2345634三都赋v三都赋5234她7890'},
          {name: '12345efgva前4他娃儿去367890'},
          {name: '234567asdfasdfasdfwert54yt890'},
          {name: 'tfqw34'},
          {name: '23456t2q347890'},
          {name: '12345444444444efgvtq67890'},
          {name: '2345rfqa34rtq34tf67890'},
          {name: '12345tq34t623q467890'},
          {name: '2345fqrt43467890'},
        ],
      };
    },
    created() {
    },
  };
</script>

<style scoped>

</style>
