<template>
  <div>
    <nav
      class="navbar navbar-expand-xl navbar-dark d-none d-xl-flex navbar-desktop"
      id="navbarDesktop"
    >
      <a class="navbar-brand" @click="smoothScroll('#banner')">
        <img src="/svg/logo-new.svg" style="height: 70px;"/>
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav nav-left" style="margin-top: 10px;">
          <li class="nav-item">
            <a class="nav-link pt-0" @click="smoothScroll('#personal')">Personal</a>
          </li>
          <li class="nav-item">
            <a class="nav-link pt-0" @click="smoothScroll('#business')">Business</a>
          </li>
        </ul>
        <ul class="navbar-nav nav-right" style="margin-top: 10px;">
          <li class="nav-item">
            <a class="nav-link pt-0" @click="smoothScroll('#protection')">Protection</a>
          </li>
          <li class="nav-item">
            <a class="nav-link pt-0" @click="smoothScroll('#assets')">Assets</a>
          </li>
          <li class="nav-item">
            <a class="nav-link pt-0" @click="smoothScroll('#advantages')">Advantages</a>
          </li>
          <li class="nav-item">
            <a class="nav-link pt-0" @click="smoothScroll('#goldCard__sec')">Gold Card</a>
          </li>
          <li class="nav-item">
            <a class="nav-link pt-0" @click="smoothScroll('#manage-risk')">About us</a>
          </li>
        </ul>
        <div class="nav-buttons">
          <a href="../account/" class="btn btn__login w-button">
            <span class="c-bookmark_label">
              <span>Log In</span>
              <span>Log In</span>
            </span>
          </a>
        </div>
      </div>
    </nav>
    <!-- mobile menu -->
    <nav class="d-xl-none navbar__mobile">
      <div class="container d-flex align-items-center justify-content-between">
        <a @click="smoothScroll('#banner')" class="navbar-brand logo-mobile">
          <img src="/svg/logo_mobile-new.svg"/>
        </a>
        <div>
          <input type="checkbox" id="ham-menu" />
          <label for="ham-menu" id="button">
            <div class="open_menu text-white fs-5"></div>
          </label>
          <div class="menu-div">
            <ul class="nav-items-left">
              <li>
                <a @click="smoothScroll('#personal')">Personal</a>
              </li>
              <li>
                <a @click="smoothScroll('#business')">Business</a>
              </li>
              <li>
                <a @click="smoothScroll('#protection')">Protection</a>
              </li>
              <li>
                <a @click="smoothScroll('#assets')">Assets</a>
              </li>
              <li>
                <a @click="smoothScroll('#advantages')">Advantages</a>
              </li>
              <li>
                <a @click="smoothScroll('#goldCard__sec')">Gold Card</a>
              </li>
              <li>
                <a @click="smoothScroll('#manage-risk')">About us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>

