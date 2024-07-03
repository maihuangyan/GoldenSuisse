<template lang="pug">
svg.logo.logo_little
  line(
    :x1="circleCenter + cosinus * radius",
    :y1="circleCenter - cosinus * radius",
    :x2="circleCenter + cosinus * radius",
    :y2="circleCenter - cosinus * radius",
    stroke="white",
    :stroke-width="width"
  )
  line(
    :x1="circleCenter",
    :y1="circleCenter - radius",
    :x2="circleCenter",
    :y2="circleCenter - radius",
    stroke="white",
    :stroke-width="width"
  )
  line(
    :x1="circleCenter - cosinus * radius",
    :y1="circleCenter - cosinus * radius",
    :x2="circleCenter - cosinus * radius",
    :y2="circleCenter - cosinus * radius",
    stroke="white",
    :stroke-width="width"
  )
  line(
    :x1="circleCenter - radius",
    :y1="circleCenter",
    :x2="circleCenter - radius",
    :y2="circleCenter",
    stroke="white",
    :stroke-width="width"
  )
  line(
    :x1="circleCenter - cosinus * radius",
    :y1="circleCenter + cosinus * radius",
    :x2="circleCenter - cosinus * radius",
    :y2="circleCenter + cosinus * radius",
    stroke="white",
    :stroke-width="width"
  )
  line(
    :x1="circleCenter",
    :y1="circleCenter + radius",
    :x2="circleCenter",
    :y2="circleCenter + radius",
    stroke="white",
    :stroke-width="width"
  )
  line(
    :x1="circleCenter + cosinus * radius",
    :y1="circleCenter + cosinus * radius",
    :x2="circleCenter + cosinus * radius",
    :y2="circleCenter + cosinus * radius",
    stroke="white",
    :stroke-width="width"
  )
  line(
    :x1="125",
    :y1="circleCenter",
    x2="125",
    :y2="circleCenter",
    stroke="white",
    :stroke-width="width"
  )
</template>

<script>
import gsap from "gsap";

export default {
  name: "Logo",
  props: ["scrolled"],
  computed: {
    cosinus() {
      return Math.cos(Math.PI / 4);
    },
  },
  data() {
    return {
      width: 5.5,
      verticalHeight: 60,
      radius: 15.225,
      circleCenter: 65,
      duration: "0.4s",
      isCreated: false,
    };
  },
  methods: {
    initLogo() {
      let logo = this.$el;
      gsap.to(logo.children[0], 0.4, {
        attr: {
          x2: 125,
          y2: 5,
        },
      });
      gsap.to(logo.children[1], 0.4, {
        attr: {
          y2: 0,
        },
      });
      gsap.to(logo.children[2], 0.4, {
        attr: {
          x2: 5,
          y2: 5,
        },
      });
      gsap.to(logo.children[3], 0.4, {
        attr: {
          x2: 0,
        },
      });
      gsap.to(logo.children[4], 0.4, {
        attr: {
          x2: 0,
          y2: 125,
        },
      });
      gsap.to(logo.children[5], 0.4, {
        attr: {
          y2: 130,
        },
      });
      gsap.to(logo.children[6], 0.4, {
        attr: {
          y2: 125,
          x2: 125,
        },
      });
      gsap.to(logo.children[7], 0.4, {
        attr: {
          x2: 65 - 5.5 / 2,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/_variables.scss";

.logo {
  width: 130px;
  height: 130px;
  animation: slidein 0.3s;
  cursor: pointer;
  pointer-events: auto;

  &_large {
    transform-origin: left top;
    transform: scale(0.9231);
    transition: all 0.5s ease-in-out;
    padding: 0;
  }

  &_little {
    transform-origin: left top;
    transform: scale(0.6154);
    transition: all 0.5s ease-in-out;
  }

  @keyframes slidein {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
}

@media (max-width: 1023px) {
  .logo {
    transform: scale(0.46);

    &_large,
    &_little {
      transform-origin: left top;
      transform: scale(0.46);
      transition: none;
      padding: 0;
    }
  }
}
</style>