<template>
  <section class="py-5 bg-white">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <ThemeBox
            heading="We value Swiss tradition"
            para="Our corporate culture is Swiss and our values are founded on the human-right of Ownership and the right to Privacy."
            filename="Screenshot__1.png"
          />
        </div>
        <div class="col-md-6">
          <ThemeBox
            heading="Stability is our core value"
            para="Data is stored on private servers deep inside the Swiss alps, safeguarded by cybersecurity and Swiss Data Protection Law."
            filename="damien.png"
          />
        </div>
        <div class="col-12 mt-4">
          <SolutionFamilyOffices
            heading="External Asset Managers"
            subHeading="Become a Golden Suisse International Partner"
            para1="As an External Asset Manager (EAM), you have the support of Golden Suisse. Our team of professionals dedicated to EAM coordinates your needs with our in-house experts to find tailored and effective solutions."
            para2="As your clients' wealth manager, you offer them your expertise and make autonomous strategic decisions to help them protect their wealth, with a focus on vaulted gold that you control. And we'll be with you, every step of the way.
Your clients, therefore, get the best of both worlds."
            para3="They will become clients of a self-funded, well-capitalized, and independent Swiss company that specializes in wealth protection and privacy. They will benefit from first-class, front-to-back wealth protection services, all while maintaining a strong relationship with an independent wealth manager they trust."
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ThemeBox from "../ThemeBox.vue";
import SolutionFamilyOffices from "../SolutionFamilyOffices.vue";

export default {
  components: { ThemeBox, SolutionFamilyOffices },
};
</script>

<style scoped>
@import "@/assets/css/bootstrap.css";

</style>