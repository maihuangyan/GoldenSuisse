<template>
  <div class="list" data-anim="fadeIn">
    <span class="list__item" v-for="(item, index) in list" :key="index">{{item}}</span>
  </div>
</template>

<script>
  export default {
    props: ['list']
  }
</script>

<style lang="scss" scoped>
  .list {
    display: flex;
    margin-bottom: 40px;
    @include adaptive(mob) {
      overflow-x: scroll;
      padding-bottom: 20px;
      margin-bottom: 20px;
    }
    &__item {
      @extend %default-text;
      font-weight: bold;
      color: $lightGrey;
      font-size: 14px;
      flex-shrink: 0;
      &:not(:first-child) {
        margin-left: 25px;
      }
    }
  }
</style>
