<template>
  <li :class="[position, active]" @click="onClicked" v-text="text"></li>
</template>
<script>
export default {
  name: "NavItem",
  props: {
    id: { type: Number, reuqired: true },
    position: { type: String, default: "left", required: false },
    text: { type: String, required: true },
    selectedItem: { type: Number, required: true, default: -1 }
  },
  computed: {
    active: function() {
      return this.selectedItem == this.id ? "active" : "";
    }
  },
  methods: {
    onClicked() {
      this.$emit("item-clicked", this.id);
    }
  }
};
</script>
