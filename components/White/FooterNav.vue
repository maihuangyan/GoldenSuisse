<template lang="pug">
  .footerNav
    nuxt-link.footerNav__item(v-for="(item, index) in array" :key="index" :to="`${prevPageUrl}/${item.path}`" :class="{'footerNav__item_active': $route.path === `${prevPageUrl}/${item.path}`}")
</template>

<script>
export default {
  name: "FooterNav",
  props: ["array"],
  computed: {
    prevPageUrl() {
      let array, final;
      if (this.$route.path.slice(-1) != '/') {
        array = this.$route.path.split('/');
        array.pop();
        final = array.join('/');
      }
      else {
        array = this.$route.path.split('/');
        array.pop();
        array.pop();
        final = array.join('/');
      }
      return final;
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

    &_active {
      background-color: $black;
    }
  }
}
</style>
