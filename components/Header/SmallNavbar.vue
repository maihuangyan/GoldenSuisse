<template lang="pug">
.SmallNavbar
  .SmallNavbar__login
    FlowButton(label="My account", path="/account")
</template>

<script>
export default {
  name: "SmallNavbar",
  props: ["isMenu", "openedMenu"],
  components: {
    FlowButton: () => import("@/components/FlowButton.vue"),
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
        case "/account":
          return "Login";
        case "/account/download":
          return "Download Apps";
        case "/legal":
          return "VQF Membership";
        case "/legal/privacy":
          return "Privacy";
        case "/legal/information":
          return "Information";
        case "/contact":
          return "Headquarters";
        case "/contact/support":
          return "Support";
        case "/insights":
          return "News";
        default:
          return "Home";
      }
      return "";
    },
  },
  methods: {
    routerClick() {
      this.$store.dispatch("updateBigHeader", false);
      this.$emit("transition-true");
    },
    linkClicked() {
      if (this.$route.name === "error404") {
        this.$emit("close-menu");
        this.$router.push({ path: "/" });
      } else {
        this.$emit("close-menu");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/_variables.scss";

.fadeSmallNavbar-leave-active {
  transition: opacity 0.5s;
}

.fadeSmallNavbar-leave-to {
  opacity: 0;
}

.SmallNavbar__router__link:hover {
  color: $gold;
}

.SmallNavbar {
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
      padding: 0 20px 0 0;
      letter-spacing: -0.02em;
      text-transform: uppercase;
      text-decoration: none;
      color: $white;
      pointer-events: auto;

      &_active {
        color: $gold;
      }
    }

    &__back {
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
</style>
