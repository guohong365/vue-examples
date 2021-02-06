<template>
  <div class="thin-border" :style="height ? { height: height } : {}">
    <div class="thick-border">
      <div class="sub-title-box">
        <div class="sub-title">收入</div>
      </div>
      <div>
        <div class="info-box">
          <div class="message">
            <span class="label">当日收入：</span>
            <span class="big-number block">{{ daily }}</span>
          </div>
          <div class="message">
            <span class="label">当月收入：</span>
            <span class="data-number">{{ montly }}</span>
          </div>
          <div class="message">
            <span class="label">当年收入：</span>
            <span class="data-number">{{ yearly }}</span>
          </div>
          <div class="message">
            <span class="label">累计收入：</span>
            <span class="data-number">{{ accum }}</span>
          </div>
        </div>
        <div
          class="chart-box right bottom"
          style="height: 60%;width: 60%;"
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Summary",
  props: {
    daily: { type: String, default: "100" },
    montly: { type: String, default: "1000" },
    yearly: { type: String, default: "10000" },
    accum: { type: String, default: "1,000,000" },
    height: { type: String, default: "50%" }
  }
};
</script>
<style lang="stylus">
.sub-title-box {
  width: 100%;
  height: 20px;
  background-color: rgba(17, 25, 69, 0.1);
  border-radius: 11px 11px 0px 0px;
}

.sub-title-box+div {
  position: absolute;
  top: 20px;
  bottom: 0;
  left: 0;
  right: 0;
}

.sub-title {
  left: auto;
  right: auto;
  top: 2px;
  width: 60%;
  margin: auto;
  text-align: center;
  vertical-align: middle;
  font-size: 14px;
  font-family: 'Microsoft YaHei';
  font-weight: bold;
  border-radius: 4px 4px 24px 24px;
  background-color: #3566E3BC;
  position: relative;
}

.info-box {
  position: relative;
  padding: 5px;
}

.info-box>.message {
  margin: 10px;
}

.label {
  font-size: 18px;
}

.data-message {
  font-size: 24px;
}

.data-number {
  font-family: dataNumber;
  font-size: 24px;
  color: #10a4db;
}

.big-number {
  text-align: center;
  font-size: 36px;
  font-family: dataNumber;
}

.chart-box {
  width: 100%;
  height: 100%;
  padding: 5px;
}
</style>
