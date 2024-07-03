<template>
  <div class="main-menu">
    <div class="menu">
      <section class="menu__title">Menu</section>
      <div class="menu-divider menu__hrTitle"></div>
      <div class="menu-divider menu__hrProducts"></div>
      <div class="menu-divider menu__hrEmail"></div>
      <div class="menu-divider menu__hr1"></div>
      <div class="menu-divider menu__hr2"></div>
      <div class="menu-divider menu__hr3"></div>
      <section class="menu__mobile_divider">
        <div style="background-color: white; height: 2px; width: 100%;"></div>
        <div style="display: flex; flex-direction: row; height: 100%;">
          <div style="flex: 1; border-right: solid 1px white;"></div>
          <div style="flex: 1; border-left: solid 1px white;"></div>
        </div>
      </section>
      <section class="menu__myAcc">
        <MenuList
          title="My account"
          :list="account"
        />
      </section>
      <section class="menu__discover">
        <MenuList
          title="Discover"
          :list="discover"
        />
      </section>
      <section class="menu__wealth">
        <MenuList
          title="Wealth Protection"
          :list="wealth"
        />
      </section>
      <section class="menu__goldenSuisse">
        <MenuList
          title="About"
          :list="company"
        />
      </section>
      <section class="menu__contact">
        <MenuList
          title="Contact"
          :list="contact"
        />
      </section>
      <section class="menu__legal">
        <MenuList
          title="LEGAL"
          :list="legal"
        />
      </section>
      <section class="menu__emailSub">
        <EmailSubscribe/>
      </section>
      <section class="menu__footer">
        {{ getCopyright() }}
      </section>
      <section class="menu__createAcc">
        <div class="menu__createAcc_container">
          <Button
            label="Create account"
            path="/account/register"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import copyright from '../../../utils/copyright.js'
  import Button from "../Button.vue";

