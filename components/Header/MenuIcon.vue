<template lang="pug">
  svg.menu(@click="menuClick" :class="{'menu_closeHeight': toggleClose}")
    line.menu__rect(v-if="!$store.state.isMobile" x1="0" x2="0" y1="1" y2="1" :class="{'menu__rect_animationCloseTop': toggleClose}")
    line.menu__rect(v-else x1="0" x2="60" y1="1" y2="1" :class="{'menu__rect_animationCloseTop': toggleClose}")
    line.menu__rect(v-if="!$store.state.isMobile" x1="60" x2="60" y1="13" y2="13" :class="{'menu__rect_animationCloseBot': toggleClose}")
    line.menu__rect(v-else x1="60" x2="0" y1="13" y2="13" :class="{'menu__rect_animationCloseBot': toggleClose}")
</template>

<script>
export default {
  name: "MenuIcon",
  props: ["isMenu"],
  data() {
    return {
      duration: "0.6s",
      toggleClose: false
    };
  },
  methods: {
    menuClick() {
      if (!this.toggleClose) {
        this.toggleClose = true;
        this.$emit("open-menu");
      } else {
        this.toggleClose = false;
        this.$emit("close-menu");
      }
    }
  },
  watch: {
    isMenu(isMenu) {
      if (!isMenu) this.toggleClose = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/_variables.scss";

.menu {
  width: 60px;
  height: 14px;
  animation: slidein 0.1s;
  cursor: pointer;
  pointer-events: auto;
  overflow: visible;
  padding: 0;
  margin: 0;

  &_closeHeight {
    height: 60px;
  }

  &__rect {
    stroke: $white;
    stroke-width: 2px;
    transform: translateX(0) translateY(0) rotate(0);
    transition: all 0.4s ease-in-out;

    &_animationCloseTop {
      transform: translateX(60px) translateY(0) rotate(135deg);
    }

    &_animationCloseBot {
      transform: translateY(-10px) translateX(25px) rotate(45deg);
    }
  }

  @keyframes slidein {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
}

@media (max-width: 1023px) {
  .menu {
    transform: scale(0.6666);
  }
}
</style>
