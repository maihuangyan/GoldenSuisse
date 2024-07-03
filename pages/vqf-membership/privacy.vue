<template lang="pug">
  .privacy
    section.privacy__title(data-anim="fadeIn" data-anim-delay="0" :style="{opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 10%)'}") Privacy
    section.privacy__subtitle(data-anim="fadeIn" data-anim-delay="0" :style="{opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 10%)'}") Physical gold is private property, and as such is one of very few investments worldwide that still allows citizens the liberty to keep their assets confidential.
    section.privacy__about1(data-anim="fadeIn" data-anim-delay="0" :style="{opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 10%)'}") Privacy Protection in Switzerland
    section.privacy__about2(data-anim="fadeIn" data-anim-delay="0" :style="{opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 10%)'}") In Switzerland, the right to privacy is guaranteed in article 13 of the Swiss Federal Constitution.
      br
      | The Swiss Federal Data Protection Act (DPA) and the Swiss Federal Data Protection Ordinance (DPO) entered into force on July 1, 1993.
      br
      | Unlike the data protection legislation of many other countries, the DPA protects both personal data pertaining to natural persons and legal entities.
    section.privacy__about3(data-anim="fadeIn" data-anim-delay=".3" :style="{opacity: this.$store.state.isMobile ? 1 : 0}") No Exchange of Information
    section.privacy__about4(data-anim="fadeIn" data-anim-delay=".3" :style="{opacity: this.$store.state.isMobile ? 1 : 0}") Golden Suisse does not report client information to third parties, and has no legal obligation to report client information to third parties.
    section.privacy__document(data-anim="fadeIn" data-anim-delay=".3" :style="{opacity: this.$store.state.isMobile ? 1 : 0}") Documents
    section.privacy__pdf(data-anim="fadeIn" data-anim-delay=".3" :style="{opacity: this.$store.state.isMobile ? 1 : 0}" @click="openPDF('goldensuisse_privacypolicy.pdf')") Golden Suisse Privacy Policy


    section.privacy__award(data-anim="fadeIn" data-anim-delay=".3" :style="{opacity: this.$store.state.isMobile ? 1 : 0}") Award Winning Systems
    section.privacy__app(data-anim="fadeIn" data-anim-delay=".3" :style="{opacity: this.$store.state.isMobile ? 1 : 0}")
      .privacy__app_title(data-anim="fadeIn" data-anim-delay=".3" :style="{opacity: this.$store.state.isMobile ? 1 : 0}" @click="$router.push({path: '/account/download'})") GS App
      .privacy__app_desc(data-anim="fadeIn" data-anim-delay=".3" :style="{opacity: this.$store.state.isMobile ? 1 : 0}") Desktop & Mobile
    section.privacy__desc(data-anim="fadeIn" data-anim-delay=".3" :style="{opacity: this.$store.state.isMobile ? 1 : 0}")
      .privacy__desc_title(data-anim="fadeIn" data-anim-delay=".5" :style="{opacity: this.$store.state.isMobile ? 1 : 0}" @click="$router.push({path: '/payments/card'})") The Card
      .privacy__desc_desc(data-anim="fadeIn" data-anim-delay=".5" :style="{opacity: this.$store.state.isMobile ? 1 : 0}") Privately vaulted precious metals
    section.privacy__adv(data-anim="fadeIn" data-anim-delay=".3" :style="{opacity: this.$store.state.isMobile ? 1 : 0}")
      .privacy__adv_title Apply for a
      .privacy__adv_desc Private Swiss vault account
    section.privacy__createAcc
      .privacy__createAcc_container
        FlowButton(label="Become a Client" path="/account/register")
</template>

<script>
  import FlowButton from "@/components/FlowButton";
