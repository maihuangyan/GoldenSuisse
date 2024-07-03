<template lang="pug">
  .menuNavBar
    .menuNavBar__router
      div.menuNavBar__router__link(@click="linkClicked") Close Menu
    .menuNavBar__login
      FlowButton(label="Apply for an account" path="/account/register")
</template>

<script>
export default {
  name: "MenuNavBar",
  components: {
    FlowButton: () => import("@/components/FlowButton.vue")
  },
  computed: {
    backRouteName() {
      switch (this.$route.path) {
        case "/":
          return "Home";
        case "/golden_suisse":
          return "Company";
        case "/golden_suisse/advisory":
          return "Advisory";
        case "/golden_suisse/ownership":
          return "Ownership";
        case "/golden_suisse/awards":
          return "Awards";
        case "/golden_suisse/sustainability":
          return "Ethical Gold";
        case "/products":
          return "Nonbank";
        case "/products/gold_silver":
          return "Gold & Silver";
        case "/products/technology":
          return "Technology";
        case "/products/vault_trust":
          return "Vault & Trust";
        case "/products/card":
          return "Card";
        case "/products/accounts_rates":
          return "Accounts & Rates";
        case "/products/club":
          return "The Club";
        default:
          return "Home";
      }
      return "";
    }
  },
  methods: {
    linkClicked() {
      if (this.$route.name === "error404") {
        this.$emit("close-menu");
        this.$router.push({ path: "/" });
      } else {
        this.$emit("close-menu");
      }
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
@import "@/assets/_variables.scss";

.menuNavBar__router__link:hover {
  color: $gold;
}

.menuNavBar {
  display: grid;
  grid-template-areas: "links login";
  grid-template-columns: repeat(2, 50%);

  &__router {
    grid-area: links;
    display: inline-flex;

    &__link {
      font-family: Arial;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 16px;
      text-align: center;
      letter-spacing: -0.02em;
      color: $white;
      animation: linkOpacity 0.6s forwards;
      pointer-events: auto;
      cursor: pointer;
      transform: translateX(-50%);
    }
  }

  &__login {
    grid-area: login;
    pointer-events: auto;
  }

  @keyframes linkOpacity {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
}

@media (max-width: 1300px) {
  .menuNavBar {
    &__router {
      &__link {
        transform: translateX(-30%);
      }
    }
  }
}
</style>
