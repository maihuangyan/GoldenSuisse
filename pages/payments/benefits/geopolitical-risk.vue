<template>
  <div class="white-page">
    <div class="main-container">
      <h1 class="white-page__block page-title" data-anim="fadeIn">Geopolitical Risk</h1>
      <div class="white-page__block text-cols offset_120" data-anim="fadeIn">
        <p class="text-cols__col-1 text-mid">Geopolitical events can manifest themselves in many ways. Each event carries it own risks, and each risk its own consequences.</p>
      </div>
      <div class="white-page__block text-cols offset_120" data-anim="fadeIn">
        <p class="text-cols__col-1 text-mid"><span style="font-weight: bold;">Expropriation</span><br><br>Governments can confiscate assets, nationalize property, tax pensions, breach contracts, impose embargos or prohibit trade with specific countries.</p>
        <p class="text-cols__col-2 text-mid offset-xs_60"><span style="font-weight: bold;">Violence and Civil Unrest</span><br><br>Political unrest in high risk countries, such as revolutions, war, etc. can threaten personal assets.</p>
      </div>
      <div class="white-page__block text-cols offset_120" data-anim="fadeIn">
        <p class="text-cols__col-1 text-mid">Golden Suisse is incorporated in Switzerland, and as such, client assets are protected by Swiss law.</p>
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
      title: "Golden Suisse - Geopolitical Risk",
    },
  }
</script>
