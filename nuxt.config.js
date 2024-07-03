export default {
  /*
   ** Headers of the page
   */
  head() {
    return {
      title: "Golden Suisse",
      meta: [
        {charset: "utf-8"},
        {name: "viewport", content: "width=device-width, initial-scale=1"},
        {hid: "description", name: "description", content: "Golden Suisse"}
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/image/Favicon.png" },
        { rel: "canonical", href: `https://goldensuisse.com${this.$route}` },
        {
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
          integrity:
            "sha512-SfTiTlX6kk+qitfevl/7LibUOeJWlt9rbyDn92a1DqWOw9vWG2MFoays0sgObmWazO5BQPiFucnnEAjpAB+/Sw==",
          referrerpolicy: "no-referrer",
          crossorigin: "anonymous",
          rel: "stylesheet",
        },
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js",
          defer: true,
          integrity:
            "sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj",
          crossorigin: "anonymous",
        },
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js",
          defer: true,
          integrity:
            "sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct",
          crossorigin: "anonymous",
        },
      ]
    }
  },
  css: [
    '@/assets/main.scss',
    '@/assets/anims.scss',
  ],
  serverMiddleware: ["~/servermiddleware/seo.js"],
  /*
   ** Router configuration
   */
  router: {
    // scrollBehavior: function(to, from, savedPosition) {
    //   return { x: 0, y: 0 };
    // },
    middleware: "routing"
  },
  modules: [
    // '@nuxtjs/gtm',
    '@nuxtjs/style-resources',
    'cookie-universal-nuxt',
    '@nuxtjs/device',
  ],
  styleResources: {
    scss: [
      "@/assets/_variables.scss",
      "@/assets/_mixins.scss"
    ]
  },
  /*
   ** Customize the progress bar color
   */
  plugins: [
    { src: "~/plugins/smooth-scrollbar/init.js", mode: "client" },
    { src: "~/plugins/vue-mutation-observer", mode: "client" },
    { src: "~/plugins/routerAfterEach.js", mode: "client" },
    { src: "~/plugins/appMixins.js", mode: "client" },
    { src: "~/plugins/animFunctions.js", mode: "client" },
    { src: "~/plugins/vue-touch.js", mode: "client" },
    { src: "~/plugins/vue-hammer.js", mode: "client" },
    { src: "~/plugins/vue-the-mask.js", mode: "client" },
    { src: "~/plugins/global-event-emitter.js", mode: "client" },


  ],
  /*
   ** Build configuration
   */
  build: {
    extend(config) {
      // Find the rule which contains a assets file extension
      const assetsLoader = config.module.rules.find(rule =>
        rule.test.test(".png")
      );

      // Overwrite the test regex and add `pdf`
      assetsLoader.test = /\.(png|jpe?g|gif|svg|webp|pdf)$/i;

      return config;
    }
  },
  pageTransition: {
    name: "fade",
    mode: "out-in",
    duration: 500,
    afterEnter(el) {
      if (window.innerWidth > 1023) {
        /* Start anim */
        this.$root.initAnim();
        this.$root.animateSubNavbar();
        this.$root.animateHeader({ currentRoute: this.$route });
        if (this.$route.path !== "/" || this.$route.name === "error404") {
          this.$root.animateSubNavbarLine();
        }
        if (this.$route.path === "/") {
          this.$store.dispatch("updateFirstSmall", true);
        }
        this.$root.animateHeader({ currentRoute: this.$route });
      }
    },
    beforeEnter() {
      /* If main footer disable, enable it */
      this.$store.dispatch("changeFooter", true);
      if (window.innerWidth > 1023) {
        this.$store.dispatch("updateFirstSmall", false);
        this.$store.dispatch("updateBigHeader", false);
        if (this.$route.path === "/") {
          this.$root.destroySubnavbarLine();
        }
      }
    },
    beforeLeave() {
      /* Return footer when router push to other page */
      this.$store.commit('setCloseMenuInit', true);
      this.$store.dispatch("changeFooter", false);
      if (window.innerWidth > 1023) {
        if (this.$route.path === "/") {
          // this.$root.destroySubnavbarLine();
        } else {
          setTimeout(() => {
            if (
              this.$route.path.split("/")[1] !==
              this.$store.state.prevRoute.path.split("/")[1]
            )
              this.$root.destroySubNavbar();
          }, 10);
        }
      }
    }
  },
  layoutTransition: {
    name: "fade",
    mode: "out-in",
    duration: 500
  },
  gtm: {
    id: 'GTM-TMKDWCC',
    enabled: true
  },
  ssr: true,
  buildModules: ['@nuxtjs/device'],
  device: {
    defaultUserAgent: 'Mozilla/5.0 (Linux; Android 5.1.1; Nexus 6 Build/LYZ28E) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Mobile Safari/537.36'
  }
};
