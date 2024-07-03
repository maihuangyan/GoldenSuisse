import extend from "@/utils/extend-vue-app";
import anims from "@/plugins/animFunctions";
import gsap from "gsap";
import { mapState } from "vuex";

export default async function({ app }) {
  extend(app, {
    created() {
      console.log('app created');
      
      this.$store.commit("setWindowWidth");
      this.serverVar = true;
      this.$nextTick(function() {
        window.addEventListener("load", this.windowLoadedMethod);
        window.addEventListener(
          "load",
          this.$store.dispatch("updateLoadingStatus", false)
        );
        if (!this.$store.state.isMobile) {
          window.addEventListener("load", this.initAnim);
          window.addEventListener("load", function() {
            /* Anim appearance menu */
            if (window.location.pathname !== "/") {
              anims.animateSubNavbar();
            }
            /* Anim appearance menu END */
          });
        }
      });
    },
    mounted() {
      console.log('app mounted');
      
      let $thisVue = this;
      $thisVue.$store.commit("setMainLoaderActive", true);
      setTimeout(() => {
        $thisVue.$store.commit("setMainLoaderActiveClass", true);       
      }, 100);
      setTimeout(function() {
        if (!$thisVue.$store.state.isMobile && $thisVue.layoutName != 'white') {
          anims.animContentLoader();
        }
      }, 100);

      setTimeout(function() {
        $thisVue.$store.commit("setMainLoaderActive", false);
      }, 2000);

      window.addEventListener('load', function() {
        console.log('load for ipad chrome');
        setTimeout(() => {
          $thisVue.initAnim();
        }, 100);
      })

      window.addEventListener('orientationchange', function () {
        console.log('orientationchange');
        const html = document.querySelector('html');
        setTimeout(function () {
          if (window.innerWidth < 1024) {
            console.log('portrait');
            html.style.overflow = 'scroll';
            $thisVue.$store.commit("setWindowWidth");
            $thisVue.destroySmoothscroll();
            $thisVue.animDoneReset();
            $thisVue.destroySubNavbar();
            $thisVue.destroySubnavbarLine();
          } else if (window.innerWidth >= 1024) {
            console.log('landscape');
            html.style.overflow = 'hidden';
            $thisVue.$store.commit("setWindowWidth");
            $thisVue.initSmoothscroll();
            $thisVue.animateHeader();
            $thisVue.animateSubNavbarLine();
            $thisVue.animateSubNavbar();
            setTimeout(function () {
              $thisVue.initAnim();
            }, 100);
          }
        }, 10)
      })

      if (/^iPhone|^iPad|^iPod/.test(navigator.platform)) {
        window.addEventListener("focus", this.pageAwakened)
        window.addEventListener("visibilitychange", function() {
          !document.hidden && this.pageAwakened();
        });
        setInterval(function() {
          this.iosWakeDetect();
        }, 500);
      }
    },
    methods: {
      animDoneReset() {
        let animElems = document.querySelector('.page').querySelectorAll("[data-anim]");
        animElems.forEach(item => {
          item.removeAttribute('data-anim-done');
        })
      },
      initSmoothscroll() {
        let cont = document.querySelector('.page');
        Scrollbar.init(cont, {
          damping: 0.07
        });
      },
      destroySmoothscroll() {
        let cont = document.querySelector('.page');
        Scrollbar.get(cont).destroy();
      },
      iosWakeDetect() {
        function requestAnimationFrameCallback() {
          webkitRequestAnimationFrame(function() {
            // Can't use timestamp from webkitRequestAnimationFrame callback, because timestamp is not incremented while app is in background. Instead use UTC time. Also can't use performance.now() for same reason.
            var thisTime = new Date().getTime();
            if (lastTime && thisTime - lastTime > 60000) {
              // one minute
              // Very important not to hold up browser within webkitRequestAnimationFrame() or reference any DOM - zero timeout so shoved into event queue
              setTimeout(this.pageAwakened, 0);
            }
            lastTime = thisTime;
            requestAnimationFrameCallback();
          });
        }
        var lastTime;
        if (
          /^iPhone|^iPad|^iPod/.test(navigator.platform) &&
          !window.indexedDB &&
          window.webkitRequestAnimationFrame
        ) {
          // indexedDB sniff: it is missing in UIWebView
          requestAnimationFrameCallback();
        }
      },
      pageAwakened() {
        window.location.reload(true);
      },
      windowLoadedMethod() {
        this.$store.commit("windowLoaded");
      },
      destroySubnavbarLine() {
        anims.destroySubnavbarLine();
      },
      animHeaderLogo() {
        anims.animHeaderLogo();
      },
      animateHeader(path) {
        anims.animateHeader(path);
      },
      windowResize() {
        this.$store.commit("setWindowWidth");
      },
      animateSmallNavbar() {
        anims.animateSmallNavbar();
      },
      destroySubNavbar() {
        anims.destroySubNavbar();
      },
      animateSubNavbar() {
        anims.animateSubNavbar();
      },
      animateSubNavbarLine() {
        anims.animateSubNavbarLine();
      },
      animHeaderLogo() {
        anims.animHeaderLogo();
      },
      initAnim() {
        let $thisVue = this;
        let arrayAnims = Object.getOwnPropertyNames(anims);
        let this$el = document.querySelector(".page");
        if (!this$el) return;
        let animElems = this$el.querySelectorAll("[data-anim]");
        let animFunction, animDelay, animDuration;
        eachAnims(animElems, this$el, $thisVue);
        if (Scrollbar.get(this$el)) {
          Scrollbar.get(this$el).addListener(s => {
            eachAnims(animElems, this$el, $thisVue);
          }); 
        }
        function eachAnims(animElems, scrollContainer, $thisVue) {
          animElems.forEach(function (animEl) {
            if (Scrollbar.get(scrollContainer) && Scrollbar.get(scrollContainer).isVisible(animEl) && !animEl.hasAttribute('data-anim-done') && !animEl.classList.contains('animated')) {
              animFunction = animEl.getAttribute('data-anim');
              animDelay = Number((animEl.getAttribute('data-anim-delay')) ? animEl.getAttribute('data-anim-delay') : $thisVue.$store.state.totalDelay);
              animDuration = Number((animEl.getAttribute('data-anim-duration')) ? animEl.getAttribute('data-anim-duration') : $thisVue.$store.state.totalDuration);
              arrayAnims.forEach(function (animFuncName) {
                if (animFuncName == animFunction) {
                  anims[animFunction](animEl, animDelay, animDuration);
                }
              });
            }
          })
        }
      },
    },
    computed: {
      ...mapState(["isMenu"])
    },
    watch: {
      isMenu(value) {
        if (window.innerWidth > 1023) {
          var timeOut = setTimeout(() => {
            if (!value) this.animateSmallNavbar();
            if (value) this.initAnim();
            clearTimeout(timeOut);
          }, 500);
        }
      }
    },
    data: () => ({
      mainLoaderActive: false,
      mainLoaderActiveClass: false
    })
  });
}
