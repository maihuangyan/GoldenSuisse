<template lang="pug">
  .forgot
    section.forgot__title(data-anim="fadeIn" data-anim-delay="0" :style="{ transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 10%)'}") Forgot Password
    section.forgot__email(data-anim="fadeIn" data-anim-delay="0" :style="{ transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 10%)'}")
      LoginInput(
        label="Email"
        type="text"
        @input-changed="emailChanged"
      )
    section.forgot__instructions(data-anim="fadeIn" data-anim-delay="0" :style="{ transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 10%)'}") We will send an email with instructions to your email address.
    section.forgot__reset(data-anim="fadeIn" data-anim-delay="0" :style="{ transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 10%)'}")
      AccountButton(label="reset" :isValid="isValid" @click="reset()")
    section.forgot__validMessage {{msg}}

</template>

<script>
export default {
  name: "Forgot",
  head: {
    title: "Golden Suisse - Forgot Password"
  },
  components: {
    LoginInput: () => import("@/components/Account/LoginInput"),
    AccountButton: () => import("@/components/Account/AccountButton")
  },
  data() {
    return {
      email: "",
      isValid: false,
      msg: "",
      api: {},
      reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
    };
  },
  methods: {
    emailChanged(value) {
      if (value == null || value == "") {
        if (value.length === 0) {
          this.msg = "";
        } else this.msg = "Incorrect email entered";
        this.isValid = false;
      } else if (!this.reg.test(value)) {
        this.isValid = false;
        this.msg = "Incorrect email entered";
      } else {
        this.isValid = true;
        this.msg = "";
        this.email = value;
      }
    },
    async reset() {
      if (this.isValid) {
        this.getJson();

        let myHeaders = new Headers();
        myHeaders.append(
          "AuthenticationToken",
          "39a3370fd4876e70eff211d63f92c333c1962ba41a6631314affa1f5334011cef7f0cc91c35030502ef46e4e200affb2500dc368f23fed304a58c5c5d12f93dc"
        );

        // let name = "__cfduid";
        // let value = "dce1e56bd342f5dc183338afb502ac2ad1592208793";
        // document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

        var formdata = new FormData();
        formdata.append("email", this.email);

        let requestOptions = {
          method: "POST",
          headers: myHeaders,
          credentials: "same-origin",
          body: formdata
        };

        await fetch(
          this.api.MY_ACCOUNT.ENDPOINT + this.api.MY_ACCOUNT.FORGET,
          requestOptions
        )
          .then(response => {
            if (response.ok) {
              return response.json();
            }
          })
          .then(data => {
            if (data.status) {
              this.msg = data.message;
            } else if (!data.status) {
              this.msg = data.message;
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

.forgot {
  display: grid;
  grid-template-areas:
    ". title title title title title title title title ."
    ". email email email email instructions instructions instructions instructions ."
    ". . . . reset reset validMessage validMessage validMessage .";
  grid-template-columns: 3.75% repeat(8, 11.5625%) 3.75%;
  padding: 295px 0 0 0;

  &__title {
    grid-area: title;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 60px;
    line-height: 39%;
    letter-spacing: -0.04em;

    color: $white;
    padding-bottom: 8%;
  }

  &__email {
    grid-area: email;
    padding: 3% 5% 0 0;
  }

  &__instructions {
    padding: 1% 5% 0 0;
    grid-area: instructions;
    font-family: Arial;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 229%;
    letter-spacing: -0.02em;
    color: $lightGrey;
  }

  &__reset {
    grid-area: reset;
    display: flex;
    justify-content: center;
    padding: 31.684% 0 6.602% 0;
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
  }
}

@media (max-width: 1360px) {
  .forgot {
    &__title {
      font-size: 135px;
    }
  }
}

@media (max-width: 1023px) {
  .forgot {
    grid-template-areas:
      ". title title ."
      ". email email ."
      ". instructions instructions ."
      ". reset reset ."
      ". validMessage validMessage .";
    grid-template-columns: 5.4% repeat(2, 44.6%) 5.4%;
    padding: 100px 0 0 0;

    &__title {
      padding: 0;
      font-size: 48px;
      line-height: 104%;
      letter-spacing: -0.04em;
    }

    &__email {
      padding: 23% 0 19% 0;
    }

    &__instructions {
      display: none;
    }

    &__validMessage {
      transform: none;
      display: flex;
      justify-content: center;
      padding-top: 5%;
    }
  }
}
</style>
