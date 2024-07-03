<template>
  <div class="list">
    <p class="list__item" v-for="(item, index) in prop" :key="index" v-html="item" data-anim="fadeInSimple"></p>
  </div>
</template>

<script>
  export default {
    props: ['prop', 'link'],
  }
</script>

<style lang="scss" scoped>
  .list {
    &__item {
      min-height: 100px;
      display: flex;
      align-items: center;
      padding: 30px 0;
      font-size: 32px;
      border-top: 2px $black solid;
      @extend %default-text;
      &:last-child {
        border-bottom: 2px $black solid;
      }
      @include adaptive(mob) {
        font-size: 24px;
        line-height: 125%;
        letter-spacing: -0.04em;
        padding: 20px 0;
      }
    }
  }
</style>
