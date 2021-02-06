<template>
  <div
    :class="['company-selector-wrapper', selected ? 'active' : '']"
    @click="onClicked"
  >
    <div class="company-selector">
      <div v-text="name"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CompanyItem",
  props: {
    name: { type: String, required: true },
    selectedItem: { type: String, required: true }
  },
  computed: {
    selected: function() {
      return this.name === this.selectedItem;
    }
  },
  methods: {
    onClicked() {
      this.$emit("on-selected", this.name);
    }
  }
};
</script>
