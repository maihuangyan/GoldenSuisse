<template>
  <div class="white-page">
    <div class="main-container">
      <h1 class="white-page__block page-title" data-anim="fadeIn">Audits</h1>
      <div class="white-page__block text-cols offset_120" data-anim="fadeIn">
        <p class="text-cols__col-1 text-mid">Bullion is audited regularly by an independent auditor. Clients can follow the audit period on their bar-list reports.<br><br>We have no direct access to client assets.<br><br>The vault location allows clients fast, international access to their precious metal holdings from the Zurich Airport.</p>
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
      title: "Golden Suisse - Audits"
    },
  }
</script>

<style lang="scss" scoped>

</style>
