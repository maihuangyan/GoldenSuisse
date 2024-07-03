<template>
  <div>
    <section class="main-banner" id="banner">
      <div class="app-name">
        <p class="text-name">Golden Suisse</p>
        <p class="text-logo">®</p>
      </div>
      <p class="banner-title">&nbsp;</p>
    </section>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      bannerImageLoaded: false,
    };
  },
  mounted() {
    console.log('header height', this.calcHeaderHeight())
  },
  methods: {
    onLoadBannerImage() {
      console.log("Banner Image Loaded");
      this.bannerImageLoaded = true;
    },
    onClickBecomeRegend() {
      this.$router.push("account/register");
    },
    onClickDownloadApp() {
      this.$router.push("account/download");
    },
    calcHeaderHeight() {
      const header = document.querySelector('header');
      const styles = window.getComputedStyle(header);
      const headerHeight = styles.height;
      return headerHeight;
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/bootstrap.css";
@import "@/assets/css/v3.css";

.main-banner {
  height: calc(100vh - 372px);
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 80px;

  .app-name {
    display: flex;
    flex-direction: row;
    margin-left: 53px;

    .text-name {
      font-weight: 400;
      font-size: 180px;
      line-height: 180px;
      letter-spacing: -0.04em;
      color: #ffffff;
    }
    .text-logo {
      font-weight: 400;
      font-size: 80px;
      line-height: 80px;
      letter-spacing: -0.04em;
      color: #ffffff;

      margin-left: 5px;

      width: 60px;
      height: 80px;
    }
  }
  .banner-title {
    font-weight: 500;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: -0.02em;
    color: #a0a0a0;
    margin-left: 60px;
    margin-top: 40px;
  }
}

@media (max-width: 1599px) {
  .main-banner {
    height: calc(100vh - 242px);
    padding-bottom: 40px;
    .app-name {
      margin-left: 53px;

      .text-name {
        font-size: 140px;
        line-height: 140px;
      }
      .text-logo {
        font-size: 60px;
        line-height: 60px;

        margin-left: 4px;

        width: 45px;
        height: 60px;
      }
    }
    .banner-title {
      font-size: 28px;
      line-height: 28px;
      margin-left: 60px;
      margin-top: 10px;
    }
  }
}

@media (max-width: 1279px) {
  .main-banner {
    height: calc(100vh - 250px);
    padding-bottom: 40px;
    .app-name {
      margin-left: 40px;

      .text-name {
        font-size: 120px;
        line-height: 120px;
      }
      .text-logo {
        font-size: 60px;
        line-height: 60px;

        margin-left: 0px;

        width: 45px;
        height: 60px;
      }
    }
    .banner-title {
      font-size: 24px;
      line-height: 28px;
      margin-left: 40px;
      margin-top: 10px;
    }
  }
}

@media (max-width: 1023px) {
  .main-banner {
    height: auto;
    padding-bottom: 45px;
    margin-top: 305px;

    .app-name {
      margin-left: 45px;

      .text-name {
        font-size: 100px;
        line-height: 80px;
      }
      .text-logo {
        font-size: 60px;
        line-height: 60px;

        margin-left: 5px;

        width: 45px;
        height: 60px;
      }
    }
    .banner-title {
      font-size: 24px;
      line-height: 24px;
      margin-left: 45px;
      margin-top: 20px;
    }
  }
}

@media (max-width: 767px) {
  .main-banner {
    padding-bottom: 50px;
    margin-top: 243px;
    .app-name {
      margin-left: 20px;

      .text-name {
        font-size: 80px;
        line-height: 70px;
        max-width: 243px;
      }
      .text-logo {
        font-size: 40px;
        line-height: 40px;

        margin-left: -20px;
        margin-top: 70px;

        width: 45px;
        height: 40px;
      }
    }
    .banner-title {
      margin-left: 20px;
      margin-top: 18px;
    }
  }
}
</style>
