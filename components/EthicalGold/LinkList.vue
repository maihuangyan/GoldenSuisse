<template lang="pug">
  ul.linkList
    li.linkList__item(v-for="(link, index) in list" :key="index" @click="$router.push({path: link.path})" data-anim="fadeIn" data-anim-delay=".3" :style="{opacity: $store.state.isMobile ? 1 : 0}")
      .linkList__item_color(v-if="link.exist" data-anim="fadeIn" data-anim-delay=".3" :style="{opacity: $store.state.isMobile ? 1 : 0}") {{link.title}}
      .linkList__item_notExist(v-else data-anim="fadeIn" data-anim-delay=".3" :style="{opacity: $store.state.isMobile ? 1 : 0}") {{link.title}}
</template>

<script>
export default {
  name: "LinkList",
  props: ["list"]
};
</script>

<style lang="scss" scoped>
@import "@/assets/_variables.scss";

.linkList__item:hover > .linkList__item_color {
  color: $gold;
}

.linkList__item:hover > .linkList__item_color::after {
  opacity: 1;
}

.linkList {
  padding: 0;

  &__item {
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 80px;
    line-height: 100%;
    letter-spacing: -0.02em;
    border-bottom: 2px solid $white;
    padding: 2.6% 0;
    list-style: none;
    position: relative;
    cursor: pointer;

    &_notExist {
      color: $darkGrey;
    }

    &_color {
      color: $white;
      text-decoration: none;
      transition: all 0.5s;

      &::after {
        content: "";
        color: $white;
        opacity: 0;
        display: inline-flex;
        position: absolute;
        right: 0%;
        width: 80px;
        height: 80px;
        background: linear-gradient($gold, $gold), linear-gradient($gold, $gold);
        background-position: center;
        background-size: 100% 2px, 2px 100%; /*thickness = 2px, length = 50% (25px)*/
        background-repeat: no-repeat;
        transition: all 0.5s;
      }
    }

    &_active {
      color: $gold;
    }
  }
}

@media (max-width: 1500px) {
  .linkList {
    &__item {
      padding: 3% 0;
      font-size: 60px;
    }
  }
}

@media (max-width: 1023px) {
  .linkList {
    &__item {
      font-size: 24px;
      line-height: 125%;
      letter-spacing: -0.04em;
      padding: 4.3% 0;

      &_color {
        &::after {
          display: none;
        }
      }
    }
  }
}
</style>
