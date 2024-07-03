<template>
  <div class="white-page">
    <div class="main-container">
      <h1 class="white-page__block page-title" data-anim="fadeIn">Currency Risk</h1>
      <div class="white-page__block text-cols offset_120" data-anim="fadeIn">
        <p class="text-cols__col-1 text-mid">Inflation is the decline of purchasing power of a given currency over time. All currencies in the world suffer from inflation, loosing their value over time. Like a balloon being filled with air, financial institutions add more money without creating any real value, in an already inflated system, a bubble ready to burst.</p>
        <p class="text-cols__col-2 text-mid">An independent study showed that the inflation in the USA is now averaging 5.1%. This is caused by excessive printing of money by the Federal Reserve. A Big Mac meal used to cost US$ 2.0 twenty years ago, and now costs US$ 5.99.</p>
      </div>
      <div class="white-page__block text-cols offset_80" data-anim="fadeIn">
        <p class="text-cols__col-1 text-mid" style="font-weight: bold;">Golden Suisse client vaulted deposits are held in physical gold and silver. During the last 100 years, the price of gold has increased by an average of 7.8% per year, all without any risk of asset loss.</p>
        <p class="text-cols__col-2 text-mid" style="font-weight: bold;">Gold is the oldest currency in the world, and is still used by central banks in countries for settling debt. Gold is and has traditionally been the one and only currency accepted between nations during time of war and economic crisis for settlement of debt.</p>
      </div>
      <div class="white-page__block button-and-desc white-page__button-and-desc">
        <p class="text-desc text-desc_center button-and-desc__desc" data-anim="fadeInSimple">Apply for a<br>Private Swiss vault account</p>
        <div class="main-button main-button_center button-and-desc__button">
          <FlowButtonDark label="become a client" path="/account/register"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    layout: "white",
    components: {
      list: () => import("@/components/updated/list"),
      FlowButtonDark: () => import("@/components/FlowButtonDark"),
    },
    head: {
      title: "Golden Suisse - Currency Risk",
    },
  }
</script>

<style lang="scss" scoped>

</style>
