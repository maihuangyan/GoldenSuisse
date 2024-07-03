<template lang="pug">
.footer
  .footer__emailSubscribe(
    data-anim="fadeIn",
    data-anim-delay=".3",
    :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }"
  )
    EmailSubscribe
  .footer__block2(
    data-anim="fadeIn",
    data-anim-delay=".4",
    :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }"
  )
    FooterList(title="Contact", :content="contact")
  .footer__block3(
    data-anim="fadeIn",
    data-anim-delay=".5",
    :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }",
    v-if="!(this.$store.state.isMobile & this.$store.state.isMenu)"
  )
    FooterList(title="About", :content="company")


  .footer__blockWealth(
    data-anim="fadeIn",
    data-anim-delay=".5",
    :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }",
    v-if="!(this.$store.state.isMobile & this.$store.state.isMenu)"
  )
    FooterList(title="Wealth Protection", :content="wealth")

  .footer__blockDiscover(
    data-anim="fadeIn",
    data-anim-delay=".5",
    :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }",
    v-if="!(this.$store.state.isMobile & this.$store.state.isMenu)"
  )
    FooterList(title="Discover", :content="discover")
  .footer__block5(
    data-anim="fadeIn",
    data-anim-delay=".3",
    :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }"
  )
    FooterList(title="Legal", :content="legal")
  .footer__block6(
    data-anim="fadeIn",
    data-anim-delay=".4",
    :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }",
  )
    FooterList(title="My Account", :content="account")
  .footer__appStore(
    data-anim="fadeIn",
    data-anim-delay=".5",
    :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }"
  )
    img.footer__appStore_img(
      src="../../static/image/appstore-logo.png",
      @click="redirect('https://apps.apple.com/us/app/goldensuisse/id1236821991')"
    )
  .footer__social(
    data-anim="fadeIn",
    data-anim-delay=".5",
    :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }"
  )
    img.footer__social_img(
      src="../../static/image/google-play-logo.png",
      @click="redirect('https://play.google.com/store/apps/details?id=com.golden.coin&hl=en_US')"
    )
  .footer__info(
    data-anim="fadeIn",
    data-anim-delay=".5",
    :style="{ opacity: this.$store.state.isMobile ? 1 : 0 }"
  ) {{getCopyright()}}
</template>

<script>
  import { mapGetters } from 'vuex'
  import copyright from '../../utils/copyright.js'

export default {
  name: "Footer",
  components: {
    EmailSubscribe: () => import("@/components/Footer/EmailSubscribe"),
    FooterList: () => import("@/components/Footer/FooterList"),
  },
  methods: {
    redirect(path) {
      window.open(path);
    },
    getCopyright () {
      return copyright()
    }
  },
  computed: {
    ...mapGetters([
      'categs/getOnlyMenusPages',
    ]),
    categs() {
      return this['categs/getOnlyMenusPages']();
    }
  },
  data: () => ({
    discover: [
      {
        title: 'Wealth Protection',
        path: '/payments',
        exist: true
      },
      {
        title: 'Card',
        path: '/payments/card',
        exist: true
      }
    ],
    wealth: [
      {
        title: 'Gold and Silver',
        path: '/payments/gold-silver',
        exist: true
      },
      {
        title: 'Benefits',
        path: '/payments/benefits',
        exist: true
      },
      {
        title: 'Vault and Trust',
        path: '/payments/vault-trust',
        exist: true
      },
      {
        title: 'Advisory',
        path: '/payments/advisory',
        exist: true
      }
    ],
    company: [
      {
        title: 'Company',
        path: '/company',
        exist: true
      },
      {
        title: 'Governance',
        path: '/company/governance',
        exist: true
      },
      {
        title: 'Awards',
        path: '/company/awards',
        exist: true
      },
      {
        title: 'Sustainability',
        path: '/company/sustainability',
        exist: true
      },
      {
        title: 'Become a Partner',
        path: '/company/become-partner',
        exist: true
      },
      {
        title: 'Rates',
        path: '/company/rates',
        exist: true
      }
    ],
    insights: [
      {
        title: 'News',
        exist: false
      },
      {
        title: 'Media',
        exist: false
      }
    ],
    contact: [
      {
        title: 'Headquarters',
        path: '/contact',
        exist: true
      },
      {
        title: 'Support',
        path: '/contact/support',
        exist: true
      }
    ],
    legal: [
      {
        path: "/vqf-membership",
        title: "VQF Membership",
        exist: true,
      },
      {
        path: "goldensuisse_terms.pdf",
        title: "Terms and Conditions",
        pdf: true,
        exist: true,
      },
      {
        path: "goldensuisse_aml.pdf",
        title: "AML",
        pdf: true,
        exist: true,
      },
      {
        path: "/vqf-membership/privacy",
        title: "Privacy",
        exist: true,
      },
      {
        path: "goldensuisse_privacypolicy.pdf",
        title: "Privacy Policy",
        pdf: true,
        exist: true,
      },
      {
        path: "/vqf-membership/information",
        title: "Legal information",
        exist: true,
      },
    ],
    account: [
      {
        path: "/account",
        title: "Login",
        exist: true,
      },
      {
        title: "Open an Account",
        path: "/account/register",
        exist: true,
      },
      {
        path: "/account/download",
        title: "Download Apps",
        exist: true,
      },
    ]
  }),
};
</script>

