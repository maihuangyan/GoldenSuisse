<template lang="pug">
  .investmentVsCollector
    section.investmentVsCollector__title(data-anim="fadeIn" data-anim-delay="0" :style="{opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 10%)'}")
      | Investment versus
      br
      | Collector Coins
    section.investmentVsCollector__about(data-anim="fadeIn" data-anim-delay="0" :style="{opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 5%)'}")
      | There are two types of gold coins, “Investment Coins or Bullion Coins” and “Collector Coins, or Numismatic Coins”. The main differences between these two types of coins are:
    section.investmentVsCollector__about2(data-anim="fadeIn" data-anim-delay="0" :style="{opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 5%)'}")
      | Investment Coins
    section.investmentVsCollector__about3(data-anim="fadeIn" data-anim-delay="0" :style="{opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 5%)'}")
      | Standard gold bullion coins are mankind’s oldest of crisis or wealth insurance. History shows that gold in coin form, is a strong investment.
    section.investmentVsCollector__list1
      WhiteList(:list="list1" :isMobile="this.$store.state.isMobile")
    section.investmentVsCollector__collector(data-anim="fadeIn" data-anim-delay="0" :style="{opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 5%)'}")
      | Collector Coins
    section.investmentVsCollector__list2
      WhiteList(:list="list2" :isMobile="this.$store.state.isMobile")
    section.investmentVsCollector__adv(data-anim="fadeIn" data-anim-delay=".3" :style="{opacity: this.$store.state.isMobile ? 1 : 0}")
      .investmentVsCollector__adv_title Apply for a
      .investmentVsCollector__adv_desc Private Swiss vault account
    section.investmentVsCollector__createAcc
      .investmentVsCollector__createAcc_container
        FlowButtonDark(label="Become a Client" path="/account/register")
</template>

<script>
export default {
  name: "InvestmentVsCollector",
  head: {
    title: "Golden Suisse - Investment versus Collector Coins"
  },
  layout: "white",
  components: {
    FlowButtonDark: () => import("@/components/FlowButtonDark"),
    CardType: () => import("@/components/GoldCard/CardType"),
    LogoSvg: () => import("@/components/LogoSvg"),
    WhiteList: () => import("@/components/WhiteList")
  },
  data() {
    return {
      list1: [
        "Value is based strictly on gold content",
        "Pricing is straight forward and transparent",
        "Easy to sell even in emergency",
        "Big secondary market",
        "Can be sold anywhere in the world",
        "Very little knowledge needed to buy investment gold coins"
      ],
      list2: [
        "Price depends most on rarity and condition",
        "Pricing is subject to many factors",
        "Novice buyers can easily be fooled",
        "Buyers are limited to other collectors",
        "Buying rare coins is speculation, similar to artwork",
        "A lot of knowledge needed to know how to buy"
      ]
    };
  },
  methods: {
    redirect(path) {}
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/_variables.scss";

.children {
  &__button {
    position: fixed;
    bottom: 0px;
    width: 30%;
    height: 100%;
    z-index: 33;
    cursor: pointer;
    &_left {
      left: 0px;
    }
    &_right {
      right: 0px;
    }
  }
}

.investmentVsCollector {
  display: grid;
  grid-template-areas:
    "title title"
    ". about"
    "about2 about3"
    "list1 list1"
    "collector ."
    "list2 list2"
    "logo logo"
    "cardList cardList"
    ". mobiles"
    "adv adv"
    "createAcc createAcc"
    "footer footer";
  grid-template-columns: repeat(2, 50%);
  padding: 11% 3.75% 3.6% 3.75%;
  padding-bottom: 0 !important;
  &__title {
    grid-area: title;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 180px;
    line-height: 89%;
    display: flex;
    align-items: center;
    letter-spacing: -0.04em;
    color: $black;
    padding: 5% 0 5% 0;
  }

  &__about {
    grid-area: about;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 150%;
    letter-spacing: -0.02em;
    color: $black;
    padding: 5% 0;
    padding-right: 17.6%;
  }

  &__about2 {
    grid-area: about2;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 150%;
    letter-spacing: -0.02em;
    color: $black;
    padding: 5% 0;
    padding-right: 35%;
  }

  &__about3 {
    grid-area: about3;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 150%;
    letter-spacing: -0.02em;
    color: $black;
    padding: 5% 0;
    padding-right: 17.6%;
  }

  &__list1 {
    grid-area: list1;
    padding: 5% 0;
  }

  &__collector {
    grid-area: collector;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 150%;
    letter-spacing: -0.02em;
    color: $black;
    padding: 5% 0;
  }

  &__list2 {
    grid-area: list2;
    padding: 2% 0;
  }

  &__mobiles {
    grid-area: mobiles;
    width: 50%;
    padding-right: 10%;
    display: inline-flex;

    &_ios {
      width: 142px;
      height: 50px;
      margin-right: 7%;
    }

    &_andriod {
      width: 142px;
      height: 50px;
    }
  }

  &__logo {
    grid-area: logo;
    display: flex;
    justify-content: center;
    padding: 10% 0 13.8% 0;

    &_large {
      transform: scale(2);
    }
  }

  &__cardList {
    grid-area: cardList;
  }

  &__adv {
    grid-area: adv;
    display: block;
    padding-top: 4%;
    text-align: center;
    height: 100%;
    padding: 10.3% 0 3% 0;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    color: $darkGrey;
    line-height: 143%;
    letter-spacing: -0.04em;

    &_title {
      width: 100%;
    }

    &_desc {
      width: 100%;
    }
  }

  &__createAcc {
    grid-area: createAcc;
    display: flex;
    justify-content: center;
    padding: 1.3% 0 11% 0;
    padding-bottom: 0 !important;
    &_container {
      width: 370px;
    }
  }

  &__footer {
    grid-area: footer;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 214%;
    display: flex;
    justify-content: center;
    letter-spacing: -0.02em;
    color: $darkGrey;
  }
}

@media (max-width: 1023px) {
  .investmentVsCollector {
    grid-template-areas:
      "title"
      "about"
      "about2"
      "about3"
      "list1"
      "collector"
      "list2"
      "logo"
      "cardList"
      "mobiles"
      "adv"
      "createAcc"
      "footer";
    grid-template-columns: 100%;
    padding: 21% 5.4% 16% 5.4%;

    &__collector {
      font-size: 24px;
      line-height: 125%;
      padding-right: 0;
      padding: 10% 0;
    }

    &__title {
      font-size: 48px;
      line-height: 104%;
      letter-spacing: -0.04em;
      padding: 5% 0 10% 0;
    }

    &__about,
    &__about2,
    &__about3 {
      padding-right: 0;
      font-size: 24px;
      line-height: 125%;
      padding: 5% 0;
    }

    &__logo {
      padding: 10% 0 45% 0;

      &_large {
        transform: scale(1);
      }
    }

    &__adv {
      padding: 14% 0 14% 0;
    }

    &__createAcc {
      padding: 5% 0 40% 0;
    }
  }
}

@media (max-width: 410px) {
  .investmentVsCollector {
    &__createAcc {
      &_container {
        width: 100%;
      }
    }
  }
}
</style>
