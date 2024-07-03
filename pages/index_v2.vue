<template>
  <div>
    <Banner />
    <EnlightenedIndividualsSection />
    <TwoColumnSection />
    <AwardWinningTech />
    <FeaturesAccordionSection />
    <SwissBankingSection />
    <ProtectionAccordionSection />
    <PrivateCard />
    <FeaturesSection />
    <SecureAccess />
    <DedicatedPersonalManager />
    <BusinessCorporateAccounts />
    <SwissAccordionSection />
  </div>
</template>

<script>
import Banner from "../components/v2/Banner.vue";
import EnlightenedIndividualsSection from "../components/v2/Homepage/EnlightenedIndividualsSection.vue";
import TwoColumnSection from "../components/v2/Homepage/TwoColumnSection.vue";
import AwardWinningTech from "../components/v2/Homepage/AwardWinningTech.vue";
import SwissBankingSection from "../components/v2/Homepage/SwissBankingSection.vue";
import FeaturesSection from "../components/v2/Homepage/FeaturesSection.vue";
import SecureAccess from "../components/v2/Homepage/SecureAccess.vue";
import DedicatedPersonalManager from "../components/v2/Homepage/DedicatedPersonalManager.vue";
import BusinessCorporateAccounts from "../components/v2/Homepage/BusinessCorporateAccounts.vue";
import FeaturesAccordionSection from "../components/v2/Homepage/FeaturesAccordionSection.vue";
import ProtectionAccordionSection from "../components/v2/Homepage/ProtectionAccordionSection.vue";
import SwissAccordionSection from "../components/v2/Homepage/SwissAccordionSection.vue";
import PrivateCard from "../components/v2/Homepage/PrivateCard.vue";

export default {
  layout: "v2",
  watch: {},
  methods: {},

  components: {
    Banner,
    EnlightenedIndividualsSection,
    TwoColumnSection,
    AwardWinningTech,
    SwissBankingSection,
    FeaturesSection,
    SecureAccess,
    DedicatedPersonalManager,
    BusinessCorporateAccounts,
    PrivateCard,
    FeaturesAccordionSection,
    ProtectionAccordionSection,
    SwissAccordionSection,
  },

  created() {},
};
</script>

<style scoped>
@import "@/assets/css/bootstrap.css";

.enlightened-individuals {
  background-color: #101010;
}
.individuals-btns {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 20px;
}

.second-heading {
  margin-top: 80px;
  margin-bottom: 40px;
}

</style>
