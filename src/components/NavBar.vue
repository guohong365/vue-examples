<template>
  <div class="nav-bar">
    <ul>
      <NavItem
        ref="navItems"
        v-for="item in items"
        :key="item.id"
        v-bind="item"
        v-on:item-clicked="itemClicked($event, key)"
      />
    </ul>
  </div>
</template>
<script>
import NavItem from "./NavItem";
export default {
  name: "NavBar",
  props: {
    init: { type: Number, default: 0, required: false },
    items: { type: Array, default: () => [] }
  },
  data() {
    return {
      current: 0
    };
  },
  mounted() {
    this.current = 0;
    this.$refs.navItems.forEach(function(item, index) {
      if (index == 0) {
        item.setActive(true);
      } else {
        item.setActive(false);
      }
    });
  },
  methods: {
    active(index, sendToParent) {
      if (this.current != index && this.items[index]) {
        let from = -1;
        let _this = this;
        this.items.forEach(function(item) {
          if (item.id == _this.current) {
            from = item.id;
          }
        });
        this.current = index;
        if (from >= 0) {
          this.$refs.navItems[from].setActive(false);
        }
        this.$refs.navItems[this.current].setActive(true);
        if (sendToParent) {
          this.$emit("nav-selected", from, index);
        }
      }
    },
    itemClicked(selected) {
      this.active(selected, true);
    }
  },
  components: { NavItem }
};
</script>
<style lang="stylus" scoped>
.nav-bar {
  width: 100%;
  height: 40px;
}
.nav-bar ul li {
  font-size: 1em;
  font-weight: bold;
  opacity: 0.8;
  padding-top: 8px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 5px;
  cursor: pointer;
  text-shadow: 0 6px 8px #00225b;
}

.nav-bar ul .left {
  margin-left: 3%;
}

.nav-bar ul .right {
  margin-right: 3%;
}

.nav-bar ul li:hover {
  opacity: 1;
}

.nav-bar ul li.active {
  border-bottom: 4px solid #4b8df8;
}
</style>
<style lang="stylus"></style>
