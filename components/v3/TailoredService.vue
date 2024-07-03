<template>
  <div>
    <section class="home-tailoredservice" id="tailoredservice">
        <p class="text-title">Tailored Service</p>
        <div class="service-item">
            <p class="text-one">
                Personal manager
            </p>
            <p class="text-two">
                Each client is assigned a dedicated personal manager, providing clients with 24/7 support via encrypted in-app chat, calls, or video conferences.
            </p>
        </div>
        <div class="service-item">
            <p class="text-one">
                Daily support
            </p>
            <p class="text-two">
                From urgent invoice settlements to the handling of bill payments, we guarantee a prompt response to any special request that you may have.
            </p>
        </div>
        <div class="service-item">
            <p class="text-one">
                Tailored solutions
            </p>
            <p class="text-two">
                We don't believe in a one-size-fits-all approach. Instead, we closely cooperate with each client to provide tailored solutions to their unique needs.
            </p>
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

    .home-tailoredservice {
        display: flex;
        flex-direction: column;
        margin-top: 160px;
        padding-bottom: 160px;
        .text-title {
            font-weight: 400;
            font-size: 180px;
            line-height: 137px;
            color: #ffffff;
            margin-left: 55px;
            padding-bottom: 50px;
            letter-spacing: -0.04em;
        }
        .service-item {
            border-top: solid 2px #ffffff;
            margin-left: 60px;
            margin-right: 60px;
            margin-top: 30px;
            letter-spacing: -0.02em;
            display: grid;
            grid-template-areas: 
                "one two"
                "one three";
            grid-template-columns: 50% 50%;
            padding-top: 30px;
        }
        .text-one {
            grid-area: one;
            font-weight: 400;
            font-size: 32px;
            line-height: 40px;
            color: #ffffff;
        }
        .text-two {
            grid-area: two;
            font-weight: 400;
            font-size: 32px;
            line-height: 40px;
            letter-spacing: -0.02em;
            color: #ffffff;

            max-width: 750px;
        }

        .line-block {
            height: 160px;
            display: flex;
            flex-direction: row;
            margin-top: 30px;
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
    @media (max-width: 1599px) {
        .home-tailoredservice {
            margin-top: 140px;
            padding-bottom: 140px;
            .text-title {
                font-size: 140px;
                line-height: 112px;
                margin-left: 57px;
                padding-bottom: 10px;
            }
            .service-item {
                margin-left: 60px;
                margin-right: 60px;
                margin-top: 30px;
            }
            .text-one {
                font-size: 26px;
            }
            .text-two {
                font-size: 26px;
                line-height: 36px;
            }
            .line-block {
                margin-top: 30px;
                margin-left: 60px;
                margin-right: 60px;
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
        .home-tailoredservice {
            margin-top: 120px;
            padding-bottom: 120px;
            .text-title {
                font-size: 120px;
                line-height: 120px;
                margin-left: 40px;
                padding-bottom: 0px;
            }
            .service-item {
                margin-left: 40px;
                margin-right: 40px;
                margin-top: 30px;
            }
            .text-one {
                font-size: 28px;
            }
            .text-two {
                font-size: 28px;
                line-height: 40px;
            }
            .line-block {
                margin-top: 30px;
                margin-left: 40px;
                margin-right: 40px;
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
        .home-tailoredservice {
            margin-top: 80px;
            padding-bottom: 80px;
            .text-title {
                font-size: 100px;
                line-height: 100px;
                margin-left: 45px;
            }
            .service-item {
                margin-left: 45px;
                margin-right: 45px;
            }
            .text-one {
                font-size: 24px;
            }
            .text-two {
                font-size: 24px;
                line-height: 32px;
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
                margin-top: 60px; 
                align-self: center;
            }
        }
    }

    @media (max-width: 767px) {
        .home-tailoredservice {
            margin-top: 60px;
            padding-bottom: 60px;
            .text-title {
                font-size: 48px;
                line-height: 50px;
                margin-left: 20px;
            }
            .service-item {
                margin-left: 20px;
                margin-right: 20px;
                margin-top: 40px;
                padding-top: 20px;
            }            
            .text-one {
                font-size: 20px;
                line-height: 20px;
            }
            .text-two {
                font-size: 14px;
                line-height: 20px;
                margin-top: 40px;
            }
            .line-block {
                height: 80px;
                margin-top: 30px;
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
  