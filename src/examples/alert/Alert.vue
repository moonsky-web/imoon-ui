<template>
  <DemoContainer
    label="ImAlert 演示"
    :props="props"
    :slots="slots"
    :events="events"
    :eventsDesc="eventsDesc"
    eventsPlaceholder="参考 ImTransition 或 vue transition 组件生命周期事件">
  </DemoContainer>
</template>

<script>
  import {autoSizeValid, COLOR_NAMES} from '../../utils/validator';

  export const Alert = {
    name: 'Alert',
    data() {
      const eventsDesc = 'Alert 的事件是依赖于 ImTransition 组件的，' +
        '故支持所有 ImTransition 事件，同时也支持所有 vue transition 组件的所有钩子。';
      return {eventsDesc};
    },
    computed: {
      events() {
        return [];
      },
      slots() {
        return [
          {
            name: 'title',
            desc: '标题插槽',
          },
          {
            name: 'default',
            desc: '内容插槽',
          },
          {
            name: 'close',
            desc: '关闭插槽',
          },
        ];
      },
      props() {
        return [
          {
            name: 'visible',
            type: 'Boolean',
            values: null,
            default: true,
            desc: '是否显示, 可通过 v-model 或 :visible.sync 实现可关闭的 Alert',
          },
          {
            name: 'title',
            type: 'String',
            values: null,
            default: null,
            desc: '标题',
          },
          {
            name: 'description',
            type: 'String',
            values: null,
            default: null,
            desc: '内容',
          },
          {
            name: 'color',
            type: String,
            default: null,
            desc(h) {
              return h('div', {}, [
                '预定义颜色 [ ',
                ...COLOR_NAMES.reduce((total, now, idx, arr) => {
                  total.push(h('code', {class: 'demo-api-prop-code'}, [now]));
                  if (idx < arr.length - 1) {
                    total.push(',');
                  }
                  return total;
                }, []),
                ' ] 或 RGB 色值',
              ]);
            },
          },
          {
            name: 'size',
            type: 'String',
            default: null,
            desc(h) {
              return h('div', {}, [
                '预定义尺寸 [ ',
                ...autoSizeValid.sizes.reduce((total, now, idx, arr) => {
                  total.push(h('code', {class: 'demo-api-prop-code'}, [now]));
                  if (idx < arr.length - 1) {
                    total.push(',');
                  }
                  return total;
                }, []),
                ' ] 或 ',
                h('code', {class: 'demo-api-prop-code'}, ['auto']),
                ' 色值',
              ]);
            },
          },
          {
            name: 'dashed',
            type: 'Boolean',
            values: null,
            default: false,
            desc: '是否虚线边框',
          },
          {
            name: 'radius',
            type: Boolean,
            values: null,
            default: false,
            desc: '是否圆角',
          },
          {
            name: 'icon',
            type: 'String',
            values: null,
            default: null,
            desc: '图标（未完善）',
          },
        ];
      },
    },
  };
  export default Alert;
</script>

<style scoped>

</style>