export default {
  name: "Privacy",
  head: {
    title: "Golden Suisse - Privacy"
  },
  components: {
    FlowButton
  },
  methods: {
    openPDF(path) {
      var pdf = require("@/assets/PDF/" + path);
      window.open(pdf);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/_variables.scss";

.privacy {
  display: grid;
  grid-template-areas:
    ". title title title title title title title title ."
    ". subtitle subtitle subtitle subtitle subtitle subtitle subtitle subtitle ."
    ". about1 about1 about1 about1 about2 about2 about2 about2 ."
    ". about3 about3 about3 about3 about4 about4 about4 about4 ."
    ". document document . . pdf pdf pdf pdf ."
    ". award award award award award award award award ."
    "app app app app app desc desc desc desc desc"
    ". adv adv adv adv adv adv adv adv ."
    ". createAcc createAcc createAcc createAcc createAcc createAcc createAcc createAcc .";
  grid-template-columns: 3.75% repeat(8, 11.5625%) 3.75%;
  padding: 295px 0 0 0;

  &__title {
    grid-area: title;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 180px;
    line-height: 39%;
    letter-spacing: -0.04em;
    color: $white;
    border-bottom: 2px solid $white;
    padding-bottom: 8%;
  }

  &__subtitle {
    grid-area: subtitle;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 80px;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: $white;
    padding: 5% 0 5% 0;
    border-bottom: 2px solid $white;
  }

  &__about1 {
    grid-area: about1;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 150%;
    letter-spacing: -0.02em;
    color: $white;
    padding: 10.561% 10% 7.922% 0;
    border-bottom: 2px solid $white;
  }

  &__about2 {
    grid-area: about2;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 150%;
    letter-spacing: -0.02em;
    color: $white;
    padding: 10.561% 0 7.922% 0;
    border-bottom: 2px solid $white;
  }

  &__about3 {
    grid-area: about3;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 150%;
    letter-spacing: -0.02em;
    color: $white;
    padding: 10.561% 10% 6.337% 0;
    border-bottom: 2px solid $white;
  }

  &__about4 {
    grid-area: about4;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 150%;
    letter-spacing: -0.02em;
    color: $white;
    padding: 10.561% 0 6.337% 0;
    border-bottom: 2px solid $white;
  }

  &__document {
    grid-area: document;
    font-family: Arial;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 229%;
    letter-spacing: -0.02em;
    color: $white;
    padding: 21.122% 0 0 0;
  }

  &__pdf {
    grid-area: pdf;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 125%;
    letter-spacing: -0.02em;
    text-decoration-line: underline;
    color: $white;
    cursor: pointer;
    padding: 10.561% 0 0 0;
    transition: 0.3s;
    position: relative;

    &:hover {
      color: $gold;
    }

    &::before {
      position: absolute;
      left: -10%;
      background-image: url("../../static/image/PDF.png");
      background-size: 39px 40px;
      display: inline-block;
      content: "";
      width: 39px;
      height: 40px;
      content: "";
    }
  }

  &__reason1 {
    grid-area: reason1;
    font-family: Arial;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 229%;
    letter-spacing: -0.02em;
    color: $lightGrey;
  }

  &__reason2 {
    grid-area: reason2;
    font-family: Arial;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 229%;
    letter-spacing: -0.02em;
    color: $lightGrey;
  }

  &__reason3 {
    grid-area: reason3;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 150%;
    letter-spacing: -0.02em;
    color: $white;
  }

  &__award {
    grid-area: award;
    padding: 7.921% 0 2.5% 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Arial;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 417%;
    letter-spacing: -0.04em;
    text-transform: uppercase;
    color: $white;
  }

  &__app {
    grid-area: app;
    border-top: 2px $white solid;
    border-right: 1px $white solid;
    height: 100%;
    padding: 4% 0 28.5% 0;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    display: grid;
    grid-template-areas: ". appTitle appTitle appDesc appDesc";
    grid-template-columns: 7.5% repeat(4, 23.125%);

    &_title {
      grid-area: appTitle;
      color: $white;
      font-size: 48px;
      line-height: 100px;
      cursor: pointer;

      &:hover {
        color: $gold;
      }
    }

    &_desc {
      grid-area: appDesc;
      padding-top: 7%;
      display: flex;
      justify-content: flex-end;
      color: $lightGrey;
      font-weight: bold;
      font-size: 14px;
      line-height: 16px;
      text-align: right;
      letter-spacing: -0.02em;
      padding-right: 11%;
    }
  }

  &__desc {
    grid-area: desc;
    border-top: 2px $white solid;
    border-left: 1px $white solid;
    height: 100%;
    padding: 4% 0 28.5% 0;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    display: grid;
    grid-template-areas: "descTitle descTitle descDesc descDesc .";
    grid-template-columns: repeat(4, 23.125%) 7.5%;

    &_title {
      grid-area: descTitle;
      color: $white;
      font-size: 48px;
      line-height: 100px;
      padding-left: 11%;
      cursor: pointer;

      &:hover {
        color: $gold;
      }
    }

    &_desc {
      grid-area: descDesc;
      padding-top: 7%;
      display: flex;
      justify-content: flex-end;
      color: $lightGrey;
      font-weight: bold;
      font-size: 14px;
      line-height: 16px;
      text-align: right;
      letter-spacing: -0.02em;
    }
  }

  &__adv {
    grid-area: adv;
    display: block;
    text-align: center;
    height: 100%;
    padding: 8% 0 4% 0;
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
    padding: 0;
    padding-bottom: 8%;

    &_container {
      width: 370px;
    }
  }
}

@media (max-width: 1023px) {
  .privacy {
    grid-template-areas:
      ". title title ."
      ". subtitle subtitle ."
      ". about1 about1 ."
      ". about2 about2 ."
      ". about3 about3 ."
      ". about4 about4 ."
      ". pdf pdf ."
      ". reason1 reason1 ."
      ". reason2 reason2 ."
      ". reason3 reason3 ."
      ". award award ."
      ". app desc ."
      ". adv adv ."
      ". createAcc createAcc .";
    grid-template-columns:
      5.4% repeat(2, 44.6%)
      5.4%;
    padding: 100px 0 0 0;

    &__title {
      padding: 0;
      padding-bottom: 7%;
      font-size: 48px;
      line-height: 104%;
      letter-spacing: -0.04em;
    }

    &__subtitle {
      font-family: Arial;
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 125%;
      letter-spacing: -0.04em;
      padding: 10% 0 10% 0;
    }

    &__about1 {
      border: none;
      font-size: 20px;
      padding: 10% 12% 0 0;
    }

    &__about2 {
      font-size: 20px;
      padding: 10% 12% 10% 0;
    }

    &__about3 {
      border: none;
      font-size: 20px;
      padding: 10% 12% 0 0;
    }

    &__about4 {
      font-size: 20px;
      padding: 10% 12% 10% 0;
    }

    &__document {
      display: none;
    }

    &__pdf {
      font-size: 20px;
      padding: 15% 0 0 0;

      &::before {
        display: none;
      }
    }

    &__reason1 {
      font-family: Arial;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 150%;
      letter-spacing: -0.02em;
      padding-top: 12%;
      color: $white;
    }

    &__reason2 {
      font-family: Arial;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 150%;
      letter-spacing: -0.02em;
      padding-right: 15%;
      color: $white;
    }

    &__reason3 {
      font-family: Arial;
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 125%;
      letter-spacing: -0.04em;
      padding: 12% 10% 10% 0;
    }

    &__award {
      padding: 21% 0 5% 0;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 143%;
      letter-spacing: -0.04em;
      text-transform: uppercase;
      color: $white;
    }

    &__app {
      grid-template-areas: "appTitle appTitle appTitle appTitle appTitle";
      height: 100%;
      padding: 5% 0 25% 0;

      &_title {
        color: $white;
        font-size: 24px;
        line-height: 83%;
        width: 100%;
        padding-top: 5%;
      }

      &_desc {
        display: none;
      }
    }

    &__desc {
      grid-template-areas: "descTitle descTitle descTitle descTitle descTitle";
      height: 100%;
      padding: 5% 0 25% 0;

      &_title {
        color: $white;
        font-size: 24px;
        line-height: 83%;
        width: 100%;
        padding-top: 5%;
      }

      &_desc {
        display: none;
      }
    }

    &__adv {
      padding: 17% 0 13% 0;
    }

    &__createAcc {
      padding-bottom: 6%;
    }
  }
}
</style>
