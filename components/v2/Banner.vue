<template>
  <div>
    <section class="main-banner" id="banner">
      <div class="container h-100">
        <div class="banner-container">
          <div class="banner-left">
            <img src="@/assets/images/banner/banner-left.png" alt=""/>
          </div>
          <div class="banner-right">
            <img src="@/assets/images/banner/banner-logo.png" alt="" />
          </div>
          <div class="individuals-btns">
            <Button text="Become a client" @click="onClickBecomeRegend()"/>
            <Button text="Download app" :invert="true" @click="onClickDownloadApp()" style="margin-left: 30px" />
          </div>
        </div>
        <div class="banner-mobile">
          <img class="banner-logo" src="@/assets/images/banner/banner-logo.png" alt="" />
          <img class="banner-text" src="@/assets/images/banner/banner-mobile.png" alt="" />
        </div>
        <div class="mobile-buttons">
          <Button text="Become a client" @click="onClickBecomeRegend()"/>
          <Button text="Download app" :invert="true" @click="onClickDownloadApp()"/>
        </div>
      </div>
    </section>
</div>
</template>

<script>
import Button from "./Button.vue";
export default {
  components: { Button },
  data() {
    return {
      bannerImageLoaded: false
    }
  },
  mounted() {
  },
  methods: {
    onLoadBannerImage() {
      console.log('Banner Image Loaded');
      this.bannerImageLoaded = true;
    },
    onClickBecomeRegend() {
      this.$router.push('account/register');
    },
    onClickDownloadApp() {
      this.$router.push('account/download');
    },
  }
}
</script>

<style scoped>
@import "@/assets/css/bootstrap.css";

.main-banner {
  background-color: #101010;
  height: calc(100vh - 107px);
  width: 100%;
}

.banner-container {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 30% 30% 40%;
  grid-template-columns: 70% 30%; 
}
.banner-left {
  grid-row: 2;
  grid-column: 1;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
}

.banner-right {
  grid-row: 2;
  grid-column: 2;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
}

.individuals-btns {
  grid-row: 3;
  grid-column: 1 / span 2;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}


.banner-left img {
  object-fit: contain;
  object-position: bottom left;
  width: 880px;
  height: 150px;
  max-width: 100%;
  max-height: 100%;
}
.banner-right img {
  object-fit: contain;
  object-position: bottom right;
  width: 320px;
  height: 200px;
  max-width: 100%;
  max-height: 100%;
}

.banner-mobile {
  display: none;
}

.mobile-buttons {
  display: none;
}

@media (max-width: 991.98px) {
  .main-banner {
    height: 50vh;
  }

  .banner-text-img {
    max-width: 75%;
  }

  .main-banner-subtext {
    margin-left: 0;
  }
}

@media screen and (orientation: landscape) and (max-width: 1199.98px) {
  .main-banner {
    height: calc(100vh - 83px);
  }
  .banner-container {
    grid-template-rows: 20% 30% 50%;
  }
}

@media (max-width: 575.98px) {
  .main-banner {
    height: 50vh;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .banner-container {
    display: none;
  }

  .banner-mobile {
    display: flex;
    width: 100%;
    height: 80%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .banner-logo {
    width: 50%;
    margin-left: 15%;
  }

  .banner-text {
    width: 75%;
    margin-top: 10px;
  }

  .mobile-buttons {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .mobile-buttons > button {
    width: 48%;
  }
}
</style>
