<template>
  <div class="white-page">
    <div class="main-container">
      <h1 class="white-page__block text-big" data-anim="fadeIn">Open Banking</h1>
      <div class="white-page__block text-cols offset_80" data-anim="fadeIn">
        <div class="text-cols__col-1">
          <p class="text-mid">The Golden Suisse Nonbank System allows clients the option to securely connect to their own bank account, so that they can instantly and seamlessly make and receive payments for their buy and sell orders.<br><br>Open banking is the system of allowing access and control of consumer banking and financial accounts through third-party applications.<br><br>Open banking has the potential to reshape the competitive landscape and consumer experience of the banking industry.</p>
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
      title: "Golden Suisse - Open Banking",
    },
  }
</script>

<style lang="scss" scoped>

</style>
