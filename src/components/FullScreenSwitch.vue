<template>
  <div
    :class="['fullScreenSwitch', currentState ? 'restore' : '']"
    @click="toggleFullScreen"
    v-text="currentState ? '退出' : '全屏'"
  ></div>
</template>

<script>
/*
import full from "../assets/images/full.png";
import fullLight from "../assets/images/full-light.png";
import normal from "../assets/images/normal.png";
import normalLight from "../assets/images/normal-light.png";
*/
export default {
  props: {
    initState: { type: Boolean, required: false, default: true }
  },
  mounted() {
    this.currentState = this.initState;
  },
  data() {
    return {
      currentState: false
      /*
      images: {
        full: full,
        fullLight: fullLight,
        normal: normal,
        normalLight: normalLight
      }
      */
    };
  },

  methods: {
    toggleFullScreen() {
      this.currentState = !this.currentState;
    }
  }
};
</script>

<style lang="stylus">
.fullScreenSwitch
  width: 30px
  height: 30px
  position: fixed
  top: 10px
  right: 10px
  font-size : 11px
  text-align :center
  vertical-align :middle
  display: flex
  align-items :center
  justify-content :center
  text-align :justify
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-color : #f00
  //background-image: url("../assets/images/full.png");

.fullScreenSwitch.restore
  //background-image: url("../asserts/images/normal.png");
  background-color : #0f0

.fullScreenSwitch.restore:hover
  //background-image: url("../asserts/images/normal-light.png");
  background-color :#f00

.fullScreenSwitch:hover
  //background-image: url("../asserts/images/full-light.png");
  background-color  : #0f0
</style>
