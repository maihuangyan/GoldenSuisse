// <template lang="pug">
//   .faq
//     section.faq__title(data-anim="fadeIn" data-anim-delay="0" :style="{opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 10%)'}") FAQ’s
//     section.faq__questions(data-anim="fadeIn" data-anim-delay="0" :style="{opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 10%)'}") Frequently Asked Questions
//     section.faq__list
//       LinkList(:list="list")

//     section.faq__award(data-anim="fadeIn" data-anim-delay=".3" :style="{opacity: this.$store.state.isMobile ? 1 : 0}") Award Winning Systems
//     section.faq__app(data-anim="fadeIn" data-anim-delay=".3" :style="{opacity: this.$store.state.isMobile ? 1 : 0}")
//       .faq__app_title(data-anim="fadeIn" data-anim-delay=".3" :style="{opacity: this.$store.state.isMobile ? 1 : 0}") GS App
//       .faq__app_desc(data-anim="fadeIn" data-anim-delay=".3" :style="{opacity: this.$store.state.isMobile ? 1 : 0}") Desktop & Mobile
//     section.faq__desc(data-anim="fadeIn" data-anim-delay=".3" :style="{opacity: this.$store.state.isMobile ? 1 : 0}")
//       .faq__desc_title(data-anim="fadeIn" data-anim-delay=".5" :style="{opacity: this.$store.state.isMobile ? 1 : 0}") The Card
//       .faq__desc_desc(data-anim="fadeIn" data-anim-delay=".5" :style="{opacity: this.$store.state.isMobile ? 1 : 0}") Privately vaulted precious metals
//     section.faq__adv(data-anim="fadeIn" data-anim-delay=".3" :style="{opacity: this.$store.state.isMobile ? 1 : 0}")
//       .faq__adv_title Apply Private Vault Account
//       .faq__adv_desc €430 Yearly
//     section.faq__createAcc
//       .faq__createAcc_container
//         FlowButton(label="Apply for an account" path="/account/register")
// </template>

// <script>
// export default {
//   name: "Faq",
//   components: {
//     FlowButton: () => import("@/components/FlowButton"),
//     LinkList: () => import("@/components/EthicalGold/LinkList")
//   },
//   data() {
//     return {
//       list: [
//         {
//           path: "/legal/faq/registration",
//           title: "Account Registration",
//           exist: true
//         },
//         {
//           path: "/golden_suisse/sustainability/challenge",
//           title: "Buy Gold Coins"
//         },
//         {
//           path: "/golden_suisse/sustainability/mission",
//           title: "Golden Suisse Mastercard"
//         },
//         {
//           path: "/golden_suisse/sustainability/challenge",
//           title: "Privacy"
//         },
//         {
//           path: "/golden_suisse/sustainability/mission",
//           title: "How It Works Video"
//         },
//         {
//           path: "/golden_suisse/sustainability/challenge",
//           title: "Investment Versus Collector Coins"
//         },
//         {
//           path: "/golden_suisse/sustainability/mission",
//           title: "Coins Versus Bars"
//         },
//         {
//           path: "/golden_suisse/sustainability/challenge",
//           title: "Picking Up Your Gold In Zurich"
//         },
//         {
//           path: "/golden_suisse/sustainability/mission",
//           title: "Delivery Worldwide"
//         }
//       ]
//     };
//   }
// };
//
</script>

// <style lang="scss" scoped>
// @import "@/assets/_variables.scss";

// .faq {
//   display: grid;
//   grid-template-areas:
//     ". title title title title title title title title ."
//     ". questions questions questions questions questions questions questions questions ."
//     ". list list list list list list list list ."
//     ". award award award award award award award award ."
//     "app app app app app desc desc desc desc desc"
//     ". adv adv adv adv adv adv adv adv ."
//     ". createAcc createAcc createAcc createAcc createAcc createAcc createAcc createAcc .";
//   grid-template-columns: 3.75% repeat(8, 11.5625%) 3.75%;
//   padding: 295px 0 0 0;

//   &__title {
//     grid-area: title;
//     font-family: Arial;
//     font-style: normal;
//     font-weight: normal;
//     font-size: 180px;
//     line-height: 39%;
//     letter-spacing: -0.04em;
//     color: $white;
//     border-bottom: 2px solid $white;
//     padding-bottom: 8%;
//   }

//   &__questions {
//     grid-area: questions;
//     font-family: Arial;
//     font-style: normal;
//     font-weight: bold;
//     font-size: 14px;
//     line-height: 229%;
//     display: flex;
//     justify-content: center;
//     letter-spacing: -0.02em;
//     color: $white;
//     padding: 4.5% 0 3% 0;
//     border-bottom: 2px solid $white;
//   }

//   &__list {
//     grid-area: list;
//   }

