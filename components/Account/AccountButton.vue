<template lang="pug">
button.accountButton(
  :class="{ accountButton_valid: isValid, accountButton_spinner: spinner }",
  @click="click"
)
  .accountButton__label {{ label }}
</template>

<script>
export default {
  name: "AccountButton",
  props: ["label", "isValid", "spinner"],
  methods: {
    click() {
      if (this.isValid) this.$emit("click");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/_variables.scss";

.accountButton {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
  width: 120px;
  border: 2px solid $white;
  box-sizing: border-box;
  border-radius: 50%;
  background-color: $black;
  color: $white;
  transition: all linear 0.5s;
  -webkit-transition: all linear 0.5s;
  cursor: pointer;
  outline: none;

  &_valid {
    color: $black;
    background-color: $white;
  }

  &_spinner {
    color: $black;
    background-color: $darkGrey;
    border-color: $darkGrey;
  }

  &__label {
    font-family: Arial;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 143%;
    letter-spacing: -0.02em;
    text-transform: uppercase;
  }
}
</style>
