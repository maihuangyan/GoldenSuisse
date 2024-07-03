<template lang="pug">
  .accountsRates
    section.accountsRates__title(data-anim="fadeIn" data-anim-delay="0" :style="{opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 10%)'}") Accounts & Rates
    section.accountsRates__online(data-anim="fadeIn" data-anim-delay="0" :style="{opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 10%)'}") Accessible online 24/7
    section.accountsRates__instant(data-anim="fadeIn" data-anim-delay="0" :style="{opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 10%)'}") Instant liquidity & Fully insured
    section.accountsRates__subtitle(data-anim="fadeIn" data-anim-delay="0" :style="{opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 5%)'}") Bars and coins are stored physically and segregated in an independent, well renown high‑security storage vault in Zurich.
    section.accountsRates__services
      Services(:services="services")
    section.accountsRates__award(data-anim="fadeIn" data-anim-delay=".3" :style="{opacity: this.$store.state.isMobile ? 1 : 0}") Award Winning Systems
    section.accountsRates__app(data-anim="fadeIn" data-anim-delay=".3" :style="{opacity: this.$store.state.isMobile ? 1 : 0}")
      .accountsRates__app_title(data-anim="fadeIn" data-anim-delay=".3" :style="{opacity: this.$store.state.isMobile ? 1 : 0}" @click="$router.push({path: '/payments/card'})") The Card
      .accountsRates__app_desc(data-anim="fadeIn" data-anim-delay=".3" :style="{opacity: this.$store.state.isMobile ? 1 : 0}") Desktop & Mobile
    section.accountsRates__desc(data-anim="fadeIn" data-anim-delay=".3" :style="{opacity: this.$store.state.isMobile ? 1 : 0}")
      .accountsRates__desc_title(data-anim="fadeIn" data-anim-delay=".5" :style="{opacity: this.$store.state.isMobile ? 1 : 0}" @click="$router.push({path: '/payments/gold-silver'})") Gold & Silver
      .accountsRates__desc_desc(data-anim="fadeIn" data-anim-delay=".5" :style="{opacity: this.$store.state.isMobile ? 1 : 0}") Privately vaulted precious metals
    section.accountsRates__adv(data-anim="fadeIn" data-anim-delay=".3" :style="{opacity: this.$store.state.isMobile ? 1 : 0}")
      .accountsRates__adv_title Apply for a
      .accountsRates__adv_desc Private Swiss vault account
    section.accountsRates__createAcc
      .accountsRates__createAcc_container
        FlowButton(label="Become a Client" path="/account/register")
</template>

<script>
export default {
  name: "AccountsRates",
  head: {
    title: "Golden Suisse - Accounts & Rates"
  },
  components: {
    FlowButton: () => import("@/components/FlowButton"),
    Services: () => import("@/components/AccountsRates/Services")
  },
  data() {
    return {
      services: [
        {
          title: "Vault",
          desc:
            "Private Swiss Vault Account, Bank Card (Cards for Europe only)",
          price: "CHF 430"
        },
        {
          title: "Storage Silver	",
          desc: "High Security Storage Loomis Zurich, Insurance, Handling",
          price: "0.7% / Year"
        },
        {
          title: "Storage Gold",
          desc: "High Security Storage Loomis Zurich, Insurance, Handling",
          price: "0.4% / Year"
        },
        {
          title: "Card Loads",
          desc: "Bank Card Loads",
          price: "Free"
        },
        {
          title: "Exchange",
          desc: "Exchange between Gold and Silver",
          price: "0.75%"
        },
        {
          title: "Transfers",
          desc: "Transfers to other users",
          price: "Free"
        },
        {
          title: "Vault visitation",
          desc: "Visit vault in Zurich",
          price: "CHF 450 / hour (pre-schedule)"
        },
        {
          title: "Transportation",
          desc: "Costs for delivery and pickup to and from vault",
          price: "As per separate quotation"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/_variables.scss";

.accountsRates {
  display: grid;
  grid-template-areas:
    ". title title title title title title title title ."
    ". online . instant instant subtitle subtitle subtitle subtitle ."
    ". services services services services services services services services ."
    ". award award award award award award award award ."
    "app app app app app desc desc desc desc desc"
    ". adv adv adv adv adv adv adv adv ."
    ". createAcc createAcc createAcc createAcc createAcc createAcc createAcc createAcc .";
  grid-template-columns: 3.75% repeat(8, 11.5625%) 3.75%;
  padding: 295px 0 0 0;

  &__title {
    grid-area: title;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 180px;
    line-height: 39%;
    letter-spacing: -0.04em;
    color: $white;
    border-bottom: 2px solid $white;
    padding-bottom: 8%;
  }

  &__online {
    grid-area: online;
    font-family: Arial;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 229%;
    letter-spacing: -0.02em;
    color: $lightGrey;
    padding: 40% 0 0 0;
  }

  &__instant {
    grid-area: instant;
    font-family: Arial;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 229%;
    letter-spacing: -0.02em;
    color: $lightGrey;
    padding: 20% 5% 0 0;
  }

  &__subtitle {
    grid-area: subtitle;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 80px;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: $white;
    padding: 10% 5% 0 0;
  }

  &__services {
    grid-area: services;
    padding: 8.3% 0 7% 0;
  }

  &__award {
    grid-area: award;
    padding: 2% 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Arial;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 417%;
    letter-spacing: -0.04em;
    text-transform: uppercase;
    color: $white;
  }

  &__app {
    grid-area: app;
    border-top: 2px $white solid;
    border-right: 1px $white solid;
    height: 100%;
    padding: 4% 0 28.5% 0;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    display: grid;
    grid-template-areas: ". appTitle appTitle appDesc appDesc";
    grid-template-columns: 7.5% repeat(4, 23.125%);

    &_title {
      grid-area: appTitle;
      color: $white;
      font-size: 48px;
      line-height: 100px;
      cursor: pointer;

      &:hover {
        color: $gold;
      }
    }

    &_desc {
      grid-area: appDesc;
      padding-top: 7%;
      display: flex;
      justify-content: flex-end;
      color: $lightGrey;
      font-weight: bold;
      font-size: 14px;
      line-height: 16px;
      text-align: right;
      letter-spacing: -0.02em;
      padding-right: 11%;
    }
  }

  &__desc {
    grid-area: desc;
    border-top: 2px $white solid;
    border-left: 1px $white solid;
    height: 100%;
    padding: 4% 0 28.5% 0;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    display: grid;
    grid-template-areas: "descTitle descTitle descDesc descDesc .";
    grid-template-columns: repeat(4, 23.125%) 7.5%;

    &_title {
      grid-area: descTitle;
      color: $white;
      font-size: 48px;
      line-height: 100px;
      padding-left: 11%;
      cursor: pointer;

      &:hover {
        color: $gold;
      }
    }

    &_desc {
      grid-area: descDesc;
      padding-top: 7%;
      display: flex;
      justify-content: flex-end;
      color: $lightGrey;
      font-weight: bold;
      font-size: 14px;
      line-height: 16px;
      text-align: right;
      letter-spacing: -0.02em;
    }
  }

  &__adv {
    grid-area: adv;
    display: block;
    text-align: center;
    height: 100%;
    padding: 7.7% 0 4.4% 0;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    color: $darkGrey;
    line-height: 143%;
    letter-spacing: -0.04em;

    &_title {
      width: 100%;
    }

    &_desc {
      width: 100%;
    }
  }

  &__createAcc {
    grid-area: createAcc;
    display: flex;
    justify-content: center;
    padding: 0;
    padding-bottom: 7.8%;

    &_container {
      width: 370px;
    }
  }
}

@media (max-width: 1500px) {
  .accountsRates {
    &__title {
      font-size: 160px;
    }
  }
}

@media (max-width: 1300px) {
  .accountsRates {
    &__title {
      font-size: 120px;
    }

    &__subtitle {
      font-size: 60px;
    }
  }
}

@media (max-width: 1023px) {
  .accountsRates {
    grid-template-areas:
      ". title title ."
      ". subtitle subtitle ."
      ". online online ."
      ". instant instant ."
      ". services services ."
      ". award award ."
      ". app desc ."
      ". adv adv ."
      ". createAcc createAcc .";
    grid-template-columns: 5.4% repeat(2, 44.6%) 5.4%;
    padding: 100px 0 0 0;

    &__title {
      padding: 0;
      font-size: 48px;
      line-height: 104%;
      padding-bottom: 7%;
    }

    &__subtitle {
      padding: 10% 4.2% 18% 0;
      font-size: 24px;
      line-height: 125%;
      letter-spacing: -0.04em;
    }

    &__online,
    &__instant {
      padding: 0;
      font-size: 14px;
      line-height: 143%;
      letter-spacing: -0.02em;
    }

    &__instant {
      padding-bottom: 19%;
    }

    &__services {
      padding: 0;
    }

    &__award {
      padding: 30% 0 5% 0;
      font-size: 14px;
      line-height: 143%;
      letter-spacing: -0.04em;
    }

    &__app {
      grid-template-areas: "appTitle appTitle appTitle appTitle appTitle";
      height: 100%;
      padding: 5% 0 25% 0;

      &_title {
        color: $white;
        font-size: 24px;
        line-height: 83%;
        width: 100%;
        padding-top: 5%;
      }

      &_desc {
        display: none;
      }
    }

    &__desc {
      grid-template-areas: "descTitle descTitle descTitle descTitle descTitle";
      height: 100%;
      padding: 5% 0 25% 0;

      &_title {
        color: $white;
        font-size: 24px;
        line-height: 83%;
        width: 100%;
        padding-top: 5%;
      }

      &_desc {
        display: none;
      }
    }

    &__adv {
      padding: 18% 0 15% 0;
    }

    &__createAcc {
      padding: 0 0 5% 0;
    }
  }
}
</style>
