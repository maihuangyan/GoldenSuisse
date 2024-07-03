<template lang="pug">
  .residenceRequirements
    section.residenceRequirements__title(data-anim="fadeIn" data-anim-delay="0" :style="{opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 10%)'}")
      | Residence
      br
      | Requirements
    section.residenceRequirements__aboutLight(data-anim="fadeIn" data-anim-delay="0" :style="{opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 5%)'}")
      | NOTE: Clients are NOT obligated to have permanent residency in that country. It can also be second residence, summer house, etc.
    section.residenceRequirements__about(data-anim="fadeIn" data-anim-delay="0" :style="{opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 5%)'}")
      | Golden Suisse can provide cards for clients with residence in any countries listed below. Clients require a Proof of Address (Utility Bill or Bank Statement, no older than 3 months), showing name, address and date.
    ul.residenceRequirements__cardList
      li.residenceRequirements__cardList_li(v-for="(item, index) in list" :key="index")
        .residenceRequirements__cardList_li_title {{item.title}}
        .residenceRequirements__cardList_li_countriesLeft
          div(v-for="(country, index) in item.countriesLeft" :key="index") {{country}}
        .residenceRequirements__cardList_li_countriesRight
          div(v-for="(country, index) in item.countriesRight" :key="index") {{country}}
    section.residenceRequirements__adv(data-anim="fadeIn" data-anim-delay=".3" :style="{opacity: this.$store.state.isMobile ? 1 : 0}")
      .residenceRequirements__adv_title Apply for a
      .residenceRequirements__adv_desc Private Swiss vault account
    section.residenceRequirements__createAcc
      .residenceRequirements__createAcc_container
        FlowButtonDark(label="Become a Client" path="/account/register")
</template>

