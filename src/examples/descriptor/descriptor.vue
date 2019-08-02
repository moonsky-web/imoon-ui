<template>
  <div>
    <imDescriptor :attrs="getButton" defaultText="name"></imDescriptor>
    <imDescriptor :attrs="true" defaultText="name"></imDescriptor>
    <imDescriptor :attrs="true"></imDescriptor>
    <imDescriptor attrs="【true [text]】"></imDescriptor>
  </div>
</template>
<script>
  /* eslint-disable */
  import {ImButton} from '../../packages/button';
  import {ImDescriptor} from '../../packages/descriptor';

  export default {
    name: 'ImDescriptorDemo',
    components: {ImDescriptor},
    computed: {
      getDescriptor() {
        return ImDescriptor;
      },
      getButton() {
        if (0) {
          return ImButton;
        } else {
          return {
            tag: ImButton,
            color: '#AD26FC',
            size: 'auto',
            style: 'font-size: 30px;',
          };
        }
      },
    },
  };
</script>
