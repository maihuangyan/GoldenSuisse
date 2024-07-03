<template lang="pug">
  svg.playButton(:width="width" :height="height" :stroke-width="stroke" :stroke="color"
  data-anim="videoPlayButton" :data-anim-svg-width="width"
  :data-anim-svg-height="height" :data-anim-svg-stroke="stroke")
    line(v-show="!this.$store.state.isMobile" :x1="stroke" :y1="stroke" :x2="stroke" :y2="stroke")
    line(v-show="!this.$store.state.isMobile" :x1="stroke" :y1="height-stroke" :x2="stroke" :y2="height-stroke")
    line(v-show="!this.$store.state.isMobile" :x1="stroke" :y1="stroke" :x2="stroke" :y2="stroke")
    line(v-show="this.$store.state.isMobile" :x1="stroke" :y1="stroke" :x2="width-stroke" :y2="height/2")
    line(v-show="this.$store.state.isMobile" :x1="width-stroke" :y1="height/2" :x2="stroke" :y2="height-stroke")
    line(v-show="this.$store.state.isMobile" :x1="stroke" :y1="height-stroke" :x2="stroke" :y2="stroke")
</template>

<script>
  import anims from "@/plugins/animFunctions";
export default {
  name: "PlayButton",
  props: ["width", "height", "stroke", "color"],
  methods: {
    videoPlayButtonInit() {
      anims.videoPlayButton(this.$el);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/_variables.scss";

.playButton {
  fill: transparent;
}
</style>
