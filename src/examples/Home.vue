<template>
  <div class="home">
    <div style="padding: 20px;">
      选择一个，查看演示
    </div>

    <div v-show="false">
      <div id="outer1" class="outer">
        <div id="inner1" class="inner">
          <button id="button1" class="target">Target Button 1 默认冒泡</button>
        </div>
      </div>

      <div class="default-gap"></div>

      <div id="outer2" class="outer">
        <div id="inner2" class="inner">
          <button id="button2" class="target">Target Button 2 设置捕获</button>
        </div>
      </div>

      <div class="default-gap"></div>

      <div id="outer3" class="outer">
        <div id="inner3" class="inner">
          <button id="button3" class="target">Target Button 3 设置捕获</button>
        </div>
      </div>

      <div class="default-gap"></div>
    </div>
  </div>
</template>
<script>
  /* eslint-disable */

  function handler(button, innerId, outerId, capture = false) {
    const target = document.querySelector(`#${button}`);
    const inner = document.querySelector(`#${innerId}`);
    const outer = document.querySelector(`#${outerId}`);

    target.addEventListener('click', function () {
      console.log(`${button} 冒泡目标`);
    }, capture);
    inner.addEventListener('click', function (e) {
      console.log(`${innerId} 冒泡 ${innerId}`);
      e.stopPropagation();
    }, capture);
    outer.addEventListener('click', function (e) {
      console.log(`${outerId} 冒泡 ${outerId}: 被阻止冒泡`);
    }, capture);

    return {target, inner, outer};
  }

  export const Home = {
    name: 'ImHome',
  };
  export default Home;
</script>
<style scoped lang="scss">
  .outer {
    padding: 20px;
    background: teal;
  }

  .inner {
    padding: 20px;
    background: #9A6E3A;
  }

  .target {
    display: inline-block;
    padding: 10px 15px;
    background: #07A;
    color: #FFF;
    border: 5px solid #000;
    cursor: pointer;
    transition-duration: .3s;

    &:hover {
      background: lighten(#07A, 6);
    }

    &:active {
      background: darken(#07A, 6);
    }
  }

  .default-gap {
    height: 20px;
  }
</style>
