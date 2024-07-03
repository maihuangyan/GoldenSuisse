<template lang="pug">
.card(data-anim="cardIn")
  .card__circle.card__circle_left
  .card__circle.card__circle_right
  .card__img-wrapper
    img.card__img(
      :src="require('@/static/' + imgUrl)"
    )
</template>

<script>
export default {
  props: ["imgUrl"],
};
</script>

<style lang="scss" scoped>
@import "@/assets/_variables.scss";

.card {
  display: flex;
  justify-content: center;
  position: relative;
  @include adaptive(mob) {
    overflow: hidden;
    height: 54.66vw;
  }
  &__circle {
    width: 560px;
    height: 560px;
    border: 2px #fff solid;
    margin: 0 -100px;
    border-radius: 100%;
    @include adaptive(mob) {
      width: 54.66vw;
      height: 54.66vw;
      margin: 0;
      flex-shrink: 0;
      position: absolute;
    }
    &_left {
      @include adaptive(mob) {
        left: 0;
      }
    }
    &_right {
      @include adaptive(mob) {
        right: 0;
      }
    }
  }
  &__img-wrapper {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__img {
    max-width: 412px;
    @include adaptive(mob) {
      width: 45.86vw;
    }
  }
}
</style>
