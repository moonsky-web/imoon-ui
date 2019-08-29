<template>
  <div>
    <DemoItem>
      <ImAvatar radius :src="src"></ImAvatar>
      <div style="width: 20px;"></div>
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
        src: 'https://pic1.zhimg.com/v2-1668afee30626df0c4e4c6515efe232c_r.jpg',
      };
    },
  };
  export default AvatarBase;
</script>

<style scoped>

</style>