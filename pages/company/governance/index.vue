<template lang="pug">
.ownership
  section.ownership__page-title(data-anim="fadeIn" :style="{ opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 10%)' }")
    h1.page-title Governance
    list-sm.advantages(:list="['Owned by Business Partners', 'Private Swiss Company', 'Supervised by VQF']")
  custom-video.ownership__video(
    largeImgUrl="daniel.jpg"
    smallImgUrl="daniel_xs.jpg"
    title="Daniel H. E. Weitmann"
    subtitle="Swiss Service is our standard"
    subtitleCenter="Chairman")
  section.ownership__titleLine(
    data-anim="fadeIn",
    data-anim-delay="0",
    :style="{ opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 10%)' }"
  )
  section.ownership__smallTitle(
    data-anim="fadeIn",
    data-anim-delay="0",
    :style="{ opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 10%)' }"
  ) Golden Suisse is an Independent Private Company Governed by Swiss Law
  section.ownership__about1(
    data-anim="fadeIn",
    data-anim-delay="0",
    :style="{ opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 5%)' }"
  ) As a privately owned company, we’re free from market pressures and external public shareholders looking for ever-improving quarterly results.
  section.ownership__about2(
    data-anim="fadeIn",
    data-anim-delay="0.05",
    :style="{ opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 5%)' }"
  ) Instead, we can focus on serving our clients for the long term.
  section.ownership__about3(
    data-anim="fadeIn",
    data-anim-delay=".1",
    :style="{ opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 5%)' }"
  ) Our governance model allows us to plot a steady, considered course. Active partners are shareholders, for as long as the working relationship remains.
  hr.ownership__hr
  section.ownership__governance(
    data-anim="fadeIn",
    data-anim-delay=".3",
    :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }"
  ) Corporate governance is a central factor in our business success. It is an essential prerequisite in our attainment of strategic corporate goals and creation of lasting value. For our clients and for all other stakeholders.

  section.ownership__govleft(
    data-anim="fadeIn",
    data-anim-delay=".3",
    :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }"
  ) The board of directors (the ”Board”) is primarily responsible for supervising the management of the Company’s business and affairs. It’s authority is determined by the provisions of the Swiss Business Company’s Act and by the Company’s By-laws.

  section.ownership__govright(
    data-anim="fadeIn",
    data-anim-delay=".3",
    :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }"
  ) In addition, the Board’s activities are governed by a set of procedural rules which are adopted by the Board. The Board regularly reviews its guidelines and policies and, not less than annually, considers how its corporate governance practices align with guidelines established by the Swiss regulatory authorities, including the Swiss Supervising Financial Authority FINMA.
  hr.ownership__hr2

  section.ownership__logo(data-anim="companyIcon", data-anim-delay=".35")
    //- CompanyIcon
    img.ownership__logo_img(
      :src="require('@/static/image/LogomarkOwnership.png')"
      data-anim="fadeIn",
      data-anim-delay=".3",
      :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }"
      )
  section.ownership__owner(
    data-anim="fadeIn",
    data-anim-delay=".3",
    :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }"
  )
    img.ownership__owner_img(
      :src="require('@/static/image/daniel.jpg')"
      data-anim="fadeIn",
      data-anim-delay=".3",
      :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }"
      )
  section.ownership__name(
    data-anim="fadeIn",
    data-anim-delay=".3",
    :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }"
  )
    .ownership__name_title Daniel
      br
      | Weitmann
    .ownership__name_desc Executive Chairman

  section.ownership__desc(
    data-anim="fadeIn",
    data-anim-delay=".3",
    :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }"
  ) The family has been engaged in both
    br
    | business and in law for many generations, such as supporting the protection of Civil Liberties Rights, including the right to Privacy and Private Property.

  section.ownership__desc1(
    data-anim="fadeIn",
    data-anim-delay=".3",
    :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }"
  ) Daniel Weitmann studied at MIT, Harvard and Baruch College, and began his career by working in Finance Transformation for large blue chip companies including KPMG, Procter & Gamble, Cobham Plc and Philips in Germany, Brazil, Sweden, Netherlands and Switzerland.
  section.ownership__desc2(
    data-anim="fadeIn",
    data-anim-delay=".3",
    :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }"
  ) Daniel Weitmann was born in Stockholm Sweden in 1965 and is the founder of Golden Suisse®.

  section.ownership__figureLeft(
    data-anim="fadeIn",
    data-anim-delay=".3",
    :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }"
  )
  section.ownership__figureRight(
    data-anim="fadeIn",
    data-anim-delay=".3",
    :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }"
  )
  section.ownership__schedule
    .ownership__schedule_container
      FlowButton(
        label="SCHEDULE AN ADVISORY CALL",
        link="https://calendly.com/onboarding-8"
      )
