<template lang="pug">
  .largeNavBar(v-if="!isMenu")
    transition-group(
      name="staggered-fade"
      tag="ul"
      class="transitionGroup"
      mode="out-in"
      @before-enter="beforeEnter"
      @afterLeave="afterLeave"
    )
      li(
        v-show="!scrolled && !isMenu"
        v-for="(link, index) in links"
        :key="link.path"
        :data-index="index"
        :style="{'--i': index + 1}"
      )
        nuxt-link.largeNavBar__link(:to="link.path" active-class="largeNavBar__link_active") {{ link.title }}
      li(
        v-show="!scrolled && !isMenu"
        key="goldToCash"
        :data-index="links.length"
        :style="{'--i': links.length + 1}"
      )
        GoldToCash.largeNavBar__item
</template>

<script>
export default {
  name: "LargeNavBar",
  props: ["scrolled"],
  components: {
    GoldToCash: () => import("@/components/Header/GoldToCash.vue")
  },
  data() {
    return {
      links: [
        { path: "/golden_suisse", title: "GS® Company" },
        { path: "/products", title: "Products" },
        { path: "/account", title: "Personal Account" }
      ],
      isMobile: false
    };
  },
  computed: {
    isMenu: function() {
      if (this.$store.state.isMenu) {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    beforeEnter: function(el) {
      if (this.$route.path === "/") this.$emit("transition-started");
    },
    afterLeave: function() {
      this.$emit("transition-ended");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/_variables.scss";

.transitionGroup {
  list-style: none;
  padding: 0;
  margin: 0;
}

.largeNavBar__link:hover {
  color: $gold;
}

.largeNavBar {
  line-height: 100%;
  font-size: 80px;
  font-style: normal;
  font-weight: normal;
  font-family: Arial;
  letter-spacing: -0.04em;
  color: $white;
  pointer-events: auto;
  width: fit-content;
  position: absolute;
  left: 0px;
  top: 0px;

  &__link {
    color: $white;
    text-decoration: none;
    display: block;
    animation: itemAppearence calc(0.3s * var(--i)) both ease-in-out;
    &_active {
      color: $gold;
    }
  }

  &__item {
    padding-top: 8.7%;
    animation: itemAppearence calc(0.3s * var(--i)) both ease-in-out;
  }
}

@media (max-width: 1240px) {
  .largeNavBar {
    font-size: 70px;
  }
}

@media (max-width: 1100px) {
  .largeNavBar {
    font-size: 60px;
  }
}

@keyframes itemAppearence {
  0% {
    opacity: 0;
  }

  20% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.staggered-fade {
  &-enter-active {
    transition: all 0.3s;
    transition-delay: calc(0.05s * var(--i));
  }

  &-leave-active {
    transition: all 0.3s;
    transition-delay: calc(0.25s / var(--i));
  }

  &-enter,
  &-leave-to {
    opacity: 0;
  }
}
</style>
