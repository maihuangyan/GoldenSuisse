<template>
  <section id="features-accordion" class="features-accordion">
    <div class="py-5" id="assets">
      <div class="container">
        <h1 class="title mb-4">Gold as money and investment</h1>
        <Accordion :items="items" :parent="'accordion-two'" />
      </div>
    </div>
  </section>
</template>

<script>
import Button from "../Button.vue";
import Accordion from "../Accordion.vue";

export default {
  components: { Button, Accordion },
  data() {
    return {
      items: [
        {
          title: "Universal acceptance",
          body: "Gold is recognized all over the world, and it is the world's only universally accepted form of final settlement. ",
        },
        {
          title: "Eternal life-span",
          body: "Whilst gold is eternal, a recent study by McKinsey found that the average life-span of companies listed in Standard & Poor's  is less than 18 years. McKinsey believes that, in 2027, 75% of the companies currently quoted on the S&P 500 will have disappeared.",
        },
        {
          title: "Risk transparent",
          body: "Whilst most financial instruments and currencies lack transparency in risk, physical gold held segregated as client private property is risk-transparent. It is also, considered by the Bank of International Settlements as a Tier 1 asset and having a zero risk weighting.",
        },
        {
          title: "Sovereign power",
          body: "Physical gold deposited currencies and bars provide for complete independence from financial intermediaries and monetary policy. It's the closest to financial freedom a person can come.",
        },
        {
          title: "Global risk",
          body: "Greater than $260 trillion in growing global debt is artificially serviced by over $28 trillion in fiat currencies created by global central banks in the last two decades. It's not sustainable and a financial markets reset is already planned by the World Economic Forum.",
        },
        {
          title: "Financial risk",
          body: "The banking sector is exposed to a perilously overvalued derivatives market, Bank deposit and insurances are limited to 100,000 EUR (Europe) and 250,000 USD (US).",
        },
        {
          title: "Sustainable currency",
          body: "In modern history, there have been several instances of currency crises. These are a sudden and drastic devaluation in a nation's currency matched by volatile markets and a lack of faith in the nation's economy. A currency crisis is sometimes predictable, yet they are often sudden.",
        },
      ],
    };
  },
};
</script>

<style scoped>
@import "@/assets/css/bootstrap.css";

.accordion {
  counter-reset: section;
}

div#accordionExample {
  width: 100%;
}

.features-accordion {
  background-color: #d9d9d9;
}

.card-header {
  background: transparent;
  border-bottom: 0px;
  border-top: 1px solid;
}

.accordion > .card {
  background-color: transparent;
  border: none;
}

.card-header h2 button {
  color: #000;
  width: 50%;
}

.card {
  position: relative;
}

.card img {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

.card:before {
  content: "";
  position: absolute;
  counter-increment: section;
  content: "0" counter(section);
  color: #0000004d;
  top: 50%;
  transform: translateY(-50%);
}

.card-header h2 button:hover {
  color: #101010;
  text-decoration: none;
}

.card-body {
  width: 50%;
  margin-left: auto;
  margin-top: -60px;
  padding-right: 150px;
}

.second-heading {
  margin-top: 80px;
  margin-bottom: 40px;
}

h1 {
  color: #000;
  font-size: 2rem;
}
</style>
