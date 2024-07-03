<template>
  <div class="white-page">
    <div class="main-container">
      <h1 class="white-page__block page-title" data-anim="fadeIn">Data Privacy</h1>
      <div class="white-page__block text-cols offset_120" data-anim="fadeIn">
        <p class="text-cols__col-1 text-mid">In Switzerland, the Federal Act on Data Protection (FADP) protects the privacy and the fundamental rights of natural and legal persons when their data are processed.</p>
        <p class="text-cols__col-2 text-mid" style="font-weight: bold;">Because Golden Suisse is not a bank or financial intermediary, we are not obliged to share client information with any third parties.</p>
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
      title: "Golden Suisse - Data Privacy",
    },
  }
</script>

<style lang="scss" scoped>

</style>
