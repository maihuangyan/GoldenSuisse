<template>
  <div class="white-page">
    <div class="main-container">
      <h1 class="white-page__block page-title" data-anim="fadeIn">Heritage</h1>
      <div class="white-page__block text-cols offset_120" data-anim="fadeIn">
        <p class="text-cols__col-1 text-mid">Golden Suisse was established aiming to preserve a well functioning centenary tradition of money and banking, by become the world’s safest Monetary Institution. </p>
        <p class="text-cols__col-2 text-mid">The family has supported the gold standard as long back as  in 1934 ,when Halvar Sundberg wrote a book about the constitutional illegality of abolishing the gold standard in Sweden. Daniel Weitmann added his own 20 year experience in finance transformation, in-depth knowledge of Information Technology, and family funds to establish Golden Suisse. </p>
      </div>
      <div class="white-page__block text-cols offset_80" data-anim="fadeIn">
        <p class="text-cols__col-2 text-mid">Today Golden Suisse has more than 4000 customers in more than 20 markets. The company employs more than 10 employees across 5 offices in Europe, America and Asia.</p>
      </div>
      <div class="white-page__block text-cols offset_80" data-anim="fadeIn">
        <p class="text-cols__col-1 text-mid">With a Swiss Fintech banking license application underway, world-class technology and a growing virtual branch network, Golden Suisse has redesigned private banking for the 21st century and is available on Android, iOS, and desktop.</p>
      </div>

      <tableV2 class="white-page__block offset_80" :prop="{
        title: 'Golden Suisse currently operates in',
        col_1: [
          'Switzerland',
          'Austria',
          'Belgium',
          'Denmark',
          'Estonia',
          'Finland',
          'France',
          'Germany',
          'Greece',
          'Iceland',
          'Ireland',
          'Italy',
          'Latvia'
        ],
        col_2: [
          'Liechtenstein',
          'Lithuania',
          'Luxembourg',
          'Netherlands',
          'Norway',
          'Poland',
          'Portugal',
          'Slovakia',
          'Slovenia',
          'Spain',
          'Sweden',
          'US'
        ]
      }"/>

      <div class="white-page__block text-cols offset_80" data-anim="fadeIn">
        <p class="text-cols__col-2 text-mid">Banking services are offered in partnership with Transferwise.</p>
      </div>

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
      tableV2: () => import("@/components/updated/tableV2"),
      FlowButtonDark: () => import("@/components/FlowButtonDark")
    },
    head: {
      title: "Golden Suisse - Heritage",
    },
  }
</script>

<style lang="scss" scoped>

</style>
