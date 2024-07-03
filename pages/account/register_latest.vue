<template lang="pug">
  .register
    section.register__title(data-anim="fadeIn" data-anim-delay="0" :style="{opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 10%)'}") Become a Client
    section.register__subtitle(data-anim="fadeIn" data-anim-delay="0" :style="{opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 10%)'}") Enter Your Phone Number
    section.register__logo(data-anim="scalePicture" data-anim-delay=".3" :style="{transform: this.$store.state.isMobile ? 'scale(1)' : 'scale(0.7)', opacity: this.$store.state.isMobile ? 1 : 0}")
      .register__logo_container
        img.register__logo_container_img(:src="require('@/static/image/LogomarkOwnership.png')")

    section.register__email(data-anim="fadeIn" data-anim-delay=".3" :style="{opacity: this.$store.state.isMobile ? 1 : 0}")
      LoginInput(
        placeholder="+41 789 23 50 24"
        label=""
        type="text"
        @input-changed="emailChanged"
      )
    section.register__join(data-anim="fadeIn" data-anim-delay=".3" :style="{opacity: this.$store.state.isMobile ? 1 : 0}")
      AccountButton(label="Apply" :isValid="isValid" @click="register")
    section.register__validMessage(v-html="validMsg ? 'Incorrect Email!' : ''")


    section.register__app(data-anim="fadeIn" data-anim-delay=".3" :style="{opacity: this.$store.state.isMobile ? 1 : 0}")
      .register__app_title(data-anim="fadeIn" data-anim-delay=".3" :style="{opacity: this.$store.state.isMobile ? 1 : 0}"  @click="redirect('https://apps.apple.com/us/app/goldensuisse/id1236821991')") iOS
      .register__app_desc(data-anim="fadeIn" data-anim-delay=".3" :style="{opacity: this.$store.state.isMobile ? 1 : 0}") Sep 29, 2019 Version 1.7.7
    section.register__desc(data-anim="fadeIn" data-anim-delay=".3" :style="{opacity: this.$store.state.isMobile ? 1 : 0}")
      .register__desc_title(data-anim="fadeIn" data-anim-delay=".5" :style="{opacity: this.$store.state.isMobile ? 1 : 0}"  @click="redirect('https://play.google.com/store/apps/details?id=com.golden.coin&hl=en_US')") Android
      .register__desc_desc(data-anim="fadeIn" data-anim-delay=".5" :style="{opacity: this.$store.state.isMobile ? 1 : 0}") January 31, 2020 Version 1.4
</template>

