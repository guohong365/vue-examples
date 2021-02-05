<template>
  <div :class="['company-selector-wrapper', selected ? 'active' : '']">
    <div class="company-selector">
      <div v-text="name"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CompanyItem",
  props: {
    name: String
  },
  data() {
    return {
      selected: false
    };
  }
};
</script>
