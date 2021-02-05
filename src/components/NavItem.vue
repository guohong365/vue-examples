<template>
  <li :class="[position, active]" @click="switchToMe" v-text="text"></li>
</template>
<script>
export default {
  name: "NavItem",
  props: {
    id: { type: Number, reuqired: true },
    position: { type: String, default: "left", required: false },
    text: { type: String, required: true }
  },
  data() {
    return { active: false };
  },
  methods: {
    setActive(isActive) {
      this.active = isActive ? "active" : "";
    },
    switchToMe() {
      console.info(`in NavItem : clicked [${this.id},${this.text}]`);
      this.$emit("item-clicked", this.id);
    }
  }
};
</script>
