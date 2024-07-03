<template>
  <div class="white-page">
    <div class="main-container">
      <h1 class="white-page__block text-big" data-anim="fadeIn">Private Card</h1>
      <div class="white-page__block text-cols offset_80" data-anim="fadeIn">
        <p class="text-cols__col-1 text-mid">The Golden Suisse Private Card is a prefunded card, and is funded by clients selling their bullion. Pay-out is instantly credited to the clients card, which can be used worldwide on any Mastercard or Visa accepted point of sales, and ATM.</p>
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
      title: "Golden Suisse - Private Card",
    },
  }
</script>

<style lang="scss" scoped>

</style>
