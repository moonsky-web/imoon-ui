<template>
  <div>
    <DemoItem label="ImDivider 基本示例">
      <div class="demo-width-full">
        <ImDivider/>
        <ImDivider>
          <template>左标签</template>
        </ImDivider>
        <ImDivider>
          <template #left>左标签</template>
        </ImDivider>
        <ImDivider>
          <template #center>中标签</template>
        </ImDivider>
        <ImDivider>
          <template #right>右标签</template>
        </ImDivider>
        <ImDivider>
          <template #left>左标签</template>
          <template #center>中标签</template>
          <template #right>右标签</template>
        </ImDivider>
      </div>
    </DemoItem>
    <DemoItem label="ImDivider 虚线分割线示例">
      <div class="demo-width-full">
        <ImDivider dashed/>
        <ImDivider dashed>
          <template>左标签</template>
        </ImDivider>
        <ImDivider dashed>
          <template #left>左标签</template>
        </ImDivider>
        <ImDivider dashed>
          <template #center>中标签</template>
        </ImDivider>
        <ImDivider dashed>
          <template #right>右标签</template>
        </ImDivider>
        <ImDivider dashed>
          <template #left>左标签</template>
          <template #center>中标签</template>
          <template #right>右标签</template>
        </ImDivider>
      </div>
    </DemoItem>
  </div>
</template>
<script>
  import {ImDivider} from '../../packages/divider';

  export const DividerBase = {
    name: 'DividerBase',
    components: {ImDivider},
  };
  export default DividerBase;
</script>