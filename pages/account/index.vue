<template lang="pug">
.account
  section.account__title(
    data-anim="fadeIn",
    data-anim-delay="0",
    :style="{  transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 10%)' }"
  ) Login
  section.account__email(
    data-anim="fadeIn",
    data-anim-delay="0",
    :style="{  transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 10%)' }"
  )
    LoginInput(
      label="Email",
      :link="{ title: 'Register Account on Your Mobile', path: '/account/register' }",
      type="text",
      @input-changed="emailChanged",
      placeholder="name@mail.com"
    )
  section.account__password(
    data-anim="fadeIn",
    data-anim-delay="0",
    :style="{  transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 10%)' }"
  )
    LoginInput(
      label="Password",
      :link="{ title: 'Forgot?', path: '/account/forgot' }",
      type="password",
      @input-changed="passChanged",
      placeholder="••••••••••"
    )
  section.account__login(
    data-anim="fadeIn",
    data-anim-delay="0",
    :style="{  transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 10%)' }"
  )
    AccountButton(
      label="login",
      :isValid="isValid.email && isValid.password",
      @click="openCodeConfirm",
      :spinner="spinner"
    )

  section.account__validMessage
    span(v-show="(validMsgPass || validMsgEmail || serverError) && !spinner") {{ errMsg }}
    .account__validMessage__decorator(v-if="spinner")
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Account",
  head: {
    title: "Golden Suisse - Login",
  },
  components: {
    LoginInput: () => import("@/components/Account/LoginInput"),
    AccountButton: () => import("@/components/Account/AccountButton"),
  },
  data() {
    return {
      spinner: false,
      loginForm: {
        email: "",
        password: "",
      },
      isValid: {
        email: false,
        password: false,
      },
      validMsgEmail: false,
      validMsgPass: false,
      errMsg: "Incorrect Login Credentials!",
      serverError: false,
      api: {},
      reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
    };
  },
  methods: {
    ...mapActions(["setLoginForm"]),

    emailChanged(value) {
      if (value == null || value == "") {
        this.isValid.email = false;
        this.validMsgEmail = true;
        this.loginForm.email = value;
      } else if (!this.reg.test(value)) {
        this.isValid.email = false;
        this.validMsgEmail = true;
        this.loginForm.email = value;
      } else {
        this.isValid.email = true;
        this.loginForm.email = value;
        this.validMsgEmail = false;
      }
      if (
        this.loginForm.password.length === 0 &&
        this.loginForm.email.length === 0
      ) {
        this.validMsgEmail = false;
        this.validMsgPass = false;
      }
    },
    passChanged(value) {
      if (value == null || value == "") {
        this.isValid.password = false;
        this.validMsgPass = true;
        this.loginForm.password = value;
      } else {
        this.isValid.password = true;
        this.loginForm.password = value;
        this.validMsgPass = false;
      }
      if (
        this.loginForm.password.length === 0 &&
        this.loginForm.email.length === 0
      ) {
        this.validMsgEmail = false;
        this.validMsgPass = false;
      }
    },
    async openCodeConfirm() {
      if (this.isValid.email && this.isValid.password) {
        this.validMsgPass = false;
        this.validMsgEmail = false;
        this.serverError = false;
        this.spinner = true;

        let myHeaders = new Headers();
        myHeaders.append(
          "AuthenticationToken",
          "39a3370fd4876e70eff211d63f92c333c1962ba41a6631314affa1f5334011cef7f0cc91c35030502ef46e4e200affb2500dc368f23fed304a58c5c5d12f93dc"
        );

        // let name = "__cfduid";
        // let value = "dce1e56bd342f5dc183338afb502ac2ad1592208793";
        // document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

        const username = this.loginForm.email;
        const password = this.loginForm.password;
        var formdata = new FormData();
        formdata.append("username", username);
        formdata.append("password", password);

        let requestOptions = {
          method: "POST",
          headers: myHeaders,
          credentials: "same-origin",
          body: formdata,
        };

        await fetch(
          this.api.MY_ACCOUNT.ENDPOINT + this.api.MY_ACCOUNT.LOGIN_CHECK,
          requestOptions
        )
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
          })
          .then((data) => {
            console.log(data)
            this.spinner = false;
            if (data.status) {
              this.setLoginForm({ username: username, password: password, qr_data: data.qr_data, qr_uniquecode: data.qr_uniquecode});
              this.$router.push({
                path: "/account/authorize",
              });
            } else if (!data.status) {
              this.errMsg = data.message;
              this.serverError = true;
            }
          })
          .catch((error) => console.log("error", error));
      }
    },
    async getJson() {
      await fetch("/api.json", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          this.api = data;
        });
    },
  },
  mounted() {
    this.getJson();
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/_variables.scss";

.account {
  display: grid;
  grid-template-areas:
    ". title title title title title title title title ."
    ". email email email email password password password password ."
    ". . . . login login validMessage validMessage validMessage .";
  grid-template-columns: 3.75% repeat(8, 11.5625%) 3.75%;
  padding: 295px 0 0 0;

  @keyframes rotating {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  &__title {
    grid-area: title;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 180px;
    line-height: 39%;
    letter-spacing: -0.04em;
    color: $white;
    padding-bottom: 8.5%;
    @include adaptive(tablet) {
      margin-bottom: 80px;
    }
  }

  &__email {
    grid-area: email;
    padding: 0 5% 0 0;
  }

  &__password {
    grid-area: password;
    padding: 0 5% 0 0;
  }

  &__login {
    grid-area: login;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 31.684% 0 6.602% 0;
    position: relative;
    @include adaptive(mob) {
      padding-top: 0;
      margin-top: 60px;
    }
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
    padding: 21.123% 0 4.402% 0;

    &__decorator {
      // position: absolute;
      // right: 20%;
      width: 2px;
      height: 40px;
      background: $gold;
      // display: inline-flex;
      // padding-left: 50px;
      animation: rotating 1s linear infinite;
      margin-left: 20px;
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
  .account {
    grid-template-areas:
      ". title title ."
      ". email email ."
      ". password password ."
      ". login login ."
      ". validMessage validMessage .";
    grid-template-columns: 5.4% repeat(2, 44.6%) 5.4%;
    padding: 100px 0 0 0;

    &__title {
      padding: 0;
      font-size: 48px;
      line-height: 146%;
    }

    &__email {
      padding: 17% 0 18% 0;
    }

    &__password {
      padding: 0 0 12% 0;
    }

    &__validMessage {
      transform: none;
      display: flex;
      justify-content: center;
      padding-top: 5%;

      &__decorator {
        margin-left: 0;
      }
    }
  }
}
</style>
