<template>
  <div class="page-tabs">
    <overview ref="overview" :activePage="activePage" :id="0"></overview>
    <companies-view
      ref="companies"
      :activePage="activePage"
      :id="1"
    ></companies-view>
    <compare-view
      ref="compare"
      v-show="current == 2"
      :companies="compaies"
      :activePage="activePage"
      :id="2"
    ></compare-view>
    <prediction-view
      ref="predicton"
      :activePage="activePage"
      :id="3"
    ></prediction-view>
  </div>
</template>
<script>
import Overview from "./Overview/Overview.vue";
import CompaniesView from "./CompaniesView/CompaniesView.vue";
import CompareView from "./CompareView/CompareView.vue";
import PredictionView from "./PredictionView/PredictionView.vue";

export default {
  name: "TabCtrl",
  props: {
    activePage: { type: Number, required: true, default: 0 }
  },
  data() {
    return {
      compaies: []
    };
  },
  methods: {
    selectPage(pageIndex) {
      this.activePage = pageIndex;
    }
  },
  components: {
    Overview,
    CompaniesView,
    CompareView,
    PredictionView
  }
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
