<template>
  <section id="enlightened-individuals " class="enlightened-individuals">
    <div class="py-5">
      <div class="container">
        <h3 class="text-white second-heading">Protecting Wealth, Payments and Privacy</h3>
        <div class="row">
          <div class="col-md-4 mb-3 mb-md-0">
            <BusinessCorporateAccountsText
              heading="FINANCIAL RISK"
              para="We protect wealth against inflation, stock market movements and other financial risks."
            />
          </div>
          <div class="col-md-4 mb-3 mb-md-0">
            <BusinessCorporateAccountsText
              heading="BANK RISK"
              para="Clients wealth is free from bank risk, and not limited by bank deposit guarantees."
            />
          </div>
          <div class="col-md-4">
            <BusinessCorporateAccountsText
              heading="CONFIDENTIALITY"
              para="We provide absolute confidentiality of client information, against all third parties."
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BusinessCorporateAccountsText from "../BusinessCorporateAccountsText.vue";

export default {
  components: { BusinessCorporateAccountsText },
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

.enlightened-individuals {
  background-color: #101010;
}

.individuals-btns {
  display: inline-flex;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 40px;
}

.second-heading {
  margin-top: 90px;
  margin-bottom: 32px;
}

.enlightened-individuals p {
  padding-right: 40px;
}

@media (max-width: 1199.98px) {
}
@media (max-width: 991.98px) {
}
@media (max-width: 767.98px) {
}
@media (max-width: 575.98px) {
  .individuals-btns {
    gap: 10px;
    justify-content: center;
  }

  .second-heading {
    margin-top: 40px;
    margin-bottom: 30px;
  }
}
</style>
