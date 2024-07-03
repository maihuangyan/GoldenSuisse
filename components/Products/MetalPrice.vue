<template lang="pug">
.metalPrice
  section.metalPrice__container
    img.metalPrice__container__img(
      :src="require('@/static/' + imageUrl)",
      :class="{ metalPrice__container__img_coin: type === 'coin', metalPrice__container__img_bar: type === 'bar' }",
      data-anim="scalePicture",
      data-anim-delay=".3",
      :style="{ transform: this.$store.state.isMobile ? 'scale(1)' : 'scale(0.7)', opacity: this.$store.state.isMobile ? 1 : 0 }"
    )
  section.metalPrice__imgLine
  section.metalPrice__buy Buy
  section.metalPrice__sell Sell
  section.metalPrice__title {{ title }}
  section.metalPrice__usd USD
  section.metalPrice__usdLine
  section.metalPrice__usdBuy
  section.metalPrice__usdBuy {{ parseFloat(metalPrice.USD.buy_price).toLocaleString('en', { minimumFractionDigits: 2 }) }}
  section.metalPrice__usdSell {{ parseFloat(metalPrice.USD.sell_price).toLocaleString('en', { minimumFractionDigits: 2 }) }}
  section.metalPrice__eur EUR
  section.metalPrice__eurLine
  section.metalPrice__eurBuy {{ parseFloat(metalPrice.EUR.buy_price).toLocaleString('en', { minimumFractionDigits: 2 }) }}
  section.metalPrice__eurSell {{ parseFloat(metalPrice.EUR.sell_price).toLocaleString('en', { minimumFractionDigits: 2 }) }}
  section.metalPrice__chf CHF
  section.metalPrice__chfLine
  section.metalPrice__chfBuy {{parseFloat(metalPrice.CHF.buy_price).toLocaleString('en', {minimumFractionDigits: 2})}}
  section.metalPrice__chfSell {{parseFloat(metalPrice.CHF.sell_price).toLocaleString('en', {minimumFractionDigits: 2})}}
  section.metalPrice__gbp GBP
  section.metalPrice__gbpLine
  section.metalPrice__gbpBuy {{parseFloat(metalPrice.GBP.buy_price).toLocaleString('en', {minimumFractionDigits: 2})}}
  section.metalPrice__gbpSell {{parseFloat(metalPrice.GBP.sell_price).toLocaleString('en', {minimumFractionDigits: 2})}}
</template>

<script>
export default {
  name: "MetalPrice",
  props: ["type", "imageUrl", "title", "metalPrice"],
};
</script>

<style lang="scss" scoped>
@import "@/assets/_variables.scss";

