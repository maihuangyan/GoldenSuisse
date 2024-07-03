<template lang="pug">
  .service
    section.service__title {{service.title}}
    section.service__desc {{service.desc}}
    section.service__price {{service.price}}
</template>

<script>
export default {
  name: "Service",
  props: ["service"]
};
</script>

<style lang="scss" scoped>
@import "@/assets/_variables.scss";

.service {
  display: grid;
  grid-template-areas:
    "title title . . desc desc desc desc"
    ". . . . price price price price";
  grid-template-columns: repeat(8, 12.5%);
  border-top: 2px solid $white;

  &__title {
    grid-area: title;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 250%;
    letter-spacing: -0.02em;
    color: $white;
    padding: 3% 0;
  }

  &__desc {
    grid-area: desc;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 125%;
    letter-spacing: -0.02em;
    color: $white;
    padding: 3.8% 0;
  }

  &__price {
    grid-area: price;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 250%;
    letter-spacing: -0.02em;
    color: $white;
    border-top: 2px solid $white;
    padding: 1.3% 0;
  }
}

@media (max-width: 1023px) {
  .service {
    grid-template-areas:
      "title title title title desc desc desc desc"
      ". . . . price price price price";
    &__title {
      font-size: 24px;
      line-height: 83%;
      letter-spacing: -0.04em;
      padding: 11% 0 10% 0;
    }

    &__desc {
      padding: 33% 0 16% 0;
    }

    &__price {
      padding: 7% 0 28% 0;
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