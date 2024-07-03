<template>
  <section class="text-white" id="business">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 class="title mb-md-5 mb-4">Business, and corporate accounts</h2>
        </div>
        <div class="col-lg-4 col-md-6 mb-3 mb-md-0">
          <BusinessCorporateAccountsText
            heading="BUSINESSES"
            para="There are several advantages for businesses in regard to holding gold as money, investments and payments."
          />
        </div>
        <div class="col-lg-4 col-md-6 test">
          <BusinessCorporateAccountsText
            heading="TRUSTS AND INSTITUTIONAL CLIENTS"
            para="Golden Suisse also provides bespoke solutions for trusts and institutional clients, including private label solutions."
          />
        </div>
        <div class="col-12 mt-5">
          <img src="@/assets/images/img__2.png" alt="" class="img-fluid" />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
// import { BusinessCorporateAccountsText } from 'BusinessCorporateAccountsText'
import BusinessCorporateAccountsText from "../BusinessCorporateAccountsText.vue";

export default {
  components: { BusinessCorporateAccountsText },
};
</script>

<style scoped>
@import "@/assets/css/bootstrap.css";

section {
  padding: 80px 0;
  background: #101010;
}
</style>
