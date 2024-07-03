<template lang="pug">
.children
  section.children__title(
    
    data-anim="fadeIn",
    data-anim-delay="0",
    :style="{ opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 10%)' }"
  )

    | The Challenge
  section.children__about2(
    data-anim="fadeIn",
    data-anim-delay="0.05",
    :style="{ opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 10%)' }"
  ) How is it possible then to help the children living in La Rinconada, subject to lethal mercury contamination, with oxygen deprivation and with the prospect boys of ending working in a dangerous mine, and girls in prostitution?
  section.children__adv(
    data-anim="fadeIn",
    data-anim-delay=".5",
    :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }"
  )

    .children__adv_title Give to Good:
    .children__adv_desc Press the Donate Button
  section.children__donate
    .children__donate_container
      FlowButtonDark(
        label="DONATE",
        link="https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=UTPNG5HQRJSFN"
      )

</template>

<script>
export default {
  name: "Children",
  head: {
    title: "Golden Suisse - The Challenge",
  },
  layout: "white",
  components: {
    FlowButtonDark: () => import("@/components/FlowButtonDark"),
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/_variables.scss";

.children {
  display: grid;
  grid-template-areas:
    "title title title title title title title title"
    "about1 about1 about1 . about2 about2 about2 ."
    ". . . . about3 about3 about3 ."
    "imgContainer imgContainer imgContainer imgContainer imgContainer imgContainer imgContainer imgContainer"
    ". . . . about4 about4 about4 about4"
    "adv adv adv adv adv adv adv adv"
    "donate donate donate donate donate donate donate donate"
    "footer footer footer footer footer footer footer footer";
  grid-template-columns: repeat(8, 12.5%);
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
    align-items: flex-end;
    letter-spacing: -0.04em;
    color: $black;
    padding: 3% 0;
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
    padding: 5% 0 7% 0;
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
    padding: 5% 0 7% 0;
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
    padding: 5% 0 11.3% 0;
  }

  &__imgContainer {
    grid-area: imgContainer;
    display: flex;
    justify-content: center;
    padding: 0 0 5% 0;

    &__img {
      width: 29.122%;
    }
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
    padding-right: 10.9%;
  }

  &__adv {
    grid-area: adv;
    display: block;
    text-align: center;
    height: 100%;
    padding: 8.5% 0 3% 0;
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

  &__donate {
    grid-area: donate;
    display: flex;
    justify-content: center;
    padding: 1.5% 0 11% 0;
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

@media (max-width: 1023px) {
  .children {
    grid-template-areas: "backLink" "title" "about1" "about2" "about3" "imgContainer" "about4" "adv" "donate" "footer";
    grid-template-columns: 100%;
    padding: 21% 5.4% 16% 5.4%;

    &__title {
      font-size: 48px;
      line-height: 104%;
      letter-spacing: -0.04em;
    }

    &__imgContainer {
      padding: 9% 0 19% 0;

      &__img {
        width: 100%;
      }
    }

    &__about1,
    &__about2,
    &__about3,
    &__about4 {
      font-size: 24px;
      line-height: 125%;
      padding: 8% 5% 2% 0;
      width: 100%;
    }

    &__adv {
      padding: 32.5% 0 19.5% 0;
    }

    &__donate {
      padding: 0 0 39% 0;
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
  .children {
    &__donate {
      &_container {
        width: 100%;
      }
    }
  }
}
</style>
