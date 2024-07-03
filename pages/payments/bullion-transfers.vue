<template>
  <div class="white-page">
    <div class="main-container">
      <h1 class="white-page__block text-big" data-anim="fadeIn">Bullion Transfers</h1>
      <div class="white-page__block text-cols offset_80" data-anim="fadeIn">
        <div class="text-cols__col-1">
          <p class="text-mid">Clients can make high-security transfers of their bullion to other clients, in real time, 24/7/365.<br><br>Features include:</p>
          <ul class="ul offset_60">
            <li class="text-mid">Transfers of client selected bars</li>
            <li class="text-mid">Transfers of 1 Oz Investment Coins</li>
            <li class="text-mid">Secure Sign of all transfers</li>
            <li class="text-mid">Full Data Encryption</li>
            <li class="text-mid">Data stored in Switzerland’s safest Data Centre</li>
          </ul>
        </div>
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
      title: "Golden Suisse - Bullion Transfers",
    },
  }
</script>

<style lang="scss" scoped>

</style>
