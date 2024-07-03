<template>
  <div class="white-page">
    <div class="main-container">
      <h1 class="white-page__block page-title" data-anim="fadeIn">Trusted Worldwide</h1>
      <div class="white-page__block text-cols offset_120" data-anim="fadeIn">
        <p class="text-cols__col-2 text-mid">Golden Suisse payments partner is trusted all over the world with over $6 billion sent every month, 9 million customers and has offices in 14 countries. </p>
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
      title: "Golden Suisse - Trusted Worldwide",
    },
  }
</script>

<style lang="scss" scoped>

</style>
