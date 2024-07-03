<template lang="pug">
.cardMap
  section.cardMap__logo(
    data-anim="fadeIn",
    data-anim-delay="0",
    :style="{ opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile || color !== '#FFFFFF' ? 'translate(0, 0)' : 'translate(0, 10%)' }"
  )
    section.cardMap__logo_worldwide
      img.cardMap__logo_worldwide_img(src="../static/image/Worldwide.svg")
    
  section.cardMap__logoTtitle(
    data-anim="fadeIn",
    data-anim-delay="0",
    :style="{ opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile || color !== '#FFFFFF' ? 'translate(0, 0)' : 'translate(0, 10%)' }"
  )
    div {{ subtitle1 }}
    div {{ subtitle2 }}
  section.cardMap__title(v-if="title")(
    data-anim="fadeIn",
    data-anim-delay="0",
    :style="{ opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile || color !== '#FFFFFF' ? 'translate(0, 0)' : 'translate(0, 10%)' }"
  ) {{ title }}
  section.cardMap__container
    img.cardMap__container_map(:src="require('@/static/image/map1.png')")
    .cardMap__container_circles
      .cardMap__container_circles_left(
        :style="{ '--color': color, opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? '' : 'translateX(10%)' }",
        data-anim="circleLeft",
        data-anim-delay="0"
      )
      .cardMap__container_circles_right(
        :style="{ '--color': color, opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? '' : 'translateX(-10%)' }",
        data-anim="circleRight",
        data-anim-delay="0"
      )
    img.cardMap__container_card(
      :src="require('@/static/' + imgUrl)",
      data-anim="scaleCard",
      data-anim-delay=".3",
      :style="{ transform: this.$store.state.isMobile ? '' : 'scale(0.7) translate(-70%, -70%)', opacity: this.$store.state.isMobile ? 1 : 0 }"
    )
</template>

<script>
export default {
  name: "CardMap",
  props: ["subtitle1", "subtitle2", "title", "imgUrl", "color"],
};
</script>

<style lang="scss" scoped>
@import "@/assets/_variables.scss";

.cardMap {
  display: grid;
  grid-template-areas:
    ". logo logoTtitle logoTtitle . title title title title ."
    "cardMap cardMap cardMap cardMap cardMap cardMap cardMap cardMap cardMap cardMap";
  grid-template-columns: 3.75% repeat(8, 11.5625%) 3.75%;

  &__logo {
    grid-area: logo;
    display: grid;
    height: fit-content;
    align-items: center;
    padding-top: 42%;

    &_worldwide {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      height: 100%;

      &_img {
        height: 50px;
      }
    }

    &_mastercard {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      height: 100%;

      &_img {
        height: 30px;
        transform: scale(-1, 1);
      }
    }
  }

  &__logoTtitle {
    padding-top: 21%;
    grid-area: logoTtitle;
    font-family: Arial;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 143%;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    color: $lightGrey;
  }

  &__title {
    grid-area: title;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 80px;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: $white;
    padding: 0;
    padding-top: 10%;
  }

  &__container {
    grid-area: cardMap;
    position: relative;
    width: inherit;
    /*display: flex;
    align-items: center;
    justify-content: center;*/

    &_map {
      width: 100%;
      opacity: 0.04;
    }
    &_card-wrapper {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
    }
    &_card {
      position: absolute;
      width: 26%;
      left: 50%;
      top: 50%;
    }

    &_circles {
      position: absolute;
      top: 55.3%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 67%;
      height: 67%;
      display: flex;
      justify-content: center;
      &_left {
        display: inline-block;
        border: 2px solid var(--color);
        width: 50%;
        height: 90%;
        border-radius: 50%;
        /*transform: translateX(20%);*/
        margin-right: -10%;
      }

      &_right {
        display: inline-block;
        border: 2px solid var(--color);
        width: 50%;
        height: 90%;
        border-radius: 50%;
        /*transform: translateX(-20%);*/
        margin-left: -10%;
      }
    }
  }
}

@media (max-width: 1023px) {
  .cardMap {
    grid-template-areas: "title title" "logo logoTtitle" "cardMap cardMap";
    grid-template-columns: 50% 50%;

    &__title {
      font-size: 24px;
      line-height: 125%;
      letter-spacing: -0.04em;
      padding: 0 5.4% 14% 5.4%;
    }

    &__logo {
      padding: 0 5.4% 27% 5.4%;

      &_worldwide {
        &_img {
          height: 37.9px;
        }
      }

      &_mastercard {
        &_img {
          height: 22.74px;
        }
      }
    }

    &__logoTtitle {
      font-size: 14px;
      line-height: 143%;
      letter-spacing: -0.02em;
      padding: 0 5.4% 27% 0;
      text-transform: none;
    }

    &__container {
      display: block;
      justify-content: center;
      overflow: hidden;

      &_map {
        width: 130%;
        margin-left: -20%;
      }

      &_card {
        width: 40%;
        top: 39%;
        left: 30%;
      }

      &_circles {
        top: 66.3%;
        width: 100% - 5.4% - 5.4%;
        height: 80%;

        &_left {
          width: 50%;
          height: 72.895%;
        }

        &_right {
          width: 50%;
          height: 72.895%;
        }
      }
    }
  }
}
</style>
