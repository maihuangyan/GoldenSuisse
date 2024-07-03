<template>
  <div class="white-page">
    <div class="main-container">
      <h1 class="white-page__block page-title" data-anim="fadeIn">External Bullion Deposits</h1>
      <div class="white-page__block text-cols offset_120" data-anim="fadeIn">
        <p class="text-cols__col-1 text-mid">You can also deposit your own gold at Golden Suisse.<br>In case you have bullion stored at home, or anywhere else simply contact you Client Relationship Manager and request that we collect it.</p>
        <p class="text-cols__col-2 text-mid">We work with the same companies as large banks for secure transportation, worldwide.<br>Your bullion is fully insured, and we assure complete discretion.</p>
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
      title: "Golden Suisse - External Bullion Deposits"
    },
  }
</script>

<style lang="scss" scoped>

</style>
