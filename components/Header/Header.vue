<template lang="pug">
.header
  .header__container
    section.header__logo(@click="goHome")
      LogoMobile(v-show="$store.state.isMobile")
      Logo(v-show="!$store.state.isMobile")

    section.header__title(
      :style="{ opacity: $store.state.isMobile ? 1 : 1 }",
      @click="goHome"
    )
      HeaderTitle

  section.header__menu
    MenuIcon(
      @open-menu="openMenu()",
      @close-menu="closeMenu()",
      :isMenu="isMenu"
    )

  section.header__navbar
    transition(name="fadeSmallNavbar")
      SmallNavbar(
        :isMenu="isMenu",
        :openedMenu="openedMenu",
        @close-menu="closeMenu()"
      )

  hr.header__hr(
    height="2",
    v-if="linkList && !isMenu",
    :style="{ opacity: $store.state.isMobile ? 1 : 0 }"
  )

  transition(name="fade")
    section.header__subNavbar(v-show="linkList && !isMenu")
      Links(:linkList="linkList")
</template>

<script>
import gsap from "gsap";
export default {
  name: "Header",
  props: {
    scrolled: {
      type: Boolean,
      required: true,
    },
    isMenu: {
      type: Boolean,
      default: false,
    },
    openedMenu: {
      type: Boolean,
      default: false,
    },
    linkList: {
      type: Array,
      required: false,
    },
    isMobile: {
      type: Boolean,
      default: false,
    },
    isError: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    LargeNavBar: () => import("@/components/Header/LargeNavBar.vue"),
    Logo: () => import("@/components/Header/Logo.vue"),
    MenuIcon: () => import("@/components/Header/MenuIcon.vue"),
    HeaderTitle: () => import("@/components/Header/HeaderTitle.vue"),
    SmallNavbar: () => import("@/components/Header/SmallNavbar.vue"),
    Links: () => import("@/components/Links"),
    MenuNavBar: () => import("@/components/Header/MenuNavBar.vue"),
    LogoMobile: () => import("@/components/Header/LogoMobile.vue"),
  },
  data() {
    return {
      transitionEnded: false,
      transitionEndedLarge: false,
    };
  },
  methods: {
    goHome() {
      this.$router.push({ path: "/" });
      this.closeMenu();
    },
    openMenu() {
      this.transitionEnded = true;
      this.$emit("open-menu");
      let subnav = document.querySelector(".header__subNavbar");
      subnav.style.removeProperty("border-top");
    },
    closeMenu() {
      if (!this.scrolled) {
        setTimeout(() => {
          this.transitionEnded = false;
        }, 500);
      }
      this.$emit("close-menu");
    },
  },
  computed: {
    bigHeader: function () {
      if (this.$store.state.bigHeader) {
        return true;
      } else {
        return false;
      }
    },
    transEnd: function () {
      if (this.$store.state.transEnd) {
        return true;
      } else {
        return false;
      }
    },
  },
  mounted() {
    if (this.$route.path !== "/") {
      this.transitionEnded = true;
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/_variables.scss";

.header_haveLinkList {
  height: 230px !important;
  grid-template-rows: 120px 80px;
}

.header {
  height: auto !important;
  display: grid;
  grid-template-areas:
    ". logo logo logo menu navbar navbar navbar navbar ."
    ". hr hr hr hr hr hr hr hr ."
    ". subNavbar subNavbar subNavbar subNavbar subNavbar subNavbar subNavbar subNavbar .";
  grid-template-columns: 3.75% repeat(8, 11.5625%) 3.75%;
  z-index: 3;
  position: relative;
  transition: all 0.3s ease-in-out;
  height: 150px;
  background-color: $black;
  padding: 30px 0 0 0;

  &__container {
    grid-area: logo;
    display: inline-flex;
  }

  &__logo {
    // grid-area: logo;
    color: $white;
    height: inherit;
    cursor: pointer;
  }

  &__title {
    height: inherit;
    // grid-area: title;
    cursor: pointer;
    width: fit-content;
  }

  &__menu {
    height: inherit;
    grid-area: menu;
    display: flex;
    /*justify-content: flex-start;*/
    justify-content: flex-end;
    z-index: 4;
    @include adaptive(notMob) {
      .menu {
        margin-right: -30px;
      }
    }
  }

  &__navbar {
    height: inherit;
    grid-area: navbar;
    position: relative;
  }

  &__hr {
    grid-area: hr;
  }

  &__subNavbar {
    grid-area: subNavbar;
    height: 80px;
    z-index: 4;
    transition: 1s all ease-in-out;
  }
}

.fadeSmallNavbar-leave-active {
  transition: opacity 0.3s;
}

.fadeSmallNavbar-leave-to {
  opacity: 0;
}

.fadeHr-enter-active {
  transition: opacity 0.5s;
}

.fadeHr-leave-active {
  transition: opacity 0.5s;
  transition-delay: 0s;
}

.fadeHr-enter,
.fadeHr-leave-to {
  opacity: 0;
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

@media (max-width: 1023px) {
  .header {
    grid-template-columns: 5.5% 80px 1fr 1fr 50px 5.5%;
    grid-template-areas: ". logo title title menu .";
    transition: all 0.2s ease-in-out;
    height: 100px;
    padding: 20px 0 20px 0;

    &__logo {
      height: 60px;
      width: 80px;
    }

    &__menu {
      display: flex;
      justify-content: flex-end;
      padding: 0;
      margin: 0;
      width: 100%;
    }

    &__navbar {
      display: none;
    }

    &__subNavbar {
      display: none;
    }

    &__hr {
      display: none;
    }
  }

  .header_haveLinkList {
    height: auto;
  }
}
</style>
