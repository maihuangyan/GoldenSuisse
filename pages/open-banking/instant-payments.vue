<template>
  <div class="white-page">
    <div class="main-container">
      <h1 class="white-page__block page-title" data-anim="fadeIn">Instant Payments</h1>
      <div class="white-page__block text-cols offset_120" data-anim="fadeIn">
        <p class="text-cols__col-1 text-mid">Golden Suisse provides near-instant payments, using local bank account integration in EUR, GBP, USD and CHF in partnership with Transferwise.</p>
        <p class="text-cols__col-2 text-mid">Incoming and outgoing payments in 750 routes, over 70 countries and 50 currencies with competitive exchange rates, all integrated in the same platform. </p>
      </div>
      <div class="white-page__block text-cols offset_80" data-anim="fadeIn">
        <p class="text-cols__col-1 text-mid">Third Party Payment Providers, using Open Banking Technology. Clients hold accounts in USD, EUR, GBP and CHF in multiple banks outside Switzerland, in London, New York and Brussels.
        </p>
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
      title: "Golden Suisse - Instant Payments",
    },
  }
</script>

<style lang="scss" scoped>

</style>
