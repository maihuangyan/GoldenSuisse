<template>
  <section id="advantages" class="features-accordion">
    <div class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1 class="title mb-4">Advantages</h1>
            <Accordion :items="items" :parent="'accordion-one'" />
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
          title: "Safer than deposits",
          body: "Clients own their physical gold outright, without leverage or intermediary risk. Client gold is fully insured up to market value.",
        },
        {
          title: "Instant transfers 24/7/365",
          body: "Clients can make instant, unlimited gold currency payments and gold bar transfers 24/7/365.",
        },
        {
          title: "Worldwide access",
          body: "Clients can access their Swiss vaulted gold from anywhere in the world.",
        },
        {
          title: "Independence from bank sector",
          body: "Clients vaulted gold is completely independent of risks from the bank sector",
        },
        {
          title: "Dedicated personal manager",
          body: "HNWI clients have access to a personal manager, through our secure and mobile technology.",
        },
        {
          title: "Bullion deposits and withdrawals",
          body: "Clients can deposit and withdraw their gold at any time. Our valuables logistics partners collect and deliver gold worldwide.",
        },
        {
          title: "Legitimate Privacy",
          body: "Because we deal with client private property we are not obliged to report client holdings to third parties.",
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
