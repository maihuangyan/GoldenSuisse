<template lang="pug">
  .inner-page
    section.inner-page__section
      .main-container
        h1.page-title.bb(data-anim="fadeIn") Rates
        .block-desc
          p.text-desc.block-desc__text-desc-1(data-anim="fadeIn") Accessible online 24/7
          p.text-desc.block-desc__text-desc-2(data-anim="fadeIn" data-anim-delay=".2") Instant liquidity & Fully insured
          p.text-mid.block-desc__text-big(data-anim="fadeIn" data-anim-delay=".4")
            | Golden Suisse provides full and direct client ownership of LBMA bars and Government minted coins, stored in the world’s most secure private vaults.
            br
            br
            br

        tableV1(:prop="table")

        p.title-after(data-anim="fadeInSimple") Award Winning Systems
    section.inner-page__section
      .block-lines.block-lines_wide(data-anim="fadeInSimple")
        .block-lines__col
          .linking-title-row
            nuxt-link.linking-title-row__title(to="/payments/card") The Card
            p.linking-title-row__desc.text-desc Desktop & Mobile
        .block-lines__col
          .linking-title-row
            nuxt-link.linking-title-row__title(to="/payments/gold-silver") Gold & Silver
            p.linking-title-row__desc.text-desc Privately vaulted precious metals
    section.inner-page__section
      .main-container
        .button-and-desc
          p.text-desc.text-desc_center.bottom-page-desc.button-and-desc__desc(data-anim="fadeInSimple")
            | Apply for a
            br
            | Private Swiss vault account
          .main-button.main-button_center.button-and-desc__button
            FlowButton(label="create account" link="/account/register")
</template>

<script>
  import FlowButton from "@/components/FlowButton";
  import tableV1 from "@/components/updated/tableV1";
  export default {
    head() {
      return {
        title: "Golden Suisse - Rates",
      }
    },
    components: {
      FlowButton,
      tableV1
    },
    data: () => ({
      table: [
        {
          title: 'Private Swiss Bullion Vault',
          info: [
            'Vault Activation, Online System Access, Private Card, Onboarding Meeting, DHL Delivery of Documents',
            'CHF 430 (Personal ) – CHF 2,000 (Corporate)'
          ]
        },
        {
          title: 'Storage Silver',
          info: [
            'RFQ from our Wealth Managers'
          ]
        },
        {
          title: 'Storage Gold',
          info: [
            'RFQ from our Wealth Managers'
          ]
        },
        {
          title: 'Management Fee',
          info: [
            'RFQ from our Wealth Managers'
          ]
        },
        {
          title: 'Card Loads',
          info: [
            'Mastercard Loads',
            '2 EUR'
          ]
        },
        {
          title: 'Exchange',
          info: [
            'Exchange between Gold and Silver',
            'Buy and Sell Rates'
          ]
        },
        {
          title: 'Transfers',
          info: [
            'Transfers to other users',
            'Free'
          ]
        },
        {
          title: 'Vault visitation',
          info: [
            'Visit vault in Zurich',
            'High Security Zurich Vault  - 500 CHF / Hour'
          ]
        },
        {
          title: 'Transportation',
          info: [
            'Costs for delivery and pickup to and from vault',
            'As per separate quotation'
          ]
        }
      ]
    })
  }
</script>

<style lang="scss" scoped>
  .block-desc {
    display: grid;
    grid-template-columns: 25% 25% 50%;
    margin-top: 80px;
    @include adaptive(mob) {
      grid-template-columns: none;
      margin-top: 40px;
    }
    &__text-desc-1 {
      @include adaptive(mob) {
        order: 2;
        margin-bottom: 5px;
      }
    }
    &__text-desc-2 {
      @include adaptive(mob) {
        order: 3;
      }
    }
    &__text-big {
      order: 1;
      margin-bottom: 35px;
    }
  }
  .table {
    margin-top: 0;
  }
  .title-after {
    margin-top: 190px;
    @include adaptive(mob) {
      margin-top: 120px;
    }
  }
  .block-lines {
    margin-top: 70px;
    @include adaptive(mob) {
      margin-top: 25px;
    }
  }
  .bottom-page-desc {
    margin-top: 120px;
    @include adaptive(mob) {
      margin-top: 60px;
    }
  }
</style>
