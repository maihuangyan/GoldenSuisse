<template>
  <div class="white-page">
    <div class="main-container">
      <h1 class="white-page__block page-title" data-anim="fadeIn">Private Banks</h1>
      <div class="white-page__block text-cols offset_120" data-anim="fadeIn">
        <p class="text-cols__col-1 text-mid">Golden Suisse welcomes partnerships with Private Banks, enabling them to offer Bullion Nonbank accounts to their own clients.  Bullion is held in Switzerland in renown High Security vaults.</p>
        <p class="text-cols__col-2 text-mid">How it works.<br>Golden Suisse provides the API technology and integration support, for both mobile as well as desktop. Client data is protected with the highest technology standards, and stored in one of the worlds safest data centres.</p>
      </div>
      <div class="white-page__block button-and-desc white-page__button-and-desc">
        <p class="text-desc text-desc_center button-and-desc__desc" data-anim="fadeInSimple">Become <br>a Golden Suisse Partner</p>
        <div class="main-button main-button_center button-and-desc__button">
          <FlowButtonDark label="Contact Us" path="/company/become-partner/form"/>
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
      title: "Golden Suisse - Private Banks",
    },
  }
</script>

<style lang="scss" scoped>

</style>