</template>

<script>
import gsap from "gsap";
import Owner from "@/components/Ownership/Owner";
import FlowButton from "@/components/FlowButton";
import listSm from "@/components/updated/listSm";
import CustomVideo from "@/components/CustomVideo";
export default {
  name: "Ownership",
  head: {
    title: "Golden Suisse - Governance",
  },
  components: {
    Owner,
    FlowButton,
    listSm,
    CustomVideo
  },
  mounted() {
    if (this.$store.state.isMobile) {
      let el = this.$el.querySelector(".ownership__logo").children[0];
      let timeout = 0;
      gsap.to(el.children[0], timeout + 0.4, {
        attr: {
          x2: 100,
          y2: 30,
        },
      });
      gsap.to(el.children[1], timeout, {
        attr: {
          y2: 0,
        },
      });
      gsap.to(el.children[2], timeout + 0.25, {
        attr: {
          x2: 30,
          y2: 30,
        },
      });
      gsap.to(el.children[3], timeout, {
        attr: {
          x2: 0,
        },
      });
      gsap.to(el.children[4], timeout + 0.25, {
        attr: {
          x2: 30,
          y2: 100,
        },
      });
      gsap.to(el.children[5], timeout, {
        attr: {
          y2: 65 + 60 + 5,
        },
      });
      gsap.to(el.children[6], timeout + 0.25, {
        attr: {
          x2: 100,
          y2: 100,
        },
      });
      gsap.to(el.children[7], timeout, {
        attr: {
          x2: 130,
        },
      });
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/_variables.scss";

.ownership {
  display: grid;
  grid-template-areas:
    ". pageTitle pageTitle pageTitle pageTitle pageTitle pageTitle pageTitle pageTitle ."
    "video video video video video video video video video video"
    ". smallTitle smallTitle smallTitle smallTitle smallTitle . . . ."
    ". about1 . about2 . about3 about3 about3 . ."
    ". hr hr hr hr hr hr hr hr ."
    ". governance governance governance governance governance governance governance governance ."
    ". govleft govleft govleft govleft govright govright govright govright ."
    ". hr2 hr2 hr2 hr2 hr2 hr2 hr2 hr2 ."
    ". logo logo owner owner name name name name ."
    ". desc desc . . desc1 desc1 desc2 desc2 ."
    ". figureLeft figureLeft figureLeft figureLeft figureRight figureRight figureRight figureRight ."
    ". schedule schedule schedule schedule schedule schedule schedule schedule .";
  grid-template-columns: 3.75% repeat(8, 11.5625%) 3.75%;
  padding: 295px 0 0 0;

  &__page-title {
    grid-area: pageTitle;
  }
  &__video {
    grid-area: video;
  }

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

  &__smallTitle {
    grid-area: smallTitle;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 80px;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: $white;
    padding: 8% 0;
  }

  &__about1 {
    grid-area: about1;
    font-family: Arial;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 229%;
    letter-spacing: -0.02em;
    color: $lightGrey;
    padding: 0;
    padding-bottom: 34%;
  }

  &__about2 {
    grid-area: about2;
    font-family: Arial;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 229%;
    letter-spacing: -0.02em;
    color: $lightGrey;
    padding: 0;
    padding-bottom: 34%;
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
    padding: 0;
    padding-bottom: 34%;
  }

  &__hr {
    grid-area: hr;
    color: $white;
    height: 2px;
  }

  &__governance {
    grid-area: governance;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 80px;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: $white;

    padding: 5% 26.3% 0 0;
  }

  &__govleft {
    grid-area: govleft;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 150%;

    letter-spacing: -0.02em;
    color: $white;

    padding: 10% 9% 16% 0;
  }

  &__govright {
    grid-area: govright;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 150%;

    letter-spacing: -0.02em;
    color: $white;

    padding: 10% 9% 16% 0;
  }

  &__hr2 {
    grid-area: hr2;
    color: $white;
    height: 2px;
  }

  &__logo {
    display: flex;
    justify-content: center;
    padding: 21% 0 29% 0;
    grid-area: logo;
    // transform: scale(1.7);

    &_img {
      width: 220px;
      height: 220px;
    }
  }

  &__owner {
    grid-area: owner;
    padding: 0;
    padding-top: 21.625%;

    &_img {
      width: 220px;
      /*height: 220px;*/
    }
  }

  &__name {
    grid-area: name;
    padding: 11% 0 10% 0;
    border-bottom: 2px $white solid;

    &_title {
      font-family: Arial;
      font-style: normal;
      font-weight: normal;
      font-size: 80px;
      line-height: 100%;
      letter-spacing: -0.02em;
      color: $white;
    }

    &_desc {
      font-family: Arial;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 16px;
      letter-spacing: -0.02em;
      color: $lightGrey;
      padding-top: 2%;
    }
  }

  &__desc {
    grid-area: desc;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 229%;
    /* or 229% */

    letter-spacing: -0.02em;
    color: $darkGrey;
    padding-top: 16%;
    padding-bottom: 27.03%;
  }

  &__desc1 {
    grid-area: desc1;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 125%;
    letter-spacing: -0.02em;
    color: $white;
    padding-right: 14%;
    padding-top: 16%;
    padding-bottom: 27.03%;
  }

  &__desc2 {
    grid-area: desc2;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 125%;
    letter-spacing: -0.02em;
    color: $white;
    padding-right: 20%;
    padding-top: 16%;
    padding-bottom: 27.03%;
  }

  &__figureLeft {
    grid-area: figureLeft;
    border-top: 2px solid $white;
    border-right: 2px solid $white;
    height: 160px;
  }

  &__figureRight {
    grid-area: figureRight;
    border-top: 2px solid $white;
    height: 160px;
  }

  &__schedule {
    grid-area: schedule;
    display: flex;
    justify-content: center;
    padding: 2.9% 0 9% 0;

    &_container {
      width: 370px;
    }
  }
}

@media (max-width: 1023px) {
  .ownership {
    grid-template-areas:
      ". pageTitle pageTitle ."
      "video video video video"
      ". smallTitle smallTitle ."
      ". about1 about1 ."
      ". about2 about2 ."
      ". about3 about3 ."
      ". hr hr ."
      ". governance governance ."
      ". govleft govleft ."
      ". govright govright ."
      ". hr2 hr2 ."
      ". desc desc ."
      ". owner logo ."
      ". name . ."
      ". desc2 desc2 ."
      ". desc1 desc1 ."
      ". figureLeft figureRight ."
      ". schedule schedule .";
    grid-template-columns: 5.4% repeat(2, 44.6%) 5.4%;
    padding: 100px 0 0 0;

    &__governance {
      font-size: 24px;
      line-height: 125%;
      letter-spacing: -0.04em;
      padding: 0;
      padding: 14% 5% 9% 0;
    }

    &__govleft {
      font-size: 20px;
      line-height: 150%;
      letter-spacing: -0.02em;
      padding: 0;
      padding-right: 10%;
    }

    &__govright {
      font-size: 20px;
      line-height: 150%;
      letter-spacing: -0.02em;
      padding: 0;
      padding-right: 10%;
      padding-bottom: 15%;
    }

    &__desc {
      font-size: 20px;
      line-height: 150%;
      letter-spacing: -0.02em;
      color: $white;
      padding: 0;
      padding-top: 15%;
      padding-bottom: 22%;
    }

    &__title {
      padding: 0;
      font-size: 48px;
      line-height: 146%;
    }

    &__smallTitle {
      font-size: 24px;
      line-height: 125%;
      letter-spacing: -0.04em;
      padding: 10% 11% 13.5% 0;
    }

    &__about1 {
      font-weight: normal;
      font-size: 20px;
      line-height: 150%;
      letter-spacing: -0.02em;
      color: $white;
      padding-right: 0;
      padding: 0 11% 0 0;
    }

    &__about2 {
      font-weight: normal;
      font-size: 20px;
      line-height: 150%;
      letter-spacing: -0.02em;
      color: $white;
      padding: 0 11% 9% 0;
    }

    &__about3 {
      font-size: 20px;
      line-height: 150%;
      letter-spacing: -0.02em;
      padding: 0 11% 15% 0;
    }

    &__logo {
      padding: 12% 0 0 0;
      transform: scale(1);

      &_img {
        width: 120px;
        height: 120px;
      }
    }

    &__owner {
      padding: 0 0 5% 0;

      &_img {
        width: 160px;
        /*height: 160px;*/
      }
    }

    &__name {
      border: none;

      &_title {
        font-size: 24px;
        line-height: 125%;
      }

      &_desc {
        font-size: 14px;
        line-height: 143%;
      }
    }

    &__desc2 {
      font-size: 20px;
      line-height: 150%;
      padding: 12% 15% 0 0;
    }

    &__desc1 {
      font-size: 20px;
      line-height: 150%;
      padding: 12% 15% 24% 0;
    }

    &__owner3,
    &__owner2 {
      padding: 0;
    }

    &__owner4 {
      padding: 50% 0 62% 0;
    }

    &__owner5 {
      display: none;
    }

    &__owner6 {
      display: none;
    }

    &__owner7 {
      display: none;
    }

    &__figureLeft {
      height: 80px;
    }

    &__figureRight {
      height: 80px;
    }

    &__schedule {
      padding: 18% 0 5% 0;
    }
  }
}
  .first-screen {
    grid-area: firstScreen;
  }
</style>
