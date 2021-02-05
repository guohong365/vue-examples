<template>
  <div class="page-tabs">
    <TabPage
      v-for="item in pages"
      :key="item.name"
      :v-show="currentPage === 0"
      :page="item.page"
    />
  </div>
</template>

<script>
import TabPage from "./TabPage";
export default {
  name: "PageTable",
  props: {
    paths: [],
    currentPage: { type: Number, default: 0 }
  },
  components: { TabPage }
};
</script>

<style lang="stylus">
.page-tabs {
  position: absolute;
  top: 100px;
  bottom: 0;
  left: 0;
  right: 0;
}

.page-tabs>div {
  height: 100%;
  padding: 4px;
}
</style>
