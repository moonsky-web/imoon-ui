<template>
  <div class="demo-content-container">
    <slot name="detail">
      {{getMetaOrRouteName}}
    </slot>
    <router-view/>
    <slot name="api">
      <slot name="props">
        <ApiItem label="Props" :data="props" :columns="propsColumns"/>
      </slot>
      <slot name="events">
        <ApiItem label="Events" :data="events" :columns="eventsColumns"/>
      </slot>
      <slot name="slots">
        <ApiItem label="Slots" :data="slots" :columns="slotsColumns"/>
      </slot>
      <slot name="scopeSlots">
        <ApiItem label="Scope slots" :data="[]" :columns="[]"/>
      </slot>
    </slot>
  </div>
</template>
<script>
  import {isFunction as isFn, isPlainObject} from '../../utils/predicates';

  function toStr(value) {
    return Array.isArray(value) ? value.join('| ') :
      (value === undefined || value === null ? '--' : String(value));
  }

  function defaultRender(h, value) {
    return toStr(value);
  }

  const EMPTY = [], PROPS_COLUMNS = [
    {prop: 'name', name: '属性名'},//name:String
    {
      //type:String|Array
      prop: 'type', name: '类型', render(h, value) {
        return isFn(value) ? value.name : toStr(value);
      },
    },
    {prop: 'default', name: '默认值'},//values:String
    {
      //values:String|Array
      prop: 'values', name: '可选值',
      col: {width: '220px'},
      render(h, value) {
        return isFn(value) ? value(h) : toStr(value);
      },
    },
    {
      //desc:String
      prop: 'desc', name: '说明', render(h, value) {
        return isFn(value) ? value(h) : (isPlainObject(value) ? h(value) : toStr(value));
      },
    },
  ], SLOTS_COLUMNS = [
    {prop: 'name', name: '插槽名'},
    {prop: 'desc', name: '说明'},
  ], EVENTS_COLUMNS = [
    {prop: 'name', name: '事件'},
    {prop: 'params', name: '回调参数'},
    {prop: 'desc', name: '说明'},
  ], DemoTable = {
    name: 'DemoTable',
    functional: true,
    props: {
      label: String,
      data: {
        type: Array,
        default() {
          return EMPTY;
        },
      },
      columns: Array,
    },
    render(h, {props: {data, columns = PROPS_COLUMNS, label}}) {
      const table = h('table', {
        class: 'demo-width-full demo-api-table',
      }, [
        h('colgroup', {}, columns.map(({col}) => h('col', {attrs: col}))),
        h('thead', {}, columns.map(column => h('th', {}, [
          h('div', {}, [
            h('div', {}, [column.name]),
          ]),
        ]))),
        h('tbody', {}, data.length ? data.map(row => h('tr', {
          class: '',
        }, columns.map(({prop, render = defaultRender}) => h('td', {
          class: {'demo-api-td-values': prop === 'values'},
        }, [
          h('p', {
            class: 'demo-api-td-data',
          }, [
            render(h, row[prop]) || defaultRender(h, row[prop]),
          ]),
        ])))) : [
          h('tr', {}, [
            h('td', {
              class: 'demo-align-center',
              attrs: {colspan: columns.length},
            }, [
              h('p', {}, ['无信息']),
            ]),
          ]),
        ]),
      ]);

      return data.length ? h('div', {}, [
        label ? h('h4', {class: 'demo-api-sub-title'}, [label]) : null,
        table,
      ]) : null;
    },
  };

  export const DemoContainer = {
    name: 'DemoContainer',
    components: {ApiItem: DemoTable},
    props: {
      props: Array,
      events: Array,
      slots: Array,
      scopeSlots: Array,
    },
    data() {
      return {
        propsColumns: Object.freeze(PROPS_COLUMNS),
        eventsColumns: Object.freeze(EVENTS_COLUMNS),
        slotsColumns: Object.freeze(SLOTS_COLUMNS),
      };
    },
    computed: {
      getMetaOrRouteName() {
        return '';
      },
    },
  };
  export default DemoContainer;
</script>
<style scoped lang="scss">
  .demo-content-container {
    padding: 0 20px 120px;
  }

  .demo-api-sub-title {
    padding: 24px 12px 0;
    line-height: 42px;
  }

  .demo-api-table {
    collapse: 0;
    border: 1px solid #DDD;
    border-collapse: collapse;

    & th,
    & td {
      padding: 0 12px;
      border: 1px solid #DDD;
    }

    & th {
      line-height: 42px;
      font-size: 14px;
    }

    & td {
      line-height: 24px;

      &.demo-api-td-values {
        width: 220px;
      }

      & > .demo-api-td-data {
        margin-top: 10px;
        margin-bottom: 10px;
        margin-right: 10px;
        max-width: 200px;
        word-break: keep-all;
      }
    }
  }
</style>
