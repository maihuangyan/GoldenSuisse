<template lang="pug">
.goldToCash
  section.goldToCash__globe
    img(src="../../static/image/Worldwide.svg", style="height: 50px;")
  section.goldToCash__mastercard
    img(src="../../static/image/Mastercard.svg", style="height: 30px;")
  section.goldToCash__title
    div World Class
    div Wealth Protection
</template>

<script>
export default {
  name: "GoldToCash",
};
</script>

<style lang="scss" scoped>
@import "@/assets/_variables.scss";

.goldToCash {
  grid-area: goldToCash;
  display: grid;
  grid-template-columns: 70px 70px 5fr;
  height: 100%;
  color: $lightGrey;
  align-items: center;

  &__globe {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 7.15% 0 7.15% 0;
    border-right: 2px solid $darkGrey;
    text-align: center;
  }

  &__mastercard {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 7.15% 0 7.15% 0;
    text-align: center;

    & > img {
      transform: scale(-1, 1);
    }
  }

  &__title {
    padding: 0;
    padding-left: 10.5%;
    font-family: Arial;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 143%;
    letter-spacing: -0.02em;
  }
}
</style>
