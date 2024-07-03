<template>
  <div class="default">
    <!-- LOADER -->
    <transition name="fade">
      <div
        v-if="mainLoaderActive || !windowLoaded"
        class="mainLoader"
        :class="{ active: mainLoaderActiveClass }"
      >
        <div class="mainLoader__line" v-show="loaderIsNotMobile"></div>
        <div class="mainLoader__container">
          <section class="mainLoader__logo" v-show="loaderIsNotMobile">
            <Logo />
          </section>
          <section
            class="mainLoader__title"
            :style="{ opacity: $store.state.isMobile ? 1 : 0 }"
            v-show="loaderIsNotMobile"
          >
            <HeaderTitle :scrolled="false" />
          </section>
        </div>

        <section
          class="mainLoader__subtitle"
          :style="{ opacity: $store.state.isMobile ? 1 : 0 }"
          v-show="loaderIsNotMobile"
        >
          Loading Content
        </section>
      </div>
    </transition>
    <!-- END LOADER -->

    <!-- HEADER -->
    <header style="overflow: hidden">
      <transition name="fade">
        <Header
          style="position: fixed; top: 0; width: 100%; z-index: 3"
          :openedMenu="openedMenu"
          :isMenu="isMenu"
          :isMobile="isMobile"
          :scrolled="scrollHeight > 200 || !bigHeader"
          :linkList="linkList"
          @open-menu="openMenu"
          @close-menu="closeMenu"
        />
      </transition>
    </header>
    <!-- END HEADER -->

    <!-- MENU -->
    <transition name="fadeMenu" @beforeEnter="menuBeforeEnter">
      <Menu v-show="openedMenu" style="padding-top: 100px" />
    </transition>
    <!-- END MENU -->

    <!-- PAGE -->
    <transition name="fade">
      <div
        v-show="!isMenu"
        class="page"
        v-observer:subtree.attributes="scrollObserver"
      >
        <!-- NUXT -->
        <!-- <transition name="fade"> -->
        <main>
          <nuxt />
        </main>
        <!-- </transition> -->
        <!-- END NUXT -->

        <!-- FOOTER -->
        <transition name="fade">
          <footer v-show="$store.state.isFooter">
            <Footer />
          </footer>
        </transition>
        <!-- END FOOTER -->
      </div>
    </transition>
    <!-- END PAGE -->

    <transition name="popupFade">
      <video-popup
        v-show="videoPopupShow"
      />
    </transition>

  </div>
</template>

<script>
import gsap from "gsap";
import { mapGetters } from 'vuex'

