<template>
  <div class="inner-page">
    <section class="inner-page__section">
      <div class="main-container">
        <h1 class="page-title" data-anim="fadeIn">{{this.success ? 'Success' : 'Reset Password'}}</h1>
        <div class="row" data-anim="fadeIn" v-show="!this.success" style="margin-top: 50px;">
          <login-input
            label="New Password"
            type="password"
            placeholder="••••••••••"
            @input-changed="passwordChanged"
          />
          <login-input
            label="Confirm Password"
            type="password"
            placeholder="••••••••••"
            @input-changed="confirmChanged"
            class="confirm-password"
          />
        </div>
        <div class="auth-button-row" v-show="!this.success">
          <div class="auth-button" data-anim="fadeIn">
            <account-button
              class="auth-button__button"
              label="SUBMIT"
              :isValid="isValid && isConfirmed && code.length > 10"
              @click="resetPassword"
              :spinner="spinner"
            />
            <div class="error-message-wrapper">
              <p class="error-message" v-show="errMsg">{{errMsg}}</p>
              <div class="spinner" v-show="spinner"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import { mapGetters } from "vuex";
  export default {
    components: {
      LoginInput: () => import("@/components/Account/LoginInput"),
      AccountButton: () => import("@/components/Account/AccountButton"),
    },
    data:() => ({
      spinner: false,
      isValid: false,
      isConfirmed: false,
      errMsg: false,
      api: '',
      password: '',
      confirm: '',
      code: '',
      success: false,
    }),
    mounted() {
        this.code = this.$route.query.code;
        if (!this.code) {
          this.$router.replace('/');
        }
    },
    beforeMount() {
      this.getJson();
    },
    computed: {
      ...mapGetters(["getLoginForm"])
    },
    methods: {
      passwordChanged(value) {
        if (value && value.length > 5) {
          this.isValid = true;
        }
        else {
          this.isValid = false;
        }
        this.password = value;
        if (this.confirm == value) {
            this.isConfirmed = true;
        } else {
            this.isConfirmed = false;
        }
      },
      confirmChanged(value) {
        if (this.password == value) {
            this.isConfirmed = true;
        } else {
            this.isConfirmed = false;
        }
        this.confirm = value;
      },
      async resetPassword() {
        this.spinner = true;
        let myHeaders = new Headers();
        myHeaders.append(
          "AuthenticationToken",
          "39a3370fd4876e70eff211d63f92c333c1962ba41a6631314affa1f5334011cef7f0cc91c35030502ef46e4e200affb2500dc368f23fed304a58c5c5d12f93dc"
        );

        // let name = "__cfduid";
        // let value = "dce1e56bd342f5dc183338afb502ac2ad1592208793";
        // document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

        var formdata = new FormData();
        formdata.append("code", this.code);
        formdata.append("password", this.password);
        for (let value of formdata.values()) {
          console.log(value);
        }
        let requestOptions = {
          method: "POST",
          headers: myHeaders,
          credentials: "same-origin",
          body: formdata
        };
        const url = this.api.MY_ACCOUNT.ENDPOINT + this.api.MY_ACCOUNT.RESET;
        console.log('url', url);
        await fetch(
          url,
          requestOptions
        )
          .then(response => {
            if (response.ok) {
              return response.json();
            }
          })
          .then(data => {
            this.spinner = false;
            console.log(data);
            if (data.status) {
              this.success = true;
              
              setTimeout(() => {
                window.location.href = data.redirect_url;
              }, 2000);
            } else {
              this.errMsg = data.message;
            }
          })
          .catch(error => console.log("error", error));
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
            console.log(this.api);
          });
      },
    }
  }
</script>

<style lang="scss" scoped>
  .page-title {
    font-size: 60px;
  }
  .row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 30px;
    @include adaptive(mob) {
      display: block;
    }
  }
  .qr {
    display: flex;
    align-items: flex-start;
    @include adaptive(mob) {
      margin-bottom: 60px;
    }
    &__img {
      max-width: 150px;
    }
    &__text {
      margin-left: 35px;
      font-size: 12px;
      color: $lightGrey;
      line-height: 25px;
      font-weight: 500;
    }
  }
  .confirm-password {
    margin-left: 30px;
  }
  .auth-button-row {
    margin-top: 60px;
    display: flex;
    justify-content: center;
    @include adaptive(mob) {
      margin-top: 30px;
      flex-direction: column;
      align-items: center;
    }
  }
  .auth-button {
    position: relative;
    display: flex;
    align-items: center;
    @include adaptive(mob) {
      flex-direction: column;
      width: 100%;
    }
    &__button {
      @include adaptive(mob) {
        flex-shrink: 0;
      }
    }
  }
  .error-message {
    font-family: Arial;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 229%;
    letter-spacing: -0.02em;
    color: $white;
    transition: 0.5s;
    position: absolute;
    width: 400px;
    display: flex;
    align-items: center;
    @include adaptive(mob) {
      width: auto;
      position: static;
      text-align: center;
    }
  }
  .error-message-wrapper {
    position: absolute;
    right: -40px;
    display: flex;
    align-items: center;
    height: 100%;
    @include adaptive(mob) {
      position: static;
      width: 100%;
      margin-top: 30px;
      display: flex;
      justify-content: center;
    }
  }
  .spinner {
    width: 2px;
    height: 40px;
    background: $gold;
    animation: rotating 1s linear infinite;
    position: absolute;
  }
  @keyframes rotating {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @media (max-width: 1023px) {
    .confirm-password {
      margin-left: 0px;
      margin-top: 100px;
    }
    .page-title {
      padding: 0;
      font-size: 48px;
      line-height: 146%;
    }
  }
</style>
