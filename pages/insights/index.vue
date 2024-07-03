<template lang="pug">
  .news
    section.news__title News
    section.news__years
      .news__years__year.news__years__year_active 2020
      .news__years__year 2019
      .news__years__year 2018
    section.news__newsList
      // NewsList(:newsList="newsList")
    section.news__award Award Winning Systems
    section.news__app
      .news__app_title( @click="$router.push({path: '/products/club'})") The Club
      .news__app_desc Desktop & Mobile
    section.news__desc
      .news__desc_title(@click="$router.push({path: '/products/accounts_rates'})") Fees
      .news__desc_desc Privately vaulted precious metals
    section.news__adv
      .news__adv_title Apply for a
      .news__adv_desc Private Swiss vault account
    section.news__createAcc
      .news__createAcc_container
        FlowButton(label="Become a Client" path="/account/register")
</template>

<script>
export default {
  name: "News",
  head: {
    title: "Golden Suisse - News"
  },
  components: {
    FlowButton: () => import("@/components/FlowButton"),
    NewsList: () => import("@/components/Insights/NewsList")
  },
  data() {
    return {
      newsList: [
        {
          date: "16 Feb",
          text:
            "Bulls in both metals have upside technical momentum to suggest more upside is in the offing."
        },
        {
          date: "04 Feb",
          text:
            "GToday’s U.S. economic data point of the week, the consumer price index for November."
        },
        {
          date: "20 Jan",
          text: "The metals markets did not react to the report."
        },
        {
          date: "12 Jan",
          text:
            "U.S. stock indexes are pointed toward higher openings when the New York day session begins. "
        },
        {
          date: "02 Jan",
          text:
            "The marketplace reckons that if the world’s two largest economies come to terms on trade."
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/_variables.scss";

.news {
  display: grid;
  grid-template-areas:
    ". title title title title title title title years ."
    ". newsList newsList newsList newsList newsList newsList newsList newsList ."
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

  &__years {
    grid-area: years;
    border-bottom: 2px solid $white;
    display: flex;
    justify-content: flex-end;
    padding: 12% 0 0 0;

    &__year {
      display: inline-flex;
      color: $lightGrey;
      margin-left: 15%;
      font-family: Arial;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 16px;
      letter-spacing: -0.02em;
      text-transform: uppercase;
      height: fit-content;
      cursor: not-allowed;

      &_active {
        color: $gold;
        cursor: pointer;
      }
    }
  }

  &__newsList {
    grid-area: newsList;
    padding: 3.5% 0 0 0;
  }

  &__award {
    grid-area: award;
    padding: 10% 0 2% 0;
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
    padding: 8% 0 4% 0;
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
    padding-bottom: 8%;

    &_container {
      width: 370px;
    }
  }
}

@media (max-width: 1023px) {
  .news {
    grid-template-areas:
      ". title title ."
      ". years years ."
      ". newsList newsList ."
      ". award award ."
      ". app desc ."
      ". adv adv ."
      ". createAcc createAcc .";
    grid-template-columns: 5.4% repeat(2, 44.6%) 5.4%;
    padding: 100px 0 0 0;

    &__title {
      padding: 0;
      padding-bottom: 7%;
      font-size: 48px;
      line-height: 104%;
      letter-spacing: -0.04em;
    }

    &__years {
      border-bottom: none;
      padding: 6.5% 0 0 0;

      &__year {
        margin-left: 9%;
      }
    }

    &__newsList {
      padding: 15% 0 0 0;
    }

    &__award {
      padding: 21% 0 5% 0;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 143%;
      letter-spacing: -0.04em;
      text-transform: uppercase;
      color: $white;
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
      padding: 17% 0 13% 0;
    }

    &__createAcc {
      padding-bottom: 6%;
    }
  }
}
</style>
