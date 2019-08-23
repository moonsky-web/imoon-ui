<template>
  <DemoContainer :props="props">
    <div slot="detail">
      Alert 演示
    </div>
<!--    <div slot="api">-->
<!--      Alert API-->
<!--    </div>-->
  </DemoContainer>
</template>

<script>
  export const Alert = {
    name: 'Alert',
    computed: {
      props() {
        return [
          {name: 'visible', type: 'Boolean', values: 'true | false', default: 'true', desc: '是否显示, 可通过 v-model 或 :visible.sync 实现可关闭的 Alert'},
        ];
      },
    },
  };
  export default Alert;
</script>

<style scoped>

</style>
