<template>
  <div>
    <table class="demo-width-full demo-api-table">
      <colgroup>
        <col v-for="column in columns" :key="column.prop" v-bind="column.col">
      </colgroup>
      <thead>
      <tr>
        <td v-for="column in columns" :key="column.prop">
          <p>{{column.name}}</p>
        </td>
      </tr>
      </thead>
      <tbody v-if="data.length">
      <tr v-for="(item,index) in data" :key="index">
        <td
          v-for="column in columns"
          :class="{'demo-api-td-values': column.prop === 'values'}"
          :key="column.prop">
          <p class="demo-api-td-data">{{getTdData(item, column)}}</p>
        </td>
      </tr>
      </tbody>
      <tbody v-else>
      <tr>
        <td class="demo-align-center" :colspan="columns.length">
          <div>无信息</div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  export const ApiTable = {
    name: 'ApiTable',
    props: {
      data: {
        type: Array,
        default() {
          return [];
        },
      },
      columns: Array,
    },
    methods: {
      getTdData(item, column) {
        return item[column.prop];
      },
    },
  };

  export default ApiTable;
</script>
<style lang="scss" scoped>
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