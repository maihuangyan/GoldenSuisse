<template>
  <div class="white-page">
    <div class="main-container">
      <h1 class="white-page__block page-title" data-anim="fadeIn">Financial Risk</h1>
      <div class="white-page__block text-cols offset_120" data-anim="fadeIn">
        <p class="text-cols__col-1 text-mid">Financial risk is the probability of losing money on an investment or business venture.<br><br>A recent study by McKinsey found that the average life-span of companies listed in Standard & Poor's 500 was 61 years in 1958. Today, it is less than 18 years. McKinsey believes that, in 2027, 75% of the companies currently quoted on the S&P 500 will have disappeared. The same applies for other company stocks listed on exchanges worldwide.</p>
        <p class="text-cols__col-2 text-mid" style="font-weight: bold;">Physical vaulted gold is the lowest class of financial risk in the world. Physical Gold is the only financial asset considered to have zero financial risk.</p>
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
      title: "Golden Suisse - Financial Risk",
    },
  }
</script>

<style lang="scss" scoped>

</style>
