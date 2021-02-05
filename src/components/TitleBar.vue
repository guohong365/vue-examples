<template>
  <div class="header">
    <div class="title" v-text="title"></div>
  </div>
</template>

<script>
export default { name: "TitleBar", props: { title: String } };
</script>

<style lang="stylus" scoped>
.header {
  width: 100%;
  height: 60px;
  background: url('../assets/images/title.png') no-repeat;
  background-size: 100% 100%;
}

.title {
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 2.5em;
}
</style>
