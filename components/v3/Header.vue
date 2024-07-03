<template>
  <div>
    <header>
        <div class="header">
          <a class="header-logo">
            <img class="logo-img" src="/image/v3/logo.png">
            <p class="logo-text">Golden Suisse® — Swiss wealth protection</p>
          </a>
          <div class="header-menu">
            <svg class="menu" @click="onClickMenu" :class="{'menu-open': openedMenu}">
              <line x1="0" x2="60" y1="1" y2="1" class="menu-rect" :class="{'menu-open-animation-top': openedMenu}"></line>
              <line x1="60" x2="0" y1="11" y2="11" class="menu-rect" :class="{'menu-open-animation-bot': openedMenu}"></line>
              <line x1="0" x2="40" y1="1" y2="1" class="menu-rect-mobile" :class="{'menu-open-animation-top': openedMenu}"></line>
              <line x1="40" x2="0" y1="11" y2="11" class="menu-rect-mobile" :class="{'menu-open-animation-bot': openedMenu}"></line>
            </svg>
          </div>
          <transition name="fade">
            <div class="header-company" v-show="!openedMenu">
              <a class="text-company" @click="onClickLink('company')">Company</a>
              <a class="text-company" @click="onClickLink('payments/gold-silver')">Products</a>
              <a class="text-company" @click="onClickLink('account')">Personal Account</a>

              <div class="slog">
                <img class="company-img" src="/image/v3/header-company.png">
                <p class="text-slog">Instant Worldwide Payments with Gold & Silver</p>
              </div>
            </div>
          </transition>
          <transition name="fade">
            <div class="header-create-account" v-show="openedMenu">
              <Button
                class="btn-create-account"
                label="Create account"
                path="/account/register"
              />
            </div>
          </transition>
        </div>
    </header>
  </div>
</template>

<script>
import Button from "./Button.vue";

