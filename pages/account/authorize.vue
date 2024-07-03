<template>
  <div class="inner-page">
    <section class="inner-page__section">
      <div class="main-container">
        <h1 class="page-title" data-anim="fadeIn">Secure Sign</h1>
        <div class="row" data-anim="fadeIn">
          <div class="qr">
            <img :src="qr" class="qr__img" style="padding: 10px; background: white;">
            <p class="qr__text">
              To authorize your account<br>
              Please use our secure sign from the mobile app<br>
              Expires in <span style="color: #FBC34A;">{{ getTimeString() }}</span>
            </p>
          </div>
          <!-- <login-input
            label="Authorization Code"
            :link="{ title: 'Back to Login', path: '/account' }"
            type="password"
            placeholder="••••••••••"
            @input-changed="authChanged"
          /> -->
        </div>
        <!-- <div class="auth-button-row">
          <div class="auth-button" data-anim="fadeIn">
            <account-button
              class="auth-button__button"
              label="SUBMIT"
              :isValid="isValid"
              @click="checkAuthCode"
              :spinner="spinner"
            />
            <div class="error-message-wrapper">
              <p class="error-message" v-show="errMsg">{{errMsg}}</p>
              <div class="spinner" v-show="spinner"></div>
            </div>
          </div>
        </div> -->
      </div>
    </section>
  </div>
</template>

<script>
  import { mapGetters } from "vuex";
  export default {
    middleware: 'auth',
    components: {
      LoginInput: () => import("@/components/Account/LoginInput"),
      AccountButton: () => import("@/components/Account/AccountButton"),
    },
    data:() => ({
      spinner: false,
      isValid: false,
      errMsg: false,
      api: '',
      qr: '',
      authCode: '',
      expire_seconds: 150,
      interval: null
    }),
    beforeMount() {
      this.getJson();
      this.qr = this.$store.state.loginForm.qr_data;
    },
    mounted() {
      this.interval = setInterval(() => {
        //console.log('interval', this.interval);
        this.checkAuthorize();
      }, 1000);
    },
    destroyed() {
      clearInterval(this.interval);
      this.interval = null;
      console.log('destroyed');
    },
    beforeDestroy() {
      clearInterval(this.interval);
      this.interval = null;
      console.log('beforeDestroy');
    },
    computed: {
      ...mapGetters(["getLoginForm"])
    },
    methods: {
      checkAuthorize() {
        //console.log(this.expire_seconds)
        if (this.expire_seconds > 0) {
          this.expire_seconds--;
        } else {
          this.interval = null;
          window.location.href = this.api.MY_ACCOUNT.RESET_REDIRECT;
        }
        if (this.expire_seconds > 0 && this.expire_seconds % 3 == 0) { // every 3 second
          this.checkAuthCode();
        }
      },
      getTimeString() {
        let minute = Math.floor(this.expire_seconds / 60) + '';
        let second = this.expire_seconds % 60 + '';
        if (second.length < 2) second = '0' + second;
        return minute + ':' + second;
      },
      authChanged(value) {
        if (value && value.length > 2) {
          this.isValid = true;
        }
        else {
          this.isValid = false;
        }
        this.authCode = value;
      },
      async checkAuthCode() {
        this.spinner = true;
        let myHeaders = new Headers();
        myHeaders.append(
          "AuthenticationToken",
          "39a3370fd4876e70eff211d63f92c333c1962ba41a6631314affa1f5334011cef7f0cc91c35030502ef46e4e200affb2500dc368f23fed304a58c5c5d12f93dc"
        );

        var formdata = new FormData();
        formdata.append("Username", this.getLoginForm.username);
        formdata.append("UniqueQrCode", this.getLoginForm.qr_uniquecode);
        // formdata.append("AuthCode", this.authCode);
        for (let value of formdata.values()) {
          console.log(value);
        }
        let requestOptions = {
          method: "POST",
          headers: myHeaders,
          credentials: "same-origin",
          body: formdata
        };
        const url = this.api.MY_ACCOUNT.ENDPOINT + this.api.MY_ACCOUNT.AUTH_CHECK;
        // console.log('url', url);
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
            // console.log(data);
            if (data.message === 'Success') {
              document.cookie = 'profile=' + JSON.stringify(data.profile);
              window.location.href = this.api.MY_ACCOUNT.ENDPOINT + this.api.MY_ACCOUNT.REDIRECT;
              //window.location.href = data.redirect_url;
            } else if (!data.status) {
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
</style>
