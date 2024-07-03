<template lang="pug">
  .companyMap
    transition(v-on:before-leave="beforeLeave" v-on:before-enter="beforeEnter")
      CompanyIcon.companyMap__iconNairobi(v-if="icons.includes(7)")
    transition(v-on:before-leave="beforeLeave" v-on:before-enter="beforeEnter")
      CompanyIcon.companyMap__iconAlaska(v-if="icons.includes(9)")
    transition(v-on:before-leave="beforeLeave" v-on:before-enter="beforeEnter")
      CompanyIcon.companyMap__iconBrasilia(v-if="icons.includes(4)")
    transition(v-on:before-leave="beforeLeave" v-on:before-enter="beforeEnter")
      CompanyIcon.companyMap__iconSingapore(v-if="icons.includes(6)")
    transition(v-on:before-leave="beforeLeave" v-on:before-enter="beforeEnter")
      CompanyIcon.companyMap__iconAbuDhabi(v-if="icons.includes(5)")
    transition(v-on:before-leave="beforeLeave" v-on:before-enter="beforeEnter")
      CompanyIcon.companyMap__iconCanberra(v-if="icons.includes(8)")
    transition(v-on:before-leave="beforeLeave" v-on:before-enter="beforeEnter")
      CompanyIcon.companyMap__iconTokyo(v-if="icons.includes(3)")
    transition(v-on:before-leave="beforeLeave" v-on:before-enter="beforeEnter")
      CompanyIcon.companyMap__iconMoscow(v-if="icons.includes(2)")
    transition(v-on:before-leave="beforeLeave" v-on:before-enter="beforeEnter")
      CompanyIcon.companyMap__iconWashington(v-if="icons.includes(1)")
    transition(v-on:before-leave="beforeLeave" v-on:before-enter="beforeEnter")
      CompanyIcon.companyMap__iconSwiss
    transition(name="fade")
      .companyMap__title Traditional
        br
        | Vaulted Precious
        br
        | Metals
    transition(name="fade")
      .companyMap__desc Gold & Silver
    transition(name="fade")
      img.companyMap__map(src="@/static/image/map1.png")
</template>

<script>
import gsap from "gsap";

