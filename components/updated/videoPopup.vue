<template>
  <div class="video-popup">
    <div class="video-popup__close-wrapper">
      <p class="video-popup__close" @click="closeClick">Close</p>
    </div>
    <div class="video-popup__inner" @click="buttonClick">
      <p class="video-popup__desc">{{videoPopupData.desc}}</p>
      <div class="video-popup__timeline-wrapper">
        <div class="video-popup__timeline"></div>
      </div>
      <div class="play-button-wrapper">
        <PlayButton ref="playButton" :width="100" :height="120" color="white" stroke="2" class="play-button"/>
      </div>
    </div>
    <video width="100%" preload="auto" playsinline :poster="videoPopupData.poster" class="video-popup__video desk">
      <source :src="videoPopupData.src" type="video/mp4">
    </video>
    <video width="100%" preload="auto" playsinline :poster="videoPopupData.posterXs" class="video-popup__video xs">
      <source :src="videoPopupData.srcXs" type="video/mp4">
    </video>
  </div>
</template>

<script>
  import PlayButton from "@/components/PlayButton";
  function videoProgress(video, progressLine) { // Двигаем прогресс бар
    let progress = (Math.floor(video.currentTime) / (Math.floor(video.duration) / 100));
    progressLine.style.width = progress + '%';
  }
  function videoAct(video, progressLine, button, $this) { //Запускаем или ставим на паузу
    const interval = setInterval(() => {
      videoProgress(video, progressLine);
    }, 1000);
    $this.$store.commit('setVideoPopupInterval', interval);
    if (video.paused) {
      video.play();
      button.classList.add('disable');
    } else {
      video.pause();
      button.classList.remove('disable');
      clearInterval($this.$store.state.videoPopupInterval);
    }
  }
  export default {
    components: {
      PlayButton
    },
    computed: {
      videoPopupData() {
        return this.$store.state.videoPopup;
      },
      videoPopupShow() {
        return this.$store.state.videoPopupShow;
      }
    },
    mounted() {
      const videoDesk = this.$el.querySelector('.video-popup__video.desk');
      const videoXs = this.$el.querySelector('.video-popup__video.xs');
      videoDesk.onended = () => { this.closeClick(); };
      videoXs.onended = () => { this.closeClick(); };
      videoXs.onloadeddata = () => {
        console.log('videoXs loaded');
      };
    },
    methods: {
      init() {
        this.$refs.playButton.videoPlayButtonInit();
        this.buttonClick();
      },
      buttonClick() {
        let video;
        if (!this.$store.state.isMobile) {
          video = this.$el.querySelector('.video-popup__video.desk');
        }
        else {
          video = this.$el.querySelector('.video-popup__video.xs');
        }
        const timeline = this.$el.querySelector('.video-popup__timeline');
        const button = this.$el.querySelector('.play-button-wrapper');
        videoAct(video, timeline, button, this);
      },
      closeClick() {
        this.$store.commit('setVideoPopupShow', false);
        this.videoReset();
        console.log('closeClick init');
      },
      videoReset() {
        let video;
        if (!this.$store.state.isMobile) {
          video = this.$el.querySelector('.video-popup__video.desk');
        }
        else {
          video = this.$el.querySelector('.video-popup__video.xs');
        }
        video.currentTime = 0;
        video.pause();
      }
    },
    watch: {
      videoPopupShow: function (value, oldValue) {
        if (!oldValue && value) {
          this.init();
        }
      },
    }
  }
</script>

<style lang="scss" scoped>
  .video-popup {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 999;
    background-color: $black;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    &__inner {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
    }
    &__desc {
      position: absolute;
      left: 60px;
      top: 30px;
      @extend %default-text;
      font-size: 14px;
      color: $lightGrey;
      font-weight: bold;
      @include adaptive(mob) {
        left: 20px;
        max-width: 50%;
      }
    }
    &__close-wrapper {
      display: flex;
      justify-content: center;
      width: 100%;
      position: absolute;
      top: 0;
      @include adaptive(mob) {
        display: block;
      }
    }
    &__close {
      z-index: 9999;
      position: absolute;
      top: 30px;
      @extend %default-text;
      font-size: 14px;
      color: #ffffff;
      font-weight: bold;
      cursor: pointer;
      @include adaptive(mob) {
        right: 20px;
      }
    }
    &__timeline-wrapper {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
    }
    &__timeline {
      background-color: $lightGrey;
      width: 0%;
      height: 100%;
      transition: width 1s linear;
    }
    &__video {
      width: 100%;
      &.desk {
        @include adaptive(mob) {
          display: none;
        }
      }
      &.xs {
        display: none;
        @include adaptive(mob) {
          display: block;
        }
      }
    }
  }
  .play-button-wrapper {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 300px;
    border-radius: 100%;
    cursor: pointer;
    z-index: 1;
    border: 2px transparent solid;
    transition: all .3s ease;
    opacity: 1;
    &:hover {
      border-color: #ffffff;
      transition: all .3s ease;
    }
    &.disable {
      transition: all .3s ease;
      opacity: 0;
      pointer-events: none;
    }
  }
  .play-button {
    transform: translateX(15px);
  }
</style>
