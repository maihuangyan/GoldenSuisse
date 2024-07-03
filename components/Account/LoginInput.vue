<template lang="pug">
  .loginInput
    .loginInput__input
      CustomInputAccount(:label="label" :type="type" @input-changed="inputChanged" :placeholder="placeholder" :mask="mask")
    nuxt-link.loginInput__link(v-if="link" :to="link.path") {{link.title}}
    .loginInput__action(v-if="action" @click="$emit('action-commit')") {{action}}
</template>

<script>
export default {
  name: "LoginInput",
  props: ["label", "link", "type", "placeholder", "action", "mask"],
  components: {
    CustomInputAccount: () => import("@/components/Account/CustomInputAccount")
  },
  methods: {
    inputChanged(value) {
      this.$emit("input-changed", value);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/_variables.scss";

.loginInput {
  display: grid;
  grid-template-areas: "input" "link";

  &__input {
    grid-area: input;
  }

  &__link {
    grid-area: link;
    font-family: Arial;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 229%;
    letter-spacing: -0.02em;
    color: $lightGrey;
    text-decoration: none;
    padding-top: 2%;
  }

  &__action {
    grid-area: link;
    font-family: Arial;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 229%;
    letter-spacing: -0.02em;
    color: $lightGrey;
    text-decoration: none;
    padding-top: 2%;
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
  }
}

@media (max-width: 1024px) {
  .loginInput {
    &__link {
      display: flex;
      justify-content: flex-start;
      font-size: 12px;
    }
  }
}
</style>
