<template>
  <div class="white-page">
    <div class="main-container">
      <h1 class="white-page__block page-title" data-anim="fadeIn">Refineries</h1>
      <p class="white-page__block text-mid offset_120" data-anim="fadeIn">Golden Suisse welcomes partnerships with Refineries all over the world.</p>
      <p class="white-page__block text-mid offset_80" data-anim="fadeIn"><span style="font-weight: bold;">Golden Suisse Accredited Refineries:</span><br>To be accredited to manufacture Golden Suisse gold and silver bars, refiners must undergo stringent checks on their:</p>
      <list class="white-page__block offset_80" :prop="[
        'History in the market',
        'Financial standing',
        'Ability to produce bars that meet our standards',
        'Ethical Sourcing Programme',
        'Shipping to approved vaults in Switzerland'
      ]"/>
      <div class="white-page__block text-cols offset_80">
        <p class="text-cols__col-2 text-mid" data-anim="fadeIn">Once accepted as a accredited refiner, vaulted and numbered bars can then be traded freely in the Golden Suisse platform both in and outside of Switzerland.</p>
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
      title: "Golden Suisse - Refineries",
    },
  }
</script>

<style lang="scss" scoped>

</style>
