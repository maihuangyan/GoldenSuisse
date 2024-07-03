<template lang="pug">
.home
  section.home__goldToCash(
    data-anim="fadeIn",
    data-anim-delay=".3",
    :style="{ opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 20%)' }"
  )
    GoldToCash
  section.home__title
    .home__title_top(
      data-anim="fadeIn",
      data-anim-delay=".3",
      :style="{ opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 20%)' }"
    )
      | <span style="color:#fBc33d;">Swiss</span> Nonbank
    .home__title_bot(
      data-anim="fadeIn",
      data-anim-delay="1.2",
      :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }"
      
    ) World Class Wealth Protection
  section.home__menu-sect(
    data-anim="fadeIn",
    data-anim-delay=".3",
    :style="{ opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 20%)' }"
  )
    .list-links-new
      nuxt-link.list-links-new__link.link(to="/payments/gold-silver") Gold & Silver
      nuxt-link.list-links-new__link.link(to="/payments/vault-trust") Vault
      nuxt-link.list-links-new__link.link(to="/payments/card") Card
      nuxt-link.list-links-new__link.link(to="/payments") Payments
      nuxt-link.list-links-new__link.link(to="/payments/advisory") Advisory
      nuxt-link.list-links-new__link.link(to="/account/register") Become a Client
  section.home__video(
    @click="openPopup()",
    data-anim="fadeIn",
    data-anim-delay=".3",
    :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }"
  )
    .home__video-play(v-show="video.showPlayIcon")
      .home__video-circle
      PlayButton(:width="100" :height="120" color="white" stroke="2")
    .home__video-tint(v-show="video.tint")
    video.home__video-elem(autoplay loop muted v-show="video.intro")
      source(src="../static/video/gs—intro.mp4" type="video/mp4")
    // video.home__video-elem(loop v-show="video.start")
      // source(src="../static/video/gs.mp4" type="video/mp4")
  section.home__app(
    data-anim="fadeIn",
    data-anim-delay=".3",
    :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }"
  )
    .home__app_title(
      data-anim="fadeIn",
      data-anim-delay=".3",
      :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }",
      @click="$router.push({ path: '/company' })"
    ) Company
    .home__app_desc(
      data-anim="fadeIn",
      data-anim-delay=".3",
      :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }"
    )
      | Preserving our clients wealth
      br
      | is at the core of everything we do


  section.home__desc(
    data-anim="fadeIn",
    data-anim-delay=".3",
    :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }"
  )
    .home__desc_title(
      data-anim="fadeIn",
      data-anim-delay=".5",
      :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }",
      @click="$router.push({ path: '/company/awards' })"
    ) Awards
    .home__desc_desc(
      data-anim="fadeIn",
      data-anim-delay=".5",
      :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }"
    ) Global Banking & Finance
      br
      | Awards winner 2018

  section.home__adv(
    data-anim="fadeIn",
    data-anim-delay=".3",
    :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }"
  )
    .home__adv_title Apply for a
    .home__adv_desc Private Swiss Vault Account
  section.home__createAcc
    .home__createAcc_container
      FlowButton(label="Become a Client", path="/account/register")
</template>

<script>
  import GoldToCash from "@/components/Header/GoldToCash";
  import CardNew from "@/components/CardNew";
  import FlowButton from "@/components/FlowButton";
  import PlayButton from "@/components/PlayButton";
