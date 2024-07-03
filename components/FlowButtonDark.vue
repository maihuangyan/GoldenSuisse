<template lang="pug">
  .flowButtonDark(@click="pushTo" data-anim="flowButton")
    .flowButtonDark__container(:style="{display: $store.state.isMobile ? 'flex' : 'none'}")
      span.spanAnim {{label}}
</template>

<script>
export default {
  name: "FlowButtonDark",
  props: ["label", "path", "link"],
  methods: {
    pushTo() {
      if (this.path) this.$router.push({ path: this.path });
      if (this.link) window.open(this.link);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/_variables.scss";

.flowButtonDark {
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
  color: $black;
  overflow: hidden;
  position: relative;
  transition: all linear 0.5s;
  -webkit-transition: all linear 0.5s;
  cursor: pointer;

  &__container {
    border: 2px solid $black;
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
    background: $white;
    width: 180%;
    height: 100%;
    clip-path: polygon(20% 0%, 100% 0, 100% 100%, 0% 100%);
    animation: flow 2s forwards;
  }

  @keyframes flow {
    100% {
      transform: translate(100%);
    }
  }
}

.flowButtonDark:hover {
  background: $black;
  color: $white;
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

@media (max-width: 1023px) {
  .flowButtonDark {
    ::after {
      display: none;
    }
  }
}
</style>
