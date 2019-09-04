<template>
  <div id="app">
    <div class="app-header">

    </div>
    <div class="app-content">
      <div class="app-aside">
        <div class="app-aside-label">列表：</div>
        <div
          class="app-aside-menu"
          :key="routeList.id"
          v-for="(routeList) of currentRoutes">
          <h4>{{routeList.id}}</h4>
          <div
            v-for="route in routeList.routes"
            :key="route.path">
            <router-link
              class="router-link"
              :to="route.path">
              {{getLabel(route)}}
            </router-link>
            <div v-if="hasChildren(route)">
              <router-link
                v-for="child in route.children"
                :key="child.path"
                class="router-link padding-left-plus"
                :to="child.path">
                {{getLabel(child)}}
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="app-main">
        <router-view/>
<!--        <ImBackTop/>-->
      </div>
    </div>
    <div class="app-footer" v-if="false">

    </div>
  </div>
</template>
<script>
  import {ImBackTop} from '../packages/back-top';

  const NONE_OBJ = {}, EMPTY = [];

  function excludeUnnamedRoutes(routes) {

    const len = routes.length, arr = [];

    for (let i = 0; i < len; i++) {
      const route = routes[i];
      if (route.name) {
        arr.push({...route});
      }
    }

    return arr;
  }

  export default {
    name: 'App',
    components: {ImBackTop},
    computed: {
      currentRoutes() {
        const {$router: {options: {routes: sourceRoutes = []} = NONE_OBJ} = NONE_OBJ} = this;
        const routes = excludeUnnamedRoutes(sourceRoutes);

        const length = routes.length, routesObj = {};
        for (let i = 1; i < length; i++) {
          const route = routes[i], {meta: {groupId = '[Rest...]'} = NONE_OBJ} = route;
          let grouped = routesObj[groupId];
          if (!grouped) {
            grouped = routesObj[groupId] = [];
          }
          grouped.push(route);
        }
        const keys = Object.keys(routesObj), len = keys.length, routesArr = [];
        keys.sort();

        for (let i = 0; i < len; i++) {
          const id = keys[i], routes = routesObj[id],
            arr = [], nowLen = routes.length;
          for (let j = 0; j < nowLen; j++) {
            let {children = EMPTY, ...rest} = routes[j];
            arr.push({...rest, children: excludeUnnamedRoutes(children)});
          }
          routesArr.push({id, routes: arr});
        }

        // eslint-disable-next-line
        console.log(routesArr);
        return routesArr;
      },
    },
    methods: {
      hasChildren(route) {
        return route && route.children && route.children.length;
      },
      getLabel(route) {
        const {meta: {title} = NONE_OBJ, name} = route;
        const label = title || name, last = label.charAt(label.length - 1);
        return last === ':' ? label : label;
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
    height: 100vh;
    display: flex;
    flex-direction: column;

    & > .app-header, & > .app-footer {
      height: 60px;
      box-shadow: 0 0 4px #444;
    }

    & > .app-content {
      flex: 1;
      margin: 0 auto;
      max-width: 1080px;
      display: flex;
      overflow-y: hidden;
    }

    & .app-aside {
      display: flex;
      flex-direction: column;
      padding: 10px 0;
      line-height: 38px;
      border-right: 1px solid #AAA;
      margin-bottom: 10px;
      width: 180px !important;
      overflow-y: auto;
    }

    & .app-main {
      padding: 38px;
      width: 900px !important;
      overflow-y: auto;
      box-sizing: border-box;
    }

    & .app-aside-label, & .app-aside-menu {
      padding: 0 10px;
      width: 100%;
      box-sizing: border-box;
    }

    & .app-aside-menu {
      line-height: 32px;
    }

    & .app-aside-label {
      line-height: 48px;
      font-weight: bold;
    }

    & ::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }

    & ::-webkit-scrollbar-thumb:vertical {
      width: 8px;
      background-color: #ddd;
      -webkit-border-radius: 8px;
    }

    & ::-webkit-scrollbar-thumb:vertical:hover {
      background-color: #999999;
    }
  }

  .router-link {
    display: block;
    padding: 0 8px;
    color: teal;
    transition-duration: .2s;
    text-decoration: none;
    font-size: 16px;

    &.padding-left-plus {
      padding-left: 16px;
      font-size: 14px;
    }

    &.router-link-active, &:active {
      background: rgba(0, 128, 128, .1);
    }

    &.router-link-exact-active, &:active {
      background: rgba(0, 128, 128, .3);
    }

    &:hover {
      background: rgba(0, 128, 128, .2);
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

  .demo-flex-1 {
    flex: 1;
  }

  /*
   --------------------------------------------------------------
   width
   --------------------------------------------------------------
   */

  .demo-width-100 {
    width: 100px;
  }

  .demo-width-full {
    width: 100%;
  }

  /*
   --------------------------------------------------------------
   margin
   --------------------------------------------------------------
   */

  .demo-margin-10 {
    margin: 10px;
  }

  .demo-margin-5 {
    margin: 5px;
  }

  .demo-margin-v-10 {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .demo-margin-v-5 {
    margin-top: 5px;
    margin-bottom: 5px;
  }

  .demo-margin-bottom-10 {
    margin-bottom: 10px;
  }

  .demo-margin-top-5 {
    margin-top: 5px;
  }

  /*
   --------------------------------------------------------------
   padding
   --------------------------------------------------------------
   */

  .demo-padding-10 {
    padding: 10px;
  }

  .demo-padding-5 {
    padding: 5px;
  }

  .demo-padding-v-10 {
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .demo-padding-v-5 {
    padding-top: 5px;
    padding-bottom: 5px;
  }

  .demo-padding-h-10 {
    padding-left: 10px;
    padding-right: 10px;
  }

  .demo-padding-h-5 {
    padding-left: 5px;
    padding-right: 5px;
  }

  .demo-padding-bottom-10 {
    padding-bottom: 10px;
  }

  .demo-padding-top-5 {
    padding-top: 5px;
  }

  /*
   --------------------------------------------------------------
   align
   --------------------------------------------------------------
   */

  .demo-align-center {
    text-align: center;
  }

  .demo-align-right {
    text-align: right;
  }

  .demo-default-box {
    @extend .demo-width-100;
    @extend .demo-padding-5;
    @extend .demo-border-box;
    @extend .demo-align-right;
    min-height: 40px;
  }

  /*
   --------------------------------------------------------------
   width
   --------------------------------------------------------------
   */

  .demo-border-box {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
</style>
