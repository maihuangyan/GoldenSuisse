<template lang="pug">
  .cardType(data-anim="fadeIn" data-anim-delay=".3" :style="{opacity: this.$store.state.isMobile ? 1 : 0}")
    section.cardType__title {{card.title}}
    section.cardType__desc {{card.desc}}
    section.cardType__price {{card.price}}
</template>

<script>
export default {
  name: "CardType",
  props: ["card"]
};
</script>

<style lang="scss" scoped>
@import "@/assets/_variables.scss";

.cardType {
  display: grid;
  grid-template-areas: "title desc" "title price";
  grid-template-columns: 50% 50%;

  &__title {
    grid-area: title;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 250%;
    letter-spacing: -0.02em;
    color: $black;
    border-top: 2px solid $black;
    padding: 1.25% 0;
  }

  &__desc {
    grid-area: desc;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 250%;
    letter-spacing: -0.02em;
    color: $black;
    border-top: 2px solid $black;
    padding: 1.25% 0;
  }

  &__price {
    grid-area: price;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 250%;
    letter-spacing: -0.02em;
    color: $black;
    border-top: 2px solid $black;
    padding: 1.25% 0;
  }
}

@media (max-width: 1023px) {
  .cardType {
    grid-template-areas: "title title" ". desc" ". price";

    &__title {
      font-size: 24px;
      line-height: 83%;
      letter-spacing: -0.04em;
      padding: 5% 0 0 0;
    }

    &__desc {
      padding: 10% 0 10% 0;
      border-top: none;
      padding-top: 0;
    }

    &__price {
      padding: 2% 0 27% 0;
      padding-bottom: 5%;
    }

    &__price,
    &__desc {
      font-size: 14px;
      line-height: 214%;
      letter-spacing: -0.02em;
    }
  }
}
</style>
