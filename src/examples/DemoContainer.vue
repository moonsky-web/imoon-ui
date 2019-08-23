<template>
  <div class="demo-content-container">
    <slot name="detail">
      {{getMetaOrRouteName}}
    </slot>
    <router-view/>
    <slot name="api">
      <slot name="props">
        <div v-if="props&&props.length">
          <h4 class="demo-api-sub-title">Props</h4>
          <div>
            <DemoTable :data="props"/>
          </div>
        </div>
      </slot>
      <slot name="events">
        <div v-if="events && events.length">
          <h4 class="demo-api-sub-title">Events</h4>
          <div></div>
        </div>
      </slot>
      <slot name="slots">
        <div v-if="slots&&slots.length">
          <h4 class="demo-api-sub-title">Slots</h4>
          <div></div>
        </div>
      </slot>
      <slot name="scopeSlots">
        <div v-if="scopeSlots&&scopeSlots.length">
          <h4 class="demo-api-sub-title">ScopeSlots</h4>
          <div></div>
        </div>
      </slot>
    </slot>
  </div>
</template>
<script>
  const EMPTY = [], COLUMNS = [
    {prop: 'name', column: '属性名'},//name:String
    {prop: 'type', column: '类型'},//type:String|Array
    {prop: 'values', column: '可选值'},//values:String|Array
    {prop: 'default', column: '默认值'},//values:String
    {prop: 'desc', column: '说明'},//desc:String
  ], DemoTable = {
    name: 'DemoTable',
    functional: true,
    props: {
      data: {
        type: Array,
        default() {
          return EMPTY;
        },
      },
    },
    render(h, {props: {data}}) {
      return h('table', {
        class: 'demo-width-full demo-api-table',
      }, [
        h('thead', {}, COLUMNS.map(column => h('th', {}, [
          h('div', {}, [column.column]),
        ]))),
        h('tbody', {}, data.length ? data.map(row => h('tr', {}, COLUMNS.map(col => h('td', {}, [
          row[col.prop],
        ])))) : h('tr', {}, [
          h('td', {
            class: 'demo-align-center',
            attrs: {colspan: COLUMNS.length},
          }, ['无数据']),
        ])),
      ]);
    },
  };

  export const DemoContainer = {
    name: 'DemoContainer',
    components: {DemoTable},
    props: {
      props: Array,
      events: Array,
      slots: Array,
      scopeSlots: Array,
    },
    computed: {
      getMetaOrRouteName() {
        return '';
      },
    },
  };
  export default DemoContainer;
</script>
<style scoped>
  .demo-api-sub-title {
    padding: 0 12px;
    line-height: 42px;
  }

  .demo-content-container {
    padding: 0 20px 120px;
  }
</style>