export default {
  name: "CompanyMap",
  components: {
    CompanyIcon: () => import("@/components/Company/CompanyIcon")
  },
  computed: {
    cosinus() {
      return Math.cos(Math.PI / 4);
    }
  },
  data() {
    return {
      icons: [],
      timeout: 0.8
    };
  },
  methods: {
    beforeEnter(el) {
      gsap.to(el.children[0], this.timeout + 0.4, {
        attr: {
          x2: 100,
          y2: 30
        }
      });
      gsap.to(el.children[1], this.timeout, {
        attr: {
          y2: 0
        }
      });
      gsap.to(el.children[2], this.timeout + 0.25, {
        attr: {
          x2: 30,
          y2: 30
        }
      });
      gsap.to(el.children[3], this.timeout, {
        attr: {
          x2: 0
        }
      });
      gsap.to(el.children[4], this.timeout + 0.25, {
        attr: {
          x2: 30,
          y2: 100
        }
      });
      gsap.to(el.children[5], this.timeout, {
        attr: {
          y2: 65 + 60 + 5
        }
      });
      gsap.to(el.children[6], this.timeout + 0.25, {
        attr: {
          x2: 100,
          y2: 100
        }
      });
      gsap.to(el.children[7], this.timeout, {
        attr: {
          x2: 130
        }
      });
    },
    beforeLeave(el) {
      gsap.to(el.children[0], this.timeout + 0.4, {
        attr: {
          x2: 65 - 5.5 / 2,
          y2: 65 + 5.5 / 2
        }
      });
      gsap.to(el.children[1], this.timeout, {
        attr: {
          y2: 65
        }
      });
      gsap.to(el.children[2], this.timeout + 0.25, {
        attr: {
          x2: 65 - 15.225 * this.cosinus,
          y2: 65 - 15.225 * this.cosinus
        }
      });
      gsap.to(el.children[3], this.timeout, {
        attr: {
          x2: 65 - 15.225
        }
      });
      gsap.to(el.children[4], this.timeout + 0.25, {
        attr: {
          x2: 65 - 15.225 * this.cosinus,
          y2: 65 + 15.225 * this.cosinus
        }
      });
      gsap.to(el.children[5], this.timeout, {
        attr: {
          y2: 65 + 15.225
        }
      });
      gsap.to(el.children[6], this.timeout + 0.25, {
        attr: {
          x2: 65 + 15.225 * this.cosinus,
          y2: 65 + 15.225 * this.cosinus
        }
      });
      gsap.to(el.children[7], this.timeout, {
        attr: {
          x2: 65 + 15.225
        }
      });
    },
    changeMapIcon(min, max) {
      let arr = [];
      if (window.innerWidth > 1024) arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      else arr = [1, 2, 3, 4, 5, 6, 7, 8];
      arr = arr.filter(item => this.icons.indexOf(item) < 0);
      let rndOld = this.icons[Math.floor(Math.random() * (arr.length - 1))];
      let rndNew = arr[Math.floor(Math.random() * (arr.length - 1))];
      this.icons = this.icons.filter(item => item != rndOld);
      this.icons.push(rndNew);
      setTimeout(this.changeMapIcon, 3000);
    }
  },
  mounted() {
    let arr = [];
    if (window.innerWidth > 1024) arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    else arr = [1, 2, 3, 4, 5, 6, 7, 8];
    while (this.icons.length < 4) {
      let rnd = arr[Math.floor(Math.random() * arr.length)];
      if (!this.icons.includes(rnd)) {
        this.icons.push(rnd);
        arr.filter(item => item != rnd);
      }
    }
    setTimeout(this.changeMapIcon, 3000);
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/_variables.scss";

.companyMap {
  position: relative;
  height: 100%;
  width: 100%;

  &__title {
    position: absolute;
    bottom: 6%;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 150%;
    letter-spacing: -0.02em;
    color: $white;
    padding-left: 3.75%;
  }

  &__desc {
    position: absolute;
    bottom: 2.5%;
    font-family: Arial;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: -0.02em;
    color: $lightGrey;
    padding-left: 3.75%;
  }

  &__iconSwiss {
    position: absolute;
    top: 33%;
    left: 44.5%;
  }

  &__iconWashington {
    position: absolute;
    top: 38%;
    left: 21%;
    transform: scale(0.6);
    opacity: 0.4;
  }

  &__iconMoscow {
    position: absolute;
    top: 27%;
    left: 53%;
    transform: scale(0.6);
    opacity: 0.4;
  }

  &__iconTokyo {
    position: absolute;
    top: 37%;
    left: 85%;
    transform: scale(0.6);
    opacity: 0.4;
  }

  &__iconCanberra {
    position: absolute;
    top: 81%;
    left: 87%;
    transform: scale(0.5);
    opacity: 0.4;
  }

  &__iconAlaska {
    position: absolute;
    top: 10%;
    left: 5%;
    transform: scale(0.4);
    opacity: 0.4;
  }

  &__iconBrasilia {
    position: absolute;
    top: 66%;
    left: 27%;
    transform: scale(0.5);
    opacity: 0.4;
  }

  &__iconSingapore {
    position: absolute;
    top: 58%;
    left: 75%;
    transform: scale(0.4);
    opacity: 0.4;
  }

  &__iconAbuDhabi {
    position: absolute;
    top: 45.5%;
    left: 60%;
    transform: scale(0.5);
    opacity: 0.4;
  }

  &__iconNairobi {
    position: absolute;
    top: 60%;
    left: 55%;
    transform: scale(0.4);
    opacity: 0.4;
  }

  &__map {
    width: 100%;
    opacity: 0.04;
  }
}

@media (min-width: 2000px) {
  .companyMap {
    &__iconSwiss {
      position: absolute;
      top: 36%;
      left: 46%;
      transform: scale(1.2);
    }

    &__iconWashington {
      position: absolute;
      top: 38%;
      left: 23%;
      transform: scale(0.8);
      opacity: 0.4;
    }

    &__iconMoscow {
      position: absolute;
      top: 30%;
      left: 54.5%;
      transform: scale(0.8);
      opacity: 0.4;
    }

    &__iconTokyo {
      position: absolute;
      top: 39%;
      left: 85.5%;
      transform: scale(0.8);
      opacity: 0.4;
    }

    &__iconCanberra {
      position: absolute;
      top: 84%;
      left: 88%;
      transform: scale(0.7);
      opacity: 0.4;
    }

    &__iconAlaska {
      position: absolute;
      top: 13%;
      left: 6%;
      transform: scale(0.6);
      opacity: 0.4;
    }

    &__iconBrasilia {
      position: absolute;
      top: 68%;
      left: 30%;
      transform: scale(0.7);
      opacity: 0.4;
    }

    &__iconSingapore {
      position: absolute;
      top: 60%;
      left: 75.5%;
      transform: scale(0.6);
      opacity: 0.4;
    }

    &__iconAbuDhabi {
      position: absolute;
      top: 48%;
      left: 61%;
      transform: scale(0.7);
      opacity: 0.4;
    }

    &__iconNairobi {
      position: absolute;
      top: 62%;
      left: 56%;
      transform: scale(0.6);
      opacity: 0.4;
    }
  }
}

@media (max-width: 1500px) {
  .companyMap {
    &__iconSwiss {
      top: 32%;
      left: 43.5%;
      transform: scale(0.8);
    }

    &__iconWashington {
      top: 36.5%;
      left: 19.5%;
      transform: scale(0.5);
    }

    &__iconMoscow {
      top: 26.5%;
      left: 52.5%;
      transform: scale(0.5);
    }

    &__iconTokyo {
      top: 35%;
      left: 83%;
      transform: scale(0.5);
    }

    &__iconCanberra {
      top: 79%;
      left: 86%;
      transform: scale(0.4);
    }

    &__iconAlaska {
      top: 9%;
      left: 4%;
      transform: scale(0.3);
    }

    &__iconBrasilia {
      top: 64%;
      left: 27%;
      transform: scale(0.4);
    }

    &__iconSingapore {
      top: 55.5%;
      left: 73%;
      transform: scale(0.3);
    }

    &__iconAbuDhabi {
      top: 44.5%;
      left: 59%;
      transform: scale(0.4);
    }

    &__iconNairobi {
      top: 58.5%;
      left: 53.5%;
      transform: scale(0.3);
    }
  }
}

@media (max-width: 1300px) {
  .companyMap {
    &__iconSwiss {
      top: 30%;
      left: 42.5%;
      transform: scale(0.7);
    }

    &__iconWashington {
      top: 34%;
      left: 18%;
      transform: scale(0.4);
    }

    &__iconMoscow {
      top: 25%;
      left: 51%;
      transform: scale(0.4);
    }

    &__iconTokyo {
      top: 34%;
      left: 82%;
      transform: scale(0.4);
    }

    &__iconCanberra {
      top: 78%;
      left: 85%;
      transform: scale(0.3);
    }

    &__iconAlaska {
      top: 8%;
      left: 3%;
      transform: scale(0.2);
    }

    &__iconBrasilia {
      top: 63%;
      left: 27%;
      transform: scale(0.3);
    }

    &__iconSingapore {
      top: 54%;
      left: 72.5%;
      transform: scale(0.2);
    }

    &__iconAbuDhabi {
      top: 43%;
      left: 58%;
      transform: scale(0.3);
    }

    &__iconNairobi {
      top: 57%;
      left: 53%;
      transform: scale(0.2);
    }
  }
}

@media (max-width: 1200px) {
  .companyMap {
    &__title {
      font-size: 30px;
    }
  }
}

@media (max-width: 1150px) {
  .companyMap {
    &__iconSwiss {
      top: 29%;
      left: 42%;
      transform: scale(0.6);
    }

    &__iconWashington {
      top: 34%;
      left: 17%;
      transform: scale(0.4);
    }

    &__iconMoscow {
      top: 23%;
      left: 50%;
      transform: scale(0.4);
    }

    &__iconTokyo {
      top: 33%;
      left: 81%;
      transform: scale(0.4);
    }

    &__iconCanberra {
      top: 77%;
      left: 84%;
      transform: scale(0.3);
    }

    &__iconAlaska {
      top: 6%;
      left: 3%;
      transform: scale(0.2);
    }

    &__iconBrasilia {
      top: 61%;
      left: 27%;
      transform: scale(0.3);
    }

    &__iconSingapore {
      top: 53%;
      left: 71.5%;
      transform: scale(0.2);
    }

    &__iconAbuDhabi {
      top: 41%;
      left: 57%;
      transform: scale(0.3);
    }

    &__iconNairobi {
      top: 55.5%;
      left: 52%;
      transform: scale(0.2);
    }
  }
}

@media (max-width: 1023px) {
  .companyMap {
    overflow: hidden;
    display: block;

    &__map {
      width: 134%;
      margin-left: -27%;
    }

    &__title {
      display: none;
    }

    &__desc {
      display: none;
    }

    &__iconSwiss {
      top: 33%;
      left: 33%;
      transform: scale(0.6);
    }

    &__iconWashington {
      top: 34%;
      left: 1%;
      transform: scale(0.4);
    }

    &__iconMoscow {
      top: 25%;
      left: 43%;
      transform: scale(0.4);
    }

    &__iconTokyo {
      top: 36%;
      left: 85%;
      transform: scale(0.4);
    }

    &__iconCanberra {
      top: 81%;
      left: 88%;
      transform: scale(0.3);
    }

    &__iconAlaska {
      display: none;
    }

    &__iconBrasilia {
      top: 65%;
      left: 10%;
      transform: scale(0.3);
    }

    &__iconSingapore {
      top: 59%;
      left: 72%;
      transform: scale(0.2);
    }

    &__iconAbuDhabi {
      top: 45%;
      left: 52.5%;
      transform: scale(0.3);
    }

    &__iconNairobi {
      top: 58%;
      left: 45%;
      transform: scale(0.2);
    }
  }
}

@media (max-width: 800px) {
  .companyMap {
    &__iconSwiss {
      top: 30%;
      left: 30%;
      transform: scale(0.6);
    }

    &__iconWashington {
      top: 32%;
      left: 0%;
      transform: scale(0.4);
    }

    &__iconMoscow {
      top: 22%;
      left: 43%;
      transform: scale(0.4);
    }

    &__iconTokyo {
      top: 33%;
      left: 83%;
      transform: scale(0.4);
    }

    &__iconCanberra {
      top: 78%;
      left: 86%;
      transform: scale(0.3);
    }

    &__iconBrasilia {
      top: 63%;
      left: 9%;
      transform: scale(0.3);
    }

    &__iconSingapore {
      top: 56%;
      left: 70%;
      transform: scale(0.2);
    }

    &__iconAbuDhabi {
      top: 43%;
      left: 50.5%;
      transform: scale(0.3);
    }

    &__iconNairobi {
      top: 56%;
      left: 43%;
      transform: scale(0.2);
    }
  }
}

@media (max-width: 700px) {
  .companyMap {
    &__iconSwiss {
      top: 28%;
      left: 29%;
      transform: scale(0.6);
    }

    &__iconWashington {
      top: 30%;
      left: -2%;
      transform: scale(0.4);
    }

    &__iconMoscow {
      top: 21%;
      left: 43%;
      transform: scale(0.4);
    }

    &__iconTokyo {
      top: 32%;
      left: 82%;
      transform: scale(0.4);
    }

    &__iconCanberra {
      top: 77%;
      left: 85%;
      transform: scale(0.3);
    }

    &__iconBrasilia {
      top: 62%;
      left: 8%;
      transform: scale(0.3);
    }

    &__iconSingapore {
      top: 54%;
      left: 68.5%;
      transform: scale(0.2);
    }

    &__iconAbuDhabi {
      top: 41%;
      left: 49.5%;
      transform: scale(0.3);
    }

    &__iconNairobi {
      top: 55%;
      left: 42%;
      transform: scale(0.2);
    }
  }
}

@media (max-width: 600px) {
  .companyMap {
    &__iconSwiss {
      top: 27%;
      left: 27%;
      transform: scale(0.5);
    }

    &__iconWashington {
      top: 29%;
      left: -3%;
      transform: scale(0.3);
    }

    &__iconMoscow {
      top: 20%;
      left: 42%;
      transform: scale(0.3);
    }

    &__iconTokyo {
      top: 30%;
      left: 80%;
      transform: scale(0.3);
    }

    &__iconCanberra {
      top: 75%;
      left: 83%;
      transform: scale(0.2);
    }

    &__iconBrasilia {
      top: 60%;
      left: 6%;
      transform: scale(0.2);
    }

    &__iconSingapore {
      top: 52%;
      left: 67%;
      transform: scale(0.1);
    }

    &__iconAbuDhabi {
      top: 39%;
      left: 47.5%;
      transform: scale(0.2);
    }

    &__iconNairobi {
      top: 53%;
      left: 40.5%;
      transform: scale(0.1);
    }
  }
}

@media (max-width: 500px) {
  .companyMap {
    &__iconSwiss {
      top: 24%;
      left: 25%;
      transform: scale(0.5);
    }

    &__iconWashington {
      top: 27%;
      left: -5%;
      transform: scale(0.3);
    }

    &__iconMoscow {
      top: 17%;
      left: 41%;
      transform: scale(0.3);
    }

    &__iconTokyo {
      top: 28%;
      left: 78%;
      transform: scale(0.3);
    }

    &__iconCanberra {
      top: 73%;
      left: 81%;
      transform: scale(0.2);
    }

    &__iconBrasilia {
      top: 57%;
      left: 4%;
      transform: scale(0.2);
    }

    &__iconSingapore {
      top: 50%;
      left: 65%;
      transform: scale(0.1);
    }

    &__iconAbuDhabi {
      top: 37%;
      left: 45.5%;
      transform: scale(0.2);
    }

    &__iconNairobi {
      top: 50%;
      left: 38.5%;
      transform: scale(0.1);
    }
  }
}

@media (max-width: 400px) {
  .companyMap {
    &__iconSwiss {
      top: 20%;
      left: 21%;
      transform: scale(0.4);
    }

    &__iconWashington {
      top: 22%;
      left: -9%;
      transform: scale(0.3);
    }

    &__iconMoscow {
      top: 11%;
      left: 38%;
      transform: scale(0.3);
    }

    &__iconTokyo {
      top: 23%;
      left: 74%;
      transform: scale(0.3);
    }

    &__iconCanberra {
      top: 68%;
      left: 78%;
      transform: scale(0.2);
    }

    &__iconBrasilia {
      top: 53%;
      left: 1%;
      transform: scale(0.2);
    }

    &__iconSingapore {
      top: 45%;
      left: 61.5%;
      transform: scale(0.1);
    }

    &__iconAbuDhabi {
      top: 32%;
      left: 42.5%;
      transform: scale(0.2);
    }

    &__iconNairobi {
      top: 46%;
      left: 35.5%;
      transform: scale(0.1);
    }
  }
}

.fade-enter-active {
  transition: opacity 1.5s;
}
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
