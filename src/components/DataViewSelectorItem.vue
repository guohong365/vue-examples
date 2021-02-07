<template>
  <div :class="[clazz, actived ? 'active' : '']">
    <a @click="onClicked" v-text="text"></a>
  </div>
</template>
<script>
export default {
  name: "DataViewSelectorItem",
  props: {
    id: Number,
    selectedItem: Number,
    text: String,
    clazz: String
  },
  computed: {
    actived() {
      return this.selectedItem == this.id;
    }
  },
  methods: {
    onClicked() {
      this.$emit("item-clicked", this.id);
    }
  }
};
</script>
