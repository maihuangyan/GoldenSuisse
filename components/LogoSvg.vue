<template lang="pug">
  svg.logoSvg
    line(:x1="circleCenter - width/2" :y1="circleCenter + width/2" :x2="100" :y2="30" :stroke="color" :stroke-width="width")
    line(:x1="circleCenter" :y1="0" :x2="circleCenter" :y2="circleCenter - radius" :stroke="color" :stroke-width="width")
    line(:x1="circleCenter - cosinus*radius" :y1="circleCenter - cosinus*radius" :x2="30" :y2="30" :stroke="color" :stroke-width="width")
    line(:x1="circleCenter-radius" :y1="circleCenter" :x2="0" :y2="circleCenter" :stroke="color" :stroke-width="width")
    line(:x1="circleCenter - cosinus*radius" :y1="circleCenter + cosinus*radius" :x2="30" :y2="100" :stroke="color" :stroke-width="width")
    line(:x1="circleCenter" :y1="circleCenter + radius" :x2="circleCenter" :y2="circleCenter + verticalHeight + 5" :stroke="color" :stroke-width="width")
    line(:x1="circleCenter + cosinus*radius" :y1="circleCenter + cosinus*radius" :x2="100" :y2="100" :stroke="color" :stroke-width="width")
    line(:x1="circleCenter + radius" :y1="circleCenter" x2="130" :y2="circleCenter" :stroke="color" :stroke-width="width")
</template>

<script>
export default {
  name: "LogoSvg",
  props: ["color"],
  computed: {
    cosinus() {
      return Math.cos(Math.PI / 4);
    }
  },
  data() {
    return {
      width: 5.5,
      verticalHeight: 60,
      radius: 15.225,
      circleCenter: 65,
      duration: "0.5s",
      isCreated: false
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/_variables.scss";

.logoSvg {
  width: 130px;
  height: 130px;
  animation: slidein 0.3s;
}
</style>