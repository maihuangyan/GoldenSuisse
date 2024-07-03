<template lang="pug">
  .invest
    section.invest__title(data-anim="fadeIn" data-anim-delay="0" :style="{opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 10%)'}")
      | Hard versus
      br
      | Soft Currency
    section.invest__about(data-anim="fadeIn" data-anim-delay="0" :style="{opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 5%)'}")
      | Conversely, a soft currency indicates a currency which is expected to fluctuate erratically or depreciate against other currencies. Such softness is typically the result of political or fiscal instability within the associated country.
    section.invest__about2(data-anim="fadeIn" data-anim-delay="0" :style="{opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 5%)'}")
      | Hard currency is defined as a currency which behaves like a hedge for a reference portfolio of risky assets conditional on movements in global risk aversion.

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
    title: "Golden Suisse - Hard versus Soft Currency"
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
    padding: 5% 18% 5% 0;
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
    grid-template-areas: "backLink" "title" "about" "logo" "cardList" "about2" "adv" "createAcc" "footer";
    grid-template-columns: 100%;
    padding: 21% 5.4% 16% 5.4%;

    &__title {
      font-size: 48px;
      line-height: 104%;
      letter-spacing: -0.04em;
      padding: 5% 0 10% 0;
    }

    &__about,
    &__about2 {
      padding-right: 0;
      font-size: 24px;
      line-height: 125%;
      padding: 3% 0 15.5% 0;
    }

    &__about2 {
      padding: 15.5% 0 15.5% 0;
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

@include adaptive(mob) {
  .invest {
    &__title {
      padding-bottom: 0;
    }
    &__about {
      padding-top: 0;
      padding-bottom: 0;
      margin-top: 30px;
    }
    &__about2 {
      padding-top: 0;
      padding-bottom: 0;
      margin-top: 30px;
    }
    &__adv {
      padding-top: 0;
      margin-top: 80px;
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
