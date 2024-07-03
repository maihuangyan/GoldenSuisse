<template>
  <div class="white-page">
    <div class="main-container">
      <h1 class="white-page__block page-title" data-anim="fadeIn">Bullion Access</h1>
      <div class="white-page__block text-cols offset_120" data-anim="fadeIn">
        <p class="text-cols__col-1 text-mid">Clients can access their Bullion both by visiting their high-security vault personally or over the Golden Suisse bullion Nonbank platform using our award-winning technology.<br><br>All bars are held within the Trust are London Good Delivery.<br><br>The bars are segregated within the vault and fully unencumbered.</p>
        <div class="text-cols__col-2 offset-xs_60">
          <p class="text-mid"><span style="font-weight: bold;">Online Access</span><br><br>Clients can access their bullion online, using our encrypted high-security mobile app and desktop login.</p>
          <ul class="ul text-mid offset_60">
            <li>Buy and Sell Bullion 24/7/365</li>
            <li>Instant payments</li>
            <li>Transfer Bullion</li>
            <li>Load your Card</li>
            <li>Issue Bar-lists and other reports</li>
          </ul>
          <p class="text-mid offset_60"><span style="font-weight: bold;">Physical Access</span><br><br>All bars are directly owned and accessible to the clients at all times. The Zurich vault is close to the airport, and the Swiss Military Fortress vault has a private landing strip for small private jets.</p>
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
      title: "Golden Suisse - Bullion Access"
    },
  }
</script>

<style lang="scss" scoped>

</style>
