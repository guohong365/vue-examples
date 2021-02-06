<template>
  <div :class="outterClass" :style="height ? { height: height } : {}">
    <div :class="innerClass"></div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "FrameBox",
  props: {
    height: { type: String, required: false, default: "" },
    clazz: { type: [String], required: false, default: () => [] },
    showBorder: { type: Boolean, required: false, default: true },
    doubleBorder: { type: Boolean, required: false, defualt: true }
  },

  computed: {
    outterClass() {
      let arr = [];
      if (this.showBorder) arr.push("thin-border");
      if (this.clazz) {
        arr.push(this.clazz);
      }
      return arr;
    },
    innerClass() {
      if (this.showBorder && this.doubleBorder) return "thick-boder";
      return "";
    }
  }
};
</script>

<style></style>
