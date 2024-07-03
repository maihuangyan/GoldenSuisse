<template>
  <section id="manage-risk" class="features-accordion">
    <div class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1 class="title mb-4">How we manage risk</h1>
            <Accordion :items="items" :parent="'accordion-three'" />
          </div>
        </div>
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
          title: "Governance",
          body: "Golden Suisse is registered under the name GCB Suisse AG, as privately owned Swiss company, Our governance model allows us to plot a steady, considered course. Active partners are shareholders, for as long as the working relationship remains.",
        },
        {
          title: "Business Continuity",
          body: "Golden Suisse maintains a business continuity plan, in the same way as required by other players in the financial sector",
        },
        {
          title: "Risk policy",
          body: "It is the policy of the Company to prohibit and actively prevent money laundering and any activity that facilitates money laundering or the funding of terrorism or criminal activities.",
        },
        {
          title: "Swiss financial regulators",
          body: "GCB Suisse AG is SRO-Member 100679 of the Swiss Financial Services Standards Association VQF.",
        },
        {
          title: "Cybersecurity",
          body: "Cyber risk is one of the most significant operational risks faced by financial institutions. Golden Suisse follows a specific framework of cybersecurity requirements, which includes policies, procedures, network, software, hardware, malware, encryption, personnel, and more.",
        },
        {
          title: "Liquidity and Capital Requirements",
          body: "Golden Suisse maintains capital and liquidity levels and monitoring as a guarantee to maintain itself as a “going concern” that it will remain in business for the foreseeable future.",
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
  background: #d9d9d9;
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
  color: black;
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
