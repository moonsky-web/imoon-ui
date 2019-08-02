<template>
  <div>
    <div class="demo-caption">基本演示</div>
    <div class="demo-gaps">
      <ImButton>Button</ImButton>
      <ImButton radius>Radius</ImButton>
      <ImButton outline>Outline</ImButton>
      <ImButton dashed>Dashed</ImButton>
      <ImButton dashed outline>Dashed Outline</ImButton>
    </div>
    <div class="demo-gaps demo-bg">
      <ImButton>Button</ImButton>
      <ImButton radius>Radius</ImButton>
      <ImButton outline>Outline</ImButton>
      <ImButton dashed>Dashed</ImButton>
      <ImButton dashed outline>Dashed Outline</ImButton>
      <ImButton ghost>Ghost</ImButton>
      <ImButton ghost dashed>Ghost Dashed</ImButton>
      <ImButton dashed outline ghost>Dashed Outline Ghost</ImButton>
    </div>
    <div class="demo-caption">预定义多种颜色</div>
    <div class="demo-gaps">
      <ImButton>Primary</ImButton>
      <ImButton color="success">Success</ImButton>
      <ImButton color="base">Base</ImButton>
      <ImButton color="info">Info</ImButton>
      <ImButton color="warn">Warn</ImButton>
      <ImButton color="danger">Danger</ImButton>
    </div>
    <div class="demo-gaps demo-bg">
      <ImButton ghost>Primary</ImButton>
      <ImButton color="success" ghost>Success</ImButton>
      <ImButton color="base" ghost>Base</ImButton>
      <ImButton color="info" ghost>Info</ImButton>
      <ImButton color="warn" ghost>Warn</ImButton>
      <ImButton color="danger" ghost>Danger</ImButton>
    </div>
    <div class="demo-caption">不同尺寸</div>
    <div class="demo-gaps">
      <ImButton size="auto" color="danger" style="font-size: 20px;">Danger auto</ImButton>
      <ImButton size="auto" color="#282c34" style="font-size: 20px;">282c34 auto</ImButton>
      <ImButton size="lg">Primary lg</ImButton>
      <ImButton size="md" color="base">Base md</ImButton>
      <ImButton size="sm" color="info">Info sm</ImButton>
      <ImButton size="xs" color="warn">Warn xs</ImButton>
      <ImButton size="auto" color="#282c34">#282c34 xs</ImButton>
    </div>
    <div class="demo-caption">弹性尺寸</div>
    <div class="demo-gaps">
      <ImButton size="md">Primary</ImButton>
      <ImButton size="auto">Primary auto</ImButton>
      <ImButton size="auto" color="warn">Warn</ImButton>
      <ImButton size="auto" color="#282c34">#282c34</ImButton>
      <ImButton size="auto" style="font-size: 18px;">#282c34 18px</ImButton>
      <ImButton size="auto" style="font-size: 18px;" color="warn">#282c34 18px</ImButton>
      <ImButton size="auto" style="font-size: 18px;" color="#282c34">#282c34 18px</ImButton>
    </div>
    <div class="demo-caption">自定义颜色</div>
    <div class="demo-gaps">
      <ImButton color="#ffe484">#ffe484</ImButton>
      <ImButton color="#282c34">#282c34</ImButton>
      <ImButton color="#485">#485</ImButton>
      <ImButton color="#c34">#c34</ImButton>
      <ImButton color="#45">#45</ImButton>
      <ImButton color="rgb(125,148,252)">rgb(125,148,252)</ImButton>
      <ImButton color="rgba(125,148,252,0.3)">rgba(125,148,252,0.3)</ImButton>
    </div>
    <div class="demo-caption">自定义颜色多种样式</div>
    <div class="demo-gaps">
      <ImButton color="#ffe484" radius>#ffe484</ImButton>
      <ImButton color="#282c34" radius>#282c34</ImButton>
      <ImButton color="#282c34" radius outline>#282c34</ImButton>
      <ImButton color="#282c34" radius dashed>#282c34</ImButton>
      <ImButton color="rgb(125,148,252)">rgb(125,148,252)</ImButton>
      <ImButton color="rgba(125,148,252,0.3)">rgba(125,148,252,0.6)</ImButton>
    </div>
    <div class="demo-gaps demo-bg">
      <ImButton color="#ffe484" radius ghost>#ffe484</ImButton>
      <ImButton color="#282c34" radius ghost>Ghost #282c34</ImButton>
      <ImButton color="#282c34" radius outline ghost>Ghost #282c34</ImButton>
      <ImButton color="#282c34" radius dashed>#282c34</ImButton>
      <ImButton color="rgb(125,148,252)" ghost>Ghost rgb(125,148,252)</ImButton>
      <ImButton color="rgba(125, 148, 252, 0.3)" ghost>Ghost rgba(125,148,252,0.6)</ImButton>
    </div>
    <div class="demo-caption">横向铺满按钮演示</div>
    <div class="demo-gaps">
      <ImButton size="xs" block>Block</ImButton>
      <ImButton size="sm" block>Block</ImButton>
      <ImButton block>Block</ImButton>
      <ImButton size="lg" block>Block</ImButton>
      <imButton
        block disabled
        class="demo-btn-class"
        color="rgb(125,148,252)"
        @click="onClick()"
      >Block Disabled
      </imButton>
      <imButton
        block color="warn"
        class="demo-btn-class"
        style="font-size: 30px;"
        @click="onClick()"
        size="auto"
        :class="{'demo-btn-class23': true}"
      >Block Disabled
      </imButton>
    </div>
  </div>
</template>
<script>
  /* eslint-disable */
  import {ImButton} from '../../packages/button';

  import Button from './button';

  export default {
    name: 'ImButtonsDemo',
    components: {ImButton},
    methods: {
      onStopClick() {
        console.log('ImButtonDemo stop...');
      },
      onClick() {
        console.log('ImButtonDemo click ...');
      },
      onClickBaidu() {
        console.log('ImButtonDemo baidu prevent and stop...');
      },
      onMouseover() {
        console.log('ImButtonDemo mouseover ...');
      },
    },
  };
</script>