export default {
  mounted() {

    const navItems = document.querySelectorAll(".nav-link");

    for (var i = 0; i < navItems.length; i++) {
      navItems[i].addEventListener("click", function (e) {
        e.target.click() && e.target.click();
        var current = document.querySelector(".active");
        if (current) {
          current.classList.remove("active");
        }
        this.classList.add("active");
      });
    }

    let button = document.getElementById("button");
    let listItems = document.querySelectorAll(".nav-items-left li");

    listItems.forEach((item, index) => {
      item.addEventListener("click", (event) => {
        button.click();
      });
    });

    if (window.innerWidth >= 1024) {
      setTimeout(() => {
        let container = document.querySelector('.scroll-container');
        let scrollbar = Scrollbar.get(container);
        if (scrollbar) {
          scrollbar.addListener((status) => {
            this.scrollContent(status.offset.y);
            // console.log(status.offset.y);
          });
        }
      }, 500);
    }
  },
  methods: {
    scrollContent(position) {
      const navItems = document.querySelectorAll(".nav-link");
      var current = document.querySelector(".active");
      if (current) {
        current.classList.remove("active");
      }

      let elements = ['#protection', '#assets', '#advantages', '#goldCard__sec', '#personal', '#business', '#manage-risk'];
      let ids = [2, 3, 4, 5, 0, 1, 6];
      for (let i = 0; i < elements.length; i++) {
        let target = document.querySelector(elements[i]);
        let next = i < elements.length - 1 ? document.querySelector(elements[i + 1]) : null;
        let left = target.offsetTop;
        let right = next ? next.offsetTop : 100000;
        if (left <= position && position < right) {
          navItems[ids[i]].classList.add('active');
        }
      }
    },
    isIOS() {
      if (/iPad|iPhone|iPod/.test(navigator.platform)) {
        return true;
      } else {
        return navigator.maxTouchPoints &&
          navigator.maxTouchPoints > 2 &&
          /MacIntel/.test(navigator.platform);
      }
    },
    getTop(element, start) {
      if (element.nodeName === 'HTML') return -start;

      const elementTop = element.getBoundingClientRect().top
      const scrollMarginTop = parseInt(window.getComputedStyle(element).scrollMarginTop || 0, 10)
      return elementTop + start - scrollMarginTop;
    },

    easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    },

    _smoothScroll({ scrollTo, offset, duration, container, easingFunction }) {
      const requestAnimationFrame = window.requestAnimationFrame || function(fn) {
        window.setTimeout(fn, 16);
      };

      const startPoint = container.scrollTop || window.pageYOffset;
      let end = this.getTop(scrollTo, startPoint);

      end += offset;

      const clock = Date.now();
      const easeFn = (typeof easingFunction === 'function' && easingFunction) || this.easeInOutCubic;
      const step = function() {
        const elapsed = Date.now() - clock;
        let position = end;
        if (elapsed < duration) {
          position = startPoint + (end - startPoint) * easeFn(elapsed / duration);

          requestAnimationFrame(step);
        }

        container.scrollTo(0, position);
      };
      step();
    },
    smoothScroll(target) {
      if (window.innerWidth >= 1024) {
        let scrollTo = document.querySelector(target);
        let position = scrollTo.offsetTop;

        let container = document.querySelector('.scroll-container');
        let scrollbar = Scrollbar.get(container);

        scrollbar.scrollTo(0, position, 3000);
      } else {
        let scrollTo = document.querySelector(target);
        let scroll_container = document.querySelector('.scroll-container');
        let style = scroll_container.currentStyle || window.getComputedStyle(scroll_container);
        let marginTop = parseInt(style.marginTop);

        let resolvedConfig = {
          duration: 2200,
          offset: marginTop * -1,
          container: scroll_container,
          easingFunction: function (t) {
            var ts = t * t,
              tc = ts * t;
            return 6 * tc * ts - 15 * ts * ts + 10 * tc;
          },
        };

        let { duration, offset, container, easingFunction } = resolvedConfig;

        this._smoothScroll({ scrollTo, offset, duration, container, easingFunction });
      }
    },
  },
};
</script>

<style scoped>
@import "@/assets/css/bootstrap.css";

.menu-div {
  background-color: #1a1717 !important;
  overflow: scroll !important;
}
.menu-div .nav-items-left li.login-logout {
  width: 80%;
  margin: 10px auto 0 auto;
}

.menu-div .nav-items-left li.login-logout a:before {
  display: none;
}

.navbar-brand {
  cursor: pointer;
}

.navbar-dark .navbar-nav .nav-link:focus,
.navbar-dark .navbar-nav .nav-link:hover,
.navbar-dark .navbar-nav .nav-link.active {
  color: #b7b1b1;
}

.navbar-dark .navbar-nav .nav-link {
  color: #fff;
}
.navbar {
  background: #101010;
  height: 107px;
  align-items: center;
}

.navbar-collapse {
  justify-content: flex-start;
  margin-left: 20px;
}
.nav-buttons {
  min-width: 88px !important;
  margin-left: auto;
}
.navbar-nav {
  gap: 20px;
}

