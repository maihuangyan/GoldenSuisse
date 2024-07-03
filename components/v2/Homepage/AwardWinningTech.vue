<template>
  <section class="enlightened-individuals py-5" id="protection">
    <div class="container">
      <div class="row mb-md-5 mb-3 justify-content-end">
        <div class="col-12">
          <h2 class="text-white title">
            Swiss Tradition Meets Technology
          </h2>
          <p class="desc">
            YOUR MONEY YOUR BUSINESS
          </p>
        </div>
      </div>
      <div class="row align-items-center">
        <div class="col-lg-8 col-md-6">
          <img
            src="@/assets/images/award-winning-new.png"
            alt=""
            class="img-fluid"
          />
        </div>
        <div class="col-lg-4 col-md-6 text-white mt-4 mt-lg-0">
          <div class="d-flex flex-column h-100">
            <p class="desc2">
              PAYMENTS - Pay international bills in any currency using your private vaulted gold.
            </p>
            <p class="desc2">
              TRANSFERS - Transfer gold instantly 24/7/365 to other account holders.
            </p>
            <p class="desc2">
              CARD - Integrated card for private purchases, at stores and online in 120+ countries.
            </p>
            <p class="desc2">
              VAULT - Your private gold and silver bullion coins and bars stored safely in a Swiss high-security vault.
            </p>
            <p class="desc2">
              PERSONAL ADVISOR - Call, Chat, Email or Schedule a meeting with your personal advisor at a touch of a button.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import "@/assets/css/bootstrap.css";

.enlightened-individuals {
  background-color: #101010;
}

.individuals-btns {
  display: flex;
  align-items: flex-end;
  gap: 20px;
}

.desc {
  font-size: 25px;
  font-weight: 400;
  letter-spacing: 0em;
  text-align: justified;
  color: #afafaf;
}

h4 {
  font-size: 17px;
  font-weight: 700;
  letter-spacing: 0em;
  margin-bottom: 16px;
  color: #fbf4f4;
}

.desc2 {
  font-size: 17px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: -0.02em;
}

@media (min-width: 1199.98px) {
  img {
    width: 559px;
    height: 438px;
  }
}
@media (max-width: 1199.98px) {
}
@media (max-width: 991.98px) {
}
@media (max-width: 767.98px) {
}
@media (max-width: 575.98px) {
  .desc {
    font-size: 18px;
  }
}
</style>
