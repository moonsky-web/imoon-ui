<template>
  <div>
    <slot name="detail">
      {{getMetaOrRouteName}}
    </slot>
    <router-view/>
    <slot name="api"></slot>
  </div>
</template>
<script>
  export const DemoContainer = {
    name: 'DemoContainer',
    computed: {
      getMetaOrRouteName() {
        return '';
      },
    },
  };
  export default DemoContainer;
</script>