.metalPrice {
  display: grid;
  grid-template-areas:
    "img imgLine imgLine imgLine imgLine imgLine buy sell"
    "title title . . usd usdLine usdBuy usdSell"
    ". . . . eur eurLine eurBuy eurSell"
    ". . . . chf chfLine chfBuy chfSell"
    ". . . . gbp gbpLine gbpBuy gbpSell";
  grid-template-columns: repeat(8, 12.5%);
  padding: 0 0 0 0;

  &__container {
    grid-area: img;
    padding: 0 0 19% 0;
    border-bottom: 2px solid $white;

    &__img {
      padding: 0;

      &_coin {
        width: 65.41%;
      }

      &_bar {
        width: 47.57%;
      }
    }
  }

  &__imgLine {
    grid-area: imgLine;
    border-bottom: 2px solid $white;
  }

  &__buy {
    grid-area: buy;
    font-family: Arial;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 143%;
    letter-spacing: -0.02em;
    color: $lightGrey;
    display: flex;
    align-items: flex-end;
    padding: 0;
    padding-bottom: 5%;
    border-bottom: 2px solid $white;
  }

  &__sell {
    grid-area: sell;
    font-family: Arial;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 143%;
    letter-spacing: -0.02em;
    color: $lightGrey;
    display: flex;
    align-items: flex-end;
    padding: 0;
    padding-bottom: 5%;
    border-bottom: 2px solid $white;
  }

  &__title {
    grid-area: title;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 250%;
    letter-spacing: -0.02em;
    color: $white;
  }

  &__usd {
    grid-area: usd;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 250%;
    letter-spacing: -0.02em;
    color: $white;
    padding: 5% 0;
    border-bottom: 2px solid $white;
  }

  &__usdLine {
    grid-area: usdLine;
    border-bottom: 2px solid $white;
  }

  &__usdBuy {
    grid-area: usdBuy;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 250%;
    letter-spacing: -0.02em;
    color: $white;
    padding: 5% 0;
    border-bottom: 2px solid $white;
  }

  &__usdSell {
    grid-area: usdSell;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 250%;
    letter-spacing: -0.02em;
    color: $white;
    padding: 5% 0;
    border-bottom: 2px solid $white;
  }

  &__eur {
    grid-area: eur;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 250%;
    letter-spacing: -0.02em;
    color: $white;
    padding: 5% 0;
    border-bottom: 2px solid $white;
  }

  &__eurLine {
    grid-area: eurLine;
    border-bottom: 2px solid $white;
  }

  &__eurBuy {
    grid-area: eurBuy;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 250%;
    letter-spacing: -0.02em;
    color: $white;
    padding: 5% 0;
    border-bottom: 2px solid $white;
  }

  &__eurSell {
    grid-area: eurSell;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 250%;
    letter-spacing: -0.02em;
    color: $white;
    padding: 5% 0;
    border-bottom: 2px solid $white;
  }

  &__chf {
    grid-area: chf;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 250%;
    letter-spacing: -0.02em;
    color: $white;
    padding: 5% 0;
    border-bottom: 2px solid $white;
  }

  &__chfLine {
    grid-area: chfLine;
    border-bottom: 2px solid $white;
  }

  &__chfBuy {
    grid-area: chfBuy;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 250%;
    letter-spacing: -0.02em;
    color: $white;
    padding: 5% 0;
    border-bottom: 2px solid $white;
  }

  &__chfSell {
    grid-area: chfSell;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 250%;
    letter-spacing: -0.02em;
    color: $white;
    padding: 5% 0;
    border-bottom: 2px solid $white;
  }

  &__gbp {
    grid-area: gbp;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 250%;
    letter-spacing: -0.02em;
    color: $white;
    padding: 5% 0;
    border-bottom: 2px solid $white;
  }

  &__gbpLine {
    grid-area: gbpLine;
    border-bottom: 2px solid $white;
  }

  &__gbpBuy {
    grid-area: gbpBuy;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 250%;
    letter-spacing: -0.02em;
    color: $white;
    padding: 5% 0;
    border-bottom: 2px solid $white;
  }

  &__gbpSell {
    grid-area: gbpSell;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 250%;
    letter-spacing: -0.02em;
    color: $white;
    padding: 5% 0;
    border-bottom: 2px solid $white;
  }
}

@media (max-width: 1023px) {
  .metalPrice {
    grid-template-areas:
      "img img img img"
      "title title title title"
      ". . buy sell"
      "usd usd usdBuy usdSell"
      "eur eur eurBuy eurSell"
      "chf chf chfBuy chfSell"
      "gbp gbp gbpBuy gbpSell";
    grid-template-columns: repeat(4, 25%);
    padding: 0 0 17% 0;

    &__container {
      padding: 0 0 5% 0;

      &__img {
        padding: 0;
        &_coin {
          height: 60px;
          width: auto;
        }

        &_bar {
          height: 90px;
          width: auto;
        }
      }
    }

    &__title {
      padding-top: 18px;
      font-size: 24px;
      line-height: 83%;
      letter-spacing: -0.04em;
    }

    &__buy,
    &__sell {
      border: none;
      font-size: 14px;
      line-height: 143%;
      letter-spacing: -0.02em;
      padding: 20% 0 0 0;
    }

    &__usd,
    &__eur,
    &__chf,
    &__gbp {
      font-size: 14px;
      line-height: 40px;
      letter-spacing: -0.02em;
      padding: 0;
    }

    &__usdBuy,
    &__eurBuy,
    &__chfBuy,
    &__gbpBuy,
    &__usdSell,
    &__eurSell,
    &__chfSell,
    &__gbpSell {
      font-size: 14px;
      line-height: 40px;
      letter-spacing: -0.02em;
      padding: 0;
    }
  }
}
</style>