export default {
  components: {
    Button,
    Menu: () => import("@/components/Menu/Menu.vue"),
  },
  data() {
    return {
    }
  },
  props: {
    isMenu: {
      type: Boolean,
      default: false,
    },
    openedMenu: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    this.$on('open-menu', function() {
      setTimeout(() => {
        $('header').addClass('header-menu-open');
      }, 500);
    })
    this.$on('close-menu', function() {
      setTimeout(() => {
        $('header').removeClass('header-menu-open');
      }, 500);
    })
  },
  methods: {
    onClickLink(link) {
      this.$router.push(link);
    },
    onClickMenu() {
      if (this.openedMenu) {
        this.closeMenu();
      } else {
        this.openMenu();
      }
    },
    openMenu() {
      this.$emit("open-menu");
    },
    closeMenu() {
      this.$emit("close-menu");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/bootstrap.css";
@import "@/assets/css/main.css";
  .header-menu-open {
    position: fixed;
    top: 0;
    width: 100%;
    height: 180px;
    z-index: 3;
    background-color: #101010;
    transition: height 1s linear;
  }
  .header {
    padding: 30px 60px 0 60px;
    display: grid;
    grid-template-areas: "logo menu company";
    grid-template-columns: 300px 1fr 50%;

    &-logo {
      grid-area: logo;
      display: inline-flex;
      .logo-img {
        width: 120px;
        height: 120px;
      }

      .logo-text {
        height: 50px;
        margin-left: 65px;
        width: 130px;

        font-weight: 700;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: -0.02em;
        color: #A0A0A0;
        text-transform: uppercase;
        text-decoration: none;
      }
    }
    
    &-logo:hover {
      text-decoration: none;
    }

    &-menu {
      grid-area: menu;
      display: flex;
      justify-content: flex-end;
      margin-right: 150px;
      
      .menu {
        width: 60px;
        height: 12px;
        cursor: pointer;
        position: relative;
        transition: all 0.4s ease-in-out;

        .menu-rect {
          stroke: white;
          stroke-width: 2px;
          transform: translateX(0) translateY(0) rotate(0);
          transition: all 0.4s ease-in-out;
        }
        .menu-rect-mobile {
          display: none;
          stroke: white;
          stroke-width: 2px;
          transform: translateX(0) translateY(0) rotate(0);
          transition: all 0.4s ease-in-out;
        }
      }
      .menu-open {
        height: 60px;

        .menu-open-animation-top {
          transform: translateX(60px) translateY(0) rotate(135deg);
        }
        .menu-open-animation-bot {
          transform: translateX(24px) translateY(-10px) rotate(45deg);
        }
      }
    }

    &-company {
      grid-area: company;
      display: flex;
      flex-direction: column;

      .slog {
        display: inline-flex; 
        flex-direction: row; 
        align-items: center;
        margin-top: 62px;
        margin-left: 6px;
      }
      .company-img {
        width: 124px;
        height: 40px;
      }
      .text-slog{
        width: 240px;
        margin-left: 60px;
        text-transform: uppercase;
        font-family: Arial;
        font-weight: 700;
        font-size: 14px;
        line-height: 16px;

        letter-spacing: -0.02em;
        color: #A0A0A0;
      }
    }

    &-create-account {
      grid-area: company;
      width: 100%;
      display: flex;
      justify-content: flex-end;

      .btn-create-account {
        width: 370px;
        height: 80px;
      }
    }
  }

  .text-company {
    font-family: Arial;
    font-weight: 400;
    font-size: 80px;
    line-height: 80px;
    letter-spacing: -0.04em;
    color: #ffffff;
    margin-bottom: 0;

    text-decoration: none !important;
    transition: all 0.2s ease;
    cursor: pointer;
  }
  .text-company:hover {
    color: #FBC34A;
  }

  @media (max-width: 1599px) {
    .header-menu-open {
      height: 150px;
    }
    .header {
      &-logo {
        .logo-img {
          width: 90px;
          height: 90px;
        }

        .logo-text {
          height: 50px;
          margin-left: 28px;
        }
      }

      &-menu {
        justify-content: flex-end;
        margin-right: 85px;
      }

      &-company {
        .slog {
          margin-top: 30px;
          margin-left: 0px;
        }
        .company-img {
          width: 88.8px;
          height: 30px;
        }
        .text-slog {
          margin-left: 20px;
        }
      }

      &-create-account {
        .btn-create-account {
          width: 290px;
          height: 80px;
        }
      }
    }

    .text-company {
      font-size: 50px;
      line-height: 50px;
    }
  }

  @media (max-width: 1279px) {
    .header-menu-open {
      height: 150px;
    }
    .header {
      padding: 30px 40px 0 40px;

      &-logo {
        .logo-img {
          width: 90px;
          height: 90px;
        }

        .logo-text {
          height: 50px;
          margin-left: 28px;
        }
      }

      &-menu {
        justify-content: flex-end;
        margin-right: 70px;
      }

      &-company {
        .slog {
          margin-top: 30px;
          margin-left: 0px;
        }
        .company-img {
          width: 124px;
          height: 40px;
        }
        .text-slog {
          margin-left: 60px;
        }
      }

      &-create-account {
        .btn-create-account {
          width: 354px;
          height: 80px;
        }
      }
    }

    .text-company {
      font-size: 50px;
      line-height: 50px;
    }
  }

  @media (max-width: 1023px) {
    .header-menu-open {
      height: 100px;
    }
    .header {
      padding: 20px 45px 0 45px;
      grid-template-areas: 
        "logo menu"
        "company none";
      grid-template-columns: 1fr auto;

      &-logo {
        .logo-img {
          width: 60px;
          height: 60px;
        }

        .logo-text {
          height: 50px;
          margin-left: 20px;
          margin-top: 5px;
        }
      }
      &-menu {
        justify-content: flex-end;
        margin-right: 0px;
        .menu {
          width: 40px;
          height: 12px;
          margin-top: 24px;

          .menu-rect {
            display: none;
          }
          .menu-rect-mobile {
            display: block;
          }
        }

        .menu-open {
          height: 40px;

          .menu-open-animation-top {
            transform: translateX(40px) translateY(0) rotate(135deg);
          }
          .menu-open-animation-bot {
            transform: translateX(18.5px) translateY(-10px) rotate(45deg);
          }
        }
      }
      
      &-company {
        margin-top: 50px;
        .text-slog {
          margin-left: 30px;
        }
      }

      &-create-account {
        .btn-create-account {
          display: none;
        }
      }
    }

    .text-company {
      font-size: 60px;
      line-height: 60px;
    }
  }

  @media (max-width: 767px) {
    .header-menu-open {
      height: 80px;
    }
    .header {
      padding: 12.5px 15px 0 15px;

      &-logo {
        .logo-img {
          width: 55px;
          height: 55px;
        }

        .logo-text {
          height: 42px;
          margin-left: 15px;
          margin-top: 0px;
          width: 90px;

          font-size: 10px;
          line-height: 14px;
        }
      }
      &-menu {
        grid-area: menu;
        display: flex;
        justify-content: flex-end;
        .menu {
          margin-top: 12.5px;
        }
      }
      
      &-company {
        margin-top: 10px;
        margin-left: 5px;
        .slog {
          flex-direction: column;
          align-items: flex-start;
        }
        .company-img {
          width: 95px;
          height: 30px;
        }
        .text-slog {
          margin-left: 0px;
          margin-top: 15px;
        }
      }
    }

    .text-company {
      display: none;
    }
  }
</style>