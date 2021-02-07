<template>
  <div class="thin-border" style="height: 70%;">
    <div class="thick-border">
      <div class="sub-title-box">
        <div class="sub-title">云南省地图</div>
      </div>
      <data-view-selector v-on:data-view-changed="onDataViewChanged" />
      <div>
        <div class="chart-box"></div>
      </div>
    </div>
  </div>
</template>
<script>
import DataViewSelector from "../DataViewSelector.vue";
export default {
  name: "MapChart",
  methods: {
    onDataViewChanged(index) {
      console.log(`data view changed ${index}`);
    }
  },
  components: {
    DataViewSelector
  }
};
</script>
