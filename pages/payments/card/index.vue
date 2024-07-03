<template>
  <div class="inner-page">
    <section class="inner-page__section">
      <div class="main-container">
        <h1 class="page-title bb" data-anim="fadeIn">Card</h1>
      </div>
    </section>
    <section class="inner-page__section card-section">
      <CardMap subtitle1="Valid in more than 120 countries" subtitle2="worldwide" title="Convert your metal to cash in seconds – and shop anywhere in the world." imgUrl="image/creditcardBlackGS.png" color="#FFFFFF"/>
    </section>
    <section class="inner-page__section">
      <div class="main-container">
        <p class="text-desc text-desc_center color-white offset_100" data-anim="fadeIn">Features</p>
        <double-link-list :list="innerPages" class="offset_40"/>
      </div>
    </section>
    <section class="inner-page__section linking offset_160">
      <div class="main-container">
        <p class="title-after" data-anim="fadeInSimple">Award Winning Systems</p>
      </div>
      <div class="block-lines block-lines_wide offset_60" data-anim="fadeInSimple">
        <div class="block-lines__col">
          <div class="linking-title-row">
            <nuxt-link class="linking-title-row__title" to="/account/download">GS App</nuxt-link>
            <p class="linking-title-row__desc text-desc">Desktop & Mobile</p>
          </div>
        </div>
        <div class="block-lines__col">
          <div class="linking-title-row">
            <nuxt-link class="linking-title-row__title" to="/payments/card/club">The Club</nuxt-link>
            <p class="linking-title-row__desc text-desc">Privately vaulted precious metals</p>
          </div>
        </div>
      </div>
    </section>
    <section class="inner-page__section">
      <div class="main-container">
        <div class="button-and-desc offset_100">
          <p class="text-desc text-desc_center bottom-page-desc button-and-desc__desc" data-anim="fadeInSimple">Apply for a <br>Private Swiss Vault Account</p>
          <div class="main-button main-button_center button-and-desc__button">
            <flow-button label="Become a Client" link="/account/register"/>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import CardMap from "@/components/CardMap";
  import DoubleLinkList from "@/components/Products/DoubleLinkList";
  import FlowButton from "@/components/FlowButton";
  export default {
    head() {
      return {
        title: "Golden Suisse - Card",
      }
    },
    components: {
      CardMap,
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
    }
  }
</script>

<style lang="scss" scoped>
  .card-section {
    @include adaptive(mob) {
      margin-top: 40px;
    }
  }
</style>