export default {
  name: "Default",
  components: {
    Header: () => import("@/components/Header/Header.vue"),
    Footer: () => import("@/components/Footer/Footer.vue"),
    Menu: () => import("@/components/Menu/Menu.vue"),
    Logo: () => import("@/components/Header/Logo.vue"),
    HeaderTitle: () => import("@/components/Header/HeaderTitle.vue"),
    videoPopup: () => import("@/components/updated/videoPopup.vue"),
  },
  data() {
    return {
      scrollHeight: 0,
      isMenu: false,
      openedMenu: false,
      linkList: null,
      isMobile: false,
      headerSubNavbarAnim: null,
    };
  },
  methods: {
    isIOS() {
      if (/iPad|iPhone|iPod/.test(navigator.platform)) {
        return true;
      } else {
        return navigator.maxTouchPoints &&
          navigator.maxTouchPoints > 2 &&
          /MacIntel/.test(navigator.platform);
      }
    },
    menuBeforeEnter() {
      if (window.innerWidth >= 1024) {
        let this$el = document.querySelector(".menuPage");
        if (Scrollbar.get(this$el)) Scrollbar.get(this$el).scrollTop = 0;
      } else {
        window.scrollTo(0, 0);
      }
    },
    scrollObserver(mutations) {
      let scrollContent = mutations.find(
        (mutation) => mutation.target.className === "scroll-content"
      );
      if (scrollContent) {
        this.scrollHeight = Math.abs(
          parseInt(scrollContent.target.style.transform.split(", ")[1])
        );
      }
    },
    openMenu() {
      this.$root.destroySubnavbarLine();
      setTimeout(() => {
        this.$store.dispatch("updateBigHeader", false);
        this.isMenu = true;
      }, 100);

      this.$store.dispatch("changeFooter", false);
      this.$store.dispatch("updateMenuStatus", true);
      setTimeout(() => {
        this.openedMenu = true;
      }, 500);
      if (this.isMobile) {
        this.$store.dispatch("setScrollHeight", window.scrollY);
      }

      this.$root.destroySubNavbar();
      let headerSubNavbar = document.querySelector(".header__subNavbar");

      if (headerSubNavbar) {
        headerSubNavbar = headerSubNavbar.children[0].children;
        for (let i = 0; i < headerSubNavbar.length; i++) {
          gsap.to(headerSubNavbar[i], 0.7, {
            opacity: 0,
          });
        }
      }
    },
    closeMenu() {
      console.log('closeMenu');
      this.$store.dispatch("updateBigHeader", true);
      this.openedMenu = false;
      setTimeout(() => {
        this.isMenu = false;
        this.$store.dispatch("updateMenuStatus", false);
      }, 500);
      setTimeout(() => {
        this.$root.animateSubNavbarLine();
      }, 500);

      this.$store.dispatch("changeFooter", true);

      let headerSubNavbar = document.querySelector(".header__subNavbar");

      if (headerSubNavbar) {
        headerSubNavbar = headerSubNavbar.children[0].children;
        for (let i = 0; i < headerSubNavbar.length; i++) {
          gsap.to(headerSubNavbar[i], 0.7, {
            opacity: 1,
            delay: i / 10 + 0.8,
          });
        }
      }
      this.$store.commit('setCloseMenuInit', false);
    },
  },
  computed: {
    videoPopupShow() {
      if (process.client && this.$store.state.isMobile) {
        const html = document.querySelector('html');
        if (this.$store.state.videoPopupShow) {
          html.style.overflow = 'hidden';
        }
        else {
          html.style.overflow = 'scroll';
        }
      }
      return this.$store.state.videoPopupShow;
    },
    getIsMenu: function () {
      setTimeout(() => {
        return this.isMenu;
      }, 5000);
    },
    currentUrl: function () {
      return this.$route.fullPath;
    },
    bigHeader: function () {
      if (this.$store.state.bigHeader) {
        return true;
      } else {
        return false;
      }
    },
    windowLoaded() {
      if (this.$store.state.windowLoaded) {
        return true;
      }
    },
    mainLoaderActive() {
      if (this.$store.state.mainLoaderActive) {
        return true;
      } else {
        return false;
      }
    },
    mainLoaderActiveClass() {
      if (this.$store.state.mainLoaderActiveClass) {
        return true;
      } else {
        return false;
      }
    },
    loaderIsNotMobile() {
      if (!this.$store.state.isMobile) {
        return true;
      } else {
        return false;
      }
    },
    ...mapGetters([
      'categs/getOnlyMenusPages',
    ]),
    categs() {
      return this['categs/getOnlyMenusPages']();
    },
    closeMenuInit() {
      return this.$store.state.closeMenuInit;
    }
  },
  mounted() {
    if (window.innerWidth >= 1024) {
      setTimeout(() => {
        console.log('Default Layout Init Animation');
        this.$root.initAnim();
        this.$root.animateSubNavbar();
        this.$root.animateHeader({ currentRoute: this.$route });
        this.$root.animateSubNavbarLine();
      }, 3000);
      let this$el = document.querySelector(".page");
      Scrollbar.init(this$el, {
        damping: 0.07,
      });
      this.isMobile = false;
    } else {
      this.isMobile = true;
    }
    this.closeMenu();

    if (this.categs.hasOwnProperty(this.$route.path.split("/")[1])) {
      this.linkList = this.categs[this.$route.path.split("/")[1]];
    } else {
      this.linkList = null;
    }
  },
  watch: {
    $route($route) {
      if (this.isMenu) {
        this.isMenu = false;
        this.openedMenu = false;
        this.$store.dispatch("updateMenuStatus", false);
        this.linkList = null;
      }
      var timeOut = setTimeout(() => {
        if ($route.path != "/") {
          if (this.categs.hasOwnProperty($route.path.split("/")[1])) {
            this.linkList = this.categs[$route.path.split("/")[1]];
          } else {
            this.linkList = null;
          }
        } else {
          this.linkList = null;
        }
        clearTimeout(timeOut);
      }, 500);
    },
    scrollHeight(scrollHeight) {
      if (!this.isMenu) {
        this.$store.dispatch("setScrollHeight", scrollHeight);
      }
    },
    closeMenuInit: function (newValue, oldValue) {
      if (!oldValue && newValue) this.closeMenu();
    }
  },
};
</script>

<style lang="scss">
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  overflow: hidden;
}

body {
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
}

.scrollbar-track {
  z-index: 4 !important;
}

.pageZero {
  display: none !important;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.fade-enter-active {
  transition: opacity 0.5s;
  transition-delay: 0.5s;
}

.fade-leave-active {
  transition: opacity 0.5s;
  transition-delay: 0s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fadeMenu-enter-active {
  transition: opacity 0.4s;
}

.fadeMenu-leave-active {
  transition: opacity 0.4s;
}

.fadeMenu-enter,
.fadeMenu-leave-to {
  opacity: 0;
}

.mainLoader {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-areas: ". logo logo logo . . . . subtitle .";
  grid-template-columns: 3.75% repeat(8, 11.5625%) 3.75%;
  padding: 30px 0 0 0;

  z-index: 1000;
  background: #101010;

  &__container {
    grid-area: logo;
    display: inline-flex;
  }

  &__logo {
    color: #fff;
    height: inherit;
    cursor: pointer;
  }

  &__title {
    height: inherit;
    cursor: pointer;
    width: fit-content;
  }

  &__subtitle {
    grid-area: subtitle;
    font-family: Arial;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    text-align: right;
    letter-spacing: -0.02em;

    color: #fff;
  }

  &__text {
    font-size: 1.2rem;
    position: fixed !important;
    top: 1rem;
    left: 2.5rem;
    color: #fff;
    @include adaptive(mob) {
      left: 1.3rem;
      font-size: 1.5rem;
    }
    @include adaptive(tablet) {
      font-size: 2.2rem;
      margin-bottom: -3px;
      left: 1.5rem;
    }
  }
  &__line {
    position: fixed;
    top: 0px;
    left: 0px;
    height: 2px;
    background: #fff;
    width: 0%;
  }
  &.active {
    .mainLoader__line {
      width: 100%;
      transition: width 2s linear;
    }
  }
}

.popupFade-enter-active,
.popupFade-leave-active {
  transition: opacity .3s ease;
}
.popupFade-enter,
.popupFade-leave-active {
  opacity: 0;
}

  @include adaptive(tablet) {
    footer {
      padding-bottom: 30px;
    }
  }


</style>
