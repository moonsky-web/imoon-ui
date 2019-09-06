<template>
  <DemoContainer
    :props="props"
    label="ImPropsProvider 演示">
  </DemoContainer>
</template>
<script>
  export const PropsProvider = {
    name: 'PropsProvider',
    computed: {
      props() {
        return [];
      },
    },
  };
  export default PropsProvider;
</script>
