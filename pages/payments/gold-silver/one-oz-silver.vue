<template lang="pug">
  .oneOzSilver
    section.oneOzSilver__title(data-anim="fadeIn" data-anim-delay="0" :style="{opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 10%)'}")
      | 1 Oz American
      br
      | Silver Eagles
    section.oneOzSilver__about(data-anim="fadeIn" data-anim-delay="0" :style="{opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 5%)'}")
      | It is struck only in the one-troy ounce size, which has a nominal face value of one dollar and is guaranteed to contain one troy ounce of 99.9% pure silver. It is authorized by Title II of Public Law 99-61 (Liberty Coin Act, approved July 9, 1985) and codified as 31 U.S.C. § 5112(e)-(h). Its content, weight, and purity are certified by the United States Mint.
    section.oneOzSilver__about2(data-anim="fadeIn" data-anim-delay="0" :style="{opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 5%)'}")
      | The American Silver Eagle is the official silver bullion coin of the United States. It was first released by the United States Mint on November 24, 1986.
    section.oneOzSilver__about3(data-anim="fadeIn" data-anim-delay="0" :style="{opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 5%)'}")
      | The Silver Eagle has been produced at three mints: the Philadelphia Mint, the San Francisco Mint, and the West Point Mint. The American Silver Eagle bullion coin may be used to fund Individual Retirement Account investments.
    section.oneOzSilver__coin(data-anim="fadeIn" data-anim-delay=".3" :style="{opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 5%)'}")
      img.oneOzSilver__coin_img(:src="require('@/static/image/silverCoinWhite.png')")
    section.oneOzSilver__coinDesc(data-anim="fadeIn" data-anim-delay=".3" :style="{opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 5%)'}")
      .oneOzSilver__coinDesc_title 1 Troy Oz Coin
      .oneOzSilver__coinDesc_diameter Diameter
      .oneOzSilver__coinDesc_diamNum 40.6 mm
      .oneOzSilver__coinDesc_thickness Thickness
      .oneOzSilver__coinDesc_thicknessNum 2.98 mm
      .oneOzSilver__coinDesc_weight Gross weight
      .oneOzSilver__coinDesc_weightNum 1.00 troy oz (31.103 g)
      .oneOzSilver__coinDesc_face Face value
      .oneOzSilver__coinDesc_faceNum $1.00

    section.oneOzSilver__about4(data-anim="fadeIn" data-anim-delay="0" :style="{opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 5%)'}")
      | Every year more coins are minted by the United States Mint to fill demand.
    section.oneOzSilver__about5(data-anim="fadeIn" data-anim-delay="0" :style="{opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 5%)'}")
      | There is also a great secondary market for 1 Oz Silver Eagles, which makes them more attractive than many other silver bullion coins.
    section.oneOzSilver__about6(data-anim="fadeIn" data-anim-delay="0" :style="{opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 5%)'}")
      | The American 1 Oz Silver Eagle is packed in rolls of 20 coins, in boxes of 25 rolls, making up a total of 500 coins.



    section.oneOzSilver__adv(data-anim="fadeIn" data-anim-delay=".3" :style="{opacity: this.$store.state.isMobile ? 1 : 0}")
      .oneOzSilver__adv_title Apply for a
      .oneOzSilver__adv_desc Private Swiss vault account
    section.oneOzSilver__createAcc
      .oneOzSilver__createAcc_container
        FlowButtonDark(label="Become a Client" path="/account/register")
</template>

<script>
export default {
  name: "OneOzSilver",
  head: {
    title: "Golden Suisse - 1 Oz American Silver Eagles"
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

.oneOzSilver {
  display: grid;
  grid-template-areas:
    "title title"
    "about2 about"
    "about2 about3"
    "coin coinDesc"
    "about4 about5"
    "about4 about6"
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

  &__about4 {
    grid-area: about4;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 150%;
    letter-spacing: -0.02em;
    color: $black;
    padding: 5% 0;
    padding-right: 17.6%;
    padding-top: 15%;
  }

  &__about5 {
    grid-area: about5;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 150%;
    letter-spacing: -0.02em;
    color: $black;
    padding: 5% 0;
    padding-right: 17.6%;
    padding-top: 15%;
  }

  &__about6 {
    grid-area: about6;
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

  &__coin {
    grid-area: coin;
    display: flex;
    justify-content: center;
    padding-top: 20%;

    &_img {
      width: 337px;
      height: 338px;
    }
  }

  &__coinDesc {
    grid-area: coinDesc;
    display: grid;
    grid-template-areas: "title title" "diameter diamNum" "thickness thicknessNum" "weight weightNum" "face faceNum";
    grid-template: repeat(2, 50%);
    padding-top: 9%;

    &_title,
    &_diameter,
    &_diamNum,
    &_thickness,
    &_thicknessNum,
    &_weight,
    &_weightNum,
    &_face,
    &_faceNum {
      font-family: Arial;
      font-style: normal;
      font-weight: normal;
      font-size: 32px;
      line-height: 250%;
      display: flex;
      align-items: center;
      letter-spacing: -0.02em;
      color: $black;
      border-bottom: 2px solid $black;
    }

    &_title {
      grid-area: title;
    }

    &_diameter {
      grid-area: diameter;
    }

    &_diamNum {
      grid-area: diamNum;
      display: flex;
      justify-content: flex-end;
    }

    &_thickness {
      grid-area: thickness;
    }

    &_thicknessNum {
      grid-area: thicknessNum;
      display: flex;
      justify-content: flex-end;
    }

    &_weight {
      grid-area: weight;
    }

    &_weightNum {
      grid-area: weightNum;
      display: flex;
      justify-content: flex-end;
    }

    &_face {
      grid-area: face;
    }

    &_faceNum {
      grid-area: faceNum;
      display: flex;
      justify-content: flex-end;
    }
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
  .oneOzSilver {
    grid-template-areas: "backLink" "title" "about2" "about" "about3" "logo" "cardList" "coin" "coinDesc" "about4" "about5" "about6" "adv" "createAcc" "footer";
    grid-template-columns: 100%;
    padding: 21% 5.4% 16% 5.4%;

    &__coin {
      padding-top: 10%;
      &_img {
        width: 120px;
        height: 120px;
      }
    }

    &__coinDesc {
      &_title,
      &_diameter,
      &_diamNum,
      &_thickness,
      &_thicknessNum,
      &_weight,
      &_weightNum,
      &_face,
      &_faceNum {
        font-size: 24px;
      }

      &_weightNum {
        font-size: 16px;
      }
    }

    &__title {
      font-size: 48px;
      line-height: 104%;
      letter-spacing: -0.04em;
      padding: 5% 0 10% 0;
    }

    /*&__about,
    &__about2,
    &__about3,
    &__about4,
    &__about5,
    &__about6 {
      padding-right: 0;
      font-size: 24px;
      line-height: 125%;
      padding: 3% 0 15.5% 0;
    }*/

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

@media (max-width: 410px) {
  .oneOzSilver {
    &__createAcc {
      &_container {
        width: 100%;
      }
    }
  }
}
  @include adaptive(mob) {
    .oneOzSilver {
      &__title {
        padding-bottom: 0;
      }
      &__about,
      &__about2,
      &__about3,
      &__about4,
      &__about5,
      &__about6 {
        padding-top: 0;
        padding-bottom: 0;
        margin-top: 30px;
        padding-right: 0;
        font-size: 24px;
        line-height: 125%;
      }
      &__adv {
        padding-top: 0;
        margin-top: 60px;
      }
    }
  }
</style>
