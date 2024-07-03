<template lang="pug">
  .company
    section.company__title(
      data-anim="fadeIn",
      data-anim-delay="0",
      :style="{ opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 10%)' }"
    ) Company
    section.company__titleLine(
      data-anim="fadeIn",
      data-anim-delay="0",
      :style="{ opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 10%)' }"
    )
    section.company__desc1(
      data-anim="fadeIn",
      data-anim-delay="0",
      :style="{ opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 20%)' }"
    ) Preserving our clients wealth is at the core of everything we do.
    section.company__desc2(
      data-anim="fadeIn",
      data-anim-delay=".5",
      :style="{ opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 10%)' }"
    ) We strive for excellence, by constantly raising our standards and working with the best people and companies in the world, and solely offering ethical gold and silver.
    section.company__desc3(
      data-anim="fadeIn",
      data-anim-delay="1",
      :style="{ opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 5%)' }"
    ) Our aim is to provide unmatched wealth protection, and privacy for a client base using gold and silver, as money, and a storage for wealth, outside the banking system.
    section.company__map(
      data-anim="fadeIn",
      data-anim-delay="0",
      :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }"
    )
      //- CompanyMap
      CustomVideo(
        largeImgUrl="OfficeZurich.jpg",
        smallImgUrl="OfficeZurich.jpg",
        :isMobile="isMobile",
        title="Headquarters",
        smallSize="200%",
        :key="isMobile",
        subtitle="Haus Gryffenberg<br>Bahnhofstrasse 10<br>Zürich<br>Switzerland",
        path="/contact",
      )
    section.company__mapTitle Traditional
      br
      | Vaulted Precious
      br
      | Metals
    section.company__reasons(
      data-anim="fadeIn",
      data-anim-delay=".3",
      :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }"
    )
      | We are a Private Swiss NonBank
      br
      | and not a full‑scale bank or financial institution,
      br
      | mainly because:
    section.company__reasonsTitle(
      data-anim="fadeIn",
      data-anim-delay=".3",
      :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }"
    )
      | Private Swiss
      br
      | Wealth Protection

    section.company__goldSilver(
      data-anim="fadeIn",
      data-anim-delay=".3",
      :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }"
    ) Gold & Silver
    section.company__reason1(
      data-anim="fadeIn",
      data-anim-delay=".35",
      :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }"
    )
      Reason(
        num="1",
        desc="We only trade and vault precious metals and do not deal with credit."
      )
    section.company__reason2(
      data-anim="fadeIn",
      data-anim-delay=".4",
      :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }"
    )
      Reason(
        num="2",
        desc="Clients bullion is registered separately in a vault."
      )
    section.company__reason3(
      data-anim="fadeIn",
      data-anim-delay=".3",
      :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }"
    )
      Reason(num="3", desc="Clients hold full ownership to their metal.")
    section.company__reason4(
      data-anim="fadeIn",
      data-anim-delay=".35",
      :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }"
    )
      Reason(
        num="4",
        desc="Clients bullion is physically identifiable and never mixed with company assets."
      )
    section.company__reason5(
      data-anim="fadeIn",
      data-anim-delay=".4",
      :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }"
    )
      Reason(
        num="5",
        desc="Because we deal with private property, and also “non‑reportable” bullion, we are not required to share or report client information."
      )
    section.company__award(
      data-anim="fadeIn",
      data-anim-delay=".3",
      :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }"
    ) Award Winning Systems
    section.company__app(
      data-anim="fadeIn",
      data-anim-delay=".3",
      :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }"
    )
      .company__app_title(
        data-anim="fadeIn",
        data-anim-delay=".3",
        :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }",
        @click="$router.push({ path: '/account/download' })"
      ) GS App
      .company__app_desc(
        data-anim="fadeIn",
        data-anim-delay=".3",
        :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }"
      ) Desktop & Mobile
    section.company__desc(
      data-anim="fadeIn",
      data-anim-delay=".3",
      :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }"
    )
      .company__desc_title(
        data-anim="fadeIn",
        data-anim-delay=".5",
        :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }",
        @click="$router.push({ path: '/payments/gold-silver' })"
      ) Gold & Silver
      .company__desc_desc(
        data-anim="fadeIn",
        data-anim-delay=".5",
        :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }"
      ) Privately vaulted precious metals
    section.company__adv(
      data-anim="fadeIn",
      data-anim-delay=".3",
      :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }"
    )
    section.company__createAcc
      .company__createAcc_container
        FlowButton(label="BECOME A CLIENT", path="/account/register")
</template>

<script>
  import Reason from "@/components/Reason";
  import FlowButton from "@/components/FlowButton";
  import CustomVideo from "@/components/CustomVideo";
  export default {
    name: "Company",
    head: {
      title: "Golden Suisse - Company",
    },
    components: {
      Reason,
      FlowButton,
      CustomVideo
    },
    data() {
      return {
        isMobile: false,
      };
    },
    mounted() {
      if (process.client && window.innerWidth < 1024) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    },
  };
</script>

