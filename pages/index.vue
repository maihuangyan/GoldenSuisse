<template>
  <div>
    <Banner />
    <Download />
    <AboutUs />
    <Service />
    <Serve />
    <Status />
    <GoldCard />
    <Benefits />
    <Features />
    <TailoredService />
    <Footer />
  </div>
</template>

<script>
import Banner from "../components/v3/Banner.vue";
import Download from "../components/v3/Download.vue";
import AboutUs from "../components/v3/AboutUs.vue";
import Service from "../components/v3/Service.vue";
import Serve from "../components/v3/Serve.vue";
import Status from "../components/v3/Status.vue";
import GoldCard from "../components/v3/GoldCard.vue";
import Benefits from "../components/v3/Benefits.vue";
import TailoredService from "../components/v3/TailoredService.vue";
import Features from "../components/v3/Features.vue";
import Footer from "../components/v3/Footer/Footer.vue";

export default {
  layout: "v3",
  watch: {},
  methods: {},

  components: {
    Banner,
    Download,
    AboutUs,
    Service,
    Serve,
    Status,
    GoldCard,
    Benefits,
    TailoredService,
    Features,
    Footer
  },

  created() {},
};
</script>