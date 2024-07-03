<template>
  <div class="list">
    <div class="list__item" v-for="(item, index) in prop" :key="index" data-anim="fadeInSimple">
      <p class="list__item-elem">{{item[0]}}</p>
      <p class="list__item-elem">{{item[1]}}</p>
    </div>
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
      justify-content: space-between;
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
