<template>
  <div class="default">
    <transition name="fade">
      <div v-show="!this.$store.state.windowLoaded" class="mainLoader">
        <p class="mainLoader__text">Loading...</p>
      </div>
    </transition>
    <header>
      <transition name="fade">
        <div class="backLink">
          <nuxt-link class="backLink__link" to="/account">
            Back
            <span v-show="!isMobile">to login</span>
          </nuxt-link>
        </div>
      </transition>
    </header>
    <div class="page">
      <transition name="fade">
        <main>
          <!-- <NoSsr placeholder="Loading..."> -->
          <nuxt />
          <!-- </NoSsr> -->
        </main>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "NoFooterNoHeader",
  data() {
    return {
      isMobile: false
    };
  },
  mounted() {
    if (window.innerWidth > 1023) {
      // Smooth Scroll
      let this$el = document.querySelector(".page");
      Scrollbar.init(this$el, {
        damping: 0.07
      });
      // Smooth Scroll END
      setTimeout(() => {
        this.$root.initAnim();
      }, 1000);
      this.isMobile = false;
    } else {
      this.isMobile = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.backLink {
  position: fixed;
  top: 0;
  display: flex;
  font-family: Arial;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 229%;
  text-align: center;
  letter-spacing: -0.02em;
  padding: 30px 60px 30px 60px;
  z-index: 3;

  &__link {
    color: #ffffff;
    text-decoration: none;
  }
}

@media (max-width: 1023px) {
  .backLink {
    padding: 30px 20px 0 20px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fadeLink-enter-active,
.fadeLink-leave-active {
  transition: opacity 0.3s;
}
.fadeLink-enter,
.fadeLink-leave-to {
  opacity: 0;
}
</style>
