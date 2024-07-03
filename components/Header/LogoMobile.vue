<template lang="pug">
  svg.logoMob(@click="goHome")
    line.logoMob__line(:x1="circleCenter + cosinus*radius" :y1="circleCenter - cosinus*radius" x2="125" y2="5" stroke="white" :stroke-width="width")
    line.logoMob__line(:x1="circleCenter" y1="0" :x2="circleCenter" :y2="circleCenter - radius" stroke="white" :stroke-width="width")
    line.logoMob__line(:x1="circleCenter - cosinus*radius" :y1="circleCenter - cosinus*radius" x2="5" y2="5" stroke="white" :stroke-width="width")
    line.logoMob__line(:x1="circleCenter-radius" :y1="circleCenter" x2="0" :y2="circleCenter" stroke="white" :stroke-width="width")
    line.logoMob__line(:x1="circleCenter - cosinus*radius" :y1="circleCenter + cosinus*radius" x2="5" y2="125" stroke="white" :stroke-width="width")
    line.logoMob__line(:x1="circleCenter" :y1="circleCenter + radius" :x2="circleCenter" y2="130" stroke="white" :stroke-width="width")
    line.logoMob__line(:x1="circleCenter + cosinus*radius" :y1="circleCenter + cosinus*radius" x2="125" y2="125" stroke="white" :stroke-width="width")
    line.logoMob__line(x1="130" :y1="circleCenter" :x2="circleCenter - width/2" :y2="circleCenter" stroke="white" :stroke-width="width")
</template>

<script>
export default {
  name: "LogoMob",
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
      duration: "0.6s",
      isCreated: false
    };
  },
  methods: {
    goHome() {
      this.$router.push({ path: "/" });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/_variables.scss";

.logoMob {
  width: 130px;
  height: 130px;
  transform-origin: left top;
  transform: scale(0.46);
  cursor: pointer;
  pointer-events: auto;
}
</style>