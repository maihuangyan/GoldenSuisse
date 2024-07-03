<template lang="pug">
.flowButton(@click="pushTo", data-anim="flowButton")
  .flowButton__container(
    :style="{ display: $store.state.isMobile ? 'flex' : 'none' }"
  )
    span.spanAnim {{ label }}
</template>

<script>
export default {
  name: "FlowButton",
  props: ["label", "path", "link"],
  methods: {
    pushTo() {
      if (this.path) this.$router.push({ path: this.path });
      if (this.link) window.open(this.link);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/_variables.scss";

.flowButton {
  display: flex;
  font-family: Arial;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 143%;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  width: 100%;
  height: 80px;
  color: $white;
  overflow: hidden;
  position: relative;
  transition: all linear 0.5s;
  -webkit-transition: all linear 0.5s;
  cursor: pointer;

  &__container {
    border: 2px solid $white;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: inherit;
    height: inherit;
  }

  ::after {
    display: block;
    pointer-events: none;
    content: "";
    position: absolute;
    background: $black;
    width: 180%;
    height: 100%;
    clip-path: polygon(20% 0%, 100% 0, 100% 100%, 0% 100%);
    animation: flow 0.5s forwards;
  }

  @keyframes flow {
    100% {
      transform: translate(100%);
    }
  }

  @keyframes appear {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
}

.spanAnim {
  animation: appear 0.8s;
}

@keyframes appear {
  0% {
    opacity: 0;
  }

  37% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.flowButton:hover {
  background: $white;
  color: $black;
}

@media (max-width: 1023px) {
  .flowButton {
    ::after {
      display: none;
    }
  }
}
</style>
