<template>
  <div class="error404">
    <!-- HEADER -->
    <header style="overflow: hidden">
      <Header
        style="position: fixed; top:0; width: 100%; z-index: 3; pointer-events: none;"
        :isMenu="isMenu"
        :isMobile="isMobile"
        :scrolled="scrollHeight != 0"
        :linkList="null"
        @open-menu="openMenu"
        @close-menu="closeMenu"
        :isError="true"
      />
      <Menu v-if="isMenu" style="padding-top: 120px;" />
    </header>
    <!-- HEADER END -->
    <div class="page" :class="{'pageZero': isMenu}" v-observer:subtree.attributes="scrollObserver">
      <!-- PAGE -->
      <main>
        <nuxt v-if="!isMenu" />
      </main>
      <!-- PAGE END -->
      <!-- FOOTER -->
      <footer>
        <Footer v-if="!isMenu" />
      </footer>
      <!-- FOOTER END -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Error404",
  components: {
    Header: () => import("@/components/Header/Header.vue"),
    Footer: () => import("@/components/Footer/Footer.vue"),
    Menu: () => import("@/components/Menu/Menu.vue")
  },
  data() {
    return {
      scrollHeight: 0,
      isMenu: false,
      linkList: null,
      isMobile: false
    };
  },
  methods: {
    scrollObserver(mutations) {
      let scrollContent = mutations.find(
        mutation => mutation.target.className === "scroll-content"
      );
      if (scrollContent) {
        this.scrollHeight = Math.abs(
          parseInt(scrollContent.target.style.transform.split(", ")[1])
        );
      }
    },
    openMenu() {
      this.isMenu = true;
      if (this.isMobile) window.scrollTo(0, 0);
    },
    closeMenu() {
      this.isMenu = false;
      if (this.isMobile) window.scrollTo(0, 0);
    }
  },
  mounted() {
    if (window.innerWidth > 1023) {
      // Smooth Scroll
      let this$el = document.querySelector(".page");
      Scrollbar.init(this$el, {
        damping: 0.07
      });
      // Smooth Scroll END
      this.isMobile = false;
    } else {
      this.isMobile = true;
    }
    this.closeMenu();
    this.$store.dispatch("updateBigHeader", true);
  }
};
</script>

<style lang="scss" scoped>
.error404 {
  background-color: #101010;
}
</style>
