<template>
  <Provider class="demo-gaps">
    <div class="demo-gaps">
      <imButton @click="visible=!visible" style="margin: 10px 0;">Toggle</imButton>
    </div>
    <imAlert
      :visible="visible"
      style="font-size: 32px; padding-right: 5em;" title="明天也阳光明媚">
      今夜阳光明媚
      <i slot="close">晓得了</i>
    </imAlert>
    <imAlert
      style="font-size: 32px; padding-right: 5em;" title="明天也阳光明媚"
      v-model="visible"
      :visible.sync="visible">
      今夜阳光明媚
      <i slot="close">知道了</i>
      <i>知道了</i>
    </imAlert>
    <imAlert
      @onBeforeCreate="onBeforeCreate"
      @onCreated="onCreated()"
      @onClose="onClosed()"
      style="font-size: 32px; padding-right: 5em;"
      title="明天也阳光明媚"
      v-model="visible">
      <span slot="title">后天阳光更明媚</span>
      <i>知道了</i>
      <imButton slot="close">关了关了</imButton>
      <imButton slot="close" color="#66d066">毙了</imButton>
    </imAlert>
    <imAlert @onClosed="onClosed()" :visible.sync="visible">本少爷今天要加班</imAlert>
    <CurrentChild></CurrentChild>
  </Provider>
</template>

<script>
  /* eslint-disable */
  import {ImAlert} from '../../packages/alert';
  import {ImButton} from '../../packages/button';
  import {CurrentChild} from './current-child';

  export default {
    name: 'ImAlertDemo',
    components: {
      ImAlert, ImButton, CurrentChild, Provider: {
        functional: true,
        name: 'Provider',
        provide() {
          return {
            $providedProps: {
              color: '#572623',
              dashed: true,
            },
          };
        },
        render(h, {children}) {
          return h('div', {}, children);
        },
      },
    },
    provide() {
      return {
        $providedProps: {
          color: '#125968',
          dashed: true,
        },
      };
    },
    data() {
      return {
        visible: true,
      };
    },
    mounted() {
    },
    methods: {
      onBeforeFirstCreate() {
        console.log('onBeforeFirstCreate success ...');
      },
      onBeforeCreate() {
        console.log('onBeforeCreate success ...');
      },
      onCreated() {
        console.log('Create success ...');
      },
      onClosed() {
        console.log('Close success ...');
      },
    },
  };
</script>
<style>
  .display-flex {
    display: flex;
  }

  .flex-grow-1 {
    flex-grow: 1;
  }

  .padding-10 {
    padding: 5px;
  }
</style>
