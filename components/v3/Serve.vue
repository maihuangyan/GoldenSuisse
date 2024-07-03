<template>
  <div>
    <section class="home-serve" id="serve">
      <div class="serve-container">
        <p class="text-one">
            We carefully listen to each client and provide tailored solutions that align with their specific needs.
        </p>
        <p class="text-two">
            Exceptional Swiss service is our standard.
        </p>
        <p class="text-three">
            We bring in years of accumulated expertise to assist private individuals and businesses in the areas of protecting their assets and privacy, whilst maintaining full compliance with laws and regulations.
        </p>
        <p class="text-four">We serve</p>
        <div class="bottom-container">
            <div class="buttom-item">
                <p>Private Individuals</p>
            </div>
            <div class="buttom-item">
                <p>Businesses</p>
            </div>
            <div class="buttom-item">
                <p>Trusts & Institutions</p>
            </div>
            <div class="buttom-item">
                <p>Asset Managers</p>
            </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {

    }
  },
  mounted() {},
  methods: {},
};
</script>

  <style lang="scss" scoped>
@import "@/assets/css/bootstrap.css";
@import "@/assets/css/v3.css";

.home-serve {
  margin-top: 120px;
  .serve-container {
    background-image: url("/image/v3/bg-serve.png");
    background-size: cover;
    width: 100%;
    padding: 150px 60px 150px 60px;
    display: grid;
    grid-template-areas:
      "one two three"
      "four four four"
      "bottom bottom bottom";
    grid-template-columns: 25% 25% 50%;
  }

  .text-one {
    grid-area: one;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    color: #A0A0A0;
    max-width: 185px;
    letter-spacing: -0.02em;
  }
  .text-two {
    grid-area: two;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    color: #A0A0A0;
    max-width: 185px;
    letter-spacing: -0.02em;
  }
  .text-three {
    grid-area: three;
    font-weight: 400;
    font-size: 80px;
    line-height: 80px;
    color: #ffffff;
    letter-spacing: -0.02em;

    max-width: 670px;
  }
  .text-four {
    grid-area: four;
    font-weight: 700;
    font-size: 14px;
    line-height: 32px;
    color: #ffffff;
    letter-spacing: -0.02em;

    text-align: center;
    margin-top: 160px;
  }
  .bottom-container {
    grid-area: bottom;
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    margin-top: 60px;
    border-bottom: solid 2px #ffffff;

    .buttom-item {
        font-weight: 400;
        font-size: 48px;
        line-height: 120px;
        color: #ffffff;
        letter-spacing: -0.02em;

        height: 120px;
        border-top: solid 2px #ffffff;

        flex: 50%;
    }
  }
}
@media (max-width: 1599px) {
    .home-serve {
        margin-top: 140px;
        .serve-container {
            padding: 120px 60px 120px 60px;
        }

        .text-one {
            max-width: 145px;
        }
        .text-two {
            max-width: 145px;
        }
        .text-three {
            font-size: 56px;
            line-height: 64px;

            max-width: 570px;
        }
        .text-four {
            margin-top: 140px;
        }
        .bottom-container {
            margin-top: 40px;
            .buttom-item {
                font-size: 36px;
                line-height: 100px;
                height: 100px;
            }
        }
    }
}
@media (max-width: 1279px) {
    .home-serve {
        margin-top: 120px;
        .serve-container {
            padding: 120px 40px 120px 40px;
        }

        .text-one {
            max-width: 120px;
        }
        .text-two {
            max-width: 120px;
        }
        .text-three {
            font-size: 56px;
            line-height: 60px;

            max-width: 470px;
        }
        .text-four {
            margin-top: 100px;
        }
        .bottom-container {
            margin-top: 40px;
            .buttom-item {
                font-size: 36px;
                line-height: 100px;
                height: 100px;
            }
        }
    }
}
@media (max-width: 1023px) {
    .home-serve {
        margin-top: 80px;
        .serve-container {
            padding: 80px 45px 80px 45px;
            grid-template-areas:
                "three three"
                "one two"
                "four four"
                "bottom bottom";
            grid-template-columns: 50% 50%;
        }

        .text-one {
            max-width: 170px;
            margin-top: 40px;
        }
        .text-two {
            max-width: 170px;
            margin-top: 40px;
        }
        .text-three {
            font-size: 48px;
            line-height: 50px;

            max-width: 1000px;
        }
        .text-four {
            margin-top: 240px;
        }
        .bottom-container {
            margin-top: 30px;
            .buttom-item {
                font-size: 28px;
                line-height: 80px;
                height: 80px;
            }
        }
    }
}

@media (max-width: 767px) {
    .home-serve {
        margin-top: 60px;
        .serve-container {
            background-image: url("/image/v3/bg-serve-mobile.png");
            padding: 60px 20px 60px 20px;
            grid-template-areas:
                "three"
                "one"
                "two"
                "four"
                "bottom";
            grid-template-columns: 100%;
        }

        .text-one {
            max-width: 170px;
            margin-top: 40px;
        }
        .text-two {
            max-width: 170px;
            margin-top: 20px;
        }
        .text-three {
            font-size: 24px;
            line-height: 30px;
        }
        .text-four {
            margin-top: 160px;
            // text-align: left;
        }
        .bottom-container {
            margin-top: 20px;
            .buttom-item {
                font-size: 20px;
                line-height: 60px;
                height: 60px;

                flex: 100%;
            }
        }
    }
}
</style>
