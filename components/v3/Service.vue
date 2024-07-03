<template>
  <div>
    <section class="home-service" id="service">
        <p class="text-title">Services</p>
        <div class="service-item">
            <p class="text-one">
                Remote access to your gold stored in Switzerland, for payments, transfers and card purchases.
            </p>
            <p class="text-two">
                Private Safe Account
            </p>
            <ul class="text-three">
                <li>Inflation-proof currencies</li>
                <li>Total privacy</li>
                <li>Global payments in 52 currencies</li>
                <li>Tax-exempt capital gains</li>
            </ul>
        </div>
        <div class="service-item">
            <p class="text-one">
                Private payments and card purchases with vaulted gold and silver.
            </p>
            <p class="text-two">
                Cards & Payments
            </p>
            <ul class="text-three">
                <li>Pay and get paid globally</li>
                <li>Limitless cards</li>
                <li>Instant transfers 24/7/365</li>
                <li>Second 18K gold card</li>
            </ul>
        </div>
        <div class="service-item">
            <p class="text-one">
                Wealth protection and custom solutions.
            </p>
            <p class="text-two">
                Asset Custodian
            </p>
            <ul class="text-three">
                <li>Gold and silver bars</li>
                <li>Buy, sell and transfer</li>
                <li>Deposit, pick-up and delivery</li>
                <li>Personalised client relationships</li>
                <li>Multi generation wealth transfer</li>
                <li>Geographical wealth relocation</li>
            </ul>
        </div>
        <div class="line-block">
            <div class="line-left"></div>
            <div class="line-right"></div>
        </div>
        <Button
            class="btn-register"
            label="Become a Client"
            path="account/register"
        />
    </section>
  </div>
</template>

<script>
import Button from "./Button.vue";

export default {
  components: {
    Button
  },
  data() {
    return {

    }
  },
  mounted() {},
  methods: {
    onClickBecomeClient() {
        this.$router.push('account/register');
    }
  },
};
</script>

