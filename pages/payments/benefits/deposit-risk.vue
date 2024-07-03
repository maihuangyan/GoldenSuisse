<template>
  <div class="white-page">
    <div class="main-container">
      <h1 class="white-page__block page-title" data-anim="fadeIn">Deposit Risk</h1>
      <div class="white-page__block text-cols offset_120" data-anim="fadeIn">
        <div class="text-cols__col-1">
          <p class="text-mid">Ten years ago Lehman Brothers Holdings Inc. collapsed, triggering the worst financial crisis in almost a century, a seismic event that still reverberates today. Notable financial institutions worldwide were severely affected and had to be closed down or bailed out.</p>
          <p class="text-mid offset_60">Deposit insurance or deposit protection is a measure implemented in many countries to protect bank depositors, in part, from losses caused by a bank's inability to pay its debts when due.  However, these are limited, and do not cover clients full deposits.</p>
        </div>
        <list2 class="text-cols__col-2 offset-xs_60" :prop="[
        ['Belgium', 'EUR 100,000'],
        ['Bulgaria', 'EUR 100,000'],
        ['Croatia', 'EUR 100,000'],
        ['Cyprus', 'EUR 100,000'],
        ['Czech Rep', 'EUR 100,000'],
        ['Denmark', 'DKK 750,000'],
        ['Finland', 'EUR 100,000'],
        ['France', 'EUR 100,000'],
        ['Germany', 'EUR 100,000'],
        ['Greece', 'EUR 100,000'],
        ['Hungary', 'EUR 100,000'],
        ['Ireland', 'EUR 100,000'],
        ['Italy', 'EUR 100,000'],
        ['Lithuania', 'EUR 100,000'],
        ['Luxembourg', 'EUR 100,000'],
        ['Malta', 'EUR 100,000'],
        ['Netherlands', 'EUR 100,000'],
        ['Poland', 'EUR 100,000'],
        ['Portugal', 'EUR 100,000'],
        ['Slovakia', 'EUR 100,000'],
        ['Slovenia', 'EUR 100.000'],
        ['Spain', 'EUR 100,000'],
        ['Switzerland', 'CHF 100,000'],
        ['Sweden', 'SEK 950,000'],
        ['UK', 'GBP 85,000'],
        ['USA', 'USD 250,000']
      ]"/>
      </div>
      <div class="white-page__block text-cols offset_80" data-anim="fadeIn">
        <p class="text-cols__col-2 text-mid" style="font-weight: bold;">Golden Suisse clients have zero deposit risk, because their bullion holdings are treated as clients private property (direct ownership), unallocated and segregated</p>
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
      list2: () => import("@/components/updated/list2"),
      FlowButtonDark: () => import("@/components/FlowButtonDark"),
    },
    head: {
      title: "Golden Suisse - Deposit Risk",
    },
  }
</script>

<style lang="scss" scoped>

</style>
