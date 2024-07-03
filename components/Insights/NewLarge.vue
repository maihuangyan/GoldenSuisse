<template lang="pug">
  .newLarge
    .newLarge__date {{news.date}}
    .newLarge__text {{news.text}}
</template>

<script>
export default {
  name: "NewLarge",
  props: ["news"]
};
</script>

<style lang="scss" scoped>
@import "@/assets/_variables.scss";

.newLarge {
  display: grid;
  grid-template-areas: "date date date date text text text text";
  grid-template-columns: repeat(8, 12.5%);
  cursor: pointer;

  &:hover > &__text {
    color: $gold;
  }

  &__date {
    grid-area: date;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 250%;
    letter-spacing: -0.02em;
    color: $white;
    border-bottom: 2px solid $white;
    padding: 2% 0;
  }

  &__text {
    grid-area: text;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 80px;
    line-height: 100%;
    letter-spacing: -0.02em;
    display: flex;
    align-items: center;
    color: $white;
    border-bottom: 2px solid $white;
    padding: 5% 3.25% 16.5% 0;
  }
}

@media (max-width: 1023px) {
  .newLarge {
    display: grid;
    grid-template-areas: "date" "text";
    grid-template-columns: 100%;

    &__date {
      border-bottom: 2px solid $white;
      font-family: Arial;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 16px;
      letter-spacing: -0.02em;
      padding-bottom: 7.5%;
    }

    &__text {
      font-family: Arial;
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 125%;
      letter-spacing: -0.04em;
      padding-bottom: 16%;
      border: none;
    }
  }
}
</style>