<style lang="scss" scoped>
@import "@/assets/_variables.scss";

.footer {
  display: grid;
  grid-template-areas:
    ". emailSubscribe emailSubscribe . . . discover wealth  block3 ."
    ". . . . . . block2 block5 block6 ."
    ". appStore social info info info info . . .";
  grid-template-columns: 3.75% repeat(8, 11.5625%) 3.75%;
  padding: 6.3% 0 2.5% 0;
  height: max-content;

  &__emailSubscribe {
    grid-area: emailSubscribe;
  }

  &__block1 {
    grid-area: block1;
  }

  &__block2 {
    grid-area: block2;
  }

  &__block3 {
    grid-area: block3;
  }

  &__block4 {
    grid-area: block4;
  }

  &__block5 {
    grid-area: block5;
  }

  &__block6 {
    grid-area: block6;
  }

  &__blockWealth {
    grid-area: wealth;
  }
  &__blockDiscover {
    grid-area: discover;
  }

  &__appStore {
    grid-area: appStore;
    display: flex;
    align-items: center;

    &_img {
      width: 80%;
      cursor: pointer;
    }
  }

  &__social {
    grid-area: social;
    display: flex;
    align-items: center;

    &_img {
      transform: translateX(-10%);
      width: 80%;
      cursor: pointer;
    }
  }

  &__info {
    grid-area: info;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 214%;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: -0.02em;
    color: $darkGrey;
  }
  // @include adaptive(tablet) {
  //   padding-bottom: 0;
  // }
}

@media (max-width: 1023px) {
  .footer {
    grid-template-areas:
      ". emailSubscribe emailSubscribe ."
      ". discover . ."
      ". wealth block3 ."
      ". block2 block4 ."
      ". block5 block6 ."
      ". appStore social ."
      ". info info .";
    grid-template-columns: 5.4% repeat(2, 44.6%) 5.4%;
    padding: 80px 0 0 0;

    &__block1,
    &__block2,
    &__block3,
    &__block4,
    &__block5,
    &__block6 {
      display: flex;
      justify-content: flex-start;
      padding-top: 60px;
    }

    &__blockDiscover,
    &__blockWealth {
      padding-top: 60px;
    }

    &__appStore {
      display: flex;
      justify-content: flex-end;
      padding-top: 32%;
      padding-right: 5.98%;

      &_img {
        width: 142px;
      }
    }

    &__social {
      display: flex;
      justify-content: flex-start;
      padding-top: 32%;
      padding-left: 13.76%;

      &_img {
        width: 142px;
      }
    }

    &__emailSubscribe {
      padding: 0;
    }

    &__info {
      padding: 17% 0 3% 0;
    }
  }
}
</style>
