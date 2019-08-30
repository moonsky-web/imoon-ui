<template>
  <div>
    <DemoItem label="基本输入框">
      <div class="demo-padding-10">
        <div class="demo-margin-v-10">
          <ImInputClearable autofocus v-model="inputBaseValue"/>
          <ImInputClearable placeholder="placeholder" v-model="inputBaseValue"/>
        </div>
      </div>
    </DemoItem>

    <DemoItem label="圆角边框输入框 :radius=true">
      <div class="demo-padding-10">
        <div class="demo-margin-v-10">
          <ImInputClearable radius v-model="inputBaseValue"/>
          <ImInputClearable radius placeholder=":radius=true" v-model="inputBaseValue"/>
        </div>
      </div>
    </DemoItem>

    <DemoItem label="幽灵输入框 :ghost=true">
      <template #desc>
        幽灵输入框主要用在有色背景上，默认背景为透明，但在输入的时候仍然会使用白色背景，黑色字体的高对比度样式
      </template>
      <div class="demo-padding-10 input-bg">
        <div class="demo-margin-v-10">
          <ImInputClearable ghost placeholder="ghost" v-model="inputGhostValue"/>
          <ImInputClearable ghost placeholder="ghost" v-model="inputGhostValue"/>
          <ImInputClearable ghost color="#5e08ec" placeholder="ghost color=#5e08ec" v-model="inputGhostValue"/>
        </div>
      </div>
    </DemoItem>

    <DemoItem label="颜色切换" desc="请点击颜色按钮，或者在输入框输入 RGB 色值。">
      <div class="">
        <div class="demo-padding-10">
          <ImButton @click="colorValue = null;colorValueInput=null;">Clear</ImButton>
          <ImButton
            v-for="color in colors" @click="colorValue=color"
            :key="color" :color="color">{{color}}
          </ImButton>
          <ImButton @click="onRandomColor" :color="colorValue">随机颜色</ImButton>
        </div>
        <div class="demo-padding-10">
          <ImInputClearable
            v-model="colorValueInput"
            :color="colorValue" :placeholder="'color='+colorValue"/>
          <ImInputClearable
            v-model="colorValueInput"
            :color="colorValue" :placeholder="'radius color='+colorValue" radius/>
        </div>
        <div class="demo-padding-10 input-bg">
          <ImInputClearable
            v-model="colorValueInput"
            :color="colorValue" :placeholder="'ghost color='+colorValue" ghost/>
          <ImInputClearable
            v-model="colorValueInput"
            :color="colorValue" :placeholder="'ghost radius color='+colorValue" radius ghost/>
        </div>
      </div>
    </DemoItem>

    <DemoItem label="不同尺寸" notFlex>
      <div>
        <ImButton @click="sizeValue = null">Clear</ImButton>
        <ImButton
          v-for="size in sizes" @click="sizeValue=size"
          :key="size" :size="size">{{size}}
        </ImButton>
      </div>
      <div class="demo-padding-10">
        <ImInputClearable :size="sizeValue" :placeholder="'size='+sizeValue"/>
        <ImInputClearable :size="sizeValue" :placeholder="'radius size='+sizeValue" radius/>
      </div>
      <div class="demo-padding-10">
        <ImInputClearable color="danger" :size="sizeValue" :placeholder="'size='+sizeValue"/>
        <ImInputClearable color="warn" :size="sizeValue" :placeholder="'radius size='+sizeValue" radius/>
      </div>
      <div class="demo-padding-10">
        <ImInputClearable color="#123456" :size="sizeValue" :placeholder="'size='+sizeValue"/>
        <ImInputClearable color="#ad4" :size="sizeValue" :placeholder="'radius size='+sizeValue" radius/>
      </div>
      <div class="demo-padding-10 input-bg">
        <ImInputClearable :size="sizeValue" :placeholder="'ghost size='+sizeValue" ghost/>
        <ImInputClearable :size="sizeValue" :placeholder="'ghost radius size='+sizeValue" radius ghost/>
      </div>
      <div class="demo-padding-10 input-bg">
        <ImInputClearable color="danger" :size="sizeValue" :placeholder="'ghost size='+sizeValue" ghost/>
        <ImInputClearable color="warn" :size="sizeValue" :placeholder="'ghost radius size='+sizeValue" radius ghost/>
      </div>
      <div class="demo-padding-10 input-bg">
        <ImInputClearable color="#123456" :size="sizeValue" :placeholder="'ghost size='+sizeValue" ghost/>
        <ImInputClearable color="#ad4" :size="sizeValue" :placeholder="'ghost radius size='+sizeValue" radius ghost/>
      </div>
    </DemoItem>

    <DemoItem label="块级输入框 :block=true">
      <div class="demo-padding-10 demo-width-full">
        <div class="demo-margin-v-10">
          <ImInputClearable block placeholder=":block=true"/>
        </div>
        <div class="demo-margin-v-10">
          <ImInputClearable placeholder=":block=false"/>
        </div>
      </div>
    </DemoItem>

    <DemoItem label="viewonly" desc="当 :vireonly=true 时，页面完全不存在 input 元素，是用一个 span 模拟的元素" notFlex>
      <div class="demo-padding-10 demo-width-full">
        <div class="demo-margin-v-10">
          <ImButton @click="viewonly=!viewonly">viewonly={{viewonly}}</ImButton>
          <ImButton @click="onResetViewonly">清空值</ImButton>
        </div>
        <div class="demo-margin-v-10">
          <ImInputClearable :viewonly="viewonly" v-model="viewonlyValue" placeholder="viewonly"/>
          <ImInputClearable :viewonly="viewonly" radius v-model="viewonlyValue" placeholder="radius"/>
          <ImInputClearable :viewonly="viewonly" color="danger" v-model="viewonlyValue" placeholder="color=danger"/>
        </div>
        <div class="demo-margin-v-10">
          <ImInputClearable
            :viewonly="viewonly" color="#123456" :class="viewonlyClass"
            v-model="viewonlyValue" placeholder="viewonly color=#123456"/>
          <ImInputClearable
            :viewonly="viewonly" radius color="warn"
            v-model="viewonlyValue" placeholder="radius color=warn"/>
          <ImInputClearable
            :viewonly="viewonly" color="info" v-model="viewonlyValue" placeholder="color=info"/>
        </div>
      </div>
      <div class="demo-padding-10 input-bg">
        <ImInputClearable :viewonly="viewonly" ghost v-model="viewonlyValue" placeholder="ghost"/>
        <ImInputClearable :viewonly="viewonly" ghost color="danger" v-model="viewonlyValue" placeholder="ghost color=danger"/>
        <ImInputClearable :viewonly="viewonly" ghost color="#508e24" v-model="viewonlyValue" placeholder="ghost color=#508e24"/>
      </div>
      <div class="demo-padding-10 input-bg">
        <ImInputClearable :viewonly="viewonly" ghost color="primary" v-model="viewonlyValue" placeholder="ghost color=primary"/>
        <ImInputClearable :viewonly="viewonly" ghost color="info" v-model="viewonlyValue" placeholder="ghost color=info"/>
        <ImInputClearable :viewonly="viewonly" ghost color="#5e08ee" v-model="viewonlyValue" placeholder="ghost color=#5e08ee"/>
      </div>
      <div class="demo-padding-10 input-bg">
        <ImInputClearable :viewonly="viewonly" radius ghost color="warn" v-model="viewonlyValue"
                 placeholder="radius ghost color=warn"/>
        <ImInputClearable :viewonly="viewonly" radius ghost color="base" v-model="viewonlyValue"
                 placeholder="radius ghost color=base"/>
        <ImInputClearable :viewonly="viewonly" radius ghost color="#50f00e" v-model="viewonlyValue"
                 placeholder="radius ghost color=#50f00e"/>
      </div>
    </DemoItem>

    <DemoItem label="readonly" desc="当 :readonly=true 时，元素仍然可以获取焦点" notFlex>
      <div class="demo-padding-10 demo-width-full">
        <div class="demo-margin-v-10">
          <ImButton @click="readonly=!readonly">readonly={{readonly}}</ImButton>
          <ImButton @click="onResetReadonly">清空值</ImButton>
        </div>
        <div class="demo-margin-v-10">
          <ImInputClearable :readonly="readonly" @focus="onFocusReadonly" v-model="readonlyValue"
                   placeholder="readonly on-focus"/>
          <ImInputClearable :readonly="readonly" radius v-model="readonlyValue" placeholder="radius"/>
          <ImInputClearable :readonly="readonly" color="danger" v-model="readonlyValue" placeholder="color=danger"/>
        </div>
      </div>
      <div class="demo-padding-10 input-bg">
        <ImInputClearable :readonly="readonly" ghost v-model="readonlyValue" placeholder="ghost"/>
        <ImInputClearable :readonly="readonly" ghost color="danger" v-model="readonlyValue" placeholder="ghost color=danger"/>
        <ImInputClearable :readonly="readonly" ghost color="#508e24" v-model="readonlyValue" placeholder="ghost color=#508e24"/>
      </div>
      <div class="demo-padding-10 input-bg">
        <ImInputClearable :readonly="readonly" ghost color="primary" v-model="readonlyValue" placeholder="ghost color=primary"/>
        <ImInputClearable :readonly="readonly" ghost color="info" v-model="readonlyValue" placeholder="ghost color=info"/>
        <ImInputClearable :readonly="readonly" ghost color="#5e08ee" v-model="readonlyValue" placeholder="ghost color=#5e08ee"/>
      </div>
      <div class="demo-padding-10 input-bg">
        <ImInputClearable :readonly="readonly" radius ghost color="warn" v-model="readonlyValue"
                 placeholder="radius ghost color=warn"/>
        <ImInputClearable :readonly="readonly" radius ghost color="base" v-model="readonlyValue"
                 placeholder="radius ghost color=base"/>
        <ImInputClearable :readonly="readonly" radius ghost color="#50f00e" v-model="readonlyValue"
                 placeholder="radius ghost color=#50f00e"/>
      </div>
    </DemoItem>

    <DemoItem label="disabled" notFlex>
      <template #desc>
        当 :disabled=true 时，元素仍然不可获取焦点，注意与 readonly 的区别
      </template>
      <div class="demo-padding-10 demo-width-full">
        <div class="demo-margin-v-10">
          <ImButton @click="disabled=!disabled">disabled={{disabled}}</ImButton>
          <ImButton @click="onResetDisabled">清空值</ImButton>
        </div>
        <div class="demo-margin-v-10">
          <ImInputClearable :disabled="disabled" @focus="onFocusDisabled" v-model="disabledValue"
                   placeholder="disabled on-focus"/>
          <ImInputClearable :disabled="disabled" radius v-model="disabledValue" placeholder="radius"/>
          <ImInputClearable :disabled="disabled" color="danger" v-model="disabledValue" placeholder="color=danger"/>
        </div>
      </div>
      <div class="demo-padding-10 input-bg">
        <ImInputClearable :disabled="disabled" ghost v-model="disabledValue" placeholder="ghost"/>
        <ImInputClearable :disabled="disabled" ghost color="danger" v-model="disabledValue" placeholder="ghost color=danger"/>
        <ImInputClearable :disabled="disabled" ghost color="#508e24" v-model="disabledValue" placeholder="ghost color=#508e24"/>
      </div>
      <div class="demo-padding-10 input-bg">
        <ImInputClearable :disabled="disabled" ghost color="primary" v-model="disabledValue" placeholder="ghost color=primary"/>
        <ImInputClearable :disabled="disabled" ghost color="info" v-model="disabledValue" placeholder="ghost color=info"/>
        <ImInputClearable :disabled="disabled" ghost color="#5e08ee" v-model="disabledValue" placeholder="ghost color=#5e08ee"/>
      </div>
      <div class="demo-padding-10 input-bg">
        <ImInputClearable :disabled="disabled" radius ghost color="warn" v-model="disabledValue"
                 placeholder="radius ghost color=warn"/>
        <ImInputClearable :disabled="disabled" radius ghost color="base" v-model="disabledValue"
                 placeholder="radius ghost color=base"/>
        <ImInputClearable :disabled="disabled" radius ghost color="#50f00e" v-model="disabledValue"
                 placeholder="radius ghost color=#50f00e"/>
      </div>
    </DemoItem>
  </div>
