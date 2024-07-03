<template>
  <div>
    <section class="home-benefits" id="benefits">
        <p class="text-title">Benefits</p>
        <div class="benefits-container">
            <p class="text1">Gold as money and investment.</p>
            <div class="benefits-list">
                <p class="benefit-title">
                    For many years, gold has shaped the evolution of humanity in our quest for freedom and sustainability.
                </p>
                <div class="benefits-item" id="item-1">
                    <p class="item-number">1</p>
                    <p class="item-title">No Capital Gains Tax</p>
                    <p class="item-description">All gold and silver bullion bars and coins are exempt from capital gains tax.</p>
                </div>                
                <div class="benefits-item" id="item-2">
                    <p class="item-number">2</p>
                    <p class="item-title">No Bank Risk</p>
                    <p class="item-description">Segregated physical metal assets provide protection from bank bail-in, counterparty and default risks.</p>
                </div>                
                <div class="benefits-item" id="item-3">
                    <p class="item-number">3</p>
                    <p class="item-title">Inflation Hedge</p>
                    <p class="item-description">Gold serves as a dependable inflation hedge, retaining its purchasing power even while fiat currencies may depreciate.</p>
                </div>                
                <div class="benefits-item" id="item-4">
                    <p class="item-number">4</p>
                    <p class="item-title">Direct Ownership</p>
                    <p class="item-description">Unlike digital or paper currencies, gold is a physical asset that by definition belongs to its owner as a valuable property.</p>
                </div>                
                <div class="benefits-item" id="item-5">
                    <p class="item-number">5</p>
                    <p class="item-title">Non-reportable Asset</p>
                    <p class="item-description">Due to their tangible nature, gold and silver assets are exempt from reporting under Swiss property laws.</p>
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

    .home-benefits {
        margin-top: 160px;
        .text-title {
            font-weight: 400;
            font-size: 180px;
            line-height: 137px;
            color: #ffffff;
            margin-left: 48px;
            letter-spacing: -0.04em;        }
        .benefits-container {
            margin-top: 100px;
            background-image: url("/image/v3/bg-benefits.png");
            background-size: cover;
            width: 100%;
            padding: 80px 60px 160px 60px;
        }
        .text1 {
            font-weight: 400;
            font-size: 80px;
            line-height: 80px;
            color: #ffffff;
            letter-spacing: -0.02em;

            max-width: 600px;
        }
        .benefits-list {
            display: grid;
            grid-template-areas: 
                "title title one two"
                "three four five none";
            grid-template-columns: 25% 25% 25% 25%;

            .benefit-title {
                grid-area: title;
                font-weight: 700;
                font-size: 14px;
                line-height: 24px;
                color: #A0A0A0;
                letter-spacing: -0.02em;

                max-width: 305px;
                margin-top: 80px;
            }
            .benefits-item {
                font-weight: 400;
                font-size: 32px;
                line-height: 40px;
                color: #ffffff;
                letter-spacing: -0.02em;

                padding-right: 20px;
                margin-top: 80px;

                .item-number {
                    width: 40px;
                    height: 40px;
                    border: solid 2px #ffffff;
                    border-radius: 20px;
                    line-height: 20px;

                    font-size: 14px;
                    font-weight: 700;

                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .item-title {
                    margin-top: 20px;
                }
                .item-description {
                    margin-top: 40px;
                    max-width: 330px;
                }
            }
            #item-1 {
                grid-area: one;
            }
            #item-2 {
                grid-area: two;
            }
            #item-3 {
                grid-area: three;
            }
            #item-4 {
                grid-area: four;
            }
            #item-5 {
                grid-area: five;
            }
        }
    }
    @media (max-width: 1599px) {
        .home-benefits {
            margin-top: 140px;
            .text-title {
                font-size: 140px;
                line-height: 112px;
                margin-left: 57px;
            }
            .benefits-container {
                margin-top: 80px;
                padding: 60px 60px 120px 60px;
            }
            .text1 {
                font-size: 56px;
                line-height: 64px;
                max-width: 435px;
            }
            .benefits-list {
                .benefit-title {
                    max-width: 290px;
                    margin-top: 60px;
                }
                .benefits-item {
                    font-size: 26px;
                    line-height: 36px;
                    padding-right: 40px;
                    margin-top: 60px;

                    .item-title {
                        margin-top: 20px;
                    }
                    .item-description {
                        margin-top: 24px;
                        max-width: 250px;
                    }
                }
            }
        }
    }
    @media (max-width: 1279px) {
        .home-benefits {
            margin-top: 120px;
            .text-title {
                font-size: 120px;
                line-height: 120px;
                margin-left: 33px;
            }
            .benefits-container {
                margin-top: 60px;
                padding: 60px 40px 120px 40px;
            }
            .text1 {
                font-size: 56px;
                line-height: 60px;
                max-width: 500px;
            }
            .benefits-list {
                grid-template-areas: 
                    "title one"
                    "two three"
                    "four five";
                grid-template-columns: 50% 50%;

                .benefit-title {
                    max-width: 235px;
                    margin-top: 60px;
                }
                .benefits-item {
                    font-size: 28px;
                    padding-right: 20px;
                    margin-top: 60px;

                    .item-title {
                        margin-top: 20px;
                    }
                    .item-description {
                        margin-top: 30px;
                        max-width: 440px;
                    }
                }
            }
        }
    }
    @media (max-width: 1023px) {
        .home-benefits {
            margin-top: 80px;
            .text-title {
                font-size: 100px;
                line-height: 100px;
                margin-left: 45px;
            }
            .benefits-container {
                margin-top: 50px;
                padding: 60px 45px 60px 45px;
            }
            .text1 {
                font-size: 48px;
                line-height: 50px;
                max-width: 700px;
            }
            .benefits-list {
                grid-template-areas: 
                    "title"
                    "one"
                    "two"
                    "three"
                    "four"
                    "five";
                grid-template-columns: 100%;

                .benefit-title {
                    max-width: 340px;
                    margin-top: 30px;
                }
                .benefits-item {
                    font-size: 28px;
                    margin-top: 60px;
                    padding-right: 0px;

                    .item-title {
                        margin-top: 20px;
                    }
                    .item-description {
                        margin-top: 30px;
                        max-width: 1000px;
                    }
                }
            }
        }
    }

    @media (max-width: 767px) {
        .home-benefits {
            margin-top: 40px;
            .text-title {
                font-size: 48px;
                line-height: 50px;
                margin-left: 20px;
            }
            .benefits-container {
                background-image: url("/image/v3/bg-benefits-mobile.png");
                margin-top: 30px;
                padding: 60px 20px 60px 20px;
            }
            .text1 {
                font-size: 24px;
                line-height: 30px;
                max-width: 700px;
            }
            .benefits-list {
                .benefit-title {
                    max-width: 360px;
                    margin-top: 20px;
                }
                .benefits-item {
                    font-size: 20px;
                    margin-top: 60px;

                    .item-title {
                        margin-top: 20px;
                    }
                    .item-description {
                        margin-top: 20px;
                        max-width: 1000px;
                        line-height: 28px;
                    }
                }
            }
        }
    }
</style>
  