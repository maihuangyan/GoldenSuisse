<template lang="pug">
  .footerNav
    .footerNav__item(v-for="(path, index) in array" :key="index" @click="changed(index)" :class="{'footerNav__item_active': choosen === index}")
</template>

<script>
export default {
  name: "FooterNav",
  props: ["array", "choosen"],
  methods: {
    changed(index) {
      this.$emit("changed", index);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/_variables.scss";

.footerNav {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 15px 0;

  &__item {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: rgba(160, 160, 160, 0.2);
    margin: 0 2.5px;
    cursor: pointer;

    &_active {
      background-color: $black;
    }
  }
}
</style>
