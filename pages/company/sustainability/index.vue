<template lang="pug">
.ethicalGold
  section.ethicalGold__title(
    data-anim="fadeIn",
    data-anim-delay="0",
    :style="{ opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 20%)' }"
  ) Sustainability
  section.ethicalGold__maskGroup
    MaskGroup(:list="innerPages")

  section.ethicalGold__person-sect
    p.ethicalGold__person
      | Alexandra
      br
      | Sundell
    p.ethicalGold__person-text VP Corporate Social Responsibility

  section.ethicalGold__ownerDesc(
    data-anim="fadeIn",
    data-anim-delay=".35",
    :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }"
  ) Wealth and Privacy
    br
    | Preservation.
    br
    br
    | Golden Suisse works solely with ethical gold and silver. Part of GoldenSuisse’s ethical policy includes actively helping defenseless children in illegal gold mining environments.
  section.ethicalGold__ownerLarge(
    data-anim="fadeIn",
    data-anim-delay=".4",
    :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }"
  ) Golden Suisse® provides Humanitarian Aid, as well as resources, to source, bridge and overview donations, making sure they reach children in need.
  section.ethicalGold__figureLeft(
    data-anim="fadeIn",
    data-anim-delay=".45",
    :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }"
  )
  section.ethicalGold__figureRight(
    data-anim="fadeIn",
    data-anim-delay=".5",
    :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }"
  )

</template>

<script>
  import { mapGetters } from 'vuex'
  import Owner from "@/components/Ownership/Owner";
  import FlowButton from "@/components/FlowButton";
  import MaskGroup from "@/components/EthicalGold/MaskGroup";
export default {
  name: "EthicalGold",
  head: {
    title: "Golden Suisse - Sustainability",
  },
  components: {
    Owner,
    FlowButton,
    MaskGroup
  },
  computed: {
    ...mapGetters([
      'whitePages/getPagesArray'
    ]),
    innerPages() {
      let categ, pathArray;
      if (this.$route.path.slice(-1) != '/') {
        categ = this.$route.path.split('/').pop();
      }
      else {
        pathArray = this.$route.path.split('/');
        categ = pathArray[pathArray.length - 2];
      }
      let whitePages = JSON.parse(JSON.stringify(this['whitePages/getPagesArray'](categ)));
      if (pathArray) {
        categ = '';
      }
      else {
        categ = categ + '/';
      }
      for (let obj in whitePages) {
        whitePages[obj].path = `${categ}${whitePages[obj].path}`;
      }
      return whitePages;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/_variables.scss";

.ethicalGold {
  display: grid;
  grid-template-areas:
    ". title title title title title title title title ."
    "maskGroup maskGroup maskGroup maskGroup maskGroup maskGroup maskGroup maskGroup maskGroup maskGroup"
    ". personSect personSect ownerDesc . ownerLarge ownerLarge ownerLarge ownerLarge ."
    ". figureLeft figureLeft figureLeft figureLeft figureRight figureRight figureRight figureRight ."
    ". adv adv adv adv adv adv adv adv ."
    ". donate donate donate donate donate donate donate donate .";
  grid-template-columns: 3.75% repeat(8, 11.5625%) 3.75%;
  padding: 295px 0 0 0;

  &__person-sect {
    grid-area: personSect;
  }
  &__person {
    @extend %default-text;
    color: #ffffff;
    font-size: 48px;
    line-height: 64px;
  }
  &__person-text {
    @extend %default-text;
    margin-top: 30px;
    font-size: 14px;
    color: $lightGrey;
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
    padding-bottom: 8%;
  }

  &__maskGroup {
    grid-area: maskGroup;
    padding-bottom: 7.5%;
  }

  &__owner {
    grid-area: owner;
    padding: 0;
    padding-bottom: 16.5%;
  }

  &__ownerDesc {
    grid-area: ownerDesc;
    font-family: Arial;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 229%;
    letter-spacing: -0.02em;
    color: $lightGrey;
    padding: 0;
    padding-bottom: 16.5%;
  }

  &__ownerLarge {
    grid-area: ownerLarge;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 80px;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: $white;
    padding: 0;
    padding-bottom: 16.5%;
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

  &__adv {
    grid-area: adv;
    display: block;
    text-align: center;
    height: 100%;
    padding: 4.055% 0 4.73% 0;
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
    padding: 0 0 8% 0;

    &_container {
      width: 370px;
    }
  }
}

@media (max-width: 1023px) {
  .ethicalGold {
    grid-template-areas:
      ". title title ."
      "maskGroup maskGroup maskGroup maskGroup"
      ". personSect personSect ."
      ". ownerDesc ownerDesc ."
      ". ownerLarge ownerLarge ."
      ". figureLeft figureRight ."
      ". adv adv ."
      ". donate donate .";
    grid-template-columns: 5.4% repeat(2, 44.6%) 5.4%;
    padding: 100px 0 0 0;

    &__title {
      padding: 0;
      font-size: 48px;
      line-height: 146%;
    }

    &__owner {
      padding: 18% 0 0 0;
    }

    &__ownerDesc {
      font-size: 14px;
      line-height: 143%;
      letter-spacing: -0.02em;
      padding: 7% 12% 16% 0;
    }

    &__ownerLarge {
      font-size: 24px;
      line-height: 125%;
      letter-spacing: -0.02em;
      padding: 0 18% 25.5% 0;
    }

    &__figureLeft {
      height: 80px;
    }

    &__figureRight {
      height: 80px;
    }

    &__donate {
      padding: 18% 0 5% 0;
    }
  }
}
</style>
