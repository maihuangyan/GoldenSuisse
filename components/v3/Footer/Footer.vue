<template>
  <div class="footer">
    <div class="footer__emailSubscribe">
      <EmailSubscribe/>
    </div>
    <div class="footer__blockDiscover"
      v-if="!(this.$store.state.isMobile & this.$store.state.isMenu)"
    >
      <FooterList
        title="Discover"
        :content="discover"
      />
    </div>
    <div class="footer__blockWealth"
      v-if="!(this.$store.state.isMobile & this.$store.state.isMenu)"
    >
      <FooterList
        title="Wealth protection"
        :content="wealth"
      />
    </div>
    <div class="footer__blockAbout"
      v-if="!(this.$store.state.isMobile & this.$store.state.isMenu)"
    >
      <FooterList
        title="About"
        :content="company"
      />
    </div>
    <div class="footer__blockContact"
      v-if="!(this.$store.state.isMobile & this.$store.state.isMenu)"
    >
      <FooterList
        title="Contact"
        :content="contact"
      />
    </div>
    <div class="footer__blockLegal"
      v-if="!(this.$store.state.isMobile & this.$store.state.isMenu)"
    >
      <FooterList
        title="Legal"
        :content="legal"
      />
    </div>
    <div class="footer__blockMyaccount"
      v-if="!(this.$store.state.isMobile & this.$store.state.isMenu)"
    >
      <FooterList
        title="My Account"
        :content="account"
      />
    </div>
    <div class="footer__appStore">
      <!-- <img
        class="footer__appStore_img"
        src="../../../static/image/v3/appstore-logo.png"
        @click="redirect('https://apps.apple.com/us/app/goldensuisse/id1236821991')"/> -->
        <img
        class="footer__appStore_img"
        src="../../../static/image/appstore-logo.png"
        @click="redirect('https://apps.apple.com/us/app/goldensuisse/id1236821991')"/>
    </div>
    <div class="footer__social">
      <!-- <img
        class="footer__social_img"
        src="../../../static/image/v3/google-play-logo.png"
        @click="redirect('https://play.google.com/store/apps/details?id=com.golden.coin&hl=en_US')"/> -->
        <img
        class="footer__social_img"
        src="../../../static/image/google-play-logo.png"
        @click="redirect('https://play.google.com/store/apps/details?id=com.golden.coin&hl=en_US')"/>
    </div>
    <div class="footer__info">
      {{getCopyright()}}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import copyright from '../../../utils/copyright.js';
import FooterList from "./FooterList.vue";

export default {
  name: "Footer",
  components: {
    FooterList,
    EmailSubscribe: () => import("@/components/Footer/EmailSubscribe"),
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
  padding: 100px 60px 40px 60px;
  display: grid;
  grid-template-areas:
    "emailSubscribe emailSubscribe . . discover wealth about contact"
    ". . . . . . legal myaccount"
    "appStore social info info info info . .";
  grid-template-columns: repeat(8, 12.5%);
  height: max-content;

  &__emailSubscribe {
    grid-area: emailSubscribe;
  }

  &__blockDiscover {
    grid-area: discover;
  }
  &__blockWealth {
    grid-area: wealth;
  }
  &__blockAbout {
    grid-area: about;
  }
  &__blockContact {
    grid-area: contact;
  }
  &__blockLegal {
    grid-area: legal;
  }
  &__blockMyaccount {
    grid-area: myaccount;
  }
  
  &__appStore {
    grid-area: appStore;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 10px;
    margin-top: 40px;

    &_img {
      width: 80%;
      cursor: pointer;
    }
  }

  &__social {
    grid-area: social;
    display: flex;
    align-items: center;
    padding-left: 10px;
    margin-top: 40px;

    &_img {
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
    line-height: 30px;

    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: -0.28px;
    color: $darkGrey;
  }

  .footerList {
    &__title {
      line-height: 33px;
    }

    &__list {
      padding: 0px;
    }
  }
}
@media (max-width: 1599px) {
  .footer {
    padding: 80px 60px 40px 60px;
    grid-template-areas:
    "emailSubscribe emailSubscribe . discover wealth"
    ". . . about contact"
    ". . . legal myaccount"
    "appStore social info info .";
    grid-template-columns: 15% 15% 20% 25% 25%;

    &__appStore {
      margin-top: 30px;
      &_img {
        width: 70%;
      }
    }
    &__social {
      margin-top: 30px;
      &_img {
        width: 70%;
      }
    }
    &__info {
      margin-top: 30px;
    }
  }
}

@media (max-width: 1279px) {
  .footer {
    padding: 80px 45px 20px 45px;
    grid-template-areas:
    "emailSubscribe emailSubscribe . discover wealth"
    ". . . about contact"
    ". . . legal myaccount"
    ". appStore appStore social ."
    ". info info info .";
    grid-template-columns: 25% 9% 16% 25% 25%;

    &__appStore {
      margin-top: 60px;
      padding-right: 5.98%;
      &_img {
        width: 142px;
      }
    }
    &__social {
      margin-top: 60px;
      padding-left: 13.76%;

      &_img {
        width: 142px;
      }
    }
    &__info {
      line-height: 50px;
      margin-top: 60px;
    }
  }
}

@media (max-width: 1023px) {
  .footer {
    padding: 80px 45px 20px 45px;
    grid-template-areas:
      "emailSubscribe emailSubscribe"
      "discover ."
      "wealth about"
      "contact ."
      "legal myaccount"
      "appStore social"
      "info info";
    grid-template-columns: 50% 50%;
    
    &__blockDiscover {
      margin-top: 60px;
    }
    &__appStore {
      margin-top: 60px;
    }
    &__social {
      margin-top: 60px;
    }
    &__info {
      margin-top: 40px;
    }
  }
}

@media (max-width: 767px) {
  .footer {
    padding: 60px 20px 0px 20px;
    grid-template-areas:
      "emailSubscribe emailSubscribe"
      "discover wealth"
      "about contact"
      "legal myaccount"
      "appStore social"
      "info info";
    grid-template-columns: 50% 50%;

    &__blockWealth {
      margin-top: 60px;
    }
    &__info {
      margin-top: 20px;
    }

    &__appStore {
      margin-top: 10px;
    }

    &__social {
      margin-top: 10px;
    }
  }
}
</style>
