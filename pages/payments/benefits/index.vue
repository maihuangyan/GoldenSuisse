<template>
  <div class="inner-page">
    <section class="inner-page__section">
      <div class="main-container">
        <h1 class="page-title" data-anim="fadeIn">Benefits</h1>
        <list-sm :list="['Swiss Vaulted Bullion', 'Private Card']"/>
      </div>
    </section>
    <section class="inner-page__section">
      <custom-video
        largeImgUrl="wealth_protection.jpg"
        smallImgUrl="wealth_protection_xs.jpg"
        title="World Class Wealth Protection"
        subtitle="Worldwide Locations"
        subtitleCenter="Award Winning Systems"
      />
    </section>
    <section class="inner-page__section pt_80">
      <div class="main-container">
        <p class="text-big" data-anim="fadeIn">Golden Suisse offers Vaulted Gold and Silver Coins and Bars, as Investment and Money.</p>
        <div class="grid offset_80" data-anim="fadeIn">
          <p class="grid__col text-sm color-light-gray mw-proc_60">We are not required to share or report client information because we deal with private property and ‘non-reportable’ bullion.</p>
          <p class="grid__col text-sm color-light-gray mw-proc_60">Your bullion is physically identifiable and never mixed with company assets.</p>
          <p class="grid__col text-mid">Golden Suisse commitment to wealth preservation involves full direct client ownership of gold and silver bullion, stored in the world’s most secure private vaults, and accessible on our award winning high-security systems. Our experienced Personal Advisors assist clients, with bespoke wealth advisory solutions, and support as needed.</p>
        </div>
        <p class="text-desc text-desc_center color-white offset_100" data-anim="fadeIn">Protection</p>
        <double-link-list :list="innerPages" class="offset_40"/>
      </div>
    </section>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import listSm from "@/components/updated/listSm";
  import CustomVideo from "@/components/CustomVideo";
  import DoubleLinkList from "@/components/Products/DoubleLinkList";
  export default {
    head() {
      return {
        title: "Golden Suisse - Wealth Protection",
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

</style>
