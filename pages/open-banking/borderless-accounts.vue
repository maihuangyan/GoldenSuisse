<template>
  <div class="white-page">
    <div class="main-container">
      <h1 class="white-page__block page-title" data-anim="fadeIn">Borderless<br>Accounts</h1>
      <div class="white-page__block text-cols offset_120" data-anim="fadeIn">
        <p class="text-cols__col-1 text-mid">The Golden Suisse system provides clients with integrated local bank accounts in EUR, GBP and USD,  as well as a wallet in CHF.</p>
        <p class="text-cols__col-2 text-mid">Golden Suisse provides  near-instant cross-border payments in 50 currencies to over 70 countries, as well as instant bullion transfers to other registered clients.</p>
      </div>
      <div class="white-page__block text-cols offset_80" data-anim="fadeIn">
        <p class="text-cols__col-1 text-mid">Using Open Banking Technology in partnership with other Third Party Payment Providers, Clients hold accounts in multiple currencies and locations outside Switzerland, accessing 4 different banks, in London, New York, Brussels allowing them to instantly transfer funds between accounts, across borders.</p>
        <p class="text-cols__col-2 text-mid">Bank accounts and transfers are provided in partnership with globally renown payments provider's processing over 6 billion EUR in payments per month.</p>
      </div>
      <div class="white-page__block text-cols offset_80" data-anim="fadeIn">
        <p class="text-cols__col-1 text-mid">The borderless accounts provide an excellent alternative to local banks, as they offer:.</p>
      </div>
      <list :prop="list" class="white-page__block offset_80"/>
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
      list: () => import("@/components/updated/list"),
      FlowButtonDark: () => import("@/components/FlowButtonDark")
    },
    data: () => ({
      list: [
        'Local Multicurrency Accounts in CHF, USD, EUR and GBP in one system',
        'Incoming and outgoing payments through SWIFT/BIC, IBAN,  US Fedwire Wire and BACS.',
        'Instant clearing of bullion buy and sell transactions',
        'Highly competitive exchange rates',
        'Over 750 payment routes worldwide'
      ]
    }),
    head: {
      title: "Golden Suisse - Borderless Accounts",
    },
  }
</script>

<style lang="scss" scoped>

</style>
