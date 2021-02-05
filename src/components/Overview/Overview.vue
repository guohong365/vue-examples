<template>
  <div v-show="actived">
    <div class="col-xs-3 column">
      <Summary daily="0" montly="0" yearly="0" accum="0" height="50%" />
      <Summary
        daily="123"
        montly="3303"
        yearly="12320"
        accum="3242350"
        height="50%"
      ></Summary>
    </div>
    <div class="col-xs-6 column">
      <MapChart />
      <HistoryChart />
    </div>
    <div class="col-xs-3 column">
      <RankTable
        v-for="table in tables"
        :key="table.title"
        :height="(100 / tables.length).toFixed(2) + '%'"
        :title="table.title"
        :dataset="table.dataset"
      />
    </div>
  </div>
</template>
<script>
import Summary from "./Summary.vue";
import MapChart from "./MapChart";
import HistoryChart from "../HistoryChart";
import RankTable from "../RankTable";
export default {
  name: "Overview",
  data() {
    return {
      actived: false,
      tables: [
        {
          height: "50%",
          title: "收入排名",
          dataset: {
            dimension: ["排名", "公司", "收入"],
            source: [
              [1, "安宁", "6784001"],
              [2, "景洪", 524060],
              [3, "禄劝", 504000],
              [4, "东川", 135096],
              [5, "嵩明", 9281],
              [6, "元谋", 1104]
            ]
          }
        },
        {
          height: "50%",
          title: "乘客排名",
          dataset: {
            dimension: ["排名", "公司", "人次"],
            source: [
              [1, "安宁", "6784001"],
              [2, "景洪", 524060],
              [3, "禄劝", 504000],
              [4, "东川", 135096],
              [5, "嵩明", 9281],
              [6, "元谋", 1104]
            ]
          }
        },
        {
          height: "50%",
          title: "会员排名",
          dataset: {
            dimension: ["排名", "公司", "人数"],
            source: [
              [1, "安宁", "6784001"],
              [2, "景洪", 524060],
              [3, "禄劝", 504000],
              [4, "东川", 135096],
              [5, "嵩明", 9281],
              [6, "元谋", 1104]
            ]
          }
        }
      ]
    };
  },
  components: {
    Summary,
    MapChart,
    HistoryChart,
    RankTable
  }
};
</script>
