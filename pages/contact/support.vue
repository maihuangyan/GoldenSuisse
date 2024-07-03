<template lang="pug">
.support
  section.support__title Support
  section.support__info1 Please enter the details of your request.
  section.support__info2 A member of our support staff will respond as soon as possible.
  section.support__info3
    a(href="tel:+41415001466") + 41 415001466
  section.support__info4
    a(href="mailto:support@goldensuisse.com") support@goldensuisse.com
  section.support__name
    LoginInput(
      label="Name",
      type="text",
      placeholder="Your Name",
      @input-changed="loginChanged"
    )
  section.support__email
    LoginInput(
      label="Email",
      type="text",
      placeholder="Your Email",
      @input-changed="emailChanged"
    )
  section.support__subject
    LoginInput(
      label="Subject",
      type="text",
      placeholder="Your Subject",
      @input-changed="subjectChanged"
    )
  section.support__message
    .support__message_label Message
    textarea.support__message_textarea(
      rows="5",
      maxlength="280",
      placeholder="Your message",
      v-model="message"
    )
  section.support__join(
    data-anim="fadeIn",
    data-anim-delay=".3",
    :style="{opcity:1}"
  )
    AccountButton(
      label="send",
      :isValid="isValid.name && isValid.email && isValid.subject && isValid.message",
      @click="send()"
    )
  section.support__validMessage(
    v-show="!isEmpty && (!isValid.name || !isValid.email || !isValid.subject || !isValid.message)"
  ) {{ errMsg }}

  section.support__award(
    data-anim="fadeIn",
    data-anim-delay=".3",
    :style="{}"
  ) Award Winning Systems
  section.support__app(
    data-anim="fadeIn",
    data-anim-delay=".3",
    :style="{opcity:1}"
  )
    .support__app_title(
      data-anim="fadeIn",
      data-anim-delay=".3",
      :style="{opcity:1}",
      @click="$router.push({ path: '/payments/card/club' })"
    ) The Club
    .support__app_desc(
      data-anim="fadeIn",
      data-anim-delay=".3",
      :style="{opcity:1}"
    ) Desktop & Mobile
  section.support__desc(
    data-anim="fadeIn",
    data-anim-delay=".3",
    :style="{opcity:1}"
  )
    .support__desc_title(
      data-anim="fadeIn",
      data-anim-delay=".5",
      :style="{opcity:1}",
      @click="$router.push({ path: '/company/rates' })"
    ) Rates
    .support__desc_desc(
      data-anim="fadeIn",
      data-anim-delay=".5",
      :style="{opcity:1}"
    ) Privately vaulted precious metals
  section.support__adv(
    data-anim="fadeIn",
    data-anim-delay=".3",
    :style="{opcity:1}"
  )
    .support__adv_title Apply for a
    .support__adv_desc Private Swiss vault account
  section.support__createAcc
    .support__createAcc_container
      FlowButton(label="Become a Client", path="/account/register")
</template>

