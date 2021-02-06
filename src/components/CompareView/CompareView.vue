<template>
  <div v-show="actived">
    <div class="col-xs-12 column">
      <div class="thin-border">
        <div class="thick-border">
          <div class="sub-title-box">
            <div class="sub-title">对比分析</div>
          </div>
          <div>
            <div class="chart-box"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CompareView",
  props: {
    id: Number,
    activePage: Number
  },
  computed: {
    actived() {
      return this.id === this.activePage;
    }
  }
};
</script>
