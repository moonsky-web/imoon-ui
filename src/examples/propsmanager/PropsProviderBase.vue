<template>
  <div>
    <ImPropsProvider size="xs">
      <ImButton icon="close"/>
      <ImButton icon="close"/>
    </ImPropsProvider>
  </div>
</template>
<script>
  import {ImPropsProvider} from '../../packages/props-provider';
  import {ImButton} from '../../packages/button';
  import {ImAlert} from '../../packages/alert';

  export const PropsProviderBase = {
    name: 'PropsProviderBase',
    components: {ImPropsProvider, ImButton, ImAlert},
    computed: {
      props() {
        return [];
      },
    },
    mounted() {
      console.log(this);
    },
  };
  export default PropsProviderBase;
</script>
