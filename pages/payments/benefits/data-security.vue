<template>
  <div class="white-page">
    <div class="main-container">
      <h1 class="white-page__block page-title" data-anim="fadeIn">Data Security</h1>
      <div class="white-page__block text-cols offset_120" data-anim="fadeIn">
        <p class="text-cols__col-1 text-mid">Golden Suisse client data is protected with the highest technology standards, and stored in one of the worlds safest data centres.</p>
        <p class="text-cols__col-2 text-mid">In fact Golden Suisse will probably outlive any bank or monetary system in the world, in case of a third cyber world war, or major global economic meltdown.</p>
      </div>
      <div class="white-page__block text-cols offset_80" data-anim="fadeIn">
        <p class="text-cols__col-1 text-mid">Our Data Security Infrastructure includes:</p>
      </div>
      <list :prop="[
        'Underground “zero-risk” infrastructure',
        'Highest protection against nuclear, biological or chemical attacks',
        'Full EMP (electro magnetic pulse) protection',
        'Strict access control, constantly accompanied by security personnel',
        'Security zones with explosion proof separations and bullet proof lock gates',
        'Face recognition technology, video surveillance of any movement',
        '24h surveillance, ensured by a civil and military concept',
        'Generators will guarantee an autonomous operation of several weeks'
      ]" class="white-page__block offset_80"/>
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
      title: "Golden Suisse - Data Security",
    },
  }
</script>

<style lang="scss" scoped>

</style>