.nav-left {
  margin-right: 70px;
}
.nav-left li {
  display: flex;
  align-items: center;
}

.nav-right {

}
.nav-right li {
  display: flex;
  align-items: center;
}

#ham-menu {
  display: none;
}
label {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  margin-bottom: 0;
}
label,
.logo-mobile {
  position: relative;
  z-index: 1000;
}

.menu-div {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  left: 0;
  visibility: hidden;
  opacity: 0;
  transition: all 800ms ease-in-out;
  z-index: 999;
}

#ham-menu:checked ~ .menu-div {
  opacity: 1;
  visibility: visible;
}

.menu-div ul {
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 120px 0 0 0;
  /* overflow: scroll !important; */
}

.menu-div ul.nav-items-left {
  width: 100%;
}

.menu-div ul.nav-items-right {
  width: 30%;
}

.menu-div ul.nav-items-left {
  position: relative;
  z-index: 20;
}

.menu-div ul.nav-items-left::after {
  position: absolute;
  content: "";
  background-color: #1a1717;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
  visibility: hidden;
  opacity: 0;
  transform: translateX(-110%);
  transition: all 400ms ease-in-out;
}

#ham-menu:checked ~ .menu-div ul.nav-items-left::after {
  visibility: visible;
  opacity: 1;
  transform: translateX(0%);
  transition: transform 800ms, opacity 700ms;
}

a {
  color: #fff;
  text-decoration: none;
}

.menu-div .nav-items-left li {
  position: relative;
  display: block;
  width: 100%;
  padding: 0;
  margin: 10px 0;
  text-align: center;
  list-style: none;
  pointer-events: none;
  opacity: 0;
  visibility: hidden;
  transform: translateY(30px);
}

#ham-menu:checked ~ .menu-div .nav-items-left li {
  pointer-events: auto;
  visibility: visible;
  opacity: 1;
  transform: translateY(0);
  transition: opacity 800ms ease, transform 1000ms ease;
}

#ham-menu:checked ~ .menu-div .nav-items-left li:nth-child(1) {
  transition-delay: 0.4s;
}

#ham-menu:checked ~ .menu-div .nav-items-left li:nth-child(2) {
  transition-delay: 0.6s;
}

#ham-menu:checked ~ .menu-div .nav-items-left li:nth-child(3) {
  transition-delay: 0.8s;
}

#ham-menu:checked ~ .menu-div .nav-items-left li:nth-child(4) {
  transition-delay: 1s;
}

#ham-menu:checked ~ .menu-div .nav-items-left li:nth-child(5) {
  transition-delay: 1.2s;
}
#ham-menu:checked ~ .menu-div .nav-items-left li:nth-child(6) {
  transition-delay: 1.4s;
}
#ham-menu:checked ~ .menu-div .nav-items-left li:nth-child(7) {
  transition-delay: 1.6s;
}
#ham-menu:checked ~ .menu-div .nav-items-left li:nth-child(8) {
  transition-delay: 1.8s;
}

.nav-items-left li a,
.nav-items-right li a {
  color: #fff !important;
  position: relative;
  font-size: 18px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: -0.02em;
}

.nav-items-left li a:before,
.nav-items-right li a:before {
  background: currentColor;
  bottom: 0;
  content: "";
  height: 50%;
  left: -10px;
  opacity: 0;
  position: absolute;
  transition: opacity 0.4s ease;
  width: calc(100% + 20px);
}

.nav-items-left li a:hover:before,
.nav-items-right li a:hover:before {
  opacity: 0.15;
}

.nav-items-right li {
  margin: 8px 0;
}

.nav-items-right li a {
  color: #000;
  font-size: 16px;
}

.nav-items-right {
  visibility: hidden;
  opacity: 0;
}

#ham-menu:checked ~ .menu-div .nav-items-right {
  visibility: visible;
  opacity: 1;
  transition: 3s;
}

