<template lang="pug">
  ul.whiteList
    li.whiteList__item(v-for="(item, index) in list" :key="index" data-anim="fadeIn" data-anim-delay=".3" :style="{opacity: isMobile ? 1 : 0}") {{item}}
</template>

<script>
export default {
  name: "WhiteList",
  props: ["list", "isMobile"]
};
</script>

<style lang="scss" scoped>
.whiteList {
  list-style: none;
  padding: 0;

  &__item {
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 250%;

    display: flex;
    align-items: center;
    letter-spacing: -0.02em;
    color: #101010;
    border-bottom: 2px solid #101010;
  }
}

.whiteList:first-child {
  border-top: 2px solid #101010;
}

@media (max-width: 1023px) {
  .whiteList {
    &__item {
      font-size: 24px;
    }
  }
}
</style>