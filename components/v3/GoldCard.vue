<template>
  <div>
    <section class="home-goldcard" id="goldcard">
        <p class="text-title">The Gold Card</p>
        <div class="goldcard-first">
            <p class="text-one">
                Imagine being able to pay for anything just with your vaulted gold and silver — this is precisely what our card allows you to do.
            </p>
            <p class="text-two">
                Through instant in-app conversion, we combine wealth protection with the essential daily need of making payments.
            </p>
            <p class="text-three">
                We all need two cards - Gold for Elegance and Plastic for Simplicity.
            </p>
        </div>
        <img class="goldcard-img" src="/image/v3/gold-card.png">
        <p class="text-feature">Features</p>
        <div class="goldcard-second">
            <div class="card-item">
                <p>Works in 120+ Countries</p>
            </div>
            <div class="card-item">
                <p>Private Transactions</p>
            </div>
            <div class="card-item">
                <p>Free Maintenance</p>
            </div>
            <div class="card-item">
                <p>No Hidden Fees</p>
            </div>
            <div class="card-item">
                <p>Free Deposits</p>
            </div>
            <div class="card-item">
                <p>18K Gold or Stainless Steel</p>
                <div class="card-item-dot align-items-center">
                    <img class="ellipse-img" src="/image/v3/ellipse2.png">
                    <img class="ellipse-img" src="/image/v3/ellipse1.png">
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

    .home-goldcard {
        margin-top: 160px;
        padding-bottom: 160px;
        display: flex;
        flex-direction: column;

        .text-title {
            font-weight: 400;
            font-size: 180px;
            line-height: 137px;
            color: #ffffff;
            margin-left: 56px;
            letter-spacing: -0.04em;
        }
        .goldcard-first {
            margin: 80px 60px 0px 60px;
            padding: 70px 0px 0px 0px;
            border-top: solid 2px #ffffff;
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
            color: #A0A0A0;
            letter-spacing: -0.02em;

            max-width: 185px;
        }
        .text-two {
            grid-area: two;
            font-weight: 700;
            font-size: 14px;
            line-height: 24px;
            color: #A0A0A0;
            letter-spacing: -0.02em;

            max-width: 185px;
        }
        .text-three {
            grid-area: three;
            font-weight: 500;
            font-size: 80px;
            line-height: 80px;
            color: #ffffff;
            letter-spacing: -0.02em;

            max-width: 680px;
        }
        .mastercard {
            grid-area: four;
            display: flex;
            flex-direction: row;
            align-items: flex-end;
            margin-top: 56px;

            .card-img {
                width: 37.8px;
                height: 24px;
            }
            .card-text {
                margin-left: 12px;
                font-weight: 700;
                font-size: 14px;
                line-height: 24px;
                color: #A0A0A0;
                letter-spacing: -0.02em;
            }
        }
        .card-mobile-text {
            font-weight: 700;
            font-size: 14px;
            line-height: 24px;
            color: #A0A0A0;
            letter-spacing: -0.02em;

            display: none;
            align-self: center;
        }
        .goldcard-img {
            width: 501.8px;
            height: 320px;
            margin-top: 160px;
            align-self: center;
            object-fit: contain;
        }
        .text-feature {
            font-weight: 700;
            font-size: 14px;
            line-height: 32px;
            color: #ffffff;
            letter-spacing: -0.02em;

            margin-top: 160px;
            align-self: center;
        }
        .goldcard-second {
            display: flex;
            flex-wrap: wrap;
            border-bottom: solid 2px #ffffff;
            margin-left: 60px;
            margin-right: 60px;
            margin-top: 60px;

            .card-item {
                font-weight: 400;
                font-size: 48px;
                line-height: 120px;
                color: #ffffff;
                letter-spacing: -0.02em;

                border-top: solid 2px #ffffff;
                height: 120px;
                flex: 50%;

                display: flex;
                flex-direction: row;
                justify-content: space-between;

                .card-item-dot {
                    display: flex;
                    .ellipse-img {
                        width: 20px;
                        height: 20px;
                        margin-left: 10px;
                    }
                }

            }
        }
    }

    @media (max-width: 1599px) {
        .home-goldcard {
            margin-top: 140px;
            padding-bottom: 140px;

            .text-title {
                font-size: 140px;
                line-height: 112px;
                margin-left: 57px;
            }
            .goldcard-first {
                margin: 40px 60px 0px 60px;
                padding: 60px 0px 0px 0px;
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
            .mastercard {
                margin-top: 40px;
            }
            .goldcard-img {
                width: 440px;
                height: 280px;
                margin-top: 120px;
                align-self: center;
            }
            .text-feature {
                margin-top: 140px;
            }
            .goldcard-second {
                margin-left: 60px;
                margin-right: 60px;
                margin-top: 40px;

                .card-item {
                    font-size: 36px;
                    line-height: 100px;

                    height: 100px;

                    .card-item-dot {
                        .ellipse-img {
                            margin-left: 6px;
                        }
                    }
                }
            }
        }
    }
    @media (max-width: 1279px) {
        .home-goldcard {
            margin-top: 120px;
            padding-bottom: 120px;

            .text-title {
                font-size: 120px;
                line-height: 120px;
                margin-left: 40px;
            }
            .goldcard-first {
                margin: 30px 40px 0px 40px;
                padding: 60px 0px 0px 0px;
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
            .mastercard {
                margin-top: 30px;
            }
            .goldcard-img {
                width: 473px;
                height: 298px;
                margin-top: 120px;
                align-self: center;
            }
            .text-feature {
                margin-top: 120px;
            }
            .goldcard-second {
                margin-left: 40px;
                margin-right: 40px;
                margin-top: 40px;

                .card-item {
                    font-size: 36px;
                    line-height: 100px;

                    height: 100px;

                    .card-item-dot {
                        display: none;
                    }
                }
            }
        }
    }

    @media (max-width: 1023px) {
        .home-goldcard {
            margin-top: 80px;

            .text-title {
                font-size: 100px;
                line-height: 100px;
                margin-left: 45px;
            }
            .goldcard-first {
                margin: 30px 45px 0px 45px;
                padding: 60px 0px 0px 0px;
                grid-template-areas:
                    "three three"
                    "one two";
                grid-template-columns: 50% 50%;
            }

            .text-one {
                max-width: 170px;
                margin-top: 30px;
            }
            .text-two {
                max-width: 170px;
                margin-top: 30px;
            }
            .text-three {
                font-size: 48px;
                line-height: 50px;

                max-width: 1000px;
            }
            .mastercard {
                display: none;
            }
            .goldcard-img {
                width: 381px;
                height: 240px;
                margin-top: 120px;
            }
            .text-feature {
                margin-top: 120px;
            }
            .card-mobile-text {
                display: block;
                margin-top: 30px;
            }
            .goldcard-second {
                margin-left: 45px;
                margin-right: 45px;
                margin-top: 30px;

                .card-item {
                    font-size: 28px;
                    line-height: 80px;

                    height: 80px;

                    .ellipse-img {
                        width: 20px;
                        height: 20px;
                        margin-left: 10px;
                    }
                }
            }
        }
    }

    @media (max-width: 767px) {
        .home-goldcard {
            margin-top: 60px;

            .text-title {
                font-size: 48px;
                line-height: 50px;
                margin-left: 20px;
            }
            .goldcard-first {
                margin: 20px 20px 0px 20px;
                padding: 40px 0px 0px 0px;
                grid-template-areas:
                    "three"
                    "one"
                    "two";
                grid-template-columns: 100%;
            }

            .text-one {
                max-width: 700px;
                margin-top: 30px;
            }
            .text-two {
                max-width: 700px;
                margin-top: 15px;
            }
            .text-three {
                font-size: 24px;
                line-height: 30px;

                max-width: 700px;
            }
            .mastercard {
                display: none;
            }
            .goldcard-img {
                width: calc(100% - 40px);
                height: fit-content;
                object-fit: cover;
                margin-top: 40px;
                align-self: center;
            }
            .text-feature {
                margin-top: 60px;
                align-self: center;
                margin-left: 0px;
            }
            .card-mobile-text {
                margin-top: 20px;
            }
            .goldcard-second {
                margin-left: 20px;
                margin-right: 20px;
                margin-top: 20px;

                .card-item {
                    font-size: 20px;
                    line-height: 60px;

                    height: 60px;
                    flex: 100%;
                }
            }
        }
    }
</style>
