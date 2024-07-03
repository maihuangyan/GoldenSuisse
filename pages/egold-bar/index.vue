<template lang="pug">
.egoldBar
  section.egoldBar__title(
    data-anim="fadeIn",
    data-anim-delay="0",
    :style="{ opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 10%)' }"
  ) E-GoldBar®

  section.egoldBar__goldBar(
    data-anim="fadeIn",
    data-anim-delay="0",
    :style="{ opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 10%)' }"
  )
    img.egoldBar__goldBar_img(:src="require('@/static/image/egoldBar.png')")

  section.egoldBar__subtitle(
    data-anim="fadeIn",
    data-anim-delay="0",
    :style="{ opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 10%)' }"
  )
    | The GS
    br
    | E-Gold Bar can be:

  section.egoldBar__desc1(
    data-anim="fadeIn",
    data-anim-delay="0",
    :style="{ opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 10%)' }"
  ) Swiss Vaulted Individual Barlists
  section.egoldBar__desc2(
    data-anim="fadeIn",
    data-anim-delay=".25",
    :style="{ opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 10%)' }"
  ) NonBanks don’t pose the high risk of full-scale banks because they do not leverage client assets.

  section.egoldBar__reason1(
    data-anim="fadeIn",
    data-anim-delay=".3",
    :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }"
  )
    Reason(
      num="1",
      desc="Transferred to other clients worldwide in real-time."
    )
  section.egoldBar__reason2(
    data-anim="fadeIn",
    data-anim-delay=".35",
    :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }"
  )
    Reason(
      num="2",
      desc="Bought and Sold throught online banking, with instant settlement."
    )
  section.egoldBar__reason3(
    data-anim="fadeIn",
    data-anim-delay=".4",
    :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }"
  )
    Reason(num="3", desc="Exchanged to other bullion.")

  section.egoldBar__benefits(
    data-anim="fadeIn",
    data-anim-delay=".3",
    :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }"
  ) Benefits
  section.egoldBar__listLinks
    DoubleLinkList(:list="innerPages")

  section.egoldBar__award(
    data-anim="fadeIn",
    data-anim-delay=".3",
    :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }"
  ) Award Winning Systems

  section.egoldBar__app(
    data-anim="fadeIn",
    data-anim-delay=".3",
    :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }"
  )
    .egoldBar__app_title(
      data-anim="fadeIn",
      data-anim-delay=".3",
      :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }",
      @click="$router.push({ path: '/account/download' })"
    ) GS App
    .egoldBar__app_desc(
      data-anim="fadeIn",
      data-anim-delay=".3",
      :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }"
    ) Desktop & Mobile
  section.egoldBar__desc(
    data-anim="fadeIn",
    data-anim-delay=".3",
    :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }"
  )
    .egoldBar__desc_title(
      data-anim="fadeIn",
      data-anim-delay=".5",
      :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }",
      @click="$router.push({ path: '/payments/card' })"
    ) The Card
    .egoldBar__desc_desc(
      data-anim="fadeIn",
      data-anim-delay=".5",
      :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }"
    ) Privately vaulted precious metals
  section.egoldBar__adv(
    data-anim="fadeIn",
    data-anim-delay=".3",
    :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }"
  )
    .egoldBar__adv_title Apply for a
    .egoldBar__adv_desc Private Swiss Vault Account
  section.egoldBar__createAcc
    .egoldBar__createAcc_container
      FlowButton(label="Become a Client", path="/account/register")
</template>

<script>
  import { mapGetters } from 'vuex';
  import DoubleLinkList from "@/components/Products/DoubleLinkList";
  import FlowButton from "@/components/FlowButton";
  import Reason from "@/components/Reason";
