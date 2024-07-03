<template>
  <ul class="menuList">
    <p class="menuList__title">{{ title }}</p>
    <li class="menuList__link" v-for="(link, index) in list" :key="index">
      <nuxt-link class="menuList__link__nuxt"
        :to="link.path" 
        v-if="link.exist && !link.pdf && checkCateg(link.path)" 
        :key="link.path" 
        active-class="menuList__link__nuxt_active" 
        exact
      >{{ link.title }}</nuxt-link>
      <nuxt-link class="menuList__link__nuxt"
        :to="link.path" 
        v-if="link.exist && !link.pdf && !checkCateg(link.path)" 
        :key="link.path" 
        active-class="menuList__link__nuxt_active"
      >{{ link.title }}</nuxt-link>
      <div class="menuList__link__nuxt menuList__link__pdf"
        v-if="link.pdf" @click="openPDF(link.path)">{{link.title}}</div>
      <div class="menuList__link_notExist"
        v-if="!link.exist && !link.pdf">{{link.title}}</div>
      <div class="menuList__link__decorator" v-if="link.path === $route.path"></div>
    </li>
  </ul>
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
  list-style: none;
  padding: 0;

  &__title {
    font-family: Arial;
    font-weight: bold;
    font-size: 14px;
    letter-spacing: -0.28px;
    text-transform: uppercase;
    color: $darkGrey;
    padding-bottom: 15px;
  }

  &__link {
    font-weight: normal;
    font-size: 40px;
    line-height: 60px;
    letter-spacing: -0.8px;
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

@media (max-width: 1599px) {
  .menuList {
    &__title {
      font-size: 14px;
      letter-spacing: -0.28px;
      padding-bottom: 20px;
    }

    &__link {
      font-size: 32px;
      line-height: 48px;
      letter-spacing: -0.64px;
    }
  }
}

@media (max-width: 1279px) {
  .menuList {
    &__title {
      font-size: 14px;
      letter-spacing: -0.28px;
      padding-bottom: 20px;
    }

    &__link {
      font-size: 32px;
      line-height: 48px;
      letter-spacing: -0.64px;
    }
  }
}

@media (max-width: 1023px) {
  .menuList {
    &__title {
      font-size: 14px;
      letter-spacing: -0.28px;
      padding-bottom: 10px;
    }

    &__link {
      font-size: 28px;
      line-height: 44px;
      letter-spacing: -0.56px;
    }
  }
}

@media (max-width: 767px) {
  .menuList {
    &__title {
      font-size: 12px;
      letter-spacing: -0.24px;
      padding-bottom: 10px;
    }

    &__link {
      font-size: 20px;
      line-height: 32px;
      letter-spacing: -0.4px;
    }
  }
}

</style>
