<template lang="pug">
.productsMaskGroup(
  data-anim="backgroundSlide",
  data-anim-delay="0",
  :style="{ backgroundPosition: this.$store.state.isMobile ? 'center' : '50% 40%' }"
)
  section.productsMaskGroup__online(
    data-anim="fadeIn",
    data-anim-delay="0",
    :style="{ opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 20%)' }"
  ) Accessible online 24/7
  section.productsMaskGroup__instant(
    data-anim="fadeIn",
    data-anim-delay="0.05",
    :style="{ opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 20%)' }"
  ) Instant liquidity & Fully insured
  section.productsMaskGroup__title(
    data-anim="fadeIn",
    data-anim-delay="0.1",
    :style="{ opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 10%)' }"
  ) Golden Suisse is a World Leader in High-Security Storage of Bullion.
  section.productsMaskGroup__features(
    data-anim="fadeIn",
    data-anim-delay=".3",
    :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }"
  ) Features
  section.productsMaskGroup__list
    LinkList(:list="list")
</template>

<script>
export default {
  props: ['list'],
  name: "ProductsMaskGroup",
  components: {
    LinkList: () => import("@/components/EthicalGold/LinkList"),
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/_variables.scss";

.productsMaskGroup {
  display: grid;
  grid-template-areas:
    "online . instant . title title title title"
    "features features features features features features features features"
    "list list list list list list list list";
  grid-template-columns: repeat(8, 12.5%);
  background: no-repeat url("../../static/image/ProductsMaskGroup.jpg");
  /*background-size: 104%;*/
  background-size: cover;
  background-position: center;
  width: 100%;
  padding: 4.5% 3.75% 10% 3.75%;

  &__online {
    grid-area: online;
    font-family: Arial;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 229%;
    letter-spacing: -0.02em;
    color: $lightGrey;
  }

  &__instant {
    grid-area: instant;
    font-family: Arial;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 229%;
    letter-spacing: -0.02em;
    color: $lightGrey;
  }

  &__title {
    grid-area: title;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 80px;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: $white;
    padding-right: 5%;
  }

  &__features {
    grid-area: features;
    font-family: Arial;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 229%;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: -0.02em;
    color: $white;
    border-bottom: 2px solid $white;
    padding: 7.7% 0 3.2% 0;
  }

  &__list {
    grid-area: list;
  }
}

@media (max-width: 1500px) {
  .productsMaskGroup {
    /*background-size: 120%;*/
    background-size: cover;

    &__title {
      font-size: 60px;
    }

    &__features {
      padding: 3% 0;
    }
  }
}

@media (max-width: 1023px) {
  .productsMaskGroup {
    grid-template-areas: "online" "instant" "title" "features" "list";

    padding: 10% 5.4% 18% 5.4%;
    grid-template-columns: 1fr;

    &__title {
      font-size: 24px;
      line-height: 125%;
      padding: 0;
      padding-bottom: 16%;
    }

    &__online,
    &__instant {
      line-height: 143%;
    }

    &__instant {
      padding-bottom: 12%;
    }

    &__features {
      padding: 0 0 5% 0;
    }
  }
}

@media (max-width: 450px) {
  .productsMaskGroup {
    background-size: 200%;
  }
}
</style>
