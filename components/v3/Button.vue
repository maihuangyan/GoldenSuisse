<template>
  <div class="button" @click="pushTo">
    <div class="button-container">
    <span>{{ label }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Button",
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

.button {
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
  cursor: pointer;

  transition: all 0.2s ease;

  &-container {
    border: 2px solid $white;
    display: flex;
    justify-content: center;
    align-items: center;
    width: inherit;
    height: inherit;
  }
}
.button:hover {
  background: $white;
  color: $black;
}
</style>
