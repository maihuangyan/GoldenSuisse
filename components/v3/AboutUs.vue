<template>
  <div>
    <section class="home-aboutus" id="aboutus">
        <p class="text-title">About us</p>
        <div class="aboutus-container">
            <p class="text-one">
                Golden Suisse operates in a manner that harks back to the financial institutions of Switzerland during the 17th to 19th centuries.
            </p>
            <p class="text-two">
                Our approach involves client physical deposits and investments in gold bars and government minted gold currencies.
            </p>
            <p class="text-three">
              Envision a Swiss account with total privacy, inflation-proof currencies, global payments, limitless cards and tax-exempt capital gains.
            </p>
            <div class="flag-swiss">
                <img class="flag-img" src="/image/v3/flag-swiss.png">
                <p class="flag-text">Preserving Swiss traditions</p>
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

    .home-aboutus {
        margin-top: 160px;
        .text-title {
            font-weight: 400;
            font-size: 180px;
            color: #ffffff;
            margin-left: 60px;
            letter-spacing: -0.04em;
        }
        .aboutus-container {
            margin-top: 100px;
            background-image: url("/image/v3/bg-aboutus.png");
            background-size: cover;
            width: 100%;
            padding: 70px 60px 60px 60px;
            display: grid;
            grid-template-areas:
                "one two three"
                "none none four";
            grid-template-columns: 25% 25% 50%;
        }

        .text-one {
            grid-area: one;
            font-weight: 700;
            font-size: 14px;
            line-height: 24px;
            color: #ffffff;
            max-width: 185px;
            letter-spacing: -0.02em;
        }
        .text-two {
            grid-area: two;
            font-weight: 700;
            font-size: 14px;
            line-height: 24px;
            color: #ffffff;
            letter-spacing: -0.02em;
            max-width: 185px;
        }
        .text-three {
            grid-area: three;
            font-weight: 400;
            font-size: 80px;
            line-height: 80px;
            color: #ffffff;
            letter-spacing: -0.02em;
            max-width: 750px;
        }
        .flag-swiss {
            grid-area: four;
            display: flex;
            flex-direction: row;
            align-items: flex-end;
            margin-top: 116px;

            .flag-img {
                width: 24px;
                height: 24px;
            }
            .flag-text {
                margin-left: 15px;
                font-weight: 700;
                font-size: 14px;
                line-height: 24px;
                color: #ffffff;
            }
        }
    }
    @media (max-width: 1599px) {
        .home-aboutus {
            margin-top: 140px;
            .text-title {
                font-size: 140px;
                margin-left: 60px;
            }
            .aboutus-container {
                margin-top: 80px;
                padding: 60px 60px 60px 60px;
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
            .flag-swiss {
                margin-top: 100px;
            }
        }
    }
    @media (max-width: 1279px) {
        .home-aboutus {
            margin-top: 120px;
            .text-title {
                font-size: 120px;
                margin-left: 40px;
            }
            .aboutus-container {
                margin-top: 60px;
                padding: 60px 40px 60px 40px;
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
            .flag-swiss {
                margin-top: 100px;
            }
        }
    }
    @media (max-width: 1023px) {
        .home-aboutus {
            margin-top: 100px;
            .text-title {
                font-size: 100px;
                margin-left: 45px;
            }
            .aboutus-container {
                margin-top: 60px;
                padding: 60px 45px 60px 45px;
                grid-template-areas:
                    "three three"
                    "four four"
                    "one two";
                grid-template-columns: 50% 50%;
            }
            .text-three {
                font-size: 48px;
                line-height: 50px;

                max-width: 1000px;
            }
            .text-one {
                margin-top: 360px;
                max-width: 170px;
            }
            .text-two {
                margin-top: 360px;
                max-width: 170px;
            }
            .flag-swiss {
                flex-direction: row;
                align-items: flex-start;
                margin-top: 30px;
            }
        }
    }

    @media (max-width: 767px) {
        .home-aboutus {
            margin-top: 40px;
            .text-title {
                font-size: 48px;
                margin-left: 20px;
            }
            .aboutus-container {
                margin-top: 30px;
                padding: 60px 20px 60px 20px;
                background-image: url("/image/v3/bg-aboutus-mobile.png");
                grid-template-areas:
                    "three three"
                    "four four"
                    "one two";
                grid-template-columns: 50% 50%;
            }
            .text-three {
                font-size: 24px;
                line-height: 30px;
            }
            .text-one {
                margin-top: 200px;
                max-width: 150px;
                line-height: 20px;
            }
            .text-two {
                margin-top: 200px;
                max-width: 170px;
                line-height: 20px;
            }
        }
    }
</style>