export default {
  name: "Menu",
  components: {
    FlowButton: () => import("@/components/FlowButton"),
    MenuList: () => import("@/components/v3/Menu/MenuList"),
    EmailSubscribe: () => import("@/components/Footer/EmailSubscribe"),
    Footer: () => import("@/components/Footer/Footer"),
    Button
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
    },
    isMobile() {
      if (navigator.maxTouchPoints &&
          navigator.maxTouchPoints > 2 &&
          /MacIntel/.test(navigator.platform)) return true;
      if (navigator.userAgent.match(/Android/i)
         || navigator.userAgent.match(/webOS/i)
         || navigator.userAgent.match(/iPhone/i)
         || navigator.userAgent.match(/iPad/i)
         || navigator.userAgent.match(/iPod/i)
         || navigator.userAgent.match(/BlackBerry/i)
         || navigator.userAgent.match(/Windows Phone/i)) {
        return true;
      } else {
        return false ;
      }
    },
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
    if (!this.isMobile()) {
      let this$el = document.querySelector(".main-menu");
      this$el.style.height = "100vh";
      Scrollbar.init(this$el, {
        damping: 0.07,
      });
    } else {
      window.scrollTo(0, 0);
    }
  },
  beforeDestroy() {
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/_variables.scss";
.menu {
  display: grid;
  grid-template-areas:
    "title title title . . . myAcc myAcc"
    "hrTitle hrTitle hrTitle hrTitle hrTitle hrTitle hrTitle hrTitle"
    "discover discover . wealth wealth . goldenSuisse goldenSuisse"
    "hrProducts hrProducts hrProducts hrProducts hrProducts hrProducts hrProducts hrProducts"
    "emailSub emailSub . contact contact . legal legal"
    "emailSub emailSub . . . . legal legal"
    "footer footer footer footer footer footer footer footer";
  grid-template-columns: repeat(8, 12.5%) ;
  padding: 180px 60px 40px 60px;
  width: 100%;
  overflow: hidden;

  .menu-divider {
    height: 2px;
    background: white;
  }
  &__title {
    grid-area: title;
    font-family: Arial;
    font-weight: normal;
    font-size: 180px;
    line-height: 160px;
    letter-spacing: -0.04em;
    color: $white;
    align-self: flex-end;
    padding-bottom: 80px;
  }

  &__myAcc {
    grid-area: myAcc;
    padding: 320px 0 80px 0;
  }
  &__hrTitle {
    grid-area: hrTitle;
  }
  &__hrProducts {
    grid-area: hrProducts;
  }
  &__hrEmail {
    grid-area: hrEmail;
    display: none;
  }
  &__hr1 {
    grid-area: hr1;
    display: none;
  }
  &__hr2 {
    grid-area: hr2;
    display: none;
  }
  &__hr3 {
    grid-area: hr3;
    display: none;
  }

  &__createAcc {
    grid-area: createAcc;
    display: none;
  }
  &__mobile_divider {
    grid-area: mobileDivider;
    width: 100%;
    display: none;
  }
  &__goldenSuisse {
    grid-area: goldenSuisse;
    padding: 80px 0;
  }

  &__contact {
    grid-area: contact;
    padding: 80px 0;
  }

  &__legal {
    grid-area: legal;
    padding: 80px 0;
  }

  &__discover {
    grid-area: discover;
    padding: 80px 0;
  }

  &__wealth {
    grid-area: wealth;
    padding: 80px 0;
  }

  &__emailSub {
    grid-area: emailSub;
    padding: 80px 0;  
  }

  &__footer {
    grid-area: footer;
    font-family: Arial;
    font-weight: normal;
    font-size: 14px;
    line-height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: -0.02em;
    color: $darkGrey;
    margin-top: 60px;
  }
}

@media (max-width: 1599px) {
  .menu {
    padding: 150px 60px 20px 60px;

    &__title {
      font-size: 140px;
      line-height: 140px;
      padding-bottom: 60px;
    }

    &__myAcc {
      grid-area: myAcc;
      padding: 290px 0 60px 0;
    }

    &__goldenSuisse {
      grid-area: goldenSuisse;
      padding: 60px 0;
    }

    &__contact {
      grid-area: contact;
      padding: 60px 0;
    }

    &__legal {
      grid-area: legal;
      padding: 60px 0;
    }

    &__discover {
      grid-area: discover;
      padding: 60px 0;
    }

    &__wealth {
      grid-area: wealth;
      padding: 60px 0;
    }

    &__emailSub {
      grid-area: emailSub;
      padding: 60px 0;  
    }

    &__footer {
      font-size: 14px;
      line-height: 50px;
      margin-top: 40px;
    }

    &__footerComp {
      display: none;
    }
  }
}

@media (max-width: 1279px) {
  .menu {
    grid-template-areas:
    "title . myAcc"
    "hrTitle hrTitle hrTitle"
    "discover . wealth"
    "hrProducts hrProducts hrProducts"
    "goldenSuisse . contact"
    "hrEmail hrEmail hrEmail"
    "emailSub . legal"
    "footer footer footer";

    grid-template-columns: 40% 20% 40%;
    padding: 150px 40px 20px 40px;


    &__hrEmail {
      display: block;
    }

    &__title {
      grid-area: title;
      font-size: 120px;
      line-height: 120px;
      padding-bottom: 60px;
    }

    &__myAcc {
      grid-area: myAcc;
      padding: 260px 0 60px 0;
    }

    &__goldenSuisse {
      grid-area: goldenSuisse;
      padding: 60px 0;
    }

    &__contact {
      grid-area: contact;
      padding: 60px 0;
    }

    &__legal {
      grid-area: legal;
      padding: 60px 0;
    }

    &__discover {
      grid-area: discover;
      padding: 60px 0;
    }

    &__wealth {
      grid-area: wealth;
      padding: 60px 0;
    }

    &__emailSub {
      grid-area: emailSub;
      padding: 60px 0;  
    }

    &__footer {
      font-size: 14px;
      line-height: 50px;
      margin-top: 40px;
    }

    &__footerComp {
      display: none;
    }
  }
}

@media (max-width: 1023px) {
  .menu {
    grid-template-areas:
    "title title"
    "hrTitle hrTitle"
    "myAcc discover"
    "hrProducts hrProducts"
    "wealth goldenSuisse"
    "hrEmail hrEmail"
    "contact legal"
    "mobileDivider mobileDivider"
    "createAcc createAcc"
    "footer footer";
    grid-template-columns: 50% 50%;
    padding: 100px 45px 10px 45px;

    &__emailSub {
      display: none;
    }
    &__createAcc {
      display: flex;
      justify-content: center;
      margin-top: 40px;

      &_container {
        width: 300px;
        height: 80px;
      }
    }
    &__mobile_divider {
      display: flex;
      flex-direction: column;
      height: 160px;
    }

    &__title {
      grid-area: title;
      font-size: 120px;
      line-height: 120px;
      padding-top: 100px;
      padding-bottom: 40px;
    }

    &__myAcc {
      grid-area: myAcc;
      padding: 40px 0;
    }

    &__goldenSuisse {
      grid-area: goldenSuisse;
      padding: 40px 0;
    }

    &__contact {
      grid-area: contact;
      padding: 40px 0;
    }

    &__legal {
      grid-area: legal;
      padding: 40px 0;
    }

    &__discover {
      grid-area: discover;
      padding: 40px 0;
    }

    &__wealth {
      grid-area: wealth;
      padding: 40px 0;
    }

    &__emailSub {
      grid-area: emailSub;
      padding: 40px 0;
    }

    &__footer {
      font-size: 14px;
      line-height: 50px;
      margin-top: 100px;
    }
  }
}

@media (max-width: 767px) {
  .menu {
    grid-template-areas:
    "title"
    "hrTitle"
    "myAcc"
    "hrProducts"
    "discover"
    "hrEmail"
    "wealth"
    "hr1"
    "goldenSuisse"
    "hr2"
    "contact"
    "hr3"
    "legal"
    "mobileDivider"
    "createAcc"
    "footer";
    grid-template-columns: 100%;
    padding: 80px 20px 20px 20px;

    &__emailSub {
      display: none;
    }
    &__hr1 {
      display: block;
    }
    &__hr2 {
      display: block;
    }
    &__hr3 {
      display: block;
    }
    &__createAcc {
      display: flex;
      justify-content: center;
      margin-top: 20px;

      &_container {
        width: 100%;
        height: 80px;
      }
    }
    &__mobile_divider {
      display: flex;
      flex-direction: column;
      height: 80px;
    }

    &__title {
      grid-area: title;
      font-size: 80px;
      line-height: 70px;
      padding-top: 40px;
      padding-bottom: 30px;
    }

    &__myAcc {
      grid-area: myAcc;
      padding: 30px 0;
    }

    &__goldenSuisse {
      grid-area: goldenSuisse;
      padding: 30px 0;
    }

    &__contact {
      grid-area: contact;
      padding: 30px 0;
    }

    &__legal {
      grid-area: legal;
      padding: 30px 0;
    }

    &__discover {
      grid-area: discover;
      padding: 30px 0;
    }

    &__wealth {
      grid-area: wealth;
      padding: 30px 0;
    }

    &__emailSub {
      grid-area: emailSub;
      padding: 30px 0;
    }

    &__footer {
      font-size: 14px;
      line-height: 50px;
      margin-top: 80px;
    }
  }
}

</style>
