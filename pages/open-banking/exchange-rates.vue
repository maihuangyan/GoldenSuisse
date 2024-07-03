<template>
  <div class="white-page">
    <div class="main-container">
      <h1 class="white-page__block page-title" data-anim="fadeIn">Competitive <br>Exchange Rates</h1>
      <div class="white-page__block text-cols offset_120" data-anim="fadeIn">
        <p class="text-cols__col-1 text-mid">Get more for your money.</p>
        <p class="text-cols__col-2 text-mid">Unlike most banks, Golden Suisse works with a partner that uses the real exchange rate for sending money — just like the one used by Google or Reuters. Combine that with a low, upfront fee, and you get international transfers that are cheap, fair and transparent.</p>
      </div>
      <div class="white-page__block text-cols offset_120" data-anim="fadeIn">
        <p class="text-cols__col-1 text-mid">There’s only one fair exchange rate.</p>
        <p class="text-cols__col-2 text-mid">Banks and other providers often set their own, unfriendly exchange rates. It means that you pay more than you need to, and they pocket the difference.</p>
      </div>
      <div class="white-page__block text-cols offset_120" data-anim="fadeIn">
        <p class="text-cols__col-2 text-mid">We do it differently. We always give you the real, mid-market exchange rate — like you’d find on Google or Reuter.</p>
      </div>
      <div class="white-page__block button-and-desc white-page__button-and-desc">
        <p class="text-desc text-desc_center button-and-desc__desc" data-anim="fadeInSimple">Apply for a<br>Private Swiss vault account</p>
        <div class="main-button main-button_center button-and-desc__button">
          <FlowButtonDark label="Become a Client" path="/account/register"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    layout: "white",
    components: {
      FlowButtonDark: () => import("@/components/FlowButtonDark")
    },
    head: {
      title: "Golden Suisse - Competitive Exchange Rates",
    },
  }
</script>

<style lang="scss" scoped>

</style>
