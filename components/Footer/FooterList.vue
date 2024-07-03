<template lang="pug">
.footerList
  .footerList__title {{title}}
  ul.footerList__list
    li.footerList__list_item(v-for="(item, index) in content" :key="index")
      nuxt-link.footerList__list_item_nuxt(v-if="item.exist && !item.pdf" :to="item.path" active-class="footerList__list_item_nuxt_active" exact) {{item.title}}
      div.footerList__list_item_nuxt.footerList__list_item_nuxt__pdf(v-if="item.pdf" @click="openPDF(item.path)") {{item.title}}
      div.footerList__list_item_notExist(v-if="!item.exist && !item.pdf") {{item.title}}
</template>

<script>
export default {
  name: "FooterList",
  props: ["title", "content"],
  methods: {
    openPDF(path) {
      var pdf = require("@/assets/PDF/" + path);
      window.open(pdf);
    },
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

.footerList__list_item_nuxt:hover {
  color: $gold;
}

.footerList {
  font-family: Arial;
  font-style: normal;
  font-size: 14px;
  letter-spacing: -0.02em;
  width: 100%;

  &__title {
    font-weight: bold;
    line-height: 143%;
    text-transform: uppercase;
    color: $darkGrey;
  }

  &__list {
    padding: 17% 15% 62% 0;
    list-style: none;

    &_item {
      font-weight: normal;
      line-height: 214%;
      color: $white;

      &_notExist {
        color: $darkGrey;
      }

      &_nuxt {
        color: $white;
        text-decoration: none;
        cursor: pointer;

        &__pdf::before {
          display: none;
          position: absolute;
          left: -40px;
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

        &_active {
          color: $gold;
        }
      }
    }
  }
}

@media (max-width: 1023px) {
  .footerList {
    &__title {
      width: 100%;
      /*padding: 0 0 15% 0;*/
      margin-bottom: 25px;
    }

    &__list {
      padding: 0 5% 0 0;
    }
  }
}
</style>
