<template lang="pug">
  .newsList
    NewLarge(:news="newsList[0]" :key="0")
    New(v-for="(news, index) in newsList" :key="index" :news="news" v-if="index !== 0")
</template>

<script>
export default {
  name: "NewsList",
  props: ["newsList"],
  components: {
    New: () => import("@/components/Insights/New"),
    NewLarge: () => import("@/components/Insights/NewLarge")
  }
};
</script>

<style lang="scss" scoped>
.newsList {
}
</style>