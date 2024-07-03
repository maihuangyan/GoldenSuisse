<template lang="pug">
.menuPage
  .menu
    section.menu__title(data-anim="fadeIn", data-anim-delay="0") Menu
    hr.menu__hrTitle(height="2")
    section.menu__createAcc
      .menu__createAcc_container
        FlowButton(label="My account", path="/account")
    section.menu__myAcc(data-anim="fadeIn", data-anim-delay="0")
      MenuList(title="My account", :list="account")
      img.app-icon(src="/image/AppIcon.png")
    section.menu__discover(data-anim="fadeIn", data-anim-delay=".05")
      MenuList(title="Discover", :list="discover")
    section.menu__wealth(data-anim="fadeIn", data-anim-delay=".05")
      MenuList(title="Wealth Protection", :list="wealth")
    section.menu__cardImg(data-anim="fadeIn", data-anim-delay=".05")
      img(src="/image/creditcardBlackGS.png")

    section.menu__coins(data-anim="fadeIn", data-anim-delay=".05")
      img(src="/image/gold_and_silver_coin.png")
    section.menu__goldenSuisse(data-anim="fadeIn", data-anim-delay=".05")
      MenuList(title="Company", :list="company")
    hr.menu__hrProducts(height="2")
    // section.menu__insights(data-anim="fadeIn", data-anim-delay=".3")
      // MenuList(title="insights", :list="insights")
    section.menu__contact(data-anim="fadeIn", data-anim-delay=".3")
      MenuList(title="contact", :list="contact")
    section.menu__legal(data-anim="fadeIn", data-anim-delay=".3")
      MenuList(title="VQF Membership", :list="legal")
    section.menu__emailSub(data-anim="fadeIn", data-anim-delay=".3")
      EmailSubscribe
    section.menu__footer(data-anim="fadeIn", data-anim-delay=".3") {{ getCopyright() }}
    section.menu__footerComp
      Footer
</template>

<script>
  import { mapGetters } from 'vuex'
  import copyright from '../../utils/copyright.js'

export default {
  name: "Menu",
  components: {
    FlowButton: () => import("@/components/FlowButton"),
    MenuList: () => import("@/components/Menu/MenuList"),
    EmailSubscribe: () => import("@/components/Footer/EmailSubscribe"),
    Footer: () => import("@/components/Footer/Footer"),
  },
  computed: {
    ...mapGetters([
      'categs/getOnlyMenusPages',
    ]),
    categs() {
      return this['categs/getOnlyMenusPages']();
    }
  },
  methods: {
    getCopyright() {
      return copyright()
    }
  },
  data: () => ({
    discover: [
      {
        title: 'Bullion Nonbank',
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
        title: 'Wealth Protection',
        path: '/payments',
        exist: true
      },
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
        title: "Apply for Account",
        path: "/account/register",
        exist: true,
      },
      {
        path: "/account/download",
        title: "Download Apps",
        exist: true,
      },
    ],
  }),
  mounted() {
    // Smooth Scroll
    if (window.innerWidth > 1023) {
      let this$el = document.querySelector(".menuPage");
      // this$el.style.height = document.documentElement.clientHeight + "px";
      this$el.style.height = "100vh";
      Scrollbar.init(this$el, {
        damping: 0.07,
      });
    }
    // Smooth Scroll END

    if (window.innerWidth < 1024) {
      window.scrollTo(0, 0);
    }
  },
  beforeDestroy() {
    if (window.innerWidth < 1024) {
      window.scrollTo(0, this.$store.state.scrollBlack);
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/_variables.scss";

.menu {
  display: grid;
  grid-template-areas:
    ". . . . . . . myAcc myAcc ."
    ". title title title title title title title title ."
    ". hrTitle hrTitle hrTitle hrTitle hrTitle hrTitle hrTitle hrTitle ."
    ". discover discover . wealth wealth . goldenSuisse goldenSuisse ."
    ". card card . coins coins . . . ."
    ". hrProducts hrProducts hrProducts hrProducts hrProducts hrProducts hrProducts hrProducts ."
    ". insights insights . contact contact . legal legal ."
    ". emailSub emailSub . . . . legal legal ."
    ". footer footer footer footer footer footer footer footer .";
  grid-template-columns: 3.75% repeat(8, 11.5625%) 3.75%;
  padding-bottom: 60px;
  width: 100%;
  overflow: hidden;

  &__title {
    grid-area: title;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 180px;
    line-height: 39%;
    letter-spacing: -0.04em;
    color: $white;
    padding: 0 0 7.8% 0;
  }

  &__hrTitle {
    grid-area: hrTitle;
  }

  &__createAcc {
    grid-area: createAcc;
    display: none;
  }

  &__myAcc {
    grid-area: myAcc;
    padding: 150px 0 21% 0;
  }

  &__products {
    grid-area: products;
    padding: 20% 0 24% 0;
  }

  &__goldenSuisse {
    grid-area: goldenSuisse;
    padding: 20% 0 24% 0;
  }

  &__hrProducts {
    grid-area: hrProducts;
    margin-top: 60px;
  }

  &__insights {
    grid-area: insights;
    padding: 20% 0;
  }

  &__contact {
    grid-area: contact;
    padding: 20% 0;
  }

  &__legal {
    grid-area: legal;
    padding: 20% 0;
  }

  &__discover {
    grid-area: discover;
    padding: 20% 0 24% 0;
  }

  &__wealth {
    grid-area: wealth;
    padding: 20% 0;
  }
  &__cardImg {
    grid-area: card;
    img {
      max-width: 172px;
    }
    @include adaptive(mob) {
      border-bottom: 2px #fff solid;
      padding-bottom: 40px;
    }
  }
  &__coins {
    grid-area: coins;
    @include adaptive(mob) {
      border-bottom: 2px #fff solid;
      padding-bottom: 40px;
    }
  }

  &__emailSub {
    grid-area: emailSub;
  }

  &__footer {
    grid-area: footer;
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
    padding: 0;
    padding-top: 12%;
    padding-bottom: 3.4%;
  }

  &__footerComp {
    display: none;
  }
}

@media (max-width: 1023px) {
  .menu {
    padding: 2% 0 20px 0;
    grid-template-areas:
      ". createAcc ."
      ". myAcc ."
      ". discover ."
      ". card ."
      ". wealth ."
      ". coins ."
      ". goldenSuisse ."
      "footerComp footerComp footerComp";
    grid-template-columns: 5.4% 89.2% 5.4%;
    overflow: scroll;

    &__title {
      display: none;
    }

    &__createAcc {
      display: flex;
      width: 100%;
      justify-content: center;
      padding: 0;

      &_container {
        width: 100%;
        max-width: 370px;
      }
    }

    &__myAcc {
      justify-content: flex-start;
      padding: 22% 0 16.5% 0;
      border-bottom: 2px $white solid;
    }

    &__products {
      padding: 17% 0;
    }

    &__goldenSuisse {
      padding: 17% 0 9% 0;
      border: none;
    }

    &__insights,
    &__contact,
    &__legal,
    &__emailSub,
    &__footer {
      display: none;
    }

    &__footerComp {
      display: block;
      grid-area: footerComp;
    }
  }
}

.app-icon {
  max-width: 40px;
  margin-top: 20px;
}
</style>