<style lang="scss" scoped>
  @import "@/assets/_variables.scss";

  .company {
    display: grid;
    grid-template-areas:
      ". title title title title titleLine titleLine titleLine titleLine ."
      ". desc1 . desc2 . desc3 desc3 desc3 . ."
      "map map map map map map map map map map"
      ". reasons reasons . . reasonsTitle reasonsTitle reasonsTitle reasonsTitle ."
      ". goldSilver goldSilver goldSilver goldSilver goldSilver goldSilver goldSilver goldSilver ."
      ". . . . . reason1 reason1 reason2 reason2 ."
      ". reason3 reason3 reason4 reason4 reason5 reason5 . . ."
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

    &__desc1 {
      grid-area: desc1;
      font-family: Arial;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 229%;
      letter-spacing: -0.02em;
      color: $lightGrey;
      width: 190px;
      padding-top: 40%;
    }

    &__desc2 {
      grid-area: desc2;
      font-family: Arial;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 229%;
      letter-spacing: -0.02em;
      color: $lightGrey;
      width: 198px;
      padding-top: 40%;
    }

    &__desc3 {
      grid-area: desc3;
      font-family: Arial;
      font-style: normal;
      font-weight: normal;
      font-size: 40px;
      line-height: 150%;
      letter-spacing: -0.02em;
      color: $white;
      width: 584px;
      height: 350px;
      padding-top: 13%;
    }

    &__map {
      grid-area: map;
      display: flex;
      height: 100%;
      width: 100%;
      padding-top: 10%;
    }

    &__mapTitle {
      display: none;
    }

    &__mapDesc {
      display: none;
    }

    &__reasons {
      grid-area: reasons;
      font-family: Arial;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 229%;
      letter-spacing: -0.02em;
      color: $lightGrey;
      padding: 20% 10% 11% 0;
    }

    &__reasonsTitle {
      grid-area: reasonsTitle;
      font-family: Arial;
      font-style: normal;
      font-weight: normal;
      font-size: 80px;
      line-height: 100%;
      letter-spacing: -0.02em;
      color: $white;
      padding: 10% 0 13% 0;
    }

    &__goldSilver {
      grid-area: goldSilver;
      font-family: Arial;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 16px;
      letter-spacing: -0.02em;
      color: $lightGrey;

      border-bottom: 2px solid $white;
      padding-bottom: 4%;
    }

    &__reason1 {
      grid-area: reason1;
      padding-top: 22%;
      padding-right: 20%;
      padding-bottom: 11%;
    }

    &__reason2 {
      grid-area: reason2;
      padding-top: 22%;
      padding-right: 20%;
      padding-bottom: 11%;
    }

    &__reason3 {
      grid-area: reason3;
      padding-right: 20%;
      padding-bottom: 43.5%;
    }

    &__reason4 {
      grid-area: reason4;
      padding-right: 20%;
      padding-bottom: 43.5%;
    }

    &__reason5 {
      grid-area: reason5;
      padding-right: 20%;
      padding-bottom: 43.5%;
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
      padding: 7.7% 0 4.4% 0;
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
      padding-bottom: 1%;

      &_container {
        width: 370px;
      }
    }
  }

  @media (max-width: 1800px) {
    .company {
      // padding: 15% 60px 60px 60px;
    }
  }

  @media (max-width: 1250px) {
    .company {
      // padding: 20% 60px 60px 60px;
    }
  }

  @media (max-width: 1200px) {
    .company {
      &__title {
        font-size: 160px;
      }

      &__desc3 {
        font-size: 30px;
        width: 500px;
        padding-top: 5%;
      }
    }
  }

  @media (max-width: 1023px) {
    .company {
      grid-template-areas:
        ". title title ."
        ". desc1 desc1 ."
        ". desc2 desc2 ."
        ". desc3 desc3 ."
        "map map map map"
        ". mapTitle mapTitle ."
        ". goldSilver goldSilver ."
        ". mapDesc mapDesc ."
        ". reasons reasons ."
        ". reason1 reason1 ."
        ". reason2 reason2 ."
        ". reason3 reason3 ."
        ". reason4 reason4 ."
        ". reason5 reason5 ."
        ". award award ."
        ". app desc ."
        ". adv adv ."
        ". createAcc createAcc .";
      grid-template-columns: 5.4% repeat(2, 44.6%) 5.4%;
      padding: 100px 0 0 0;

      &__title {
        padding: 0;
        font-size: 48px;
        line-height: 146%;
      }

      &__desc1 {
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 150%;
        letter-spacing: -0.02em;
        color: $white;
        width: auto;
        padding: 0;
        padding-top: 10%;
      }

      &__desc2 {
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 150%;
        letter-spacing: -0.02em;
        color: $white;
        width: auto;
        padding: 0;
      }

      &__desc3 {
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 150%;
        letter-spacing: -0.02em;
        color: $white;
        width: auto;
        height: auto;
        padding: 20% 0 18% 0;
        padding-top: 0;
        margin-top: 30px;
        padding-bottom: 0;
      }

      &__map {
        display: block;
      }

      &__mapTitle {
        grid-area: mapTitle;
        display: block;
        font-family: Arial;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 150%;
        letter-spacing: -0.02em;
        color: $white;
        padding: 16% 0 0 0;
      }

      &__goldSilver {
        border: none;
        padding: 6% 0;
      }

      &__mapDesc {
        grid-area: mapDesc;
        display: block;
        font-family: Arial;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 143%;
        letter-spacing: -0.02em;
        color: $lightGrey;
        padding: 20px 0;
      }

      &__reasons {
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 143%;
        letter-spacing: -0.02em;
        color: $lightGrey;
        padding: 0 0 20% 0;
      }

      &__reasonsTitle {
        display: none;
      }

      &__reason1 {
        padding: 0 20% 9% 0;
      }

      &__reason2 {
        padding: 0 20% 9% 0;
      }

      &__reason3 {
        padding: 0 20% 9% 0;
      }

      &__reason4 {
        padding: 0 20% 9% 0;
      }

      &__reason5 {
        padding: 0 20% 9% 0;
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
