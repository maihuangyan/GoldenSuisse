<template lang="pug">
  ul.menuList {{ title }}
    li.menuList__link(v-for="(link, index) in list" :key="index")
      nuxt-link.menuList__link__nuxt(:to="link.path" v-if="link.exist && !link.pdf && checkCateg(link.path)" :key="link.path" active-class="menuList__link__nuxt_active" exact) {{ link.title }}
      nuxt-link.menuList__link__nuxt(:to="link.path" v-if="link.exist && !link.pdf && !checkCateg(link.path)" :key="link.path" active-class="menuList__link__nuxt_active") {{ link.title }}
      div.menuList__link__nuxt.menuList__link__pdf(v-if="link.pdf" @click="openPDF(link.path)") {{link.title}}
      div.menuList__link_notExist(v-if="!link.exist && !link.pdf") {{link.title}}
      div.menuList__link__decorator(v-if="link.path === $route.path")
</template>

<script>
export default {
  name: "MenuList",
  props: ["list", "title"],
  methods: {
    openPDF(path) {
      var pdf = require("@/assets/PDF/" + path);
      window.open(pdf);
    },
    checkCateg(link) {
      let slug = link.split('/')[1];
      if (this.categs.hasOwnProperty(slug)) {
        return true;
      }
      else {
        return false;
      }
    }
  },
  computed: {
    categs() {
      return this.$store.state.categs.categs;
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/_variables.scss";

.menuList__link:first-child {
  padding-top: 4%;
}

.menuList__link__nuxt:hover {
  color: $gold;
}

.menuList {
  font-family: Arial;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 143%;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  color: $darkGrey;
  list-style: none;
  padding: 0;

  &__link {
    font-weight: normal;
    font-size: 40px;
    line-height: 150%;
    letter-spacing: -0.02em;
    display: flex;
    align-items: center;
    position: relative;

    &__decorator {
      width: 2px;
      height: 40px;
      background: $gold;
      display: inline-flex;
      margin-left: 10%;
      animation: rotating 3s linear infinite;
    }

    &__pdf::before {
      display: none;
      position: absolute;
      left: -40px;
      padding-top: 15px;
      content: "PDF";
      color: $darkGrey;
      font-family: Arial;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 214%;
      letter-spacing: -0.02em;
    }

    &__pdf:hover::before {
      display: block;
    }

    @keyframes rotating {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    &_notExist {
      color: $darkGrey;
      text-transform: none;
      text-decoration: none;
    }

    &__nuxt {
      text-decoration: none;
      color: $white;
      text-transform: none;
      cursor: pointer;

      &_active {
        color: $gold;
      }
    }
  }
}

@media (max-width: 1300px) {
  .menuList {
    &__link {
      &__pdf::before {
      }
    }
  }
}

@media (max-width: 1023px) {
  .menuList {
    &__link {
      font-size: 24px;
      line-height: 167%;
      letter-spacing: -0.02em;
    }
  }
}
</style>
