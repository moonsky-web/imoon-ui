<template>
  <Provider>
    <imButton>按钮</imButton>
    <imButton href="https://www.baidu.com">按钮</imButton>
  </Provider>
</template>

<script>
  /* eslint-disable */
  import {ImButton} from '../../packages/button';

  export default {
    name: 'ImButtonDemo',
    components: {
      ImButton, Provider: {
        functional: true,
        name: 'Provider',
        provide() {
          return {
            $providedProps: {
              color: '#572623',
            },
          };
        },
        render(h, {children}) {
          return h('div', {}, children);
        },
      },
    },
  };
</script>

<style scoped>

</style>
