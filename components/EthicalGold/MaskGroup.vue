<template lang="pug">
.maskGroup(
  data-anim="backgroundSlide",
  data-anim-delay="0",
  :style="{ backgroundPosition: this.$store.state.isMobile ? 'center' : '50% 40%' }"
)
  section.maskGroup__title(
    data-anim="fadeIn",
    data-anim-delay="0",
    :style="{ opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 20%)' }"
  ) Child
    br
    | Aid Mission
  section.maskGroup__button(
    data-anim="fadeIn",
    data-anim-delay="0",
    @click="redirect('https://vimeo.com/442346811')",
    :style="{ opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 20%)' }"
  )
    .maskGroup__button__title La Rinconada
    .maskGroup__button__butt
      PlayButton(width="55", height="67", stroke="2", color="#FFFFFF")
  section.maskGroup__desc1(
    data-anim="fadeIn",
    data-anim-delay="0",
    :style="{ opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 5%)' }"
  ) GOLDENSUISSE DOES NOT SOURCE GOLD FROM LA RINCONADA, NOR ANY OTHER ILLEGAL GOLDMINE.
  section.maskGroup__desc2(
    data-anim="fadeIn",
    data-anim-delay="0",
    :style="{ opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 5%)' }"
  ) OUR SUPPORT IS SOLELY HUMANITARIAN.
  section.maskGroup__desc3(
    data-anim="fadeIn",
    data-anim-delay="0",
    :style="{ opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 5%)' }"
  ) Our work towards a more ethical gold begins in an illegal Peruvian goldmine, at La Rinconada, the highest city in the world with 70.000 inhabitants at 5,500 meters altitude.
  section.maskGroup__mission(
    data-anim="fadeIn",
    data-anim-delay=".3",
    :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }"
  ) Child Aid Mission
  section.maskGroup__list
    LinkList(:list="list")
</template>

<script>
export default {
  props: ['list'],
  name: "MaskGroup",
  components: {
    PlayButton: () => import("@/components/PlayButton"),
    LinkList: () => import("@/components/EthicalGold/LinkList"),
  },
  methods: {
    redirect(path) {
      window.open(path);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/_variables.scss";

.maskGroup {
  display: grid;
  grid-template-areas:
    "title title title . . . button button"
    "desc1 . desc2 . desc3 desc3 desc3 desc3"
    "mission mission mission mission mission mission mission mission"
    "list list list list list list list list";
  grid-template-columns: repeat(8, 12.5%);
  background: no-repeat url("../../static/image/MaskGroup.jpg");
  background-size: 100%;
  width: 100%;
  padding: 5% 3.75% 7.5% 3.75%;

  &__title {
    grid-area: title;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 80px;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: $white;
  }

  &__button {
    grid-area: button;
    font-family: Arial;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: -0.02em;
    color: $white;
    display: flex;
    padding: 0;
    cursor: pointer;

    &__butt {
      display: flex;
      justify-content: flex-end;
      width: fit-content;
      padding-left: 29px;
    }

    &__title {
      display: flex;
      justify-content: flex-end;
      width: 100%;
    }
  }

  &__desc1 {
    grid-area: desc1;
    font-family: Arial;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 229%;
    letter-spacing: -0.02em;
    color: $white;
    padding-top: 35%;
  }

  &__desc2 {
    grid-area: desc2;
    font-family: Arial;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 229%;
    letter-spacing: -0.02em;
    color: $white;
    padding-top: 35%;
  }

  &__desc3 {
    grid-area: desc3;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 80px;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: $white;
    padding-right: 5%;
    padding-top: 9%;
  }

  &__mission {
    grid-area: mission;
    font-family: Arial;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 229%;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: -0.02em;
    color: $white;
    border-bottom: 2px solid $white;
    padding: 7.5% 0 3.25% 0;
  }

  &__list {
    grid-area: list;
  }
}

@media (max-width: 1900px) {
  .maskGroup {
    background-size: 110%;
  }
}

@media (max-width: 1700px) {
  .maskGroup {
    background-size: 130%;
  }
}

@media (max-width: 1500px) {
  .maskGroup {
    background-size: 140%;

    &__title {
      font-size: 60px;
    }

    &__desc3 {
      font-size: 60px;
    }

    &__mission {
      padding: 3% 0;
    }
  }
}

@media (max-width: 1023px) {
  .maskGroup {
    grid-template-areas:
      "title button"
      "desc1 desc2"
      "desc3 desc3"
      "mission mission"
      "list list";
    grid-template-columns: 50% 50%;
    padding: 11% 5.4% 18% 5.4%;
    background-size: 200%;

    &__title {
      font-size: 24px;
      line-height: 125%;
      letter-spacing: -0.04em;
    }

    &__button {
      font-size: 14px;
      line-height: 16px;
      letter-spacing: -0.02em;

      &__title {
        padding: 0 2% 0 0;
      }

      &__butt {
        transform: scale(0.8);
      }
    }

    &__desc1,
    &__desc2 {
      font-size: 14px;
      line-height: 143%;
      letter-spacing: -0.02em;
    }

    &__desc1 {
      padding-top: 40%;
      padding-right: 12%;
    }

    &__desc2 {
      padding-top: 40%;
      padding-right: 0;
    }

    &__desc3 {
      padding-top: 11%;
      font-size: 40px;
      padding-right: 6%;
      font-size: 24px;
      line-height: 125%;
      letter-spacing: -0.02em;
    }

    &__mission {
      padding: 32% 0 4.7% 0;
    }
  }
}

@media (max-width: 500px) {
  .maskGroup {
    background-size: 250%;
  }
}
</style>
