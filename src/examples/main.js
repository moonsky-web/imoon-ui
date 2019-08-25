import Vue from 'vue';
import App from './App.vue';
import router from './router';
import {eachArray} from '../utils';
/*
 * 自定义全局组件
 */
import {DemoContainer} from './common/DemoContainer';
import {DemoItem} from './common/DemoItem';
import {DemoSubItem} from './common/DemoSubItem';

import '../index.scss';

eachArray([
  DemoContainer,
  DemoItem,
  DemoSubItem,
], component => {
  Vue.component(component.name, component);
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
