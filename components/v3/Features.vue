<template>
  <div>
    <section class="home-features" id="features">
        <p class="text-title">Features</p>
        <div class="features-menu">
            <a :class="menu_index == 0 ? 'menu-item active' : 'menu-item'" @click="onPressTab(0)">Protection</a>
            <a :class="menu_index == 1 ? 'menu-item active' : 'menu-item'" @click="onPressTab(1)">technology</a>
            <a :class="menu_index == 2 ? 'menu-item active' : 'menu-item'" @click="onPressTab(2)">Privacy</a>
            <a :class="menu_index == 3 ? 'menu-item active' : 'menu-item'" @click="onPressTab(3)">security</a>
        </div>
        <p class="text-item-title">{{ menus[menu_index].title }}</p>
        <div class="features-container">
            <p class="text-one">
                {{ menus[menu_index].one }}
            </p>
            <p class="text-two">
                {{ menus[menu_index].two }}
            </p>
            <p class="text-three">
                {{ menus[menu_index].three }}
            </p>
        </div>
    </section>
  </div>
</template>
  
<script>
export default {
  components: {},
  data() {
    return {
        menus: [
            {
                index: 0,
                title: 'When it comes to asset protection, we stand by safety.',
                one: 'Our distinct approach to asset protection lies in preference of financial strategies that are inherently low-risk or entirely risk-free.',
                two: 'We specifically work with tangible assets like bullion and state-minted coins as they exhibit the strongest immunity against common financial risks and market failures.',
                three: 'Clients have complete ownership of their physical gold and silver, with full insurance coverage up to market value. Additionally, we refrain from using clients\' assets as collateral or borrowing against them, guaranteeing protection from default risk.'
            },
            {
                index: 1,
                title: 'Buy, sell, send and spend your vaulted gold and silver 24/7.',
                one: 'We offer the use of metal holdings just as traditional currencies, enabling seamless real-time assets conversion, even on weekends.',
                two: ' ',
                three: 'Our award-winning technology enables clients to manage their vaulted gold and silver holdings anytime with our app and web client.'
            },
            {
                index: 2,
                title: 'Asset ownership and personal data are fully confidential.',
                one: 'The protection of privacy is a fundamental right, and we are vocal proponents of that.',
                two: 'We never disclose or trade sensitive data of our clients to any third parties.',
                three: 'In compliance with Swiss property laws, we are not obliged to report on the assets of our clients, as bullion bars and coins are private property exempt from disclosure to third parties.'
            },
            {
                index: 3,
                title: 'Encrypted technology and secure segregated storage.',
                one: 'Vaulting facilities are equipped with the latest high-end security and monitoring technologies.',
                two: 'We also ensure the safety of clients\' data by using end-to-end encryption and advanced verification tools.',
                three: 'All metal assets are privately owned by a client, allocated and stored at a high-security vaulting facility in Switzerland, providing solid protection for your assets from inflation and financial risks.'
            }

        ],
        menu_index: 0
    }
  },
  mounted() {},
  methods: {
    onPressTab(index) {
        this.menu_index = index;
    }
  },
};
</script>
  