export default {
  name: "EgoldBar",
  head: {
    title: "Golden Suisse - E-GoldBar®",
  },
  components: {
    DoubleLinkList,
    FlowButton,
    Reason
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
  },
  data() {
    return {
      /*list: [
        {
          path: "/products/egold_bar/secure_storage",
          title: "Secure Storage",
          exist: true,
        },
        {
          path: "/products/egold_bar/instant_transfer",
          title: "Instant Transfer",
          exist: true,
        },
        {
          path: "/products/egold_bar/instant_exchange",
          title: "Instant Exchange",
          exist: true,
        },
        {
          path: "/products/egold_bar/lbma_refiner",
          title: "LBMA Refiner",
          exist: true,
        },
        {
          path: "/products/egold_bar/swiss_assay",
          title: "Swiss Assay 999.9",
          exist: true,
        },
        {
          path: "/products/egold_bar/sustainability",
          title: "Ethical Gold",
          exist: true,
        },
      ],*/
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/_variables.scss";

.egoldBar {
  display: grid;
  grid-template-areas:
    ". title title title title title title title title ."
    ". goldbar goldbar goldbar goldbar subtitle subtitle subtitle subtitle ."
    ". desc1 . desc2 . reason1 reason1 reason2 reason2 ."
    ". . . . . reason3 reason3 . . ."
    ". benefits benefits benefits benefits benefits benefits benefits benefits ."
    ". listLinks listLinks listLinks listLinks listLinks listLinks listLinks listLinks ."
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

  &__goldBar {
    grid-area: goldbar;
    padding: 10.812% 0 0 19%;

    &_img {
      padding-top: 7%;
      max-width: 62%;
    }
  }

  &__subtitle {
    padding: 10.812% 5% 0 0;

    grid-area: subtitle;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 80px;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: $white;
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
    padding: 38% 0 0 0;
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
    padding: 38% 0 0 0;
  }

  &__reason1 {
    grid-area: reason1;
    padding: 19% 0 0 0;
    padding-right: 20%;
    padding-bottom: 10%;
  }

  &__reason2 {
    grid-area: reason2;
    padding: 19% 0 0 0;
    padding-right: 20%;
    padding-bottom: 10%;
  }

  &__reason3 {
    grid-area: reason3;
    padding-right: 20%;
    padding-bottom: 35%;
  }

  &__benefits {
    grid-area: benefits;
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
    padding: 7.5% 0 3% 0;
    border-bottom: 2px solid $white;
  }

  &__listLinks {
    grid-area: listLinks;
  }

  &__award {
    grid-area: award;
    padding: 8% 0 2% 0;
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
  .egoldBar {
    grid-template-areas:
      ". title title ."
      ". goldbar goldbar ."
      ". desc1 desc1 ."
      ". desc2 desc2 ."
      ". subtitle subtitle ."
      ". reason1 reason1 ."
      ". reason2 reason2 ."
      ". reason3 reason3 ."
      ". benefits benefits ."
      ". listLinks listLinks ."
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

    &__goldBar {
      grid-area: goldbar;
      padding: 21.5% 0 22.5% 0;
      display: flex;
      justify-content: center;

      border-bottom: 2px solid $white;

      &_img {
        padding: 0;
        width: 271px;
        max-width: 271px;
        height: 124px;
      }
    }

    &__subtitle {
      padding: 5% 0 5.5% 0;
      font-size: 42px;
      line-height: 114%;
      letter-spacing: -0.04em;
    }

    &__desc1,
    &__desc2 {
      font-size: 20px;
      line-height: 150%;
      letter-spacing: -0.02em;
      color: $white;
      font-weight: normal;
      padding: 10% 12% 0 0;
    }

    &__desc2 {
      padding-bottom: 18%;
    }

    &__reason1 {
      padding-top: 9%;
      padding-bottom: 3%;
      border: none;
      padding-right: 21%;
    }

    &__reason2 {
      padding-top: 6%;
      padding-bottom: 3%;
      border: none;
      padding-right: 21%;
    }

    &__reason3 {
      padding-top: 6%;
      padding-bottom: 3%;
      border: none;
      padding-right: 21%;
    }

    &__benefits {
      padding: 15% 0 5.5% 0;
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
      padding: 5% 0 49% 0;

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
      padding: 5% 0 49% 0;

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
      padding: 26% 0 13% 0;
    }

    &__createAcc {
      padding: 0 0 5% 0;
    }
  }
}
</style>
