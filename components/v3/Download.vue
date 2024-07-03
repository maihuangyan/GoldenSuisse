<template>
  <div>
    <section class="home-download" id="download">
        <div style="display: flex; flex-direction: row; width: '100%';">
            <div class="download-app">
                <a class="download-button" @click="onClickDownload">Download App</a>
                <p class="download-description">iOS & Android</p>
            </div>
            <div class="become-client">
                <a class="download-button" @click="onClickBecomeClient">Become a Client</a>
                <p class="download-description">Apply for a Golden Suisse account</p>
            </div>
        </div>
        <p class="text-bottom">protecting wealth, payments and privacy</p>
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
  methods: {
    onClickDownload() {
        this.$router.push('account/download');
    },
    onClickBecomeClient() {
        this.$router.push('account/register');
    }
  },
};
</script>
  
<style lang="scss" scoped>
@import "@/assets/css/bootstrap.css";
@import "@/assets/css/main.css";

    .home-download {
        .download-app {
            height: 360px;
            flex: 1;
            border-top: solid 2px #ffffff;
            border-right: solid 2px #ffffff;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding: 60px 40px 0px 60px;
        }
        .download-button {
            font-weight: 400;
            font-size: 48px;
            color: #ffffff;
            letter-spacing: -0.04em;
            text-decoration: none;
            transition: all 0.2s ease;
            cursor: pointer;
            height: fit-content;
        }
        .download-button:hover {
            color: #fbc34a;
        }
        .download-description {
            font-weight: 700;
            font-size: 14px;
            letter-spacing: -0.02em;
            color: #A0A0A0;
            height: fit-content;
        }
        .become-client {
            height: 360px;
            flex: 1;
            border-top: solid 2px #ffffff;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding: 60px 60px 0px 40px;
        }
        .text-bottom {
            font-weight: 700;
            font-size: 24px;
            line-height: 160px;
            letter-spacing: -0.04em;
            color: #ffffff;
            text-transform: uppercase;
            text-align: center;
        }
    }

    @media (max-width: 1599px) {
        .home-download {
            .download-app {
                height: 280px;
                padding: 40px 40px 0px 60px;
            }
            .download-button {
                font-size: 40px;
            }
            .become-client {
                height: 280px;
                padding: 40px 60px 0px 40px;
            }
            .download-description {
                max-width: 135px;
                text-align: right;
                line-height: 16px;
            }
            .text-bottom {
                font-size: 20px;
            }
        }
    }

    @media (max-width: 1279px) {
        .home-download {
            .download-app {
                height: 240px;
                padding: 30px 30px 0px 40px;
            }
            .download-button {
                font-size: 32px;
            }
            .become-client {
                height: 240px;
                padding: 30px 40px 0px 30px;
            }
            .download-description {
                max-width: 135px;
                text-align: right;
                line-height: 20px;
            }
            .text-bottom {
                font-size: 20px;
            }
        }
    }
    @media (max-width: 1023px) {
        .home-download {
            .download-app {
                height: 160px;
                padding: 30px 30px 0px 45px;
                flex-direction: column;
                justify-content: flex-start;
            }
            .download-button {
                font-size: 32px;
            }
            .become-client {
                height: 160px;
                padding: 30px 45px 0px 30px;
                flex-direction: column;
                justify-content: flex-start;
            }
            .download-description {
                max-width: 500px;
                text-align: right;
                line-height: 20px;
                text-align: left;
                margin-top: 15px;
            }
            .text-bottom {
                font-size: 20px;
            }
        }
    }

    @media (max-width: 767px) {
        .home-download {
            .download-app {
                height: 80px;
                padding: 15px 0px 0px 0px;
                margin-left: 20px;
                flex-direction: column;
            }
            .download-button {
                font-size: 20px;
                line-height: 28px;
            }
            .become-client {
                height: 80px;
                padding: 15px 0px 0px 20px;
                flex-direction: column;
                margin-right: 20px;
            }
            .download-description {
                display: none;
            }
            .text-bottom {
                font-size: 14px;
                line-height: 100px;
            }
        }
    }
</style>
  