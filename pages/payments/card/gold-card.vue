<template>
  <div class="white-page">
    <div class="main-container">
      <h1 class="white-page__block page-title" data-anim="fadeIn">Choose between <br>solid gold or <br>plastic</h1>
      <div class="white-page__block text-cols offset_120" data-anim="fadeIn">
        <p class="text-cols__col-2 text-mid">Convert your gold to cash in seconds, for shopping anywhere in the world.</p>
      </div>

      <div class="logo-wrapper offset_120" data-anim="fadeInSimple">
        <img src="/image/Logomark-black.png">
      </div>

      <tableV1 class="white-page__block offset_120" :prop="cards" data-anim="fadeIn"/>

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
      FlowButtonDark: () => import("@/components/FlowButtonDark"),
      tableV1: () => import("@/components/updated/tableV1")
    },
    data: () => ({
      cards: [
        {
          title: 'Black Plastic Card',
          info: [
            'Renown Branded Card Issuer',
            'Included in Vaulting Fee'
          ]
        },
        {
          title: 'Yellow Gold Card',
          info: [
            '18 kt Yellow Gold 60 grams',
            '€14,950.00'
          ]
        },
        {
          title: 'White Gold Card',
          info: [
            '18kt White Gold 60 grams',
            '€16,950.00'
          ]
        }
      ]
    }),
    head: {
      title: "Golden Suisse - Choose Card",
    },
  }
</script>

<style lang="scss" scoped>
  .logo-wrapper {
    display: flex;
    justify-content: center;
    img {
      max-width: 280px;
    }
  }
</style>
