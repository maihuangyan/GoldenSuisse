<template>
  <div class="inner-page">
    <section class="inner-page__section">
      <div class="main-container">
        <h1 class="page-title" data-anim="fadeIn">Become a Partner</h1>
        <list-sm :list="['Partnership Program', 'Trusted Relationships', 'Worldwide Locations']"/>
      </div>
      <custom-video
        largeImgUrl="partners.jpg"
        smallImgUrl="partners_xs.jpg"
        title="A Golden Marriage"
        subtitle="Become a Golden Suisse Partner"
        subtitleCenter="50 Countries"
      />
    </section>
    <section class="inner-page__section pt_80">
      <div class="main-container">
        <p class="text-big" data-anim="fadeIn">Join our growing worldwide network <br class="hide-mob">in more than 50 countries</p>
        <div class="grid offset_80" data-anim="fadeIn">
          <p class="grid__col text-sm color-light-gray">As a privately owned company, <br class="hide-mob">we are free from market pressures <br class="hide-mob">and external public shareholders <br class="hide-mob">seeking ever-improving <br class="hide-mob">quarterly results.</p>
          <p class="grid__col text-sm color-light-gray">Instead, we can focus on <br class="hide-mob">serving you for the long term.</p>
          <p class="grid__col text-mid">As a Golden Suisse Partner you can select the best way to benefit from our technology, trademark, knowledge, contacts and expertise. It will help you increase your sales, lower your costs, and build a rewarding future.</p>
        </div>
        <p class="text-desc text-desc_center color-white offset_200" data-anim="fadeIn">Golden Suisse Benefits</p>
        <double-link-list :list="innerPages" class="offset_40"/>
        <div class="button-and-desc offset_100">
          <p class="text-desc text-desc_center bottom-page-desc button-and-desc__desc" data-anim="fadeInSimple">Become <br>a Golden Suisse Partner</p>
          <div class="main-button main-button_center button-and-desc__button">
            <flow-button label="Contact Us" path="/company/become-partner/form/"/>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import listSm from "@/components/updated/listSm";
  import CustomVideo from "@/components/CustomVideo";
  import DoubleLinkList from "@/components/Products/DoubleLinkList";
  import FlowButton from "@/components/FlowButton";
  export default {
    head() {
      return {
        title: "Golden Suisse - Become a Partner",
      }
    },
    components: {
      listSm,
      CustomVideo,
      DoubleLinkList,
      FlowButton
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
  }
</script>

<style lang="scss" scoped>
  .img-block {
    position: relative;
    &__img {
      width: 100%;
    }
    &__inner {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      padding: 75px 60px;
      z-index: 1;
      display: grid;
      grid-template-columns: 50% 50%;
      @include adaptive(mob) {
        padding: 40px 20px;
        display: block;
      }
    }
    &__buttons {
      display: flex;
    }
    &__button {
      &:not(:first-child) {
        margin-left: 20px;
      }
    }
    &__button-img {
      max-width: 142px;
    }
    &__text {
      @media (min-width: 1366px) and (max-width: 1420px) {
        font-size: 70px;
      }
      @include adaptive(mob) {
        margin-top: 30px;
      }
    }
  }
  .block-two-col {
    margin-top: 75px;
    display: grid;
    grid-template-columns: 50% 50%;
    .text-mid {
      padding-right: calc(100% / 4);
      @include adaptive(mob) {
        margin-top: 80px;
      }
    }
    @include adaptive(mob) {
      display: block;
    }
  }
  .gs-icon {
    margin-left: 70px;
    align-items: flex-start;
    @include adaptive(mob) {
      margin: 0;
      display: flex;
      justify-content: center;
    }
    &__img {
      max-width: 220px;
      display: flex;
      @include adaptive(mob) {
        max-width: 120px;
      }
    }
  }
  .block-lines {
    margin-top: 120px;
    @include adaptive(mob) {
      margin-top: 80px;
    }
  }
  .main-button {
    margin-top: 60px;
  }
</style>