#ham-menu:checked ~ label .open_menu::after {
  transform: rotate(45deg);
  transition: all 0.25s ease-out;
}

#ham-menu:checked ~ label .open_menu::before {
  top: -3px;
  transform: rotate(-45deg);
  transition: all 0.25s ease-out;
}
.open_menu {
  position: relative;
  transition: all 0.25s ease-out;
}
.open_menu::after,
.open_menu::before {
  content: "";
  background-color: #fff;
  width: 30px;
  height: 2px;
  position: absolute;
  left: -15px;
  transition: all 0.25s ease-out;
}

.open_menu::after {
  top: -4px;
}

.open_menu::before {
  top: 4px;
}

.navbar__mobile {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 9px 0;
  z-index: 999;
}

.navbar-desktop {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
}

.nav-link::after {
  content: "";
  width: 0;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.5);
  bottom: 0;
  left: 10px;
  position: absolute;
  transition: 0.4s all;
}

.nav-link:hover::after {
  width: 80%;
}

.nav-link {
  position: relative;
  transition: 0.4s all;
  cursor: pointer;
}

.navbar-dark .navbar-nav .nav-link.active::after {
  width: 80%;
  content: "";
  height: 1px;
  background-color: rgba(255, 255, 255, 0.5);
  bottom: 0;
  left: 10px;
  position: absolute;
  transition: 0.4s all;
}

/* waleed */

.btn.btn__login {
  width: 88px;
  padding: 12px 0px;
  background-color: rgba(0, 0, 0, 0.04);
  color: #000;
  border-radius: 100px;
  background-color: #c6c6c6;
  font-size: 13px;
  line-height: 20px;
  font-weight: 500;
  text-align: center;
}

.btn.btn__signup {
  width: 150px;
  padding-top: 12px;
  padding-bottom: 12px;
  margin-left: 12px;
  color: #fff;
  border-radius: 100px;
  border-color: white;
  background-color: #000;
}

.btn__login .c-bookmark_label,
.btn__demo .c-bookmark_label {
  overflow: hidden;
  display: block;
  width: 100%;
  margin: 0 auto;
  height: 20px;
  position: relative;
}
.btn__login .c-bookmark_label > span,
.btn__demo .c-bookmark_label > span {
  display: block;
  width: 100%;
  transition: all 0.7s cubic-bezier(0.9, 0, 0.1, 1), color 0.2s ease-in-out;
}

.btn__login .c-bookmark_label > span:nth-of-type(2),
.btn__demo .c-bookmark_label > span:nth-of-type(2) {
  opacity: 0;
  transform: translate3d(0, 100%, 0);
}

.btn__login .c-bookmark_label > span:nth-child(2),
.btn__demo .c-bookmark_label > span:nth-child(2) {
  position: absolute;
  top: 0;
  bottom: 0;
}

.btn__login:focus .c-bookmark_label > span:nth-of-type(1),
.btn__login:hover .c-bookmark_label > span:nth-of-type(1),
.btn__demo:focus .c-bookmark_label > span:nth-of-type(1),
.btn__demo:hover .c-bookmark_label > span:nth-of-type(1) {
  opacity: 0;
  transform: translate3d(0, -100%, 0);
}

.btn__login:hover .c-bookmark_label > span:nth-of-type(2),
.btn__demo:hover .c-bookmark_label > span:nth-of-type(2) {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}

@media (max-width: 1023px) {
  .navbar__mobile {
    background-color: #101010;
  }
  .btn.btn__login {
    width: 100%;
    margin-bottom: 10px;
  }
  .btn.btn__signup {
    margin-left: 0;
    font-size: 18px !important;
  }
}
@media (max-width: 991.98px) {
}
@media (max-width: 767.98px) {
}
@media (max-width: 575.98px) {
  svg {
    width: 80%;
  }
}

.container {
  max-width: unset !important;
}

</style>