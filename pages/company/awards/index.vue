<template lang="pug">
.awards
  section.awards__title(
    data-anim="fadeIn",
    data-anim-delay=".3",
    :style="{ opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 20%)' }"
  ) Awards
  section.awards__titleLine(
    data-anim="fadeIn",
    data-anim-delay=".3",
    :style="{ opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 20%)' }"
  )
  section.awards__awardsIcon(
    data-anim="fadeIn",
    data-anim-delay=".3",
    :style="{ opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 20%)' }"
  )
    img.awards__awardsIcon_img(src="@/static/image/SwissFlag.jpg")
    .awards__awardsIcon_text Switzerland
  section.awards__awardsTitle(
    data-anim="fadeIn",
    data-anim-delay=".3",
    :style="{ opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 20%)' }"
  ) Global
    br
    | Banking & Finance
    br
    | Awards
  section.awards__year(
    data-anim="fadeIn",
    data-anim-delay=".3",
    :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }"
  ) Award Winning Technology
  section.awards__winner(
    data-anim="fadeIn",
    data-anim-delay=".3",
    :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }"
  ) Golden Suisse® was selected winner of the Global Banking & Finance Awards with the Most Innovative Gold Investment Platform 2018, by the European.

  section.awards__award(
    data-anim="fadeIn",
    data-anim-delay=".3",
    :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }"
  ) Award Winning Systems
  section.awards__app(
    data-anim="fadeIn",
    data-anim-delay=".3",
    :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }"
  )
    .awards__app_title(
      data-anim="fadeIn",
      data-anim-delay=".3",
      :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }",
      @click="$router.push({ path: '/account/download' })"
    ) GS App
    .awards__app_desc(
      data-anim="fadeIn",
      data-anim-delay=".3",
      :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }"
    ) Desktop & Mobile
  section.awards__desc(
    data-anim="fadeIn",
    data-anim-delay=".3",
    :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }"
  )
    .awards__desc_title(
      data-anim="fadeIn",
      data-anim-delay=".5",
      :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }",
      @click="$router.push({ path: '/payments/card' })"
    ) The Card
    .awards__desc_desc(
      data-anim="fadeIn",
      data-anim-delay=".5",
      :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }"
    ) Privately vaulted precious metals
  section.awards__adv(
    data-anim="fadeIn",
    data-anim-delay=".3",
    :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }"
  )
    .awards__adv_title Apply for a
    .awards__adv_desc Private Swiss vault account
  section.awards__createAcc
    .awards__createAcc_container
      FlowButton(label="Become a Client", path="/account/register")
</template>

<script>
  import FlowButton from "@/components/FlowButton";
export default {
  name: "Awards",
  head: {
    title: "Golden Suisse - Awards",
  },
  components: {
    FlowButton
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/_variables.scss";

.awards {
  display: grid;
  grid-template-areas:
    ". title title title title titleLine titleLine titleLine titleLine ."
    ". awardsIcon . . . awardsTitle awardsTitle awardsTitle awardsTitle ."
    ". . . . . year . winner . ."
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
    padding-bottom: 16%;
  }

  &__titleLine {
    grid-area: titleLine;
    border-bottom: 2px solid $white;
  }

  &__awardsIcon {
    grid-area: awardsIcon;
    padding: 0;
    padding-top: 43%;
    padding-bottom: 10%;
    display: inline-flex;

    &_img {
      width: 27px;
      height: 27px;
    }

    &_text {
      font-family: Arial;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 16px;
      letter-spacing: -0.02em;
      color: $white;
      padding-left: 20px;
      padding-top: 3.5%;
    }
  }

  &__awardsTitle {
    grid-area: awardsTitle;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 80px;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: $white;
    padding: 0;
    padding-top: 10%;
    padding-bottom: 10%;
  }

  &__year {
    grid-area: year;
    font-family: Arial;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 229%;
    letter-spacing: -0.02em;
    color: $lightGrey;
    padding: 0;
    padding-bottom: 51%;
  }

  &__winner {
    grid-area: winner;
    font-family: Arial;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 229%;
    letter-spacing: -0.02em;
    color: $lightGrey;
    padding: 0;
    padding-bottom: 51%;
  }

  &__award {
    grid-area: award;
    padding: 2% 0;
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
    padding: 8% 0 2.9% 0;
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
    padding-bottom: 9%;

    &_container {
      width: 370px;
    }
  }
}

@media (max-width: 1023px) {
  .awards {
    grid-template-areas:
      ". title title title title ."
      ". awardsTitle awardsTitle awardsTitle awardsTitle ."
      ". winner winner winner winner ."
      ". award award award award ."
      ". app app desc desc ."
      ". adv adv adv adv ."
      ". createAcc createAcc createAcc createAcc .";
    grid-template-columns: 5.4% repeat(4, 22.3%) 5.4%;
    padding: 100px 0 0 0;

    &__title {
      padding: 0;
      font-size: 48px;
      line-height: 146%;
    }

    &__awardsTitle {
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 125%;
      letter-spacing: -0.04em;
      padding: 13% 0 0 0;
    }

    &__awardsIcon {
      display: none;
    }

    &__year {
      display: none;
    }

    &__winner {
      font-weight: normal;
      font-size: 20px;
      line-height: 150%;
      letter-spacing: -0.02em;
      padding: 14% 18% 0 0;
      font-size: 20px;
      line-height: 150%;
      letter-spacing: -0.02em;
      color: $white;
    }

    &__award {
      padding: 35% 0 6.5% 0;
      font-size: 14px;
      line-height: 143%;
      letter-spacing: -0.04em;
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
      padding: 17% 0 0 0;
    }

    &__createAcc {
      padding: 13% 0 5% 0;
    }
  }
}
</style>