export default {
  name: "Home",
  head: {
    title: "Golden Suisse",
  },
  components: {
    GoldToCash,
    CardNew,
    FlowButton,
    PlayButton
  },
  data() {
    return {
      isMobile: false,
      video: {
        start: false,
        intro: true,
        tint: false,
        showPlayIcon: true
      }
    };
  },
  mounted() {
    this.$store.dispatch("updateBigHeader", true);
    if (process.client && window.innerWidth < 1024) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  },
  methods: {
    openPopup(data) {
      /*this.$store.commit('initVideoPopup', data);*/
      this.$store.commit('setVideoPopupShow', true);
    },
    toggleVideo() {
      let video = this.$el.querySelectorAll(".home__video-elem")[1];
      this.video.start = true;
      this.video.intro = false;
      this.video.showPlayIcon = !this.video.showPlayIcon;
      this.video.tint = this.video.showPlayIcon;
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/_variables.scss";

.home {
  display: grid;
  grid-template-areas:
    ". . . . . . . goldToCash goldToCash ."
    ". title title title title title title title title ."
    ". account account account account account account account account ."
    ". menu menu menu menu menu menu menu menu ."
    "video video video video video video video video video video"
    ". regAcc regAcc regAcc regAcc regAcc regAcc regAcc regAcc ."
    "app app app app app desc desc desc desc desc"
    ". adv adv adv adv adv adv adv adv ."
    ". createAcc createAcc createAcc createAcc createAcc createAcc createAcc createAcc .";
  grid-template-columns: 3.75% repeat(8, 11.5625%) 3.75%;
  transition: all 1s ease-in-out;
  padding-bottom: 7.5%;
  animation: slidein 1s;
  padding-top: 164px;

  &__goldToCash {
    grid-area: goldToCash;
  }

  &__title {
    grid-area: title;
    font-family: Arial;
    font-style: normal;
    padding: 170px 0 250px 0;
    text-align: center;

    &_top {
      letter-spacing: -0.04em;
      color: $white;
      font-size: 180px;
      line-height: 89%;
      padding: 0;
      margin-left: -1.5%;
    }

    &_bot {
      font-weight: bold;
      font-size: 24px;
      line-height: 16px;
      letter-spacing: -0.02em;
      color: #ffffff;
      padding: 0;
      padding-top: 2%;
      @include adaptive(mob) {
        padding-top: 10%;
        line-height: 100%;
        font-size: 14px;
      }
    }
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
    margin-top: 60px;
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
    margin-top: 60px;
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

  &__account {
    grid-area: account;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 2% 0 2% 0;

    &_title {
      font-family: Arial;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 417%;
      letter-spacing: -0.04em;
      text-transform: uppercase;
      color: $white;
    }
  }

  &__video {
    grid-area: video;
    position: relative;
    cursor: pointer;
    &-elem {
      width: 100%;
      height: 42.5vw;
      object-fit: cover;
    }
    &-play {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-40%, -50%);
      z-index: 1;
    }
    &-circle {
      z-index: 10;
      position: absolute;
      top: 50%;
      left: 40%;
      transform: translate(-50%, -50%);
      width: 300px;
      height: 300px;
      border: 2px solid $white;
      border-radius: 50%;
      opacity: 0;
      transition: all 0.3s;
      &:hover {
        opacity: 1;
      }
    }
    &-tint {
      width: 100%;
      height: 100%;
      position: absolute;
      background: $black;
      opacity: 0.8;
    }
  }

  &__adv {
    grid-area: adv;
    display: block;
    text-align: center;
    height: 100%;
    padding: 10% 0 4.4% 0;
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

    &_container {
      width: 370px;
    }
  }
  @keyframes slidein {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  &__register-acc {
    margin-bottom: 60px;
  }
  &__menu-sect {
    grid-area: menu;
    margin-bottom: 50px;
  }
  &__menu {
    display: flex;
    justify-content: center;
  }

}



@media (max-width: 1240px) {
  .home {
    &__title {
      &_top {
        font-size: 140px;
      }
    }
  }
}

@media (max-width: 1023px) {
  .home {
    grid-template-areas:
      ". title title title title ."
      ". menu menu menu menu ."
      "video video video video video video"
      ". regAcc regAcc regAcc regAcc ."
      ". app app desc desc ."
      ". adv adv adv adv ."
      ". createAcc createAcc createAcc createAcc .";
    grid-template-columns: 5.4% repeat(4, 22.3%) 5.4%;
    padding-top: 225px !important;

    &__goldToCash {
      display: none;
    }

    &__title {
      padding: 0 0 13% 0;

      &_top {
        font-size: 80px;
      }
    }

    &__video {
      &-play {
        width: 60px;
      }
      &-elem {
        height: auto;
      }
    }

    &__app {
      grid-template-areas: "appTitle";
      grid-template-columns: 100%;
      padding: 10% 0 25% 0;

      &_title {
        font-size: 24px;
        line-height: 20px;
        letter-spacing: -0.04em;
        width: 100%;
      }

      &_desc {
        display: none;
      }
    }

    &__desc {
      grid-template-areas: "descTitle";
      grid-template-columns: 100%;
      padding: 10% 0 25% 0;

      &_title {
        font-size: 24px;
        line-height: 20px;
        letter-spacing: -0.04em;
        width: 100%;
      }

      &_desc {
        display: none;
      }
    }

    &__account {
      padding: 11.5% 0 5.5% 0;

      &_title {
        font-size: 14px;
        line-height: 143%;
      }
    }

    &__adv {
      padding: 120px 0 50px;
    }
  }
}
</style>
