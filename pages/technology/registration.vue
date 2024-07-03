<template lang="pug">
  .registration
    section.registration__title(data-anim="fadeIn" data-anim-delay="0" :style="{opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 10%)'}")
      | Registration
    section.registration__about(data-anim="fadeIn" data-anim-delay="0" :style="{opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 5%)'}")
      | Apply for an account on your mobile phone, by following the steps below. Download the App from Appstore or Playstore. Follow the signup process. It takes 3 minutes, and all you need is a Valid ID Document or Passport and a Proof of Residence (Utility Bill or Bank Statement).
    section.registration__mobiles(data-anim="fadeIn" data-anim-delay="0" :style="{opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 5%)'}")
      img.registration__mobiles_ios(:src="require('@/static/image/Appstore.svg')" @click="redirect()")
      img.registration__mobiles_andriod(:src="require('@/static/image/googlePlay.png')" @click="redirect()")

    section.registration__cardList
      WhiteList(:list="list" :isMobile="this.$store.state.isMobile")
    section.registration__about2(data-anim="fadeIn" data-anim-delay="0" :style="{opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 5%)'}")
      | We will then schedule a phone meeting for an introduction call. You will then receive a folder sent to your address with your account details, Bank Card, agreement and brochure.
    section.registration__adv(data-anim="fadeIn" data-anim-delay=".3" :style="{opacity: this.$store.state.isMobile ? 1 : 0}")
      .registration__adv_title Apply for a
      .registration__adv_desc Private Swiss vault account
    section.registration__createAcc
      .registration__createAcc_container
        FlowButtonDark(label="Become a Client" path="/account/register")
</template>

<script>
export default {
  name: "Registation",
  head: {
    title: "Golden Suisse - Registration"
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
        "Press the “Signup” button",
        "Select your account type",
        "Register your email, and a Password",
        "Register and verify your Phone Number",
        "Take a Photo of your ID Card or Passport",
        "Register your Address Details",
        "Take a Photo of a Proof of Address (Bank Statement or Utility Bill)",
        "Take a Picture of yourself",
        "Choose the currency of your Card"
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

.registration {
  display: grid;
  grid-template-areas:
    "title title"
    "mobiles about"
    "logo logo"
    "cardList cardList"
    ". about2"
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
    padding-right: 17.6%;
  }

  &__mobiles {
    grid-area: mobiles;
    width: 50%;
    padding: 7% 0;
    padding-right: 10%;
    display: inline-flex;

    &_ios {
      width: 142px;
      height: 50px;
      margin-right: 7%;
      @include adaptive(mob) {
        display: none;
      }
    }

    &_andriod {
      width: 142px;
      height: 50px;
      @include adaptive(mob) {
        display: none;
      }
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
  .registration {
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

@media (max-width: 410px) {
  .registration {
    &__createAcc {
      &_container {
        width: 100%;
      }
    }
  }
}
</style>
