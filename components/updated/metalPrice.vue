<template>
  <div class="metal-price new-update" data-anim="fadeInSimple" data-anim-delay=".3">
    <div class="metal-price__top-row">
      <div class="metal-price__img-wrapper">
        <img :src="require('@/static/' + img)" class="metal-price__img" :class="{bar}" data-anim="scalePicture" data-anim-delay=".3">
        <p class="metal-price__img-desc">{{imgDesc}}</p>
      </div>
      <div class="metal-price__table-titles">
        <p class="metal-price__table-title">Sell</p>
        <p class="metal-price__table-title">Buy</p>
      </div>
    </div>
    <div class="metal-price__inner">
      <p class="metal-price__title" v-html="title" data-anim="fadeInSimple"></p>
      <div class="metal-price__table table">
        <div class="table-item table-item_title-row">
          <p class="table-item__text"></p>
          <p class="table-item__text">Sell</p>
          <p class="table-item__text">Buy</p>
        </div>
        <div class="table-item">
          <p class="table-item__text">USD</p>
          <p class="table-item__text">{{transformPrice(table.USD.sell_price)}}</p>
          <p class="table-item__text">{{transformPrice(table.USD.buy_price)}}</p>
        </div>
        <div class="table-item">
          <p class="table-item__text">EUR</p>
          <p class="table-item__text">{{transformPrice(table.EUR.sell_price)}}</p>
          <p class="table-item__text">{{transformPrice(table.EUR.buy_price)}}</p>
        </div>
        <div class="table-item">
          <p class="table-item__text">GBP</p>
          <p class="table-item__text">{{transformPrice(table.GBP.sell_price)}}</p>
          <p class="table-item__text">{{transformPrice(table.GBP.buy_price)}}</p>
        </div>
        <div class="table-item">
          <p class="table-item__text">CHF</p>
          <p class="table-item__text">{{transformPrice(table.CHF.sell_price)}}</p>
          <p class="table-item__text">{{transformPrice(table.CHF.buy_price)}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    /*props: ['img', 'title', 'table', 'bar'],*/
    props: {
      img: {
        type: String
      },
      imgDesc: {
        type: String
      },
      title: {
        type: String
      },
      bar: {
        type: Boolean,
        default: false
      },
      table: {
        type: Object,
        default: () => {
          return {
            USD: {
              buy_price: '',
              sell_price: ''
            },
            EUR: {
              buy_price: '',
              sell_price: ''
            },
            GBP: {
              buy_price: '',
              sell_price: ''
            },
            CHF: {
              buy_price: '',
              sell_price: ''
            }
          }
        }
      }
    },
    methods: {
      transformPrice(price) {
        return parseFloat(price).toLocaleString('en', { minimumFractionDigits: 2 });
      }
    }
  }
</script>

<style lang="scss" scoped>
  .metal-price {
    display: grid;
    @include adaptive(mob) {
      display: block;
      border-bottom: none;
      padding-bottom: 0;
    }
    &__top-row {
      display: grid;
      grid-template-columns: 50% 50%;
      border-bottom: 2px #fff solid;
      align-items: flex-end;
      @include adaptive(mob) {
        display: block;
      }
    }
    &__table-titles {
      display: grid;
      grid-template-columns: 50% 50%;
      margin-bottom: 20px;
      padding-left: 50%;
      @include adaptive(mob) {
        display: none;
      }
      @include adaptive(tablet) {
        padding-left: 30%;
      }
    }
    &__table-title {
      color: $lightGrey;
      font-size: 14px;
    }
    &__inner {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: flex-start;
      @include adaptive(mob) {
        display: block;
      }
    }
    &__title {
      @extend %default-text;
      font-size: 32px;
      margin-top: 30px;
      @include adaptive(mob) {
        font-size: 24px;
        margin-top: 20px;
        margin-bottom: 10px;
      }
    }
    &__img-wrapper {
      display: flex;
      align-items: flex-end;
      margin-bottom: 40px;
      @include adaptive(mob) {
        margin-bottom: 20px;
      }
    }
    &__img-desc {
      color: $darkGrey;
      font-size: 14px;
      margin-left: 50px;
    }
    &__img {
      align-self: end;
      max-width: 120px;
      @include adaptive(mob) {
        max-width: 60px;
      }
      &.bar {
        max-width: 80px;
        @include adaptive(mob) {
          max-width: 40px;
        }
      }
    }
  }
  .table-item {
    display: grid;
    grid-template-columns: 1fr 25% 25%;
    height: 90px;
    align-items: center;
    @include adaptive(mob) {
      height: 40px;
    }
    @include adaptive(tablet) {
      grid-template-columns: 1fr 35% 35%;
    }
    &:not(:last-child) {
      border-bottom: 2px #fff solid;
    }
    &__text {
      @extend %default-text;
      font-size: 32px;
      @include adaptive(mob) {
        font-size: 14px;
      }
    }
    &_title-row {
      @include adaptive(notMob) {
        display: none;
      }
      .table-item {
        &__text {
          font-size: 14px;
          color: $lightGrey;
        }
      }
    }
  }
</style>
