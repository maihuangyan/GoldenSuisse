<template>
  <div>
    <section class="home-status" id="status">
      <div class="status-container">
        <div class="status-item">
            <p class="status-value value-1">7%</p>
            <div class="status-description">
                <p>Average yearly ROI</p>
            </div>
        </div>
        <div class="status-item">
            <p class="status-value value-2">1.2B</p>
            <div class="status-description">
                <p>Assets under custody, CHF</p>
            </div>
        </div>
        <div class="status-item">
            <p class="status-value value-3">30+</p>
            <div class="status-description">
                <p>Specialized advisors</p>
            </div>
        </div>
        <div class="status-item">
            <p class="status-value value-4">4000+</p>
            <div class="status-description">
                <p>Customers from 20+ countries</p>
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

.home-status {
  margin-top: 160px;
  .status-container {
    width: 100%;
    padding: 0px 60px 0px 60px;
    display: flex;
    flex-wrap: wrap;
  }
  .status-item {
    flex: 50%;
    margin-bottom: 160px;
    .status-value {
        font-weight: 400;
        font-size: 180px;
        line-height: 137px;
        letter-spacing: -0.04em;
        color: #ffffff;
    }

    .status-description {
        width: 100%;
        border-top: solid 2px #ffffff;
        height: 120px;
        margin-top: 80px;

        font-weight: 400;
        font-size: 48px;
        line-height: 120px;
        color: #ffffff;

        letter-spacing: -0.02em;
    }

    .value-1 {
        margin-left: -8px;
    }
    .value-2 {
        margin-left: -18px;
    }
    .value-3 {
        margin-left: -8px;
    }
    .value-4 {
        margin-left: 0px;
    }
  }
}
@media (max-width: 1599px) {
    .home-status {
        margin-top: 140px;
        margin-bottom: 20px;
        .status-container {
            padding: 0px 60px 0px 60px;
        }
        .status-item {
            margin-bottom: 120px;
            .status-value {
                font-size: 140px;
                line-height: 100px;
            }

            .status-description {
                height: 100px;
                margin-top: 40px;

                font-size: 36px;
                line-height: 100px;
            }

            .value-1 {
                margin-left: -6px;
            }
            .value-2 {
                margin-left: 0px;
            }
            .value-3 {
                margin-left: -6px;
            }
            .value-4 {
                margin-left: 0px;
            }
        }
    }
}
@media (max-width: 1279px) {
    .home-status {
        margin-top: 120px;
        margin-bottom: 40px;
        .status-container {
            padding: 0px 40px 0px 40px;
        }
        .status-item {
            margin-bottom: 80px;
            .status-value {
                font-size: 120px;
                line-height: 120px;
            }

            .status-description {
                height: 100px;
                margin-top: 30px;

                display: flex;
                align-items: center;

                font-size: 36px;
                line-height: 36px;
            }

            .value-1 {
                margin-left: 0px;
            }
            .value-2 {
                margin-left: 0px;
            }
            .value-3 {
                margin-left: 0px;
            }
            .value-4 {
                margin-left: 0px;
            }
        }
    }
}
@media (max-width: 1023px) {
    .home-status {
        margin-top: 80px;
        .status-container {
            padding: 0px 45px 0px 45px;
        }
        .status-item {
            margin-bottom: 60px;
            flex: 100%;
            .status-value {
                font-size: 100px;
                line-height: 80px;
            }

            .status-description {
                height: 80px;
                margin-top: 30px;

                font-size: 28px;
                line-height: 80px;

            }

            .value-1 {
                margin-left: 5px;
            }
            .value-2 {
                margin-left: 5px;
            }
            .value-3 {
                margin-left: 5px;
            }
            .value-4 {
                margin-left: 5px;
            }
        }
    }
}

@media (max-width: 767px) {
    .home-status {
        margin-top: 60px;
        .status-container {
            padding: 0px 20px 0px 20px;
        }
        .status-item {
            margin-bottom: 40px;
            .status-value {
                font-size: 48px;
                line-height: 50px;
            }

            .status-description {
                height: 70px;
                margin-top: 20px;

                font-size: 24px;
                line-height: 70px;

            }

            .value-1 {
                margin-left: 0px;
            }
            .value-2 {
                margin-left: 0px;
            }
            .value-3 {
                margin-left: 0px;
            }
            .value-4 {
                margin-left: 0px;
            }
        }
    }
}
</style>
    