<template lang="pug">
  .emailSubscribe
    .emailSubscribe__input(v-if="!$store.state.emailSubscribe")
      CustomInput(label="Email" @input-changed="inputChanged" placeholder="name@mail.com")
    .emailSubscribe__label(v-if="!$store.state.emailSubscribe") For special offers and regular news.
    .emailSubscribe__submit(v-if="!$store.state.emailSubscribe")
      .emailSubscribe__submit_button(@click="sumbit" :class="{ 'emailSubscribe__submit_button_active': isValid }") OK
    .emailSubscribe__title(v-if="$store.state.emailSubscribe") SUCCESS
    .emailSubscribe__desc(v-if="$store.state.emailSubscribe") {{email}}
      br
      |added to Golden Suisse® mailing list.
      br
      |Thank you.
</template>

<script>
export default {
  name: "EmailSubscribe",
  components: {
    CustomInput: () => import("@/components/CustomInput")
  },
  data() {
    return {
      api: {},
      email: "",
      isValid: false,
      reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
    };
  },
  beforeMount() {
    this.getJson();
  },
  methods: {
    inputChanged(value) {
      if (value == null || value == "") {
        this.isValid = false;
      } else if (!this.reg.test(value)) {
        this.isValid = false;
      } else {
        this.isValid = true;
        this.email = value;
      }
    },
    async sumbit() {
      if (this.isValid) {
        var formdata = new FormData();
        formdata.append("email", this.email);
        formdata.append("action", "subscribe");

        let requestOptions = {
          method: "POST",
          body: formdata
        };

        const url = this.api.MY_ACCOUNT.ENDPOINT + this.api.MY_ACCOUNT.SEND_EMAIL;
        await fetch(url, requestOptions)
          .then(response => {
            if (response.ok) {
              return response.json();
            }
          })
          .then(data => {
            if (data) {
              this.$store.dispatch("setEmailSubscribe", true);
            } else throw new Error("Something went wrong!");
          })
          .catch(error => console.log("error", error));
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
          console.log(this.api);
        });
    },
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/_variables.scss";

.emailSubscribe {
  display: grid;
  grid-template-areas: "input input" "label submit" "desc desc";
  grid-template-columns: 50% 50%;

  &__title {
    grid-area: input;
    font-family: Arial;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 143%;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    color: $white;
  }

  &__desc {
    grid-area: desc;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 143%;
    letter-spacing: -0.02em;
    color: $darkGrey;
  }

  &__input {
    grid-area: input;
  }

  &__label {
    grid-area: label;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 143%;
    letter-spacing: -0.02em;
    color: $darkGrey;
    padding-top: 10.815%;
  }

  &__submit {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    grid-area: submit;
    padding-left: 10%;
    padding-top: 10.815%;

    &_button {
      cursor: not-allowed;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: $black;
      color: $white;
      border: 2px solid $white;
      border-radius: 60px;
      width: 60px;
      height: 60px;
      font-family: Arial;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 143%;
      letter-spacing: -0.02em;
      text-transform: uppercase;

      transition: all linear 0.5s;
      -webkit-transition: all linear 0.5s;

      &_active {
        background-color: $white;
        color: $black;
        cursor: pointer;
      }
    }
  }
}
</style>
