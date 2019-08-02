<template>
  <div id="app">
    <div :style="currentStyle">
      <span>列表：</span>
      <router-link
        class="router-link"
        v-for="(route) of currentRoutes"
        :to="route.path"
        :key="route.path">
        {{route.name}}
      </router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
  export default {
    name: 'App',
    computed: {
      currentRoutes() {
        const {$router: {options: {routes = []} = {}} = {}} = this;
        return routes;
      },
      currentStyle() {
        return 'line-height: 38px; padding-bottom: 10px; border-bottom: 1px solid #ddd;margin-bottom: 10px;';
      },
    },
  };
</script>
<style lang="scss">
  html, head, body, div, span, h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    /*-webkit-font-smoothing: antialiased;*/
    /*-moz-osx-font-smoothing: grayscale;*/
    color: #2C3E50;
    padding: 60px 10px;
    margin-top: 60px;
  }

  .router-link {
    padding: 5px 8px;
    border-radius: 3px;
    color: teal;
    border: 1px solid rgba(0, 128, 128, .5);
    transition-duration: .3s;
    text-decoration: none;

    & + #{&} {
      margin-left: 16px;
    }

    &:hover {
      background: rgba(0, 128, 128, .3);
    }
  }

  .demo-caption {
    padding: 12px 0 8px;
    font-size: 16px;
    font-weight: bolder;
  }

  .demo-gaps {
    margin: 5px 0;
    padding: 10px;
    border: solid 1px #DDD;
  }

  .demo-bg {
    background: #A2A5AA;
  }
</style>
