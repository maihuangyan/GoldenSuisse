<template>
  <div class="white-page">
    <div class="main-container">
      <h1 class="white-page__block text-big" data-anim="fadeIn">Bullion Vault Holdings</h1>
      <div class="white-page__block text-cols offset_80" data-anim="fadeIn">
        <p class="text-cols__col-1 text-mid">Golden Suisse is the undisputed leader in high-security bullion storage and bullion nonbanking technology.<br><br>Clients have access to their vaulted bullion on our high-security mobile app and desktop, and can verify their holdings 24/7/365.</p>
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
      title: "Golden Suisse - Bullion Vault Holdings",
    },
  }
</script>

<style lang="scss" scoped>

</style>
