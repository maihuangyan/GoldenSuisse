<template>
  <section id="goldCard">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6">
          <FeaturesComp
            heading="120+ Countries"
            para="Your card works in more than 120 countries worldwide, and is connected to the VISA and Mastercard networks."
          />
        </div>
        <div class="col-lg-4 col-md-6">
          <FeaturesComp
            heading="40 Million Point of sales"
            para="The Golden Suisse card works in more than 40 million Point of Sales worldwide."
          />
        </div>
        <div class="col-lg-4 col-md-6">
          <FeaturesComp
            heading="Private Transactions"
            para="Your balance and all your transactions are kept completely private, and are only reported to you. There is no reporting to third parties in regard to client account balances."
          />
        </div>
        <div class="col-lg-4 col-md-6">
          <FeaturesComp
            heading="Card Limits"
            para="Credit your card balance instantly by converting gold to EUR or USD on your card. Card spend limits reach 400K per year."
          />
        </div>
        <div class="col-lg-4 col-md-6">
          <FeaturesComp
            heading="No Hidden Fees"
            para="Our cards have no hidden fees or charges. Free Card Loads, no card maintenance fees. "
          />
        </div>
        <div class="col-lg-4 col-md-6">
          <FeaturesComp
            heading="Currency selection"
            para="Golden Suisse provides cards in EUR or USD and GBP."
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import FeaturesComp from "../FeaturesComp.vue";

export default {
  props: {},
  components: { FeaturesComp },
};
</script>

<style scoped>
@import "@/assets/css/bootstrap.css";

.individuals-btns {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 20px;
}

section {
  background-color: #f5f5f5;
  padding: 80px 0;
}
</style>
