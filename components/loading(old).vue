<template lang="html">
  <transition>
    <div class="page-loader" v-show="loading"></div>
  </transition>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    test: 5
  }),
  methods: {
    start() {
      this.loading = true;
      this.$store.dispatch("updateLoadingStatus", true);
      this.$store.dispatch("clearTimeAction");
    },
    finish() {
      this.$store.dispatch(
        "setTimeAction",
        setTimeout(() => {
          this.loading = false;
          this.$store.dispatch("updateLoadingStatus", false);
        }, 500)
      );
      /*setTimeout(() => {
                    this.loading = false;
                    this.$store.dispatch('updateLoadingStatus', false);
                }, 1000)*/
    }
  }
};
</script>

<style scoped>
.page-loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background: #fff;
  opacity: 0;
}
</style>
