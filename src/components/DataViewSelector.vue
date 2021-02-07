<template>
  <div id="mainPageType">
    <data-view-selector-item
      v-for="item in options"
      :key="item.id"
      :selectedItem="selected"
      :id="item.id"
      :text="item.name"
      :clazz="item.clazz"
      @item-clicked="onItemClick"
    />
  </div>
</template>

<script>
import DataViewSelectorItem from "./DataViewSelectorItem.vue";
export default {
  components: { DataViewSelectorItem },
  name: "DataViewSelector",
  data() {
    return {
      selected: 0,
      options: [
        { id: 0, clazz: "left", name: "历年" },
        { id: 2, clazz: "right", name: "当月" },
        { id: 1, clazz: "middle", name: "当年" }
      ]
    };
  },
  methods: {
    onItemClick(id) {
      this.$emit("data-view-changed", id);
      this.selected = id;
    }
  }
};
</script>

<style lang="stylus">
#mainPageType{
	width: 180px;
	display: block;
	height: 26px;
	background-color:  #0b7ff3;
	position: absolute;
	border-radius: 5px;
	right: 4px;
  left :auto;
}

#mainPageType>div {
	width: 33.3%;
	height: 100%;
	text-align: center;
	color: #FFF;
	position: relative;
}
#mainPageType> .left{
	border-radius: 5px 0px 0px 5px;
	border-width: 2px 1px 2px 2px;
	border-style: solid;
	float: left;
}
#mainPageType> .right{
	border-radius: 0px 5px 5px 0px;
	border-width: 2px 2px 2px 1px;
	border-style: solid;
	float: right;
}
#mainPageType> .middle{
	border-width: 2px 1px 2px 1px;
	border-style: solid;
	float: right;
}
#mainPageType > .active{
	background-color: darkblue;
}
#mainPageType a {
	text-decoration: none;
	color: #FFF;
	cursor: pointer;
}
#mainPageType a:link, #mainPageType a:visited{
	color: #FFF;
}
#mainPageType a:focus, #mainPageType a:active, #mainPageType a:hover, #mainPageType .active a{
	color: red;
}
</style>
