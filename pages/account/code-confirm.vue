<template lang="pug">
  .codeConfirm
    .codeConfirm__logo(data-anim="fadeIn" data-anim-delay="0" :style="{opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 10%)'}")
      img.codeConfirm__logo_img(:src="require('@/static/image/LogomarkOwnership.png')")
    .codeConfirm__desc(data-anim="fadeIn" data-anim-delay="0" :style="{opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 10%)'}")
      | Check Verification SMS Code
      br
      | on your mobile.
    .codeConfirm__input(data-anim="fadeIn" data-anim-delay="0" :style="{opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 10%)'}")
      LoginInput(
        label="Code"
        type="password"
        action="Send again?"
        @action-commit="sendAgain"
        @input-changed="codeChanged"
        placeholder="•••••••"
      )
    .codeConfirm__button(data-anim="fadeIn" data-anim-delay="0" :style="{opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 10%)'}")
      AccountButton(label="VERIFY" :isValid="isValidCode" @click="sendCode")
    section.codeConfirm__validMessage(v-show="validMsg || serverValidMsg") {{errMsg}}


    .codeConfirm__footer(data-anim="fadeIn" data-anim-delay="0" :style="{opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 10%)'}") {{getCopyright()}}
</template>

<script>
import { mapGetters } from "vuex";
import copyright from '../../utils/copyright.js'

export default {
  name: "codeConfirm",
  head: {
    title: "Golden Suisse - Code Confirm"
  },
  layout: "noFooterNoHeader",
  props: ["formdata"],
  components: {
    LoginInput: () => import("@/components/Account/LoginInput"),
    AccountButton: () => import("@/components/Account/AccountButton")
  },
  computed: {
    ...mapGetters(["getLoginForm"])
  },
  data() {
    return {
      isValidCode: false,
      code: "",
      validMsg: false,
      errMsg: "Incorrect Code!",
      serverValidMsg: false,
      api: {}
    };
  },
  methods: {
    getCopyright() {
      return copyright()
    },
    codeChanged(value) {
      if (value.length > 0) {
        this.isValidCode = true;
        this.validMsg = false;
      } else {
        this.isValidCode = false;
        this.validMsg = true;
      }
      if (value.length === 0) this.validMsg = false;
      this.code = value;
    },
    sendAgain() {
      console.log("GET CODE AGAIN");
    },
    async sendCode() {
      if (this.isValidCode) {
        let myHeaders = new Headers();
        myHeaders.append(
          "AuthenticationToken",
          "39a3370fd4876e70eff211d63f92c333c1962ba41a6631314affa1f5334011cef7f0cc91c35030502ef46e4e200affb2500dc368f23fed304a58c5c5d12f93dc"
        );

        // let name = "__cfduid";
        // let value = "dce1e56bd342f5dc183338afb502ac2ad1592208793";
        // document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

        var formdata = new FormData();
        formdata.append("verification_code", this.code);
        formdata.append("username", this.getLoginForm.username);
        formdata.append("password", this.getLoginForm.password);

        let requestOptions = {
          method: "POST",
          headers: myHeaders,
          credentials: "same-origin",
          body: formdata
        };

        await fetch(
          this.api.MY_ACCOUNT.ENDPOINT + this.api.MY_ACCOUNT.LOGIN_CHECK,
          requestOptions
        )
          .then(response => {
            if (response.ok) {
              return response.json();
            }
          })
          .then(data => {
            if (data.status) {
              window.location.href =
                this.api.MY_ACCOUNT.ENDPOINT + this.api.MY_ACCOUNT.REDIRECT;
            } else if (!data.status) {
              this.errMsg = data.message;
              this.serverValidMsg = true;
            }
          })
          .catch(error => console.log("error", error));
      }
    },
    async getJson() {
      await fetch("/api.json", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          }
        })
        .then(data => {
          this.api = data;
        });
    }
  },
  mounted() {
    this.getJson();
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/_variables.scss";

.codeConfirm {
  display: grid;
  grid-template-areas:
    ". logo logo logo logo logo logo logo logo ."
    ". desc desc desc desc desc desc desc desc ."
    ". . . input input input input . . ."
    ". . . . button button validMessage validMessage validMessage ."
    ". footer footer footer footer footer footer footer footer .";
  grid-template-columns: 3.75% repeat(8, 11.5625%) 3.75%;
  padding: 150px 0 40px 0;

  &__logo {
    grid-area: logo;
    display: flex;
    justify-content: center;

    &_img {
      width: 230px;
      height: 230px;
    }
  }

  &__desc {
    grid-area: desc;
    display: flex;
    justify-content: center;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 171%;
    text-align: center;
    letter-spacing: -0.02em;
    color: $white;
    padding-top: 40px;
  }

  &__input {
    grid-area: input;
    padding-top: 41px;
  }

  &__button {
    grid-area: button;
    display: flex;
    justify-content: center;
    padding-top: 14px;
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
    padding: 14px 0 0 0;
  }

  &__footer {
    grid-area: footer;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 214%;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -0.02em;
    color: $darkGrey;
    display: flex;
    justify-content: center;
    padding-top: 210px;
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
  .codeConfirm {
    grid-template-areas:
      ". logo logo ."
      ". desc desc ."
      ". input input ."
      ". button button ."
      ". validMessage validMessage ."
      ". footer footer .";
    grid-template-columns: 5.4% repeat(2, 44.6%) 5.4%;
    padding: 60px 0 0 0;

    &__logo {
      &_img {
        width: 140px;
        height: 140px;
      }
    }

    &__desc {
      padding-top: 30px;
    }

    &__input {
      padding-top: 50px;
    }

    &__button {
      padding-top: 35px;
    }

    &__validMessage {
      transform: none;
      display: flex;
      justify-content: center;
      padding-top: 5%;
    }

    &__footer {
      padding: 130px 0 10px 0;
    }
  }
}
</style>