<style lang="scss" scoped>
    @import "@/assets/css/bootstrap.css";
    @import "@/assets/css/v3.css";

    .home-service {
        display: flex;
        flex-direction: column;
        margin-top: 160px;
        .text-title {
            font-weight: 400;
            font-size: 180px;
            line-height: 137px;
            color: #ffffff;
            margin-left: 52px;
            letter-spacing: -0.04em;
        }
        .service-item {
            border-top: solid 2px #ffffff;
            margin-left: 60px;
            margin-right: 60px;
            margin-top: 80px;
            display: grid;
            grid-template-areas:
                "one two"
                "one three";
            grid-template-columns: 50% 50%;
            padding-top: 70px;
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
            font-weight: 400;
            font-size: 80px;
            line-height: 80px;
            color: #ffffff;
            letter-spacing: -0.02em;
        }
        .text-three {
            grid-area: three;
            font-weight: 400;
            font-size: 32px;
            line-height: 40px;
            color: #ffffff;
            margin-top: 50px;
            letter-spacing: -0.02em;
            padding-left: 0px;

            li {
                display: flex;
                align-items: center;
                list-style-type: none;
                margin-bottom: 20px;
            }
            li::before {
                content: "";
                width: 5px;
                height: 5px;
                background: white;
                margin-right: 15px;
            }
            li:last-child {
                margin-bottom: 0px;
            }
        }

        .line-block {
            height: 240px;
            display: flex;
            flex-direction: row;
            margin-top: 80px;
            margin-left: 60px;
            margin-right: 60px;
        }
        .line-left {
            flex: 1;
            border-top: solid 2px #ffffff;
            border-right: solid 2px #ffffff;
        }
        .line-right {
            flex: 1;
            border-top: solid 2px #ffffff;
        }
        .btn-register {
            width: 370px;
            height: 80px;
            margin-top: 60px;
            align-self: center;
        }
    }

    @media (max-width: 1499px) {
        .home-service {
            margin-top: 140px;
            .text-title {
                font-size: 140px;
                line-height: 140px;
                margin-left: 54px;
            }
            .service-item {
                margin-left: 60px;
                margin-right: 60px;
                padding-top: 60px;
                margin-top: 40px;
                margin-bottom: 20px;
            }
            .text-one {
                max-width: 145px;
            }
            .text-two {
                font-size: 60px;
                line-height: 60px;
            }
            .text-three {
                font-size: 28px;
                line-height: 36px;
                margin-top: 30px;

                li::before {
                    margin-right: 13px;
                }
            }
            .line-block {
                margin-top: 40px;
                margin-left: 60px;
                margin-right: 60px;
                height: 160px;
            }
            .btn-register {
                width: 370px;
                height: 80px;
                margin-top: 40px;
                align-self: center;
            }
        }
    }
    @media (max-width: 1279px) {
        .home-service {
            margin-top: 120px;
            .text-title {
                font-size: 120px;
                line-height: 120px;
                margin-left: 40px;
            }
            .service-item {
                margin-left: 40px;
                margin-right: 40px;
                padding-top: 60px;
                margin-top: 30px;
                margin-bottom: 30px;
            }
            .text-one {
                max-width: 120px;
            }
            .text-two {
                font-size: 56px;
                line-height: 60px;
            }
            .text-three {
                font-size: 28px;
                line-height: 40px;
                margin-top: 30px;

                li::before {
                    margin-right: 15px;
                }
                li {
                    margin-bottom: 10px;
                }
            }
            .line-block {
                margin-top: 30px;
                margin-left: 40px;
                margin-right: 40px;
                height: 240px;
            }
            .btn-register {
                width: 370px;
                height: 80px;
                margin-top: 60px;
                align-self: center;
            }
        }
    }
    @media (max-width: 1023px) {
        .home-service {
            margin-top: 80px;
            .text-title {
                font-size: 100px;
                line-height: 100px;
                margin-left: 42px;
            }
            .service-item {
                margin-left: 45px;
                margin-right: 45px;
                grid-template-areas:
                    "two"
                    "one"
                    "three";
                grid-template-columns: 100%;
                padding-top: 50px;
                margin-top: 30px;
                margin-bottom: 20px;
            }
            .text-one {
                max-width: 500px;
                margin-top: 10px;
            }
            .text-two {
                font-size: 48px;
                line-height: 48px;
            }
            .text-three {
                font-size: 24px;
                line-height: 32px;
                margin-top: 30px;

                li::before {
                    margin-right: 11px;
                }
            }
            .line-block {
                height: 160px;
                margin-top: 30px;
                margin-left: 45px;
                margin-right: 45px;
            }
            .btn-register {
                width: 339px;
                height: 80px;
                margin-top: 40px;
                align-self: center;
            }
        }
    }

    @media (max-width: 767px) {
        .home-service {
            margin-top: 60px;
            .text-title {
                font-size: 48px;
                line-height: 70px;
                margin-left: 20px;
            }
            .service-item {
                margin-left: 20px;
                margin-right: 20px;
                grid-template-areas:
                    "two"
                    "one"
                    "three";
                grid-template-columns: 100%;
                margin-top: 20px;
                padding-top: 40px;
                margin-bottom: 40px;
            }
            .text-one {
                max-width: 500px;
                margin-top: 10px;
                line-height: 20px;
            }
            .text-two {
                font-size: 32px;
                line-height: 30px;
            }
            .text-three {
                font-size: 20px;
                line-height: 28px;
                margin-top: 25px;

                li::before {
                    margin-right: 9px;
                }
            }
            .line-block {
                height: 80px;
                margin-top: 20px;
                margin-left: 20px;
                margin-right: 20px;
            }
            .btn-register {
                width: calc(100vw - 40px);
                margin-left: 20px;
                margin-right: 20px;
                height: 80px;
                margin-top: 40px;
                align-self: center;
            }
        }
    }
</style>
