<template>
  <div class="v3">
    <transition name="fade">
      <div
        v-if="mainLoaderActive || !windowLoaded"
        class="mainLoader"
        :class="{ active: mainLoaderActiveClass }"
      >
        <div class="mainLoader__line"></div>
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
        >
          Loading Content
        </section>
      </div>
    </transition>

    <section 
      v-show="!mainLoaderActive && windowLoaded"
    >
      <div class="scroll-container">
        <div>
          <Header 
            :openedMenu="isMenuOpen"
            @open-menu="openMenu"
            @close-menu="closeMenu"
          />
          <main>
            <nuxt v-show="!isMenuOpen"/>
          </main>
          <transition name="fadeMenu">
            <Menu v-show="isMenuOpen"/>
          </transition>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: "Default",
  data() {
    return {
      scrollHeight: 0,
      isMenuOpen: false
    };
  },
  mounted() {
    if (!this.isMobile()) {
      let this$el = document.querySelector(".scroll-container");
      Scrollbar.init(this$el, {
        damping: 0.07,
      });
    } 
    // alert(this.isMobile())
  },
  methods: {
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
    openMenu() {
      this.isMenuOpen = true;
      if (!this.isMobile()) {
        let this$el = document.querySelector(".main-menu");
        setTimeout(() => {
          if (Scrollbar.get(this$el)) Scrollbar.get(this$el).scrollTop = 0;
        }, 500);
      } else {
        setTimeout(() => {
          document.body.scrollTo(0, 0);
        }, 500);
      }
    },
    closeMenu() {
      this.isMenuOpen = false;
      if (!this.isMobile()) {
        let this$el = document.querySelector(".scroll-container");
        setTimeout(() => {
          if (Scrollbar.get(this$el)) Scrollbar.get(this$el).scrollTop = 0;
        }, 400);
      } else {
        setTimeout(() => {
          document.body.scrollTo(0, 0);
        }, 400);
      }
    }
  },
  components: {
    Header: () => import("@/components/v3/Header.vue"),
    Logo: () => import("@/components/Header/Logo.vue"),
    HeaderTitle: () => import("@/components/Header/HeaderTitle.vue"),
    Menu: () => import("@/components/v3/Menu/Menu.vue"),
  },
  computed: {
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
  }
};
</script>

<style lang="scss">
@import "@/assets/css/main.css";

.scroll-container {
  width: 100%;
  height: 100vh;
  padding: 0;
}

@supports (-webkit-touch-callout: none) {
  .scroll-container {
    height: -webkit-fill-available;
    -webkit-overflow-scrolling: touch
  }
}

</style>