//   &__award {
//     grid-area: award;
//     padding: 10.8% 0 2.5% 0;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     font-family: Arial;
//     font-style: normal;
//     font-weight: bold;
//     font-size: 24px;
//     line-height: 417%;
//     letter-spacing: -0.04em;
//     text-transform: uppercase;
//     color: $white;
//   }

//   &__app {
//     grid-area: app;
//     border-top: 2px $white solid;
//     border-right: 1px $white solid;
//     height: 100%;
//     padding: 4% 0 28.5% 0;
//     font-family: Arial;
//     font-style: normal;
//     font-weight: normal;
//     display: grid;
//     grid-template-areas: ". appTitle appTitle appDesc appDesc";
//     grid-template-columns: 7.5% repeat(4, 23.125%);

//     &_title {
//       grid-area: appTitle;
//       color: $white;
//       font-size: 48px;
//       line-height: 100px;
//       cursor: pointer;

//       &:hover {
//         color: $gold;
//       }
//     }

//     &_desc {
//       grid-area: appDesc;
//       padding-top: 7%;
//       display: flex;
//       justify-content: flex-end;
//       color: $lightGrey;
//       font-weight: bold;
//       font-size: 14px;
//       line-height: 16px;
//       text-align: right;
//       letter-spacing: -0.02em;
//       padding-right: 11%;
//     }
//   }

//   &__desc {
//     grid-area: desc;
//     border-top: 2px $white solid;
//     border-left: 1px $white solid;
//     height: 100%;
//     padding: 4% 0 28.5% 0;
//     font-family: Arial;
//     font-style: normal;
//     font-weight: normal;
//     display: grid;
//     grid-template-areas: "descTitle descTitle descDesc descDesc .";
//     grid-template-columns: repeat(4, 23.125%) 7.5%;

//     &_title {
//       grid-area: descTitle;
//       color: $white;
//       font-size: 48px;
//       line-height: 100px;
//       padding-left: 11%;
//       cursor: pointer;

//       &:hover {
//         color: $gold;
//       }
//     }

//     &_desc {
//       grid-area: descDesc;
//       padding-top: 7%;
//       display: flex;
//       justify-content: flex-end;
//       color: $lightGrey;
//       font-weight: bold;
//       font-size: 14px;
//       line-height: 16px;
//       text-align: right;
//       letter-spacing: -0.02em;
//     }
//   }

//   &__adv {
//     grid-area: adv;
//     display: block;
//     text-align: center;
//     height: 100%;
//     padding: 8% 0 4% 0;
//     font-style: normal;
//     font-weight: bold;
//     font-size: 14px;
//     color: $darkGrey;
//     line-height: 143%;
//     letter-spacing: -0.04em;

//     &_title {
//       width: 100%;
//     }

//     &_desc {
//       width: 100%;
//     }
//   }

//   &__createAcc {
//     grid-area: createAcc;
//     display: flex;
//     justify-content: center;
//     padding: 0;
//     padding-bottom: 8%;

//     &_container {
//       width: 370px;
//     }
//   }
// }

// @media (max-width: 1023px) {
//   .faq {
//     grid-template-areas:
//       ". title title ."
//       ". questions questions ."
//       ". list list ."
//       ". award award ."
//       ". app desc ."
//       ". adv adv ."
//       ". createAcc createAcc .";
//     grid-template-columns: 5.4% repeat(2, 44.6%) 5.4%;
//     padding: 100px 0 0 0;

//     &__title {
//       padding: 0;
//       padding-bottom: 7%;
//       font-size: 48px;
//       line-height: 104%;
//       letter-spacing: -0.04em;
//     }

//     &__award {
//       padding: 21% 0 5% 0;
//       font-style: normal;
//       font-weight: bold;
//       font-size: 14px;
//       line-height: 143%;
//       letter-spacing: -0.04em;
//       text-transform: uppercase;
//       color: $white;
//     }

//     &__app {
//       grid-template-areas: "appTitle appTitle appTitle appTitle appTitle";
//       height: 100%;
//       padding: 5% 0 25% 0;

//       &_title {
//         color: $white;
//         font-size: 24px;
//         line-height: 83%;
//         width: 100%;
//         padding-top: 5%;
//       }

//       &_desc {
//         display: none;
//       }
//     }

//     &__desc {
//       grid-template-areas: "descTitle descTitle descTitle descTitle descTitle";
//       height: 100%;
//       padding: 5% 0 25% 0;

//       &_title {
//         color: $white;
//         font-size: 24px;
//         line-height: 83%;
//         width: 100%;
//         padding-top: 5%;
//       }

//       &_desc {
//         display: none;
//       }
//     }

//     &__adv {
//       padding: 17% 0 13% 0;
//     }

//     &__createAcc {
//       padding-bottom: 6%;
//     }
//   }
// }
//
</style>
