<template lang="pug">
  .technology
    section.technology__title(data-anim="fadeIn" data-anim-delay="0" :style="{opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 10%)'}") Open Banking
    section.technology__about1(data-anim="fadeIn" data-anim-delay="0" :style="{opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 10%)'}")
      img.technology__about1_img1(:src="require('@/static/image/Appstore.svg')" @click="redirect('https://apps.apple.com/us/app/goldensuisse/id1236821991')" data-anim="scalePicture" data-anim-delay=".3" :style="{transform: this.$store.state.isMobile ? 'scale(1)' : 'scale(0.7)', opacity: this.$store.state.isMobile ? 1 : 0}")
      img.technology__about1_img2(:src="require('@/static/image/googlePlay.png')" @click="redirect('https://play.google.com/store/apps/details?id=com.golden.coin&hl=en_US')" data-anim="scalePicture" data-anim-delay=".3" :style="{transform: this.$store.state.isMobile ? 'scale(1)' : 'scale(0.7)', opacity: this.$store.state.isMobile ? 1 : 0}")
    section.technology__about2(data-anim="fadeIn" data-anim-delay="0" :style="{opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 10%)'}")
      section.technology__about2_left Golden Suisse App
      section.technology__about2_right 7k+ Downloads
    section.technology__about3(data-anim="fadeIn" data-anim-delay="0" :style="{opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 10%)'}")
      | Borderless
      br
      | accounts in USD,
      br
      | EUR, GBP & CHF.
      p
        | London - New York - Brussels - Zurich
    section.technology__benefits(data-anim="fadeIn" data-anim-delay=".3" :style="{opacity: this.$store.state.isMobile ? 1 : 0}") Features
    section.technology__listLinks
      DoubleLinkList(:list="innerPages")
    section.technology__video
      CustomVideo(largeImgUrl="videoNew.jpg" smallImgUrl="videoNew.jpg" :isMobile="isMobile" title="Global Banking & Finance<br>Awards 2018" smallSize="200%" :key="isMobile" path="/golden_suisse/awards" subtitleCenter="Member of The Swiss <br>Financial Services Standards Association <br>VQF")
    section.technology__award(data-anim="fadeIn" data-anim-delay=".3" :style="{opacity: this.$store.state.isMobile ? 1 : 0}") Award Winning Systems
    section.technology__app(data-anim="fadeIn" data-anim-delay=".3" :style="{opacity: this.$store.state.isMobile ? 1 : 0}")
      .technology__app_title(data-anim="fadeIn" data-anim-delay=".3" :style="{opacity: this.$store.state.isMobile ? 1 : 0}" @click="$router.push({path: '/payments/card'})") The Card
      .technology__app_desc(data-anim="fadeIn" data-anim-delay=".3" :style="{opacity: this.$store.state.isMobile ? 1 : 0}") Desktop & Mobile
    section.technology__desc(data-anim="fadeIn" data-anim-delay=".3" :style="{opacity: this.$store.state.isMobile ? 1 : 0}")
      .technology__desc_title(data-anim="fadeIn" data-anim-delay=".5" :style="{opacity: this.$store.state.isMobile ? 1 : 0}" @click="$router.push({path: '/payments/card/club'})") The Club
      .technology__desc_desc(data-anim="fadeIn" data-anim-delay=".5" :style="{opacity: this.$store.state.isMobile ? 1 : 0}") Privately vaulted precious metals
    section.technology__adv(data-anim="fadeIn" data-anim-delay=".3" :style="{opacity: this.$store.state.isMobile ? 1 : 0}")
      .technology__adv_title
        | Apply for a
        br
        | Private Swiss Vault Account
      // .technology__adv_desc €430 Yearly
    section.technology__createAcc
      .technology__createAcc_container
        FlowButton(label="Become a Client" path="/account/register")

</template>

<script>
  import { mapGetters } from 'vuex';
  import FlowButton from "@/components/FlowButton";
  import DoubleLinkList from "@/components/Products/DoubleLinkList";
  import CustomVideo from "@/components/CustomVideo";
  export default {
    name: "Technology",
    head: {
      title: "Golden Suisse - Open Banking"
    },
    components: {
      FlowButton,
      DoubleLinkList,
      CustomVideo
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

  .technology {
    display: grid;
    grid-template-areas:
      ". title title title title title title title title ."
      ". about1 about1 about2 about2 about3 about3 about3 about3 ."
      ". benefits benefits benefits benefits benefits benefits benefits benefits ."
      ". listLinks listLinks listLinks listLinks listLinks listLinks listLinks listLinks ."
      "video video video video video video video video video video"
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

    &__about1 {
      grid-area: about1;
      padding: 21% 5% 0 0;

      &_img1 {
        display: inline-flex;
        width: 42%;
        margin-right: 6%;
        cursor: pointer;
      }

      &_img2 {
        display: inline-flex;
        width: 42%;
        margin-right: 6%;
        cursor: pointer;
      }
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
      padding: 20% 5% 0 0;

      &_left,
      &_right {
        display: inline;
        padding: 0;
      }

      &_right {
        padding-left: 6%;
      }
    }

    &__about3 {
      grid-area: about3;
      font-family: Arial;
      font-style: normal;
      font-weight: normal;
      font-size: 80px;
      line-height: 100%;
      letter-spacing: -0.02em;
      color: $white;
      padding: 10% 10% 0 0;
      p {
        margin-top: 60px;
        font-size: 16px;
        letter-spacing: -0.02em;
        line-height: 100%;
        color: $lightGrey;
        @include adaptive(mob) {
          margin-top: 20px;
        }
      }
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
      padding: 7.5% 0 3.3% 0;
      border-bottom: 2px solid $white;
    }

    &__listLinks {
      grid-area: listLinks;
      padding-bottom: 7.9%;
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

  @media (max-width: 1023px) {
    .technology {
      grid-template-areas:
        ". title title ."
        ". about3 about3 ."
        ". about1 about1 ."
        ". benefits benefits ."
        ". listLinks listLinks ."
        "video video video video"
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

      &__about3 {
        font-size: 24px;
        line-height: 125%;
        letter-spacing: -0.04em;
        padding: 10% 4.2% 16% 0;
      }

      &__about1 {
        padding: 0 0 0 0;
        margin: 0;
        display: block;
        text-align: center;

        &_img1 {
          margin-right: 3%;
        }

        &_img2 {
          margin: 0;
          margin-left: 3%;
        }
      }

      &__about2 {
        display: none;
        line-height: 20px;
        padding: 5% 0;
        padding: 0 0 0 0;

        &_left,
        &_right {
          display: block;
          padding: 0;
        }
      }

      &__benefits {
        padding: 17% 0 5.5% 0;
      }

      &__listLinks {
        padding: 0 0 20% 0;
      }

      &__award {
        padding: 30% 0 6% 0;
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
        padding: 17% 0 13% 0;
      }

      &__createAcc {
        padding: 0 0 5% 0;
      }
    }
  }
</style>
