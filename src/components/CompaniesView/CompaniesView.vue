<template>
  <div v-show="actived">
    <div class="col-xs-12 column">
      <div class="thin-border column">
        <div class="thick-border column">
          <div class="sub-title-box">
            <div class="sub-title">{{ current }}经营情况</div>
          </div>
          <div>
            <div class="col-xs-1 column">
              <div class="company-selector-box chart-background">
                <company-item
                  ref="companyItems"
                  v-for="company in companies"
                  :name="company"
                  :key="company"
                  :selectedItem="current"
                  v-on:on-selected="onCompanySelected(company)"
                ></company-item>
              </div>
            </div>
            <div class="col-xs-9 column">
              <div class="chart-box third">
                <div id="incomeCharts" class="conuty-chart-line"></div>
              </div>
              <div class="chart-box third">
                <div id="serviceCharts" class="conuty-chart-line"></div>
              </div>
              <div class="chart-box third">
                <div id="memberCharts" class="conuty-chart-line"></div>
              </div>
            </div>
            <div class="col-xs-2 column">
              <div class="company-selector-box chart-background">
                <div
                  class="info-box"
                  style="margin-left: 10px; margin-right: 10px;"
                >
                  <span class="label">运营车辆：</span>
                  <span class="data-number">128辆</span>
                </div>
                <div id="vechicleChart"></div>
                <div
                  class="info-box"
                  style="margin-left: 10px; margin-right: 10px;"
                >
                  <span class="label">员工:</span>
                  <span class="data-number">323人</span>
                </div>
                <div id="employeeChart"></div>
                <div
                  class="info-box"
                  style="margin-left: 10px; margin-right: 10px;"
                >
                  <div>
                    <span class="label">纯利润：</span>
                    <span class="data-number">423万元</span>
                  </div>
                  <div>
                    <span class="label">人均纯利：</span>
                    <span class="data-number">1.12万元</span>
                  </div>
                  <div>
                    <span class="label">人均成本：</span>
                    <span class="data-number">2.53万元</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CompanyItem from "../CompareView/CompanyItem.vue";
export default {
  components: { CompanyItem },
  name: "CompaniesView",
  props: {
    id: Number,
    activePage: Number
  },
  computed: {
    actived() {
      return this.id == this.activePage;
    }
  },
  data() {
    return {
      companies: [
        "安宁公交",
        "东川公交",
        "元谋公交",
        "禄劝公交",
        "景洪公交",
        "嵩明公交"
      ],
      current: ""
    };
  },
  mounted() {
    this.current = this.companies[0];
  },
  methods: {
    onCompanySelected(name) {
      console.log(`selected company:[${name}]`);
      this.current = name;
    }
  }
};
</script>
<style lang="stylus">
.chart-background {
    background-color: #10a4db1f;
}

.company-selector-box {
    border-radius: 10px;
    height: 100%;
    width: 100%;
}

.company-selector-wrapper {
    width: 100%;
    height: 34px;
    padding: 5px;
}

.company-selector {
    text-align: center;
    width: 100%;
    height: max-content;
    opacity: 0.8;
    border-radius: 8px;
}

.company-selector:hover {
    opacity: 1;
    background-color: #016ae080;
}

.company-selector-wrapper.active>.company-selector {
    background-color: #016ae0b0;
    border: #FFF8 2px solid;
    opacity: 1;
}

.company-selector-wrapper.active>.company-selector>div {
    color: red;
}
</style>
