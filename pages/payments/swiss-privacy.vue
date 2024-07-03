<template lang="pug">
  .swissPrivacy
    section.swissPrivacy__title(data-anim="fadeIn" data-anim-delay="0" :style="{opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 10%)'}") 02—10
      br
      |Swiss Privacy
    section.swissPrivacy__about1(data-anim="fadeIn" data-anim-delay="0" :style="{opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 10%)'}") Is there any right to financial privacy anymore?
      br
      |— Yes there is.
    section.swissPrivacy__about2(data-anim="fadeIn" data-anim-delay="0.05" :style="{opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 10%)'}") The right to privacy is an element of various legal traditions to restrain the power of governmental and private actions that threaten the privacy of individuals. Over 150 national constitutions protect their citizens right to privacy.
    section.swissPrivacy__about3(data-anim="fadeIn" data-anim-delay=".3" :style="{opacity: this.$store.state.isMobile ? 1 : 0}") Switzerland has the highest level of privacy in the world, and Golden Suisse’s clients privacy is also protected by it’s constitution.
    section.swissPrivacy__about4(data-anim="fadeIn" data-anim-delay=".35" :style="{opacity: this.$store.state.isMobile ? 1 : 0}") Unlike many other financial institutions, Golden Suisse treats clients gold and silver as their outright “private property”, instead of “credit”, and works outside the SWIFT banking system.
      br
      |Therefore Golden Suisse is able to maintain clients right to privacy, more than other financial institutions who are subject to sharing client information.
      br
      |Golden Suisse (GCB Suisse AG) is regulated by Swiss Law, and is supervised by Swiss financial intermediary VQF in regards to AML.
    section.swissPrivacy__adv(data-anim="fadeIn" data-anim-delay=".5" :style="{opacity: this.$store.state.isMobile ? 1 : 0}")
      .swissPrivacy__adv_title Wealth and Privacy
      .swissPrivacy__adv_desc Preservation.
    section.swissPrivacy__createAcc
      .swissPrivacy__createAcc_container
        FlowButtonDark(label="Become a Client" path="/account/register")
    section.swissPrivacy__footer {{getCopyright()}}
</template>

<script>
import copyright from '../../utils/copyright.js'

export default {
  name: "SwissPrivacy",
  head: {
    title: "Golden Suisse - Swiss Privacy"
  },
  layout: "white",
  components: {
    FlowButtonDark: () => import("@/components/FlowButtonDark"),
    PlayButton: () => import("@/components/PlayButton")
  },
  methods: {
    getCopyright() {
      return copyright();
    }
  },
  computed: {
    playButtWidth() {
      if (!this.$store.state.isMobile) return 220;
      else return 100;
    },
    playButtHeight() {
      if (!this.$store.state.isMobile) return 220;
      else return 123;
    }
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

.swissPrivacy {
  display: grid;
  grid-template-areas:
    "title title title title title title title title"
    "about1 about1 about1 . about2 about2 about2 about2"
    "playButton playButton playButton playButton playButton playButton playButton playButton"
    "about3 about3 about3 . about4 about4 about4 about4"
    "adv adv adv adv adv adv adv adv"
    "createAcc createAcc createAcc createAcc createAcc createAcc createAcc createAcc"
    "footer footer footer footer footer footer footer footer";
  grid-template-columns: repeat(8, 12.5%);
  padding: 11% 3.75% 3.6% 3.75%;

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
    padding: 5% 0;
  }

  &__next {
    grid-area: next;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 175%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    letter-spacing: -0.04em;
    color: $black;
    padding: 30% 0;
  }

  &__about1 {
    grid-area: about1;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 150%;
    letter-spacing: -0.02em;
    color: $black;
    padding: 5% 0;
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
    padding: 5% 11.4% 5% 0;
  }

  &__prev {
    grid-area: prev;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 175%;
    letter-spacing: -0.04em;
    color: $black;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5% 0;
    padding-right: 40%;
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
  }

  &__playButton {
    grid-area: playButton;
    display: flex;
    justify-content: center;
    padding: 7.5% 0 9% 0;
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
    padding-right: 16.8%;
  }

  &__adv {
    grid-area: adv;
    display: block;
    text-align: center;
    height: 100%;
    padding: 7.5% 0 3% 0;
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
  .swissPrivacy {
    grid-template-areas: "backLink" "title" "about1" "about2" "playButton" "about3" "about4" "adv" "createAcc" "footer";
    grid-template-columns: 100%;
    padding: 21% 5.4% 16% 5.4%;

    &__about1,
    &__about2,
    &__about3,
    &__about4 {
      padding-right: 0;
      font-size: 24px;
      line-height: 125%;
      padding: 3.5% 0;
    }

    &__about1 {
      padding: 3% 0 7% 0;
    }

    &__about2 {
      padding: 3.5% 0 8% 0;
    }

    &__about3 {
      padding: 0 0 5% 0;
    }

    &__title {
      font-size: 48px;
      line-height: 104%;
      letter-spacing: -0.04em;
      padding: 5% 0 10% 0;
    }

    &__playButton {
      padding: 30% 0;
    }

    &__adv {
      padding: 31% 0 19% 0;
    }

    &__createAcc {
      padding: 0 0 40% 0;
    }

    &__next {
      display: none;
    }

    &__prev {
      display: none;
    }
  }
}

@media (max-width: 410px) {
  .swissPrivacy {
    &__createAcc {
      &_container {
        width: 100%;
      }
    }
  }
}
</style>
