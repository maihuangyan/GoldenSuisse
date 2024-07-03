<template lang="pug">
  .links
    nuxt-link.links__link(v-for="(link, index) in linkList" v-if="checkCateg(link.path) && !link.pdf" :to="link.path" active-class="links__link_active" :key="link.path" exact style="opacity: 0;") {{link.title}}
    nuxt-link.links__link(v-for="(link, index) in linkList" v-if="link.exist && !checkCateg(link.path) && !link.pdf" :to="link.path" active-class="links__link_active" :key="link.path" style="opacity: 0;") {{link.title}}
    div.links__link(v-for="(link, index) in linkList" @click="openPDF(link.path)" v-if="link.pdf" :key="index" style="opacity: 0;") {{link.title}}
    div.links__linkNotExist(v-for="(link, index) in linkList" v-if="!link.exist" :key="index" style="opacity: 0;") {{link.title}}
</template>

<script>
  import { mapGetters } from 'vuex'
export default {
  name: "Links",
  props: ["linkList"],
  computed: {
    ...mapGetters([
      'categs/getOnlyMenusPages',
    ]),
    categs() {
      return this['categs/getOnlyMenusPages']();
    }
  },
  methods: {
    checkCateg(link) {
      let slug = link.split('/')[1];
      if (this.categs.hasOwnProperty(slug)) {
        return true;
      }
      else {
        return false;
      }
    },
    openPDF(link) {
      var pdf = require("@/assets/PDF/" + link);
      window.open(pdf);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/_variables.scss";

.links__link:hover {
  color: $gold;
}

.links {
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  align-items: center;

  &__linkNotExist {
    font-family: Arial;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    text-decoration: none;
    color: $darkGrey;
    width: fit-content;
    padding-right: 40px;
    pointer-events: auto;
  }

  &__link {
    font-family: Arial;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    text-decoration: none;
    color: $white;
    width: fit-content;
    padding-right: 40px;
    pointer-events: auto;
    cursor: pointer;
    &_active {
      color: $gold;
    }
  }
}

@media (max-width: 1300px) {
  .links {
    &__link {
      padding-right: 3%;
    }
  }
}
</style>
