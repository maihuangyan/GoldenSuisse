<template>
  <div class="inner-page">
    <section class="inner-page__section">
      <div class="main-container">
        <h1 class="page-title" data-anim="fadeIn">Payments</h1>
        <!--<list-sm :list="['Bullion Vault', 'Open Banking', 'Credit Card', 'Payments', 'Personal Advisor', 'High Security Swiss Data Center']"/>-->
      </div>
    </section>
    <section class="inner-page__section">
      <custom-video
        largeImgUrl="bullion_nonbank2.jpg"
        smallImgUrl="bullion_nonbank2_xs.jpg"
        title="Instant and Seamless Transactions"
        subtitle="Instant & Seamless Transactions"
        subtitleCenter="Private Swiss"
      />
    </section>
    <section class="inner-page__section main-content">
      <div class="main-container">
        <p class="text-big" data-anim="fadeIn">Our technology allows Clients to buy/sell, exchange and transfer their bullion instantly 24/7/365.</p>
        <div class="grid offset_80" data-anim="fadeIn">
          <p class="grid__col text-sm color-light-gray">Your bullion is physically <br class="hide-mob">identifiable and never mixed <br class="hide-mob">with company assets.</p>
          <p class="grid__col text-sm color-light-gray">We are dedicated to serving <br class="hide-mob">our clients for life.</p>
          <ul class="grid__col text-mid ul">
            <li>Highest Grade Data Security and Encryption</li>
            <li>Instant payments on Buying and Selling bullion</li>
            <li>Instant Bar and Coin transfers to other clients</li>
            <li>Instant Card Loads to your Golden Suisse Private Card</li>
          </ul>
        </div>
        <p class="text-desc text-desc_center color-white offset_100" data-anim="fadeIn">Benefits</p>
        <double-link-list :list="innerPages" class="offset_40"/>
      </div>
    </section>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import listSm from "@/components/updated/listSm";
  import CustomVideo from "@/components/CustomVideo";
  import DoubleLinkList from "@/components/Products/DoubleLinkList";
  export default {
    head() {
      return {
        title: "Golden Suisse - Payments",
      }
    },
    components: {
      listSm,
      CustomVideo,
      DoubleLinkList
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
  .main-content {
    padding-top: 80px;
    @include adaptive(mob) {
      padding-top: 60px;
    }
  }
</style>
