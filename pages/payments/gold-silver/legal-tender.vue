<template lang="pug">
  .invest
    section.invest__title(data-anim="fadeIn" data-anim-delay="0" :style="{opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 10%)'}")
      | Legal Tender
    section.invest__about(data-anim="fadeIn" data-anim-delay="0" :style="{opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 5%)'}")
      | In 1965 the Coinage Act was passed and defined the United States legal tender as U.S. coins and currency.
    section.invest__about2(data-anim="fadeIn" data-anim-delay="0" :style="{opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 5%)'}")
      | Are all US coins legal tender? Yes
    section.invest__about3(data-anim="fadeIn" data-anim-delay="0" :style="{opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 5%)'}")
      | SEC. 102. All coins and currencies of the United States (including Federal Reserve notes and circulating notes of Federal Reserve banks and national banking associations), regardless of when coined or issued, shall be legal tender for all debts, public and private, public charges, taxes, duties, and dues.
    section.invest__about4(data-anim="fadeIn" data-anim-delay="0" :style="{opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 5%)'}")
      | The American Gold Eagle is an official gold bullion coin of the United States. Authorized under the Gold Bullion Coin Act of 1985, it was first released by the United States Mint in 1986.
    section.invest__about5(data-anim="fadeIn" data-anim-delay="0" :style="{opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 5%)'}")
      | Section 1. This Act may be cited as the “Gold Bullion Coin Act of 1985”.
    section.invest__about7(data-anim="fadeIn" data-anim-delay="0" :style="{opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 5%)'}")
      | Minting Gold Bullion Coins

    section.invest__about9(data-anim="fadeIn" data-anim-delay="0" :style="{opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 5%)'}")
      | Section. 2. (a) Section 5112(a) of title 31, United States Code, is amended by adding at the end thereof the following new paragraphs:
      br
      | (7) A fifty dollar gold coin that is 32.7 millimeters in diameter, weighs 33.931 grams, and contains one troy ounce of fine gold.
      br
      | §5112. Denominations, specifications, and design of coins
      br
      | (a) The Secretary of the Treasury may mint and issue only the following coins:
      br
      | (1) a dollar coin that is 1.043 inches in diameter.
      br
      | …
      br
      | (11) A $50 gold coin that is of an appropriate size and thickness, as determined by the Secretary, weighs 1 ounce, and contains 99.99 percent pure gold.

    section.invest__adv(data-anim="fadeIn" data-anim-delay=".3" :style="{opacity: this.$store.state.isMobile ? 1 : 0}")
      .invest__adv_title Apply for a
      .invest__adv_desc Private Swiss vault account
    section.invest__createAcc
      .invest__createAcc_container
        FlowButtonDark(label="Become a Client" path="/account/register")
</template>

<script>
export default {
  name: "Invest",
  head: {
    title: "Golden Suisse - Legal Tender"
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
      list: [
        "heck your card EUR balance and transactions",
        "Load your card in seconds, by selling your vaulted gold coins at market prices",
        "Activate and Lock Your Account",
        "Check your PIN Code",
        "Check your Card Details"
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

.invest {
  display: grid;
  grid-template-areas:
    "title title"
    "about2 about"
    "about2 about3"
    "about4 about5"
    "about6 about7"
    "about8 about9"
    "about10 about11"
    "about12 about13"
    "about14 about15"
    "about16 about17"
    "about18 about19"
    "about20 about21"
    "about22 about23"
    "about24 about25"
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
    padding: 5% 12.5% 5% 0;
  }

  &__about3 {
    grid-area: about3;
  }

  &__about4 {
    grid-area: about4;
  }

  &__about5 {
    grid-area: about5;
  }

  &__about6 {
    grid-area: about6;
  }

  &__about7 {
    grid-area: about7;
  }

  &__about8 {
    grid-area: about8;
  }

  &__about9 {
    grid-area: about9;
  }

  &__about10 {
    grid-area: about10;
  }

  &__about11 {
    grid-area: about11;
  }

  &__about12 {
    grid-area: about12;
  }

  &__about13 {
    grid-area: about13;
  }

  &__about14 {
    grid-area: about14;
  }

  &__about15 {
    grid-area: about15;
  }

  &__about16 {
    grid-area: about16;
  }

  &__about17 {
    grid-area: about17;
  }

  &__about18 {
    grid-area: about18;
  }

  &__about19 {
    grid-area: about19;
  }

  &__about20 {
    grid-area: about20;
  }

  &__about21 {
    grid-area: about21;
  }

  &__about22 {
    grid-area: about22;
  }

  &__about23 {
    grid-area: about23;
  }

  &__about24 {
    grid-area: about24;
  }

  &__about25 {
    grid-area: about25;
  }

  &__about {
    grid-area: about;
  }

  &__about,
  &__about3,
  &__about4,
  &__about5,
  &__about6,
  &__about7,
  &__about8,
  &__about9,
  &__about10,
  &__about11,
  &__about12,
  &__about13,
  &__about14,
  &__about15,
  &__about16,
  &__about17,
  &__about18,
  &__about19,
  &__about20,
  &__about21,
  &__about22,
  &__about23,
  &__about24,
  &__about25 {
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
  .invest {
    grid-template-areas:
      "title"
      "about2"
      "about"
      "about3"
      "about4" "about5"
      "about6" "about7"
      "about8" "about9"
      "about10" "about11"
      "about12" "about13"
      "about14" "about15"
      "about16" "about17"
      "about18" "about19"
      "about20" "about21"
      "about22" "about23"
      "about24" "about25"
      "logo"
      "cardList"
      "mobiles"
      "adv"
      "createAcc"
      "footer";
    grid-template-columns: 100%;
    padding: 21% 5.4% 16% 5.4%;

    &__about,
    &__about2,
    &__about3,
    &__about4,
    &__about5,
    &__about6,
    &__about7,
    &__about8,
    &__about9,
    &__about10,
    &__about11,
    &__about12,
    &__about13,
    &__about14,
    &__about15,
    &__about16,
    &__about17,
    &__about18,
    &__about19,
    &__about20,
    &__about21,
    &__about22,
    &__about23,
    &__about24,
    &__about25 {
      font-family: Arial;
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 150%;
      letter-spacing: -0.02em;
      color: $black;
      padding: 5% 0;
      padding-right: 0;
    }

    &__title {
      font-size: 48px;
      line-height: 104%;
      letter-spacing: -0.04em;
      padding: 5% 0 10% 0;
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
  .invest {
    &__createAcc {
      &_container {
        width: 100%;
      }
    }
  }
}
</style>