</template>
<script>
  /* eslint-disable */
  import {ImInput, ImInputClearable} from '../../packages/input';
  import {ImButton} from '../../packages/button';
  import {autoColorValid} from '../../utils/validator';
  import {getRandomColor} from '../util';

  const colors = ImInput.props.color.validator.colors;
  const sizes = ImInput.props.size.validator.sizes;

  export const InputClearable = {
    name: 'InputClearable',
    components: {ImInput, ImButton, ImInputClearable},
    data() {
      return {
        colors: [...colors],
        sizes: [...sizes],

        colorValue: null,
        colorValueInput: null,

        sizeValue: null,

        inputBaseValue: null,
        inputGhostValue: '初始值',
        value: '可编辑性输入框值',

        viewonly: false,
        viewonlyValue: 'viewonly',

        readonly: false,
        readonlyValue: 'readonly',

        disabled: false,
        disabledValue: 'disabled',
      };
    },
    computed: {
      viewonlyClass() {
        return {'transparent-bd': this.viewonlyTransparentBd};
      },
    },
    watch:{
      colorValueInput(now, old){
        if (now && now !== old && autoColorValid.isOptional(now)) {
          this.colorValue = now;
        } else if (!now) {
          this.colorValue = null;
        }
      }
    },
    methods: {
      onResetViewonly() {
        this.viewonlyValue = this.viewonlyValue ? '' : 'viewonly';
      },
      onFocusReadonly() {
        console.log(`================: readonly focus, this.readonly=${this.readonly}`);
      },
      onResetReadonly() {
        this.readonlyValue = this.readonlyValue ? '' : 'readonly';
      },
      onFocusDisabled() {
        console.log(`================: disabled focus, this.disabled=${this.disabled}`);
      },
      onResetDisabled() {
        this.disabledValue = this.disabledValue ? '' : 'disabled';
      },
      onRandomColor() {
        this.colorValueInput = getRandomColor();
      },
    },
  };
  export default InputClearable;
</script>
<style scoped lang="scss">
  .input-bg {
    background: #DDD;
  }
</style>
