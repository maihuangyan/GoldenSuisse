<template>
  <div class="v2">
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
      <Header />
      <div class="scroll-container page">
        <div>
          <nuxt />
          <Footer />
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
    };
  },
  mounted() {
    if (window.innerWidth >= 1024) {
      let this$el = document.querySelector(".scroll-container");
      Scrollbar.init(this$el, {
        damping: 0.07,
      });
    }
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
    }
  },
  components: {
    Header: () => import("@/components/v2/Header.vue"),
    Footer: () => import("@/components/v2/Footer.vue"),
    Logo: () => import("@/components/Header/Logo.vue"),
    HeaderTitle: () => import("@/components/Header/HeaderTitle.vue"),
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

// .scroll-container {
//   margin-top: 107px; 
//   height: calc(100vh - 107px);
//   width: 100%;
//   padding: 0 0 0 0;
//   overflow-y: scroll;
// }

// ::-webkit-scrollbar {
//     display: none;
// }

// @media (max-width: 1023px) {
//   .scroll-container {
//     margin-top: 82px; 
//     height: calc(100vh - 82px);
//   }
// }

</style>