<style lang="scss" scoped>
    @import "@/assets/css/bootstrap.css";
    @import "@/assets/css/v3.css";

    .home-features {
        margin-top: 160px;
        display: flex;
        flex-direction: column;

        .text-title {
            font-weight: 400;
            font-size: 180px;
            line-height: 137px;
            color: #ffffff;
            margin-left: 46px;
            letter-spacing: -0.04em;
        }
        .features-menu {
            display: flex;
            flex-direction: row;
            margin: 80px 60px 0px 60px;
            border-top: solid 2px #ffffff;
            border-bottom: solid 2px #ffffff;
        }
        .menu-item {
            font-weight: 700;
            font-size: 14px;
            line-height: 80px;
            letter-spacing: -0.02em;
            margin-right: 40px;

            color: #ffffff;
            text-decoration: none;
            text-transform: uppercase;
            cursor: pointer;
            transition: all 0.2s ease;
        }
        .menu-item:hover {
            color: #FBC34A;
        }
        .menu-item.active {
            color: #FBC34A;
        }
        .text-item-title {
            font-weight: 400;
            font-size: 80px;
            line-height: 80px;
            letter-spacing: -0.02em;
            color: #ffffff;

            margin-top: 80px;
            margin-left: 60px;
            max-width: 1100px;
        }
        .features-container {
            margin: 0px 60px 0px 60px;
            padding: 80px 0px 160px 0px;
            display: grid;
            grid-template-areas: 
                "one two three";
            grid-template-columns: 25% 25% 50%;
        }
        .text-one {
            grid-area: one;
            font-weight: 700;
            font-size: 14px;
            line-height: 24px;
            letter-spacing: -0.02em;
            color: #A0A0A0;
            max-width: 185px;
        }
        .text-two {
            grid-area: two;
            font-weight: 700;
            font-size: 14px;
            line-height: 24px;
            letter-spacing: -0.02em;
            color: #A0A0A0;
            max-width: 185px;
        }
        .text-three {
            grid-area: three;
            font-weight: 400;
            font-size: 40px;
            line-height: 60px;
            letter-spacing: -0.02em;
            color: #ffffff;

            max-width: 585px;
        }
    }

    @media (max-width: 1599px) {
        .home-features {
            margin-top: 140px;

            .text-title {
                font-size: 140px;
                line-height: 112px;
                margin-left: 57px;
            }
            .features-menu {
                margin: 40px 60px 0px 60px;
            }
            .menu-item {
                line-height: 80px;
                margin-right: 32px;
            }
            .text-item-title {
                font-size: 56px;
                line-height: 64px;

                margin-top: 60px;
                margin-left: 60px;
                max-width: 870px;
            }
            .features-container {
                margin: 0px 60px 0px 60px;
                padding: 60px 0px 140px 0px;
            }
            .text-one {
                max-width: 145px;
            }
            .text-two {
                max-width: 145px;
            }
            .text-three {
                font-size: 36px;
                line-height: 56px;

                max-width: 580px;
            }
        }
    }
    @media (max-width: 1279px) {
        .home-features {
            margin-top: 120px;

            .text-title {
                font-size: 120px;
                line-height: 120px;
                margin-left: 33px;
            }
            .features-menu {
                margin: 30px 40px 0px 40px;
            }
            .menu-item {
                line-height: 80px;
                margin-right: 30px;
            }
            .text-item-title {
                font-size: 56px;
                line-height: 60px;

                margin-top: 60px;
                margin-left: 40px;
                max-width: 830px;
            }
            .features-container {
                margin: 0px 40px 0px 40px;
                padding: 60px 0px 120px 0px;
            }
            .text-one {
                max-width: 120px;
            }
            .text-two {
                max-width: 120px;
            }
            .text-three {
                font-size: 32px;
                line-height: 48px;

                max-width: 480px;
            }
        }
    }
    @media (max-width: 1023px) {
        .home-features {
            margin-top: 80px;

            .text-title {
                font-size: 100px;
                line-height: 100px;
                margin-left: 45px;
            }
            .features-menu {
                margin: 30px 45px 0px 45px;
            }
            .menu-item {
                line-height: 60px;
                margin-right: 20px;
            }
            .text-item-title {
                font-size: 48px;
                line-height: 50px;

                margin-top: 60px;
                margin-left: 45px;
                max-width: 680px;
            }
            .features-container {
                margin: 0px 45px 0px 45px;
                padding: 40px 0px 100px 0px;
                grid-template-areas: 
                    "three three"
                    "one two";
                grid-template-columns: 50% 50%;
            }
            .text-one {
                max-width: 170px;
                margin-top: 60px;
            }
            .text-two {
                max-width: 170px;
                margin-top: 60px;
            }
            .text-three {
                font-size: 24px;
                line-height: 32px;

                max-width: 680px;
            }
        }
    }

    @media (max-width: 767px) {
        .home-features {
            margin-top: 60px;

            .text-title {
                font-size: 48px;
                line-height: 50px;
                margin-left: 20px;
            }
            .features-menu {
                margin: 20px 20px 0px 20px;
                justify-content: space-between;
            }
            .menu-item {
                line-height: 58px;
                margin-right: 0px;

                font-size: 12px;
            }
            .text-item-title {
                font-size: 24px;
                line-height: 30px;

                margin-top: 40px;
                margin-left: 20px;
                margin-right: 20px;
            }
            .features-container {
                margin: 0px 20px 0px 20px;
                padding: 30px 0px 100px 0px;
                grid-template-areas: 
                    "three"
                    "one"
                    "two";
                grid-template-columns: 100%;
            }
            .text-one {
                max-width: 800px;
                margin-top: 40px;
            }
            .text-two {
                max-width: 800px;
                margin-top: 20px;
            }
            .text-three {
                font-size: 20px;
                line-height: 28px;
            }
        }
    }
</style>
  