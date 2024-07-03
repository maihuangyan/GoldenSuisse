<template lang="pug">
  .owner
    img.owner__img(:src="require('@/static/' + imageUrl)" data-anim="scalePicture" data-anim-delay=".3" :style="{transform: this.$store.state.isMobile ? 'scale(1)' : 'scale(0.7)', opacity: this.$store.state.isMobile ? 1 : 0}")
    section.owner__title {{name}}
      br
      | {{surname}}
    section.owner__desc {{desc}}
</template>

<script>
export default {
  name: "Owner",
  props: ["imageUrl", "name", "surname", "desc"]
};
</script>

<style lang="scss" scoped>
@import "@/assets/_variables.scss";

.owner {
  display: grid;
  grid-template-areas: "img" "title" "desc";
  padding-right: 5%;
  grid-gap: 2%;

  &__img {
    grid-area: img;
  }

  &__title {
    grid-area: title;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 133%;
    letter-spacing: -0.02em;
    color: $white;
  }

  &__desc {
    grid-area: desc;
    font-family: Arial;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: -0.02em;
    color: $lightGrey;
  }
}

@media (max-width: 1200px) {
  .owner {
    &__img {
      width: 80%;
    }

    &__title {
      font-size: 38px;
    }
  }
}

@media (max-width: 1023px) {
  .owner {
    grid-gap: 9%;

    &__title {
      font-size: 24px;
      line-height: 125%;
      letter-spacing: -0.04em;
    }

    &__desc {
      line-height: 20px;
    }
  }
}
</style>