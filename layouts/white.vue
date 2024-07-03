<template>
  <div class="white">
    <!-- LOADER -->
    <transition name="fade">
      <div v-if="!this.$store.state.windowLoaded" class="mainLoader">
        <p class="mainLoader__text">Loading...</p>
      </div>
    </transition>
    <!-- LOADER END -->

    <header>
      <transition name="fade">
        <div class="backLink">
          <nuxt-link class="backLink__link" :to="prevPage.path">Back to {{ prevPage.title }}</nuxt-link>
        </div>
        <!-- <div class="Header">
          <Header :openedMenu="isMenuOpen" @open-menu="openMenu" @close-menu="closeMenu" />
        </div> -->
      </transition>
    </header>
    <!-- HEADER END -->


    <div class="page">
      <!-- PAGE -->
      <transition name="fade">
        <main>
          <div v-hammer:swipe="swipe" class="v-hammer-wrapper">
            <nuxt />
          </div>
        </main>
        <!-- <transition name="fadeMenu">
          <Menu v-show="isMenuOpen" />
        </transition> -->
      </transition>
      <!-- PAGE END -->

      <nuxt-link class="children__button children__button_left" :to="pathPrev"></nuxt-link>
      <nuxt-link class="children__button children__button_right" :to="pathNext"></nuxt-link>

      <footer class="footer">
        <p class="copyright">{{ getCopyright() }}</p>
      </footer>

      <!-- FOOTER -->
      <transition name="fade">
        <div style="position: fixed; bottom: 0; width: 100%">
          <FooterNav :array="whitePagesArray" v-show="this.$store.state.isMobile" />
        </div>
      </transition>
      <!-- FOOTER END -->
    </div>

    <aside>
      <!-- LEFT PREV LINK -->
      <transition name="fadeLink">
        <div v-show="displayLeft" class="prev" :style="{ top: mouse.y + 'px', left: mouse.x + 'px' }">
          Prev
        </div>
      </transition>
      <!-- LEFT PREV LINK END -->

      <!-- RIGHT PREV LINK -->
      <transition name="fadeLink">
        <div v-show="displayRight" class="next" :style="{ top: mouse.y + 'px', left: mouse.x + 'px' }">
          Next
        </div>
      </transition>
      <!-- RIGHT PREV LINK END -->
    </aside>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import copyright from '../utils/copyright.js'

