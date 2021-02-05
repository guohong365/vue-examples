<template>
  <div class="thin-border" :style="{ height: height }">
    <div class="thick-border">
      <div class="sub-title-box">
        <div class="sub-title" v-text="title"></div>
      </div>
      <div class="info-box" style="height: 90%;">
        <table>
          <thead>
            <tr>
              <th
                v-for="(item, index) in dataset.dimension"
                :key="index"
                v-text="item"
              ></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in dataset.source" :key="item[0]">
              <td>
                <div
                  :class="['rank', 'rank-' + item[0]]"
                  v-text="item[0]"
                ></div>
              </td>
              <td v-text="item[1]"></td>
              <td v-text="item[2]"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    height: { type: String },
    title: { type: String },
    dataset: { type: Object }
  }
};
</script>
<style lang="stylus">

.page-tabs table {
    width: 100%;
    height: 100%;
    font-size: 14px;
}

.page-tabs table th,
.page-tabs table td {
    border: 1px solid #ccc;
    text-align: center;
}

.page-tabs table th {
    background-color: #0174f5;
}

.rank {
    vertical-align: middle;
    background-color: rgb(47,79,79);
}

div.rank {
    width: 18px;
    height: 18px;
    border-radius: 9px;
    text-align: center;
    border-radius: 10px;
    font-weight: bold;
    margin: auto;
}

.rank-1 {
    background-color: rgb(255,0,0);
}

.rank-2 {
    background-color: rgb(255,165,0);
}

.rank-3 {
    background-color: rgb(255,127,80);
}

.rank-4 {
    background-color: rgb(0,255,255);
}

.rank-5 {
    background-color: rgb(0,139,139);
}
</style>
