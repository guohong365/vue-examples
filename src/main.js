import Vue from "vue";
import echarts from "echarts";
import App from "./App.vue";

Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