export default {
  name: "White",
  components: {
    FooterNav: () => import("@/components/White/FooterNav"),
  },
  data() {
    return {
      path: "",
      title: "",
      mouse: {
        x: 0,
        y: 0,
      },
      displayRight: false,
      displayLeft: false,
    };
  },
  methods: {
    getCopyright() {
      return copyright()
    },
    mouseIsMoving(e) {
      if (e.pageX > window.innerWidth - 150) {
        this.mouse.x = window.innerWidth - 150;
      } else {
        this.mouse.x = e.pageX;
      }
      if (e.pageY > window.innerHeight - 120) {
        this.mouse.y = window.innerHeight - 120;
      } else {
        this.mouse.y = e.pageY;
      }

      if (e.pageX < window.innerWidth * 0.3) this.displayLeft = true;
      else {
        this.displayLeft = false;
      }
      if (e.pageX > window.innerWidth * 0.7) this.displayRight = true;
      else {
        this.displayRight = false;
      }
    },
    swipe: function (e) {
      if (this.$store.state.isMobile) {
        if (e.direction == 2) {
          this.$router.push({ path: this.pathNext });
        }
        else if (e.direction == 4) {
          this.$router.push({ path: this.pathPrev });
        }
      }
    },
  },
  computed: {
    ...mapGetters([
      'categs/getPage',
      'whitePages/getPagesArray'
    ]),
    prevPage() {
      let routesArray, finalPath, result;
      /*routesArray = this.$route.path.split("/");
      routesArray.pop();
      finalPath = routesArray.join('/');
      if (this.$route.path.slice(-1) == '/') {
        finalPath = finalPath.slice(0, -1);
      }*/

      if (this.$route.path.slice(-1) != '/') {
        routesArray = this.$route.path.split("/");
        routesArray.pop();
        finalPath = routesArray.join('/');
      }
      else {
        routesArray = this.$route.path.split("/");
        routesArray.pop();
        routesArray.pop();
        finalPath = routesArray.join('/');
      }

      console.log(finalPath);
      result = this['categs/getPage'](finalPath);
      if (result) {
        return result;
      }
      else {
        return {
          path: '/',
          title: 'Home'
        }
      }
    },
    prevPageSlug() {
      let pathArray = this.prevPage.path.split('/');
      return pathArray[pathArray.length - 1];
    },
    whitePagesArray() {
      return this['whitePages/getPagesArray'](this.prevPageSlug);
    },
    thisPageSlug() {
      if (this.$route.path.slice(-1) != '/') {
        return this.$route.path.split('/').pop();
      }
      else {
        let pathArray = this.$route.path.split('/');
        return pathArray[pathArray.length - 2];
      }
    },
    pathNext() {
      try {
        let path = "";
        let currentElemIndex;
        let $this = this;
        this.whitePagesArray.forEach(function (page, index) {
          if ($this.thisPageSlug == page.path) currentElemIndex = index;
        });

        if (currentElemIndex + 1 === this.whitePagesArray.length) {
          path = this.whitePagesArray[0].path;
        } else {
          path = this.whitePagesArray[currentElemIndex + 1].path;
        }
        return this.prevPage.path + '/' + path;
      }
      catch (e) {
        return '/'
      }
    },
    pathPrev() {
      let path = "";
      let currentElemIndex;
      try {
        let $this = this;
        this.whitePagesArray.forEach(function (page, index) {
          if ($this.thisPageSlug == page.path) currentElemIndex = index;
        });
        if (currentElemIndex === 0) {
          path = this.whitePagesArray[this.whitePagesArray.length - 1].path;
        } else {
          path = this.whitePagesArray[currentElemIndex - 1].path;
        }
        return this.prevPage.path + '/' + path;
      }
      catch (e) {
        return '/'
      }

    },
  },
  mounted() {
    console.log(this.prevPage);
    console.log(this.prevPageSlug);
    console.log(this.whitePagesArray);
    console.log(this.thisPageSlug);
    console.log(this.pathNext);
    console.log(this.pathPrev);
    if (window.innerWidth > 1023) {
      setTimeout(() => this.$root.initAnim(), 1000);
      // Smooth Scroll
      let this$el = document.querySelector(".page");
      Scrollbar.init(this$el, {
        damping: 0.07,
      });
      // Smooth Scroll END
    }
    window.addEventListener("mousemove", this.mouseIsMoving);
  },
  destroyed() {
    window.removeEventListener("mousemove", this.mouseIsMoving);
  },
};
</script>

<style lang="scss" scoped>
* {
  z-index: 1;
}

.fadeLink-enter-active,
.fadeLink-leave-active {
  transition: opacity 0.3s;
}

.fadeLink-enter,
.fadeLink-leave-to {
  opacity: 0;
}

.white {
  background-color: #ffffff;
  min-height: 100vh;
}

.backLink {
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  font-family: Arial;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  letter-spacing: -0.02em;
  padding: 30px;
  z-index: 33;

  &__link {
    color: #101010;
    text-decoration: none;
  }
}

.prev {
  position: absolute;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 175%;
  letter-spacing: -0.04em;
  color: #000;
  pointer-events: none;
  z-index: 5;
}

.next {
  position: absolute;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 175%;
  letter-spacing: -0.04em;
  color: #000;
  cursor: pointer;
  z-index: 5;
  pointer-events: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 1023px) {
  .backLink {
    padding: 20px;
  }

  .next,
  .prev {
    display: none;
  }
}

.children {
  &__button {
    position: fixed;
    bottom: 0px;
    width: 30%;
    height: 100%;
    z-index: 33;
    cursor: pointer;

    @include adaptive(mob) {
      display: none;
    }

    &_left {
      left: 0px;
    }

    &_right {
      right: 0px;
    }
  }
}

.footer {
  display: flex;
  justify-content: center;
  margin-top: 180px;
  padding-bottom: 60px;

  .copyright {
    font-size: 14px;
    color: $darkGrey;
    @extend %default-text;
  }

  @include adaptive(mob) {
    margin-top: 140px;
  }
}

.v-hammer-wrapper {
  touch-action: auto !important;
  user-select: auto !important;
  touch-action: pan-y !important;
}

.Header {
  background: #000;
}
</style>
