<template>
  <div>
    <full-screen-switch />
    <page-title-bar title="昆明市交运集团大数据分析系统" />
    <nav-bar
      ref="navbar"
      @nav-selected="onNavChanged"
      :items="navItems"
      :selectedItem="current"
    />
    <main-tab ref="tabs" :activePage="current" />
  </div>
</template>
<script>
import PageTitleBar from "./components/PageTitleBar.vue";
import NavBar from "./components/NavBar.vue";
import MainTab from "./components/TabCtrl.vue";
import FullScreenSwitch from "./components/FullScreenSwitch.vue";
export default {
  name: "App",
  data() {
    return {
      current: 1,
      navItems: [
        { id: 0, position: "left", text: "经营情况总览" },
        { id: 1, position: "left", text: "各地经营状况" },
        { id: 3, position: "right", text: "经营预测" },
        { id: 2, position: "right", text: "对比分析" }
      ]
    };
  },
  mounted() {
    this.current = 0;
  },
  methods: {
    onNavChanged(to) {
      this.current = to;
    }
  },
  components: { PageTitleBar, NavBar, MainTab, FullScreenSwitch }
};
</script>
<style lang="stylus">
@font-face {
  font-family: dataNumber;
  src: url('./assets/fonts/data_number.ttf');
}

* {
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
}

body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #FFF;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-image: url('./assets/images/bg.jpg');
}

a {
  text-decoration: none;
}
table {
    border-spacing: 0px;
    border-collapse: collapse;
}

thead {
    font-weight: bold;
}

th {
    text-align: center;
}
.left {
  float: left;
}

.right {
  float: right;
}

.hidden {
  display: none;
}

.column {
  height: 100%;
}

.row {
  width: 100%;
}

.full {
  height: 100%;
  width: 100%;
}

.bottom {
  bottom: 0px;
  position: absolute;
}

.top {
  top: 0px;
  position: absolute;
}

.block {
  display: block;
}

.clip {
  overflow: clip;
}

.col-xs-1, .col-xs-10, .col-xs-11, .col-xs-12, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9 {
  position: relative;
  float: left;
  padding: 4px;
}

.col-xs-12 {
  width: 100%;
}

.col-xs-11 {
  width: 91.66666667%;
}

.col-xs-10 {
  width: 83.33333333%;
}

.col-xs-9 {
  width: 75%;
}

.col-xs-8 {
  width: 66.66666667%;
}

.col-xs-7 {
  width: 58.33333333%;
}

.col-xs-6 {
  width: 50%;
}

.col-xs-5 {
  width: 41.66666667%;
}

.col-xs-4 {
  width: 33.33333333%;
}

.col-xs-3 {
  width: 25%;
}

.col-xs-2 {
  width: 16.66666667%;
}

.col-xs-1 {
  width: 8.33333333%;
}

.thin-border {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border: 1px #0174f5 solid;
  padding: 1px;
  position: relative;
}

.thick-border {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border: 2px solid #016ae0;
  position: relative;
}
</style>
