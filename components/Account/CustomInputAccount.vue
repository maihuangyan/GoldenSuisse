<template lang="pug">
  .CustomInputAccount
    input.CustomInputAccount__input(v-if="!mask" required v-model="value" :type="type" :placeholder="placeholder")
    input.CustomInputAccount__input(v-else required v-model="value" :type="type" :placeholder="placeholder" v-mask="'+# ### ###—####'")
    span.CustomInputAccount__bar
    label.CustomInputAccount__label {{label}}
</template>

<script>
export default {
  name: "CustomInputAccount",
  props: ["label", "type", "placeholder", "mask"],
  data() {
    return {
      value: ""
    };
  },
  mounted() {
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
.CustomInputAccount__input:focus ~ .CustomInputAccount__label,
.CustomInputAccount__input:valid ~ .CustomInputAccount__label {
  color: $white;
}
.CustomInputAccount__input:focus ~ .CustomInputAccount__bar:before,
.CustomInputAccount__input:focus ~ .CustomInputAccount__bar:after {
  width: 50%;
}
.CustomInputAccount {
  max-width: 100%;
  position: relative;
  &__input {
    width: 100%;
    padding: 40px 0 40px 0;

    height: 39px;
    background: none;
    border: none;
    color: $white;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 250%;
    letter-spacing: -0.02em;
    outline: none;
    display: block;
    border-bottom: 1px solid $darkGrey;
    @include adaptive(tablet) {
      font-size: 24px;
    }

    &::placeholder {
      color: $darkGrey;
    }
  }
  &__label {
    font-family: Arial;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 229%;
    letter-spacing: -0.02em;
    color: $darkGrey;
    position: absolute;
    pointer-events: none;
    left: 0;
    top: -20px;
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

@media (max-width: 1023px) {
  .CustomInputAccount {
    &__label {
      font-weight: normal;
      font-size: 14px;
      line-height: 214%;
      letter-spacing: -0.02em;
    }

    &__input {
      font-weight: normal;
      font-size: 20px;
      line-height: 150%;
      letter-spacing: -0.02em;
      padding: 8% 0;
    }
  }
}
</style>
