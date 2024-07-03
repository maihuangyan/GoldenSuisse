<template lang="pug">
  .clock
    .clock__hour
      .clock__hour__hr(id="hr")
    .clock__min
      .clock__min__mn(id="mn")
    .clock__sec
      .clock__sec__sc(id="sc")
</template>

<script>
export default {
  name: "Clock",
  mounted() {
    const deg = 6;
    const hr = this.$el.querySelector("#hr");
    const mn = this.$el.querySelector("#mn");
    const sc = this.$el.querySelector("#sc");

    setInterval(() => {
      let hh = "";
      let mm = "";
      let ss = "";
      const options = {
        year: "2-digit",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZone: "Europe/Zurich",
        timeZoneName: "short"
      };
      const formater = new Intl.DateTimeFormat("sv-SE", options);
      const startingDate = new Date();

      const dateInNewTimezone = formater.formatToParts(startingDate);
      for (const [key, value] of Object.entries(dateInNewTimezone)) {
        if (value.type === "hour") hh = value.value * 30;
        if (value.type === "minute") mm = value.value * deg;
        if (value.type === "second") ss = value.value * deg;
      }
      // let day = new Date();
      // let hh = day.getHours() * 30;
      // let mm = day.getMinutes() * deg;
      // let ss = day.getSeconds() * deg;
      hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
      mn.style.transform = `rotateZ(${mm}deg)`;
      sc.style.transform = `rotateZ(${ss}deg)`;
    });
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/_variables.scss";

.clock {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: max-content;
  height: max-content;
  width: 532px;
  height: 532px;

  &__hour,
  &__min,
  &__sec {
    position: absolute;

    &__hr,
    &__mn,
    &__sc {
      display: flex;
      justify-content: center;
      position: absolute;
      border-radius: 50%;
    }

    &__hr {
      &::before {
        content: "";
        position: absolute;
        width: 15px;
        height: 140px;
        background: $white;
        z-index: 2;
      }
    }

    &__mn {
      &::before {
        content: "";
        position: absolute;
        width: 15px;
        height: 266px;
        background: $white;
        z-index: 2.1;
      }
    }

    &__sc {
      &::before {
        content: "";
        position: absolute;
        width: 4px;
        height: 266px;
        background: $white;
        z-index: 2.2;
      }
    }
  }

  &__hour,
  &__hour__hr {
    width: 340px;
    height: 340px;
  }

  &__min,
  &__min__mn {
    width: 525px;
    height: 525px;
  }

  &__sec,
  &__sec__sc {
    width: 525px;
    height: 525px;
  }
}

@media (max-width: 1023px) {
  .clock {
    width: 231px;
    height: 231px;

    &__hour,
    &__min,
    &__sec {
      &__hr {
        &::before {
          content: "";
          position: absolute;
          width: 6.52px;
          height: 60.56px;
          background: $white;
          z-index: 2;
        }
      }

      &__mn {
        &::before {
          content: "";
          position: absolute;
          width: 6.52px;
          height: 115.64px;
          background: $white;
          z-index: 2.1;
        }
      }

      &__sc {
        &::before {
          content: "";
          position: absolute;
          width: 1.74px;
          height: 115.54px;
          background: $white;
          z-index: 2.2;
        }
      }
    }

    &__hour,
    &__hour__hr {
      width: 160px;
      height: 160px;
    }

    &__min,
    &__min__mn {
      width: 231px;
      height: 231px;
    }

    &__sec,
    &__sec__sc {
      width: 231px;
      height: 231px;
    }
  }
}
</style>