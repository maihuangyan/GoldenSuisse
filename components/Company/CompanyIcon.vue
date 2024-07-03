<template lang="pug">
  svg.companyIconSwiss
    line(:x1="circleCenter - width/2" :y1="circleCenter + width/2" :x2="circleCenter - width/2" :y2="circleCenter + width/2" stroke="white" :stroke-width="width")
    line(:x1="circleCenter" :y1="circleCenter - radius" :x2="circleCenter" :y2="circleCenter - radius" stroke="white" :stroke-width="width")
    line(:x1="circleCenter - cosinus*radius" :y1="circleCenter - cosinus*radius" :x2="circleCenter - cosinus*radius" :y2="circleCenter - cosinus*radius" stroke="white" :stroke-width="width")
    line(:x1="circleCenter-radius" :y1="circleCenter" :x2="circleCenter-radius" :y2="circleCenter" stroke="white" :stroke-width="width")
    line(:x1="circleCenter - cosinus*radius" :y1="circleCenter + cosinus*radius" :x2="circleCenter - cosinus*radius" :y2="circleCenter + cosinus*radius" stroke="white" :stroke-width="width")
    line(:x1="circleCenter" :y1="circleCenter + radius" :x2="circleCenter" :y2="circleCenter + radius" stroke="white" :stroke-width="width")
    line(:x1="circleCenter + cosinus*radius" :y1="circleCenter + cosinus*radius" :x2="circleCenter + cosinus*radius" :y2="circleCenter + cosinus*radius" stroke="white" :stroke-width="width")
    line(:x1="circleCenter + radius" :y1="circleCenter" :x2="circleCenter + radius" :y2="circleCenter" stroke="white" :stroke-width="width")
</template>

<script>
import gsap from "gsap";
export default {
  name: "CompanyIconSwiss",
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

.companyIconSwiss {
  width: 130px;
  height: 130px;
  animation: slidein 0.3s;
}
</style>