<script>
export default {
  name: "ResidenceRequirements",
  head: {
    title: "Golden Suisse - Residence Requirements"
  },
  layout: "white",
  components: {
    FlowButtonDark: () => import("@/components/FlowButtonDark"),
    CardType: () => import("@/components/GoldCard/CardType"),
    LogoSvg: () => import("@/components/LogoSvg")
  },
  data() {
    return {
      list: [
        {
          title: "Euro area countries",
          countriesLeft: [
            "Austria",
            "Belgium",
            "Cyprus",
            "Estonia",
            "Finland",
            "France",
            "Germany",
            "Greece",
            "Ireland",
            "Italy"
          ],
          countriesRight: [
            "Latvia",
            "Lithuania",
            "Luxembourg",
            "Malta",
            "The Netherlands",
            "Portugal",
            "Slovakia",
            "Slovenia",
            "Spain"
          ]
        },
        {
          title: "EU Member States with currencies other than the euro",
          countriesLeft: [
            "Bulgaria",
            "Croatia",
            "Czech",
            "Republic",
            "Denmark",
            "Hungary"
          ],
          countriesRight: ["Poland", "Romania", "Sweden", "United", "Kingdom"]
        },
        {
          title: "Non-EU countries",
          countriesLeft: ["Norway"],
          countriesRight: ["Switzerland"]
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/_variables.scss";

.children {
  &__button {
    position: fixed;
    bottom: 0px;
    width: 30%;
    height: 100%;
    z-index: 33;
    cursor: pointer;
    &_left {
      left: 0px;
    }
    &_right {
      right: 0px;
    }
  }
}

.residenceRequirements {
  display: grid;
  grid-template-areas:
    "title title"
    "aboutLight about"
    "logo logo"
    "cardList cardList"
    "adv adv"
    "createAcc createAcc"
    "footer footer";
  grid-template-columns: repeat(2, 50%);
  padding: 11% 3.75% 3.6% 3.75%;
  padding-bottom: 0 !important;
  &__title {
    grid-area: title;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 180px;
    line-height: 89%;
    display: flex;
    align-items: center;
    letter-spacing: -0.04em;
    color: $black;
    padding: 5% 12.5% 5% 0;
  }

  &__aboutLight {
    grid-area: aboutLight;
    font-family: Arial;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 229%;
    letter-spacing: -0.02em;
    color: $lightGrey;
    padding: 5.5% 0;
    padding-right: 57%;
  }

  &__about {
    grid-area: about;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 150%;
    letter-spacing: -0.02em;
    color: $black;
    padding: 5% 0;
    padding-right: 17.6%;
  }

  &__logo {
    grid-area: logo;
    display: flex;
    justify-content: center;
    padding: 10% 0 13.8% 0;

    &_large {
      transform: scale(2);
    }
  }

  &__cardList {
    grid-area: cardList;
    list-style: none;
    padding: 0;

    &_li {
      display: grid;
      grid-template-areas: "title title title title countriesLeft countriesLeft countriesRight countriesRight";
      grid-template-columns: repeat(8, 12.5%);
      border-top: 2px solid $black;

      &_title {
        grid-area: title;
        font-family: Arial;
        font-style: normal;
        font-weight: normal;
        font-size: 32px;
        line-height: 187%;
        letter-spacing: -0.02em;

        color: $black;
        padding-top: 2.704%;
        padding-bottom: 10%;
        padding-right: 36%;
      }

      &_countriesLeft {
        grid-area: countriesLeft;
        font-family: Arial;
        font-style: normal;
        font-weight: normal;
        font-size: 32px;
        line-height: 187%;

        letter-spacing: -0.02em;
        color: $black;
        padding-top: 5.406%;
        padding-bottom: 10%;
        padding-right: 22.705%;
      }

      &_countriesRight {
        grid-area: countriesRight;
        font-family: Arial;
        font-style: normal;
        font-weight: normal;
        font-size: 32px;
        line-height: 187%;

        letter-spacing: -0.02em;
        color: $black;
        padding-top: 5.406%;
        padding-bottom: 10%;
        padding-right: 22.705%;
      }
    }
  }

  &__adv {
    grid-area: adv;
    display: block;
    padding-top: 4%;
    text-align: center;
    height: 100%;
    padding: 10.3% 0 3% 0;
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
    padding: 1.3% 0 11% 0;
    padding-bottom: 0 !important;
    &_container {
      width: 370px;
    }
  }

  &__footer {
    grid-area: footer;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 214%;
    display: flex;
    justify-content: center;
    letter-spacing: -0.02em;
    color: $darkGrey;
  }
}

@media (max-width: 1023px) {
  .residenceRequirements {
    grid-template-areas: "backLink" "title" "about" "aboutLight" "logo" "cardList" "adv" "createAcc" "footer";
    grid-template-columns: 100%;
    padding: 21% 5.4% 16% 5.4%;

    &__title {
      font-size: 48px;
      line-height: 104%;
      letter-spacing: -0.04em;
      padding: 5% 0 10% 0;
    }

    &__about {
      padding-right: 0;
      font-size: 24px;
      line-height: 125%;
      padding: 3% 0 15.5% 0;
    }

    &__aboutLight {
      line-height: 143%;
      padding-right: 10%;
      padding-top: 0;
      padding-bottom: 10%;
    }

    &__cardList {
      &_li {
        grid-template-areas: "title";
        grid-template-columns: 1fr;

        &_title {
          font-size: 24px;
          line-height: 125%;
          padding: 5% 0;
        }

        &_countriesLeft {
          display: none;
        }

        &_countriesRight {
          display: none;
        }
      }
    }

    &__logo {
      padding: 10% 0 45% 0;

      &_large {
        transform: scale(1);
      }
    }

    &__adv {
      padding: 14% 0 14% 0;
    }

    &__createAcc {
      padding: 5% 0 40% 0;
    }
  }
}

@media (max-width: 410px) {
  .cardLimits {
    &__createAcc {
      &_container {
        width: 100%;
      }
    }
  }
}
</style>
