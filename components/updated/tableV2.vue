<template>
  <div class="table" data-anim="fadeInSimple">
    <p class="table__title" v-html="prop.title"></p>
    <div class="table__list">
      <div class="table__list-col">
        <p class="table__list-item" v-for="(item, index) in prop.col_1" :key="index" v-html="item" data-anim="fadeInSimple"></p>
      </div>
      <div class="table__list-col">
        <p class="table__list-item" v-for="(item, index) in prop.col_2" :key="index" v-html="item" data-anim="fadeInSimple"></p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['prop']
  }
</script>

<style lang="scss" scoped>
  .table {
    display: grid;
    grid-template-columns: 50% 50%;
    padding: 30px 0;
    border-top: 2px $black solid;
    @include adaptive(mob) {
      display: block;
    }
    &__title {
      font-size: 32px;
      @extend %default-text;
      padding-right: calc(100% / 4);
      @include adaptive(mob) {
        font-size: 24px;
      }
    }
    &__list {
      display: grid;
      grid-template-columns: 50% 50%;
      @include adaptive(mob) {
        margin-top: 30px;
      }
    }
    &__list-col {
      width: 50%;
      margin-right: 50%;
    }
    &__list-item {
      font-size: 32px;
      @extend %default-text;
      &:not(:last-child) {
        margin-bottom: 30px;
      }
      @include adaptive(mob) {
        font-size: 24px;
      }
    }
  }
</style>
