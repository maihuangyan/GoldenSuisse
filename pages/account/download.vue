<template lang="pug">
  .download
    section.download__title(data-anim="fadeIn" data-anim-delay="0" :style="{opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 10%)'}") Download Apps
    section.download__logo
      img.download__logo__img(:src="require('@/static/image/AppIcon.png')" data-anim="scalePicture" data-anim-delay="0" :style="{transform: this.$store.state.isMobile ? 'scale(1)' : 'scale(0.7)', opacity: this.$store.state.isMobile ? 1 : 0}")
    section.download__register(data-anim="fadeIn" data-anim-delay="0.05" :style="{opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 10%)'}") Register Account on Your Mobile
    section.download__about(data-anim="fadeIn" data-anim-delay="0.1" :style="{opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 5%)'}") The Bullion Master. Swiss NonBanking technology. Works like any other banking app, but with gold and silver.
    section.download__app(data-anim="fadeIn" data-anim-delay=".3" :style="{opacity: this.$store.state.isMobile ? 1 : 0}")
      .download__app_title(data-anim="fadeIn" data-anim-delay=".3" :style="{opacity: this.$store.state.isMobile ? 1 : 0}" @click="redirect('https://apps.apple.com/us/app/goldensuisse/id1236821991')") iOS
      .download__app_desc(data-anim="fadeIn" data-anim-delay=".3" :style="{opacity: this.$store.state.isMobile ? 1 : 0}") Sep 29, 2019 Version 1.7.7
    section.download__desc(data-anim="fadeIn" data-anim-delay=".3" :style="{opacity: this.$store.state.isMobile ? 1 : 0}")
      .download__desc_title(data-anim="fadeIn" data-anim-delay=".5" :style="{opacity: this.$store.state.isMobile ? 1 : 0}" @click="redirect('https://play.google.com/store/apps/details?id=com.golden.coin&hl=en_US')") Android
      .download__desc_desc(data-anim="fadeIn" data-anim-delay=".5" :style="{opacity: this.$store.state.isMobile ? 1 : 0}") January 31, 2020 Version 1.4
    section.download__award(data-anim="fadeIn" data-anim-delay=".3" :style="{opacity: this.$store.state.isMobile ? 1 : 0}") Private Swiss Vault Account
    section.download__video
      CustomVideo(largeImgUrl="videoNew.jpg" smallImgUrl="videoNew.jpg" :isMobile="isMobile" title="Global Banking & Finance<br>Awards 2018" smallSize="200%" :key="isMobile" path="/company/awards")
    section.download__adv(data-anim="fadeIn" data-anim-delay=".3" :style="{opacity: this.$store.state.isMobile ? 1 : 0}")
      .download__adv_title Apply for a
      .download__adv_desc Private Swiss vault account
    section.download__createAcc
      .download__createAcc_container
        FlowButton(label="Become a Client" path="/account/register")
</template>

<script>
export default {
  name: "Download",
  head: {
    title: "Golden Suisse - Download Apps"
  },
  components: {
    FlowButton: () => import("@/components/FlowButton"),
    DoubleLinkList: () => import("@/components/Products/DoubleLinkList"),
    CustomVideo: () => import("@/components/CustomVideo")
  },
  data() {
    return {
      isMobile: false
    };
  },
  methods: {
    redirect(path) {
      window.open(path);
    }
  },
  mounted() {
    if (process.client && window.innerWidth < 1024) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/_variables.scss";

.download {
  display: grid;
  grid-template-areas:
    ". title title title title title title title title ."
    ". logo register register . about about about about ."
    "app app app app app desc desc desc desc desc"
    ". award award award award award award award award ."
    "video video video video video video video video video video"
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

  &__logo {
    grid-area: logo;
    padding: 40% 0 23% 0;

    &__img {
      width: 65%;
    }
  }

  &__register {
    grid-area: register;
    font-family: Arial;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 229%;
    letter-spacing: -0.02em;
    color: $lightGrey;
    padding: 20% 0 23% 0;
  }

  &__about {
    grid-area: about;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 80px;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: $white;
    padding: 10% 0 23% 0;
  }

  &__video {
    grid-area: video;
    display: flex;
    height: 100%;
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
    padding: 9% 0 4.4% 0;
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
    padding-bottom: 7.8%;

    &_container {
      width: 370px;
    }
  }
}

@media (max-width: 1255px) {
  .download {
    &__title {
      line-height: 80%;
    }
  }
}

@media (max-width: 1023px) {
  .download {
    grid-template-areas:
      ". title title ."
      ". about about ."
      ". logo register ."
      ". app desc ."
      ". award award ."
      "video video video video"
      ". adv adv ."
      ". createAcc createAcc .";
    grid-template-columns: 5.4% repeat(2, 44.6%) 5.4%;
    padding: 100px 0 0 0;

    &__title {
      padding: 0;
      font-size: 48px;
      line-height: 146%;
    }

    &__logo {
      padding: 0 0 33% 0;
      &__img {
        width: 72%;
      }
    }

    &__register {
      font-family: Arial;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 143%;
      letter-spacing: -0.02em;
      padding: 0 0 33% 0;
    }

    &__about {
      font-family: Arial;
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 125%;
      letter-spacing: -0.04em;
      padding-bottom: 16%;
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
