<template>
  <div>
    <DemoItem>
      <ImAvatar radius :src="src"></ImAvatar>
      <div class="demo-width-20"></div>
      <ImAvatar :src="src"></ImAvatar>
      <div class="demo-width-20"></div>
      <ImAvatar :src="src"></ImAvatar>
    </DemoItem>
  </div>
</template>

<script>
  import {ImAvatar} from '../../packages/avatar';

  export const AvatarBase = {
    name: 'AvatarBase',
    components: {ImAvatar},
    data() {
      return {
        // src: 'https://pic1.zhimg.com/v2-1668afee30626df0c4e4c6515efe232c_r.jpg',
        src: 'https://c-ssl.duitang.com/uploads/item/201901/15/20190115181136_ZLMrV.jpeg',
      };
    },
  };
  export default AvatarBase;
</script>

<style scoped lang="scss">
  .demo-width-20 {
    width: 20px;
  }
</style>
