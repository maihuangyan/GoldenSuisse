<template lang="pug">
.customVideo(
  :style="{ 'background-image': 'url(' + require('../static/video_pic/' + (isMobile ? smallImgUrl : largeImgUrl)) + ')', '--small-size': smallSize ? smallSize : '100%' }",
  @click="$router.push({ path: path })"
  data-anim="fadeIn"
)
  .customVideo__center
    .customVideo__title(v-html="title")
    .customVideo__subtitle(v-html="subtitleCenter")

  .customVideo__left-top(v-html="subtitle")

  .customVideo__left-bottom
    img(:src="require('@/static/' + titleImg)")
    .customVideo__left-bottom-title Switzerland

  .customVideo__right-top
    .customVideo__right-top-title Golden Suisse
    img(:src="require('@/static/image/Play.svg')")
</template>

<script>
export default {
  name: "CustomVideo",
  props: [
    "largeImgUrl",
    "smallImgUrl",
    "isMobile",
    "title",
    "smallSize",
    "subtitle",
    "path",
    "subtitleCenter",
  ],
  components: {
    PlayButton: () => import("@/components/PlayButton"),
  },
  data() {
    return {
      titleImg: "image/SwissFlag.jpg",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/_variables.scss";
.customVideo {
  display: flex;
  background: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 42.5vw;
  cursor: pointer;

  @include adaptive(mob) {
    background-size: cover !important;
  }

  &__center {
    display: flex;
    position: absolute;
    flex-direction: column;
    top: 50%;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
    z-index: 2;
    align-items: center;
  }

  &__title {
    font-family: Arial;
    line-height: 80px;
    font-size: 80px;
    display: block;
    text-align: center;
    width: 100%;
    letter-spacing: -0.04em;
    color: $white;
  }

  &__subtitle {
    font-family: Arial;
    font-weight: bold;
    font-size: 14px;
    line-height: 143%;
    text-align: center;
    letter-spacing: -0.02em;
    color: $lightGrey;
    margin-top: 40px;
  }

  &__left-top {
    position: absolute;
    top: 40px;
    left: 3.75%;
    font-family: Arial;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 229%;
    letter-spacing: -0.02em;
    color: $lightGrey;
  }

  &__left-bottom {
    width: 100%;
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 40px;
    left: 3.75%;
    cursor: pointer;

    &-title {
      font-family: Arial;
      font-weight: bold;
      font-size: 14px;
      line-height: 16px;
      letter-spacing: -0.02em;
      padding-left: 1.25%;
      color: $white;
    }
  }

  &__right-top {
    width: auto;
    display: flex;
    align-items: flex-start;
    position: absolute;
    top: 40px;
    right: 3.75%;
    cursor: pointer;

    &-title {
      font-family: Arial;
      font-weight: bold;
      font-size: 14px;
      line-height: 16px;
      letter-spacing: -0.02em;
      margin-right: 30px;
      color: $white;
    }
  }
}

@media (max-width: 1023px) {
  .customVideo {
    height: 85.33333vw;
    background-position: center;
    background-size: var(--small-size) 100%;

    &__title {
      font-size: 24px;
      line-height: 35px;
      margin: 10px 0;
    }

    &__subtitle {
      margin-top: 0;
    }

    &__left-bottom {
      bottom: 20px;
      left: 5.4%;
    }

    &__left-top {
      top: 20px;
      width: 50%;
      left: 5.4%;
      line-height: normal;
    }

    &__right-top {
      top: 20px;
      right: 5.4%;
      img {
        width: 30px;
      }
      &-title {
        display: none;
      }
    }
  }
}
</style>