<script>
export default {
  name: "Register",
  head: {
    title: "Golden Suisse - Apply"
  },
  components: {
    LoginInput: () => import("@/components/Account/LoginInput"),
    AccountButton: () => import("@/components/Account/AccountButton"),
    LogoSvg: () => import("@/components/LogoSvg")
  },
  data() {
    return {
      email: "",
      isValid: false,
      validMsg: false,
      reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
    };
  },
  methods: {
    emailChanged(value) {
      if (value == null || value == "") {
        this.isValid = false;
        this.validMsg = false;
      } else {
        this.isValid = true;
        this.email = value;
        this.validMsg = false;
      }
    },
    async register() {
      if (this.isValid) {
        var formdata = new FormData();
        formdata.append("email", this.email);
        formdata.append("action", "register");

        let requestOptions = {
          method: "POST",
          body: formdata
        };

        await fetch("/mailer/send_mobile_sms.php", requestOptions)
          .then(response => {
            if (response.ok) {
              return response.json();
            }
          })
          .then(data => {
            if (data) {
              document.getElementsByClassName('register__subtitle')[0].innerHTML = "Please Download the Link Sent to <br/>"+this.email;
              document.getElementsByClassName('register__logo_container_img')[0].style.display = "none";
              document.getElementsByClassName('register__email')[0].style.display = "none";
              document.getElementsByClassName('register__join')[0].style.display = "none";                            
            } else throw new Error("Something went wrong!");
          })
          .catch(error => console.log("error", error));
      }
    },
    redirect(path) {
      window.open(path);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/_variables.scss";

.register {
  display: grid;
  grid-template-areas:
    ". title title title title title title title title ."
    ". . . . . subtitle subtitle subtitle subtitle ."
    ". logo logo logo logo logo logo logo logo ."
    ". email email email email . . . . ."
    ". . . . join join validMessage validMessage validMessage ."
    "app app app app app desc desc desc desc desc ";
  grid-template-columns: 3.75% repeat(8, 11.5625%) 3.75%;
  padding: 295px 0 0 0;

  &__title {
    grid-area: title;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    /* font-size: 180px; */
    font-size: 100px;
    line-height: 39%;
    letter-spacing: -0.04em;
    color: $white;
    padding-bottom: 7.5%;
  }

  &__subtitle {
    grid-area: title;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 150%;
    letter-spacing: -0.02em;
    color: $white;
    padding: 8% 0% 0 0;
    width: 100%;
    text-align:center;
  }

  &__logo {
    grid-area: logo;
    display: flex;
    justify-content: center;
    padding: 0.7% 0 0 0;/* 13.7% 0 10% 0; */

    &_container {
      overflow: hidden;

      &_img {
        width: 175px;
        height: 175px;
      }
    }
  }

  &__email {
    grid-area: email;
    padding: 4% 8% 0 0;
  }

  &__join {
    grid-area: join;
    display: flex;
    justify-content: center;
    padding: 33.785% 0 30% 0;
  }

  &__validMessage {
    grid-area: validMessage;
    font-family: Arial;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 229%;
    display: flex;
    align-items: center;
    letter-spacing: -0.02em;
    color: $white;
    transform: translateX(-15%);
    transition: 0.5s;
    padding: 22.523% 0 20% 0;
  }

  &__app {
    grid-area: app;
    border-top: 2px $white solid;
    border-right: 1px $white solid;
    height: 100%;
    padding: 4% 0 28.5% 0;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    display: grid;
    grid-template-areas: ". appTitle appTitle appDesc appDesc";
    grid-template-columns: 7.5% repeat(4, 23.125%);

    &_title {
      grid-area: appTitle;
      color: $white;
      font-size: 48px;
      line-height: 100px;
      cursor: pointer;

      &:hover {
        color: $gold;
      }
    }

    &_desc {
      grid-area: appDesc;
      padding-top: 7%;
      display: flex;
      justify-content: flex-end;
      color: $lightGrey;
      font-weight: bold;
      font-size: 14px;
      line-height: 16px;
      text-align: right;
      letter-spacing: -0.02em;
      padding-right: 11%;
    }
  }

  &__desc {
    grid-area: desc;
    border-top: 2px $white solid;
    border-left: 1px $white solid;
    height: 100%;
    padding: 4% 0 28.5% 0;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    display: grid;
    grid-template-areas: "descTitle descTitle descDesc descDesc .";
    grid-template-columns: repeat(4, 23.125%) 7.5%;

    &_title {
      grid-area: descTitle;
      color: $white;
      font-size: 48px;
      line-height: 100px;
      padding-left: 11%;
      cursor: pointer;

      &:hover {
        color: $gold;
      }
    }

    &_desc {
      grid-area: descDesc;
      padding-top: 7%;
      display: flex;
      justify-content: flex-end;
      color: $lightGrey;
      font-weight: bold;
      font-size: 14px;
      line-height: 16px;
      text-align: right;
      letter-spacing: -0.02em;
    }
  }
}

@media (max-width: 1300px) {
  .account {
    &__validMessage {
      transform: translateX(-10%);
    }
  }
}

@media (max-width: 1023px) {
  .register {
    grid-template-areas:
      ". title title ."
      ". subtitle subtitle ."
      ". logo logo ."
      ". email email ."
      ". join join ."
      ". validMessage validMessage ."
      ". app desc .";
    grid-template-columns: 5.4% repeat(2, 44.6%) 5.4%;
    padding: 100px 0 0 0;

    &__title {
      padding: 0;
      padding-bottom: 7%;
      font-size: 48px;
      line-height: 104%;
      letter-spacing: -0.04em;
      /* border-bottom: 2px solid $white; */
    }

    &__subtitle {
      font-family: Arial;
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 125%;
      letter-spacing: -0.04em;
      padding: 24% 0 20% 0;
    }

    &__logo {
      padding: 0% 0 10% 0;

      &_container {
        &_img {
          width: 140px;
          height: 140px;
        }
      }
    }

    &__email {
      padding: 13% 0 17% 0;
    }

    &__join {
      padding: 8.5% 0 5% 0;
    }

    &__validMessage {
      transform: none;
      display: flex;
      justify-content: center;
      align-content: start;
      padding: 0 0 0 0;
      height: 32px;
      padding: 10% 0 38% 0;
    }

    &__app {
      grid-template-areas: "appTitle appTitle appTitle appTitle appTitle";
      height: 100%;
      padding: 5% 0 25% 0;

      &_title {
        color: $white;
        font-size: 24px;
        line-height: 83%;
        width: 100%;
        padding-top: 5%;
      }

      &_desc {
        display: none;
      }
    }

    &__desc {
      grid-template-areas: "descTitle descTitle descTitle descTitle descTitle";
      height: 100%;
      padding: 5% 0 25% 0;

      &_title {
        color: $white;
        font-size: 24px;
        line-height: 83%;
        width: 100%;
        padding-top: 5%;
      }

      &_desc {
        display: none;
      }
    }
  }
}
</style>
