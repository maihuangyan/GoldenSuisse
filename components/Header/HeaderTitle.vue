<template lang="pug">
.title
  img.title__large(:src="require('@/static/image/Logotype.png')")
  div.title__logo Wealth Protection
</template>

<script>
export default {
  name: "HeaderTitle",
};
</script>

<style lang="scss" scoped>
@import "@/assets/_variables.scss";

.title {
  color: $lightGrey;
  font-family: Arial;
  font-size: 14px;
  font-weight: bold;
  font-style: normal;
  line-height: 143%;
  letter-spacing: -0.02em;
  animation: titleAppearence 2s;

  transform: translateX(0%);
  transition: all 0.6s;

  &__large {
    width: 205px;
  }

  &__logo {
    margin-top: 10px;
    font-size: 16px;
  }
}

@media (max-width: 1100px) {
  .title {
    font-size: 12px;
    padding-left: 5%;
  }
}

@media (max-width: 1023px) {
  .title {
    font-size: 10px;
    line-height: 140%;

    &__large {
      width: 113px;
    }
  }
}

@keyframes titleAppearence {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
