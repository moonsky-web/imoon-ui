<template>
  <div>
    <div class="demo-caption">基础演示：不同颜色</div>
    <div class="demo-gaps">
      <imInput v-model="inputColor"/>
      <imInput color="primary" placeholder="primary" v-model="inputColor"/>
      <imInput color="info" placeholder="info" v-model="inputColor"/>
      <imButton>按钮</imButton>
      <imButton color="danger">按钮</imButton>
    </div>
    <div class="demo-gaps">
      <imInput color="base" placeholder="base" v-model="inputColor"/>
      <imInput color="warn" placeholder="warn" v-model="inputColor"/>
      <imInput color="danger" placeholder="danger" v-model="inputColor"/>
      <imButton>按钮</imButton>
      <imButton color="warn">按钮</imButton>
    </div>
    <div class="demo-gaps">
      <imInput color="#adef24" placeholder="#adef24" v-model="inputColor"/>
      <imInput color="#563d7c" placeholder="#563d7c" v-model="inputColor"/>
      <imInput color="#ffe484" placeholder="#ffe484" v-model="inputColor"/>
      <imButton>按钮</imButton>
      <imButton color="info">按钮</imButton>
    </div>
    <div class="demo-caption">基础演示：不同尺寸</div>
    <div class="demo-gaps">
      <imInput v-model="inputSize" size="lg"/>
      <imInput v-model="inputSize"/>
      <imInput v-model="inputSize" size="sm"/>
      <imInput v-model="inputSize" size="xs"/>
    </div>
    <div class="demo-gaps">
      <imInput color="warn" v-model="inputSize" size="lg"/>
      <imInput color="warn" v-model="inputSize"/>
      <imInput color="warn" v-model="inputSize" size="sm"/>
      <imInput color="warn" v-model="inputSize" size="xs"/>
    </div>
    <div class="demo-gaps">
      <imInput color="danger" v-model="inputSize" size="lg"/>
      <imInput color="danger" v-model="inputSize"/>
      <imInput color="danger" v-model="inputSize" size="sm"/>
      <imInput color="danger" v-model="inputSize" size="xs"/>
    </div>
    <div class="demo-gaps">
      <imInput color="base" v-model="inputSize" size="lg"/>
      <imInput color="base" v-model="inputSize" size="lg"/>
      <imInput color="base" v-model="inputSize" size="lg"/>
      <imInput color="base" v-model="inputSize" size="lg"/>
    </div>
    <div class="demo-gaps">
      <imInput color="info" v-model="inputSize"/>
      <imInput color="info" v-model="inputSize"/>
      <imInput color="info" v-model="inputSize"/>
      <imInput color="info" v-model="inputSize"/>
    </div>
    <div class="demo-gaps">
      <imInput color="warn" v-model="inputSize" size="sm"/>
      <imInput color="warn" v-model="inputSize" size="sm"/>
      <imInput color="warn" v-model="inputSize" size="sm"/>
      <imInput color="warn" v-model="inputSize" size="sm"/>
    </div>
    <div class="demo-gaps">
      <imInput color="danger" v-model="inputSize" size="xs"/>
      <imInput color="danger" v-model="inputSize" size="xs"/>
      <imInput color="danger" v-model="inputSize" size="xs"/>
      <imInput color="danger" v-model="inputSize" size="xs"/>
    </div>
    <div class="demo-caption">基础演示：Ghost</div>
    <div class="demo-gaps demo-bg">
      <imInput v-model="inputGhost" ghost color="primary"/>
      <imInput v-model="inputGhost" ghost color="base"/>
      <imInput v-model="inputGhost" ghost color="info"/>
      <imInput v-model="inputGhost" ghost color="warn"/>
    </div>
    <div class="demo-gaps demo-bg">
      <imInput v-model="inputGhost" ghost color="#adef24"/>
      <imInput v-model="inputGhost" ghost color="#563d7c"/>
      <imInput v-model="inputGhost" ghost color="#ffe484"/>
      <imInput v-model="inputGhost" ghost color="warn"/>
    </div>
    <div class="demo-caption">基础演示：Disabled</div>
    <div class="demo-gaps">
      <imInput v-model="inputDisabled" disabled color="primary"/>
      <imInput v-model="inputDisabled" disabled color="base"/>
      <imInput v-model="inputDisabled" disabled color="info"/>
      <imInput v-model="inputDisabled" disabled color="warn"/>
    </div>
    <div class="demo-gaps">
      <imInput v-model="inputDisabled" disabled color="#adef24"/>
      <imInput v-model="inputDisabled" disabled color="#563d7c"/>
      <imInput v-model="inputDisabled" disabled color="#ffe484"/>
      <imInput v-model="inputDisabled" disabled color="warn"/>
    </div>
    <div class="demo-gaps demo-bg">
      <imInput v-model="inputDisabled" disabled color="primary"/>
      <imInput v-model="inputDisabled" disabled color="base"/>
      <imInput v-model="inputDisabled" disabled color="info"/>
      <imInput v-model="inputDisabled" disabled color="warn"/>
    </div>
    <div class="demo-gaps demo-bg">
      <imInput v-model="inputDisabled" disabled color="#adef24"/>
      <imInput v-model="inputDisabled" disabled color="#563d7c"/>
      <imInput v-model="inputDisabled" disabled color="#ffe484"/>
      <imInput v-model="inputDisabled" disabled color="warn"/>
    </div>
    <div class="demo-gaps demo-bg">
      <imInput v-model="inputDisabled" disabled ghost color="primary"/>
      <imInput v-model="inputDisabled" disabled ghost color="base"/>
      <imInput v-model="inputDisabled" disabled ghost color="info"/>
      <imInput v-model="inputDisabled" disabled ghost color="warn"/>
    </div>
    <div class="demo-gaps demo-bg">
      <imInput v-model="inputDisabled" disabled ghost color="#adef24"/>
      <imInput v-model="inputDisabled" disabled ghost color="#563d7c"/>
      <imInput v-model="inputDisabled" disabled ghost color="#ffe484"/>
      <imInput v-model="inputDisabled" disabled ghost color="warn"/>
    </div>
    <div class="demo-caption">基础演示：Readonly</div>
    <div class="demo-gaps">
      <imInput v-model="inputReadonly" readonly color="primary"/>
      <imInput v-model="inputReadonly" readonly color="base"/>
      <imInput v-model="inputReadonly" readonly color="info"/>
      <imInput v-model="inputReadonly" readonly color="warn"/>
    </div>
    <div class="demo-gaps">
      <imInput v-model="inputReadonly" readonly color="#adef24"/>
      <imInput v-model="inputReadonly" readonly color="#563d7c"/>
      <imInput v-model="inputReadonly" readonly color="#ffe484"/>
      <imInput v-model="inputReadonly" readonly color="warn"/>
    </div>
    <div class="demo-gaps demo-bg">
      <imInput v-model="inputReadonly" readonly color="primary"/>
      <imInput v-model="inputReadonly" readonly color="base"/>
      <imInput v-model="inputReadonly" readonly color="info"/>
      <imInput v-model="inputReadonly" readonly color="warn"/>
    </div>
    <div class="demo-gaps demo-bg">
      <imInput v-model="inputReadonly" readonly color="#adef24"/>
      <imInput v-model="inputReadonly" readonly color="#563d7c"/>
      <imInput v-model="inputReadonly" readonly color="#ffe484"/>
      <imInput v-model="inputReadonly" readonly color="warn"/>
    </div>
    <div class="demo-gaps demo-bg">
      <imInput v-model="inputReadonly" readonly ghost color="primary"/>
      <imInput v-model="inputReadonly" readonly ghost color="base"/>
      <imInput v-model="inputReadonly" readonly ghost color="info"/>
      <imInput v-model="inputReadonly" readonly ghost color="warn"/>
    </div>
    <div class="demo-gaps demo-bg">
      <imInput v-model="inputReadonly" readonly ghost color="#adef24"/>
      <imInput v-model="inputReadonly" readonly ghost color="#563d7c"/>
      <imInput v-model="inputReadonly" readonly ghost color="#ffe484"/>
      <imInput v-model="inputReadonly" readonly ghost color="warn"/>
    </div>
    <div class="demo-caption">基础演示：Viewonly</div>
    <div class="demo-gaps">
      <imInput v-model="inputViewonly"/>
      <imInput v-model="inputViewonly" viewonly/>
      <imInput v-model="inputViewonly" readonly/>
      <imInput v-model="inputViewonly" disabled/>
    </div>
    <div class="demo-gaps">
      <imInput v-model="inputViewonly" disabled color="primary"/>
      <imInput v-model="inputViewonly" readonly color="base"/>
      <imInput v-model="inputViewonly" viewonly color="info"/>
      <imInput v-model="inputViewonly" viewonly color="warn"/>
    </div>
    <div class="demo-gaps">
      <imInput v-model="inputViewonly" disabled color="#adef24"/>
      <imInput v-model="inputViewonly" readonly color="#563d7c"/>
      <imInput v-model="inputViewonly" viewonly color="#ffe484"/>
      <imInput v-model="inputViewonly" viewonly color="warn"/>
    </div>
    <div class="demo-gaps demo-bg">
      <imInput v-model="inputViewonly" disabled color="primary"/>
      <imInput v-model="inputViewonly" readonly color="base"/>
      <imInput v-model="inputViewonly" viewonly color="info"/>
      <imInput v-model="inputViewonly" viewonly color="warn"/>
    </div>
    <div class="demo-gaps demo-bg">
      <imInput v-model="inputViewonly" disabled color="#adef24"/>
      <imInput v-model="inputViewonly" readonly color="#563d7c"/>
      <imInput v-model="inputViewonly" viewonly color="#ffe484"/>
      <imInput v-model="inputViewonly" viewonly color="warn"/>
    </div>
    <div class="demo-gaps demo-bg">
      <imInput v-model="inputViewonly" disabled ghost color="primary"/>
      <imInput v-model="inputViewonly" readonly ghost color="base"/>
      <imInput v-model="inputViewonly" viewonly ghost color="info"/>
      <imInput v-model="inputViewonly" viewonly ghost color="warn"/>
    </div>
    <div class="demo-gaps demo-bg">
      <imInput v-model="inputViewonly" disabled ghost color="#adef24"/>
      <imInput v-model="inputViewonly" readonly ghost color="#563d7c"/>
      <imInput v-model="inputViewonly" viewonly ghost color="#ffe484"/>
      <imInput v-model="inputViewonly" viewonly ghost color="warn"/>
    </div>
  </div>
</template>
<script>
  /* eslint-disable */
  import {ImInput} from '../../packages/input';
  import {ImButton} from '../../packages/button';

  export default {
    name: 'ImInputDemo',
    components: {ImInput, ImButton},
    data() {
      return {
        inputValue: '123',
        inputColor: 'color',
        inputSize: 'size',
        inputGhost: 'ghost',
        inputDisabled: 'disabled',
        inputReadonly: 'readonly',
        inputViewonly: 'viewonly',
      };
    },
  };
</script>
