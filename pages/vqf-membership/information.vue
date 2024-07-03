<template lang="pug">
  .info
    section.info__title(data-anim="fadeIn" data-anim-delay="0" :style="{opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 10%)'}") Information
    section.info__subtitle(data-anim="fadeIn" data-anim-delay="0" :style="{opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 10%)'}") Golden Suisse
    section.info__reason1(data-anim="fadeIn" data-anim-delay="0" :style="{opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 10%)'}")
      | Members of Golden Suisse International e.V.:
      br
      .info__reason1_main() GCB Suisse AG
        p.info__reason1_main_content Rathausstrasse 14
        p.info__reason1_main_content 6340 Baar
        p.info__reason1_main_content Switzerland
      .info__reason1_main() Golden Alva FZCO
        p.info__reason1_main_content Building A1
        p.info__reason1_main_content Digital Park Silicon Oasis
        p.info__reason1_main_content Dubai
        p.info__reason1_main_content UAE
      br

    section.info__reason3(data-anim="fadeIn" data-anim-delay="0.1" :style="{opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 10%)'}")
      | Golden Suisse is a privately owned trademark licensed to GCB Suisse AG and other members of Golden Suisse International e.V.
      br
      br
      | Golden Suisse International e.V. is a global network for secure and standardized transactions between members. The Association is an independent legal entity with full legal capacity, governed by Swiss law.
      br
    section.info__award(data-anim="fadeIn" data-anim-delay=".3" :style="{opacity: this.$store.state.isMobile ? 1 : 0}") Award Winning Systems
    section.info__app(data-anim="fadeIn" data-anim-delay=".3" :style="{opacity: this.$store.state.isMobile ? 1 : 0}")
      .info__app_title(data-anim="fadeIn" data-anim-delay=".3" :style="{opacity: this.$store.state.isMobile ? 1 : 0}" @click="$router.push({path: '/contact/support'})") Support
      .info__app_desc(data-anim="fadeIn" data-anim-delay=".3" :style="{opacity: this.$store.state.isMobile ? 1 : 0}") Desktop & Mobile
    section.info__desc(data-anim="fadeIn" data-anim-delay=".3" :style="{opacity: this.$store.state.isMobile ? 1 : 0}")
      .info__desc_title(data-anim="fadeIn" data-anim-delay=".5" :style="{opacity: this.$store.state.isMobile ? 1 : 0}" @click="$router.push({path: '/company/awards'})" ) Awards
      .info__desc_desc(data-anim="fadeIn" data-anim-delay=".5" :style="{opacity: this.$store.state.isMobile ? 1 : 0}") Global Banking & Finance
      br
      | Awards winner 2018
    section.info__adv(data-anim="fadeIn" data-anim-delay=".3" :style="{opacity: this.$store.state.isMobile ? 1 : 0}")
      .info__adv_title Apply for a
      .info__adv_desc Private Swiss vault account
    section.info__createAcc
      .info__createAcc_container
        FlowButton(label="Become a Client" path="/account/register")
</template>

<script>
import FlowButton from "@/components/FlowButton";
export default {
  name: "Info",
  head: {
    title: "Golden Suisse - Information"
  },
  components: {
    FlowButton
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/_variables.scss";

.info {
  display: grid;
  grid-template-areas:
    ". title title title title title title title title ."
    ". subtitle subtitle subtitle subtitle subtitle subtitle subtitle subtitle ."
    ". reason1 reason1 . . reason3 reason3 reason3 reason3 ."
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

    &_main {
      grid-area: reason1;
      font-size: 15px;
      line-height: 119%;
      padding: 2% 0;
      color: $light;

      &_content {
        color: $lightGrey;
        font-size: 14px;

      }
    }
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
    padding-right: 7%;
  }

  &__award {
    grid-area: award;
    padding: 16.8% 0 2.5% 0;
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
    grid-template-columns: repeat(4, 22%) 7%;

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
  .info {
    grid-template-areas:
      ". title title ."
      ". subtitle subtitle ."
      ". reason3 reason3 ."
      ". reason1 reason1 ."
      ". award award ."
      ". app desc ."
      ". adv adv ."
      ". createAcc createAcc .";
    grid-template-columns: 5.4% repeat(2, 44.6%) 5.4%;
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
      padding: 10% 0 0 0;
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
      color: $white;
    }

    &__reason3 {
      font-family: Arial;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 150%;
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
