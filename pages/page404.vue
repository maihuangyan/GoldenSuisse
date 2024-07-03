<template lang="pug">
  .error(:style="{'padding-top': getPaddingTop}")
    .error__404 404 Error.
      br
      |Page not found.
    .error__goHome
      nuxt-link.error__goHome_font(to="/") Go Home
</template>

<script>
export default {
  name: "page404",
  layout: "error404",
  head: {
    title: "Golden Suisse"
  },
  computed: {
    getPaddingTop() {
      if (process.client) return window.innerHeight / 2 + "px";
      else return "35.6%";
    }
  }
};
</script>

<style lang="scss" scoped>
.error {
  background-color: #101010;
  padding: 0 60px 60px 60px;

  &__404 {
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 180px;
    line-height: 89%;
    letter-spacing: -0.04em;
    color: #ffffff;
    margin-left: -0.9%;
  }

  &__goHome {
    padding: 2% 0 0 0;
    &_font {
      font-family: Arial;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 16px;
      letter-spacing: -0.02em;
      text-decoration: none;
      color: #a0a0a0;
    }
  }
}

@media (max-width: 1300px) {
  .error {
    &__404 {
      font-size: 140px;
    }
  }
}

@media (max-width: 1023px) {
  .error {
    padding: 230px 20px 20px 20px;

    &__404 {
      font-size: 48px;
      line-height: 104%;
      letter-spacing: -0.04em;
    }
  }
}
</style>
