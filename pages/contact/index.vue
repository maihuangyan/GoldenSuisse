<template lang="pug">
.headquarters
  section.headquarters__title(
    data-anim="fadeIn",
    data-anim-delay="0",
    :style="{ opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 10%)' }"
  ) Headquarters
  section.headquarters__phone(
    data-anim="fadeIn",
    data-anim-delay="0",
    :style="{ opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 10%)' }"
  )
    a.headquarters__phone_link(href="tel:+41415001466") + 41 415001466
  section.headquarters__email(
    data-anim="fadeIn",
    data-anim-delay="0.05",
    :style="{ opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 10%)' }"
  ) support@goldensuisse.com
  section.headquarters__adress(
    data-anim="fadeIn",
    data-anim-delay="0.1",
    :style="{ opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 7%)' }"
  ) Haus Gryffenberg
    br
    | Bahnhofstrasse 10
    br
    | Zürich
    br
    | Switzerland
  section.headquarters__map
    Clock
    img.headquarters__map__img(:src="require('@/static/image/map1.png')")
  section.headquarters__award(
    data-anim="fadeIn",
    data-anim-delay=".3",
    :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }"
  ) Award Winning Systems
  section.headquarters__app(
    data-anim="fadeIn",
    data-anim-delay=".3",
    :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }"
  )
    .headquarters__app_title(
      data-anim="fadeIn",
      data-anim-delay=".3",
      :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }",
      @click="$router.push({ path: '/payments/card/club' })"
    ) The Club
    .headquarters__app_desc(
      data-anim="fadeIn",
      data-anim-delay=".3",
      :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }"
    ) Desktop & Mobile
  section.headquarters__desc(
    data-anim="fadeIn",
    data-anim-delay=".3",
    :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }"
  )
    .headquarters__desc_title(
      data-anim="fadeIn",
      data-anim-delay=".5",
      :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }",
      @click="$router.push({ path: '/company/rates' })"
    ) Rates
    .headquarters__desc_desc(
      data-anim="fadeIn",
      data-anim-delay=".5",
      :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }"
    ) Privately vaulted precious metals
  section.headquarters__adv(
    data-anim="fadeIn",
    data-anim-delay=".3",
    :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }"
  )
    .headquarters__adv_title Apply for a
    .headquarters__adv_desc Private Swiss vault account
  section.headquarters__createAcc
    .headquarters__createAcc_container
      FlowButton(label="Become a Client", path="/account/register")
</template>

<script>
  import Clock from "@/components/Contact/Clock";
  import FlowButton from "@/components/FlowButton";
export default {
  name: "Headquarters",
  head: {
    title: "Golden Suisse - Headquarters",
  },
  components: {
    FlowButton,
    Clock,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/_variables.scss";

.headquarters {
  display: grid;
  grid-template-areas:
    ". title title title title title title title title ."
    ". phone email email . adress adress . . ."
    ". map map map map map map map map ."
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

  &__phone {
    grid-area: phone;
    font-family: Arial;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 229%;
    letter-spacing: -0.02em;
    padding: 35% 0 0 0;

    &_link {
      color: $lightGrey;
      text-decoration: none;
    }
  }

  &__email {
    grid-area: email;
    font-family: Arial;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 229%;
    letter-spacing: -0.02em;
    color: $lightGrey;
    padding: 17.5% 0 0 0;
  }

  &__adress {
    grid-area: adress;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 150%;
    letter-spacing: -0.02em;
    color: $white;
    padding: 16% 0 0 0;
  }

  &__map {
    grid-area: map;
    position: relative;

    &__img {
      width: 100%;
      opacity: 0.04;
    }
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

@media (max-width: 1200px) {
  .headquarters {
    &__title {
      font-size: 160px;
    }
  }
}

@media (max-width: 1023px) {
  .headquarters {
    grid-template-areas:
      ". title title ."
      ". adress adress ."
      ". phone phone ."
      ". email email ."
      "map map map map"
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

    &__adress {
      font-family: Arial;
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 125%;
      letter-spacing: -0.04em;
      padding-top: 9%;
    }

    &__phone {
      font-family: Arial;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 150%;
      letter-spacing: -0.02em;
      padding: 0;
      padding-top: 15%;
    }

    &__email {
      font-family: Arial;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 150%;
      letter-spacing: -0.02em;
      padding: 0;
    }

    &__map {
      overflow: hidden;

      &__img {
        width: 130%;
        margin-left: -15%;
      }
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
