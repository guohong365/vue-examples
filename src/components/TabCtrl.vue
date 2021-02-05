<template>
  <div class="page-tabs">
    <overview ref="overview" :show="current == 0"></overview>
    <companies-view ref="companies" :show="current == 1"></companies-view>
    <compare-view ref="compare" v-show="current == 2"></compare-view>
    <prediction-view ref="predicton" v-show="current == 3"></prediction-view>
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
    current: { type: Number, required: false, default: 0 }
  },
  mounted() {
    this.activePage(0);
  },
  data() {
    return {
      pages: () => {
        this.$refs.overview,
          this.$refs.compaies,
          this.$refs.compare,
          this.$refs.prediction;
      }
    };
  },

  methods: {
    activePage(pageIndex) {
      console.log(this.pages());
      this.pages.forEach(function(page, index) {
        if (pageIndex == index) {
          page.acticed = true;
          this.current = pageIndex;
        } else {
          page.acticed = false;
        }
      });
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