<script>
export default {
  name: "Support",
  head: {
    title: "Golden Suisse - Support",
  },
  components: {
    LoginInput: () => import("@/components/Account/LoginInput"),
    AccountButton: () => import("@/components/Account/AccountButton"),
    FlowButton: () => import("@/components/FlowButton"),
  },
  data() {
    return {
      message: "",
      supportForm: {
        name: "",
        email: "",
        subject: "",
        message: "",
        api: {}
      },
      isValid: {
        name: false,
        email: false,
        subject: false,
        message: false,
      },
      errMsg: "Incorrect appeal",
      reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
    };
  },
  beforeMount() {
    this.getJson();
  },
  computed: {
    isEmpty() {
      if (
        this.supportForm.name.length === 0 &&
        this.supportForm.email.length === 0 &&
        this.supportForm.subject.length === 0 &&
        this.supportForm.message.length === 0
      )
        return true;
      else return false;
    },
  },
  methods: {
    loginChanged(value) {
      value = value.replace(/\s/g, '');
      if (value.length > 0) {
        this.supportForm.name = value;
        this.isValid.name = true;
      } else {
        this.isValid.name = false;
        this.supportForm.name = "";
      }
    },
    emailChanged(value) {
      value = value.replace(/\s/g, '');
      if (value == null || value == "") {
        this.isValid.email = false;
        this.supportForm.email = value;
      } else if (!this.reg.test(value)) {
        this.isValid.email = false;
        this.supportForm.email = value;
      } else {
        this.isValid.email = true;
        this.supportForm.email = value;
      }
    },
    subjectChanged(value) {
      // value = value.replace(/\s/g, '');
      if (value.length > 0) {
        this.supportForm.subject = value;
        this.isValid.subject = true;
      } else {
        this.isValid.subject = false;
        this.supportForm.subject = "";
      }
    },
    async send() {
      if (
        this.isValid.name &&
        this.isValid.email &&
        this.isValid.subject &&
        this.isValid.message
      ) {
        var formdata = new FormData();
        formdata.append("name", this.supportForm.name);
        formdata.append("email", this.supportForm.email);
        formdata.append("subject", this.supportForm.subject);
        formdata.append("message", this.supportForm.message);
        formdata.append("action", "support");

        let requestOptions = {
          method: "POST",
          body: formdata,
        };

        const url = this.api.MY_ACCOUNT.ENDPOINT + this.api.MY_ACCOUNT.SEND_EMAIL;
        await fetch(url, requestOptions)
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
          })
          .then((data) => {
            if (data) {
              this.$router.push({ path: "/success" });
            } else throw new Error("Something went wrong!");
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
          console.log(this.api);
        });
    },
  },
  watch: {
    message(value) {
      //value = value.replace(/\s/g, '');
      if (value.length > 0) {
        this.supportForm.message = value;
        this.isValid.message = true;
      } else {
        this.supportForm.message = "";
        this.isValid.message = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/_variables.scss";

.support {
  display: grid;
  grid-template-areas:
    ". title title title title title title title title ."
    ". info1 info1 info2 info2 info3 info4 info4 . ."
    ". name name name name email email email email ."
    ". subject subject subject subject subject subject subject subject ."
    ". message message message message message message message message ."
    ". . . . join join validMessage validMessage validMessage ."
    ". award award award award award award award award ."
    "app app app app app desc desc desc desc desc"
    ". adv adv adv adv adv adv adv adv ."
    ". createAcc createAcc createAcc createAcc createAcc createAcc createAcc createAcc .";
  grid-template-columns: 3.75% repeat(8, 11.5625%) 3.75%;
  padding: 295px 0 0 0;

  &__title {
    grid-area: title;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 180px;
    line-height: 100%;
    letter-spacing: -0.04em;
    color: $white;
    border-bottom: 2px solid $white;
    padding-bottom: 8%;
  }

  &__info1,
  &__info2,
  &__info3,
  &__info4 {
    font-family: Arial;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 32px;
    /* or 229% */

    letter-spacing: -0.02em;
    color: $lightGrey;
    padding-top: 19%;
  }

  &__info1 {
    grid-area: info1;
  }

  &__info2 {
    grid-area: info2;
    padding-right: 45%;
  }

  &__info3 {
    grid-area: info3;
    padding-top: 37%;
    color: $white;
  }

  &__info3 > a {
    color: $lightGrey;
    text-decoration: none;
  }

  &__info4 {
    grid-area: info4;
  }

  &__info4 > a {
    color: $lightGrey;
    text-decoration: none;
  }

  &__name {
    grid-area: name;
    padding: 22% 5% 0% 0;
  }

  &__email {
    grid-area: email;
    padding: 22% 0 0 5%;
  }

  &__subject {
    grid-area: subject;
    padding-top: 2%;
  }

  &__message {
    grid-area: message;
    padding-top: 60px;

    &_label {
      font-family: Arial;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 229%;
      letter-spacing: -0.02em;
      color: $darkGrey;
      transition: 0.2s ease all;
    }
  }

  &__join {
    grid-area: join;
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

  &__award {
    grid-area: award;
    padding: 2% 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Arial;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 417%;
    letter-spacing: -0.04em;
    text-transform: uppercase;
    color: $white;
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

  &__adv {
    grid-area: adv;
    display: block;
    text-align: center;
    height: 100%;
    padding: 8% 0 4% 0;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    color: $darkGrey;
    line-height: 143%;
    letter-spacing: -0.04em;

    &_title {
      width: 100%;
    }

    &_desc {
      width: 100%;
    }
  }

  &__createAcc {
    grid-area: createAcc;
    display: flex;
    justify-content: center;
    padding: 0;
    padding-bottom: 8%;

    &_container {
      width: 370px;
    }
  }
}

textarea {
  resize: none !important;
  overflow: auto !important;
  outline: none;
  box-shadow: none !important;
  border: none;

  &:hover {
    resize: none !important;
    overflow: auto !important;
    outline: none;
    box-shadow: none !important;
    border: none;
  }
}

.support__message_textarea {
  border: none;
  width: 100%;
  background-color: #101010;
  background-image: -webkit-linear-gradient(left, #101010 0, transparent 0),
    -webkit-linear-gradient(right, #101010 0, transparent 0),
    -webkit-linear-gradient(#101010 0px, $darkGrey 0, $darkGrey 2px, #101010 2px);
  color: $white;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 80px;
  letter-spacing: -0.02em;
  background-repeat: repeat-y;
  background-position-y: -2px;
  background-size: 100% 100%, 100% 100%, 100% 80px;
  background-attachment: local;
  transition: all 0.5s;
}

.support__message_textarea:focus ~ .support__message_label,
.support__message_textarea:valid ~ .support__message_label {
  color: $white;
}

.support__message_textarea:focus {
  background-image: -webkit-linear-gradient(left, #101010 0, transparent 0),
    -webkit-linear-gradient(right, #101010 0, transparent 0),
    -webkit-linear-gradient(#101010 0px, $white 0, $white 2px, #101010 2px);
}

@media (max-width: 1023px) {
  .support {
    grid-template-areas:
      ". title title ."
      ". info1 info1 ."
      ". info2 info2 ."
      ". info3 info3 ."
      ". info4 info4 ."
      ". name name ."
      ". email email ."
      ". subject subject ."
      ". message message ."
      ". join join ."
      ". validMessage validMessage ."
      ". award award ."
      ". app desc ."
      ". adv adv ."
      ". createAcc createAcc .";
    grid-template-columns: 5.4% repeat(2, 44.6%) 5.4%;
    padding: 100px 0 0 0;

    &__title {
      padding: 0;
      padding-bottom: 7%;
      font-size: 48px;
      line-height: 104%;
      letter-spacing: -0.04em;
    }

    &__info1,
    &__info2 {
      font-family: Arial;
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 125%;
      letter-spacing: -0.04em;
      color: $white;
      padding: 0;
    }

    &__info1 {
      padding-top: 40px;
    }

    &__info3,
    &__info4 {
      font-family: Arial;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 150%;
      letter-spacing: -0.02em;
      color: $white;
      padding: 0;
    }

    &__info3 {
      padding-top: 40px;
    }

    &__name {
      padding: 0;
      padding-top: 80px;
    }

    &__email {
      padding: 0;
      padding-top: 40px;
    }

    &__subject {
      padding: 0;
      padding-top: 40px;
    }

    &__message {
      &_label {
        font-weight: normal;
        font-size: 14px;
        line-height: 214%;
        letter-spacing: -0.02em;
      }
    }

    &__validMessage {
      transform: none;
      display: flex;
      justify-content: center;
      padding-top: 5%;
    }

    &__award {
      padding: 35% 0 6.5% 0;
      font-size: 14px;
      line-height: 143%;
      letter-spacing: -0.04em;
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

    &__adv {
      padding: 17% 0 0 0;
    }

    &__createAcc {
      padding: 13% 0 5% 0;
    }
  }

  .support__message_textarea {
    font-size: 20px;
    line-height: 40px;
    letter-spacing: -0.02em;
    background-size: 100% 100%, 100% 100%, 100% 40px;
  }
}
</style>
