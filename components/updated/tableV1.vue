<template lang="pug">
  .table
    .table-item(v-for="(item, itemIndex) in prop" :key="itemIndex" data-anim="fadeInSimple")
      p.table-item__title(v-html="item.title" data-anim="fadeInSimple")
      .table-item__info-wrapper
        p.table-item__info(v-for="(info, infoIndex) in item.info" :key="infoIndex" v-html="replaceBr(info)" data-anim="fadeInSimple")
</template>

<script>
  export default {
    props: ['prop'],
    methods: {
      replaceBr(value) {
        if (value) return value.replace(/\n/g, "<br>");
      }
    }
  }
</script>

<style lang="scss" scoped>
  .table-item {
    display: grid;
    grid-template-columns: 50% 50%;
    padding: 35px 0;
    border-top: 2px #fff solid;
    @include adaptive(mob) {
      padding: 20px 0;
      display: flex;
      flex-direction: column;
    }
    &__title {
      font-size: 32px;
      @extend %default-text;
      line-height: 200%;
      @include adaptive(mob) {
        font-size: 24px;
        width: 50%;
        align-self: flex-start;
        line-height: 150%;
      }
    }
    &__info-wrapper {
      @include adaptive(mob) {
        width: 50%;
        align-self: flex-end;
        margin-top: 0;
      }
    }
    &__info {
      font-size: 32px;
      @extend %default-text;
      line-height: 200%;
      @include adaptive(mob) {
        font-size: 14px;
        line-height: 200%;
      }
      &:not(:last-child) {
        padding-bottom: 30px;
        border-bottom: 2px #fff solid;
        margin-bottom: 30px;
        @include adaptive(mob) {
          padding-bottom: 20px;
          margin-bottom: 20px;
        }
      }
    }
  }
  .white-page {
    .table-item {
      border-color: $black;
      &__info {
        border-color: $black;
      }
    }
  }
</style>
