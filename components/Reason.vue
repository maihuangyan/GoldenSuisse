<template lang="pug">
  .reason
    section.reason__num {{ num }}
    section.reason__desc {{ desc }}

</template>

<script>
export default {
  name: "Reason",
  props: ["num", "desc"]
};
</script>

<style lang="scss" scoped>
@import "@/assets/_variables.scss";

.reason {
  display: grid;
  grid-template-areas: "num" "desc";
  grid-template-rows: 40px 1fr;
  color: $white;

  &__num {
    grid-area: num;
    font-family: Arial;
    border: 2px solid $white;
    border-radius: 40px;
    width: 40px;
    height: 40px;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 143%;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: -0.02em;
    text-transform: uppercase;
  }

  &__desc {
    padding: 10% 0;
    grid-area: desc;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 125%;
    letter-spacing: -0.02em;
  }
}

@media (max-width: 1200px) {
  .reason {
    &__desc {
      font-size: 26px;
    }
  }
}

@media (max-width: 1023px) {
  .reason {
    &__desc {
      padding: 0;
      padding-top: 3%;
      grid-area: desc;
      font-family: Arial;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 150%;
      letter-spacing: -0.02em;
    }
  }
}
</style>