<template>
  <section class="enlightened-individuals text-white" id="goldCard__sec">
    <div class="container">
      <div class="row">
        <div class="col-12 mb-5">
          <div class="d-flex mb-3 align-items-center" style="gap: 20px">
            <h2 class="title">The card</h2>
            <img
              src="@/assets/images/Screenshot__2.png"
              alt=""
              class="img-fluid"
              style="height: 40px"
            />
          </div>
          <h3>Bespoke gold card with laser engraved signature</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-5 col-md-4">
          <img src="@/assets/images/card.png" alt="" class="img-fluid" />
        </div>
        <div class="col-lg-7 col-md-8">
          <div class="row h-100">
            <div class="col-lg-6 mt-4 mb-4 mb-md-0">
              <BusinessCorporateAccountsText
                heading="BESPOKE GOLD"
                para="This card is 24K gold covered metal, and comes with clients owned laser engraved signature."
              />
            </div>
            <div class="col-lg-6 mt-4 mb-4 mb-md-0">
              <BusinessCorporateAccountsText
                heading="STANDARD PLASTIC"
                para="The standard card is a traditional discrete flexible credit card."
              />
            </div>
            <div class="col-12 mt-auto">
              <div class="individuals-btns justify-content-end">
                <Button text="Become a client" @click="onClickBecomeRegend"/>
                <Button text="Download app" :invert="true" @click="onClickDownloadApp"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import BusinessCorporateAccountsText from "../BusinessCorporateAccountsText.vue";
import Button from "../Button.vue";

export default {
  components: { BusinessCorporateAccountsText, Button },
  methods: {
    onClickBecomeRegend() {
      this.$router.push('account/register');
    },
    onClickDownloadApp() {
      this.$router.push('account/download');
    },
  }
};
</script>

<style scoped>
@import "@/assets/css/bootstrap.css";

.individuals-btns {
  display: flex;
  gap: 20px;
}

h3 {
  font-size: 25px;
  font-weight: 400;
  letter-spacing: 0em;
  text-align: justified;
  color: #afafaf;
}

#goldCard__sec.enlightened-individuals {
  background-color: #101010;
  padding-top: 80px;
  padding-bottom: 80px;
}

.img-card {
  height: 409px;
  width: 596px;
}
@media (max-width: 1199.98px) {
}
@media (max-width: 991.98px) {
}
@media (max-width: 767.98px) {
}
@media (max-width: 575.98px) {
  h3 {
    font-size: 18px;
  }
}
</style>
