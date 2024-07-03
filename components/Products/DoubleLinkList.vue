<template lang="pug">
  .doubleLinkList
    section.doubleLinkList__item(v-for="(link, index) in list" :key="index" data-anim="fadeIn" :data-anim-delay="index%2 === 0 ? .3 : .4" :style="{opacity: $store.state.isMobile ? 1 : 0}")
      nuxt-link.doubleLinkList__item_color(:to="link.path" v-if="link.exist" active-class="doubleLinkList__item_active") {{link.title}}
      div.doubleLinkList__item_notExist(v-else) {{link.title}}
      img.doubleLinkList__item_img1(v-if="link.img1" :src="require('@/static/' + link.img1)")
      img.doubleLinkList__item_img2(v-if="link.img2" :src="require('@/static/' + link.img2)")
</template>

<script>
export default {
  name: "DoubleLinkList",
  props: ["list"]
};
</script>

<style lang="scss" scoped>
@import "@/assets/_variables.scss";

.doubleLinkList__item_color:hover {
  color: $gold;
}

.doubleLinkList {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0;

  &__item {
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 167%;
    letter-spacing: -0.02em;
    border-bottom: 2px solid $white;
    padding: 2.6% 0;
    list-style: none;
    position: relative;

    &_img1 {
      position: absolute;
      display: inline-flex;
      right: 0;
      top: 43%;
      width: 20px;
      height: 20px;
    }

    &_img2 {
      position: absolute;
      display: inline-flex;
      right: 30px;
      top: 43%;
      width: 20px;
      height: 20px;
    }

    &_notExist {
      color: $darkGrey;
      cursor: default;
    }

    &_color {
      color: $white;
      text-decoration: none;
      cursor: pointer;
    }

    &_active {
      color: $gold;
    }
  }
}

@media (max-width: 1200px) {
  .doubleLinkList {
    &__item {
      font-size: 40px;
    }
  }
}

@media (max-width: 1100px) {
  .doubleLinkList {
    &__item {
      font-size: 35px;
    }
  }
}

@media (max-width: 1023px) {
  .doubleLinkList {
    grid-template-columns: 1fr;

    &__item {
      font-size: 24px;
      line-height: 125%;
      letter-spacing: -0.04em;
      padding: 4% 0;

      &_img1 {
        width: 10px;
        height: 10px;
      }

      &_img2 {
        width: 10px;
        height: 10px;
        right: 15px;
      }
    }
  }
}
</style>
