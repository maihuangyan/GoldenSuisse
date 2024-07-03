<template>
  <div class="white-page">
    <div class="main-container">
      <h1 class="white-page__block page-title" data-anim="fadeIn">Bullion Dealers</h1>
      <div class="white-page__block text-cols offset_120" data-anim="fadeIn">
        <p class="text-cols__col-1 text-mid">Golden Suisse welcomes partnerships with Bullion Dealers, to integrate our Bullion Nonbank technology as private label.</p>
        <p class="text-cols__col-2 text-mid">How it works.<br>Golden Suisse Bullion Dealer partners will first undergo stringent checks on their:</p>
      </div>
      <div class="white-page__block text-cols offset_80">
        <list class="text-cols__col-2" :prop="[
          'History in the market',
          'Financial standing',
          'KYC / AML procedures'
        ]"/>
      </div>
      <div class="white-page__block button-and-desc white-page__button-and-desc">
        <p class="text-desc text-desc_center button-and-desc__desc" data-anim="fadeInSimple">Become <br>a Golden Suisse Partner</p>
        <div class="main-button main-button_center button-and-desc__button">
          <FlowButtonDark label="Contact Us" path="/company/become-partner/form"/>
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
      title: "Golden Suisse - Bullion Dealers",
    },
  }
</script>

<style lang="scss" scoped>

</style>
