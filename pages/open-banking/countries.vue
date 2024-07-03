<template>
  <div class="white-page">
    <div class="main-container">
      <h1 class="white-page__block page-title" data-anim="fadeIn">60 Countries</h1>
      <div class="white-page__block text-cols offset_120">
        <p class="text-cols__col-2 text-mid" data-anim="fadeIn">What countries can I send to?</p>
      </div>

      <tableV2 class="white-page__block offset_80" :prop="countries"/>

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
      tableV2: () => import("@/components/updated/tableV2")
    },
    data: () => ({
      countries: {
        title: 'Here a list of the countries <br>you can send money to',
        col_1: [
          'Argentina',
          'Australia',
          'Bangladesh',
          'Benin',
          'Brazil',
          'Bulgaria',
          'Burkina',
          'Faso',
          'Canada',
          'Chile',
          'China',
          'Colombia',
          'Croatia',
          'Czech Republic',
          'Denmark',
          'Egypt',
          'Europe',
          'Georgia',
          'Ghana',
          'Guinea-Bissau',
          'Hong Kong',
          'Hungary',
          'India',
          'Indonesia',
          'Israel',
          'Ivory',
          'Coast',
          'Japan',
          'Kenya',
          'Liechtenstein',
          'Malaysia',
          'Mali',
        ],
        col_2: [
          'Mexico',
          'Morocco',
          'Nepal',
          'New Zealand',
          'Niger',
          'Nigeria',
          'Norway',
          'Pakistan',
          'Peru',
          'Philippines',
          'Poland',
          'Romania',
          'Russia',
          'Senegal',
          'Singapore',
          'South Africa',
          'South Korea',
          'Sri Lanka',
          'Sweden',
          'Switzerland',
          'Thailand',
          'Togo',
          'Turkey',
          'Uganda',
          'Ukraine',
          'UAE',
          'United Kingdom',
          'USA',
          'Uruguay',
          'Vietnam',
          'Zambia',
        ]
      }
    }),
    head: {
      title: "Golden Suisse - 60 Countries",
    },
  }
</script>

<style lang="scss" scoped>

</style>
