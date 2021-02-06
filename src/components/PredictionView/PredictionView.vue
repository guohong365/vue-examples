<template>
  <div v-show="actived">
    <div class="col-xs-12 column">
      <div class="thin-border column">
        <div class="thick-border column"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Predictioniew",
  props: {
    id: Number,
    activePage: Number
  },
  computed: {
    actived() {
      return this.activePage == this.id;
    }
  }
};
</script>

<style></style>
