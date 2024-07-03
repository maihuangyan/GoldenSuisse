<template>
  <div class="white-page">
    <div class="main-container">
      <h1 class="white-page__block page-title" data-anim="fadeIn">The Vaults</h1>
      <div class="white-page__block text-cols offset_120" data-anim="fadeIn">
        <p class="text-cols__col-1 text-mid"><span style="font-weight: bold;">The Zurich High Security Vault</span><br><br>Golden Suisse has a  high-security vaulting facility in Zurich located in a restricted/bonded area directly below the Zurich airport.<br><br>Our vault has been in operation for over half a century and is fitted with the latest security features and monitoring technology.<br><br>Due to its special customs status, the facility is also suited to store other precious metals VAT-free, such as silver.<br><br>The location allows clients fast, international access to their precious metal holdings from the Zurich Airport.</p>
        <!-- <p class="text-cols__col-2 text-mid offset-xs_60"><span style="font-weight: bold;">Swiss Reserve Vault</span><br><br>Sheltered deep within the Swiss Alps, Golden Suisse provides bullion storage in a military bunker for our HNWI and Institutional Clients, where also several Central Banks store their bullion.<br><br>This carefully guarded, underground “zero-risk” location boasts an infrastructure in solid rock with the highest possible protection against earthquakes, atomic, biological and chemical attacks. The mountain vault location includes a nearby private airstrip and high-end lodging option for easy client access at any time.</p> -->
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
      title: "Golden Suisse - The Vaults"
    },
  }
</script>

<style lang="scss" scoped>

</style>
