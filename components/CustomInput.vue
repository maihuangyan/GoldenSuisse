<template lang="pug">
  .customInput
    input.customInput__input(required v-model="value" :placeholder="placeholder")
    span.customInput__bar
    label.customInput__label {{label}}
</template>

<script>
export default {
  name: "CustomInput",
  props: ["label", "placeholder"],
  data() {
    return {
      value: ""
    };
  },
  watch: {
    value(value) {
      this.$emit("input-changed", this.value);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/_variables.scss";

input:focus::-webkit-input-placeholder {
  opacity: 0;
}

.customInput__input:focus ~ .customInput__label,
.customInput__input:valid ~ .customInput__label {
  color: $white;
  font-weight: bold;
}

.customInput__input:focus ~ .customInput__bar:before,
.customInput__input:focus ~ .customInput__bar:after {
  width: 50%;
}

.customInput {
  max-width: 100%;
  position: relative;

  &__input {
    width: 100%;
    background: none;
    border: none;
    color: $white;
    font-family: Arial;
    font-style: normal;
    line-height: 143%;
    letter-spacing: -0.02em;
    font-size: 16px;
    padding: 25px 0 10px 0;
    outline: none;
    display: block;
    border-bottom: 1px solid $darkGrey;

    &::placeholder {
      color: $darkGrey;
    }
  }

  &__label {
    text-transform: uppercase;
    font-family: Arial;
    font-style: normal;
    line-height: 143%;
    letter-spacing: -0.02em;
    color: $darkGrey;
    font-size: 14px;
    position: absolute;
    pointer-events: none;
    left: 0;
    top: 0px;
    transition: 0.2s ease all;
  }

  &__bar {
    position: relative;
    display: block;
    width: 100%;
  }

  &__bar:before,
  &__bar:after {
    content: "";
    height: 2px;
    width: 0;
    bottom: 0;
    position: absolute;
    background: $white;
    transition: 0.2s ease all;
  }
  &__bar:before {
    left: 50%;
  }
  &__bar:after {
    right: 50%;
  }
}
</style>
