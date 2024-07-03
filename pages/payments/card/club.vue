<template>
  <div class="white-page">
    <div class="main-container">
      <h1 class="white-page__block page-title" data-anim="fadeIn">The Club</h1>
      <div class="white-page__block text-cols offset_120" data-anim="fadeIn">
        <p class="text-cols__col-1 text-mid">The Club <br>that makes your life richer.</p>
        <p class="text-cols__col-2 text-mid">The Golden Suisse Club also includes access to a number of exclusive private clubs worldwide.</p>
      </div>
      <list :prop="list" class="white-page__block offset_80"/>
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
      list: () => import("@/components/updated/list"),
      FlowButtonDark: () => import("@/components/FlowButtonDark")
    },
    data: () => ({
      list: [
        'Exclusive Clubs',
        'Concierge',
        'Insider Hotel Bookings',
        'Airport Lounges'
      ]
    }),
    head: {
      title: "Golden Suisse - The Club",
    },
  }
</script>

<style lang="scss" scoped>

</style>
