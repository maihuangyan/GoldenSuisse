<template lang="pug">
  .services
    Service(v-for="(service, index) in services" :key="index" :service="service" data-anim="fadeIn" data-anim-delay=".3" :style="{opacity: $store.state.isMobile ? 1 : 0}")
</template>

<script>
export default {
  name: "Services",
  props: ["services"],
  components: {
    Service: () => import("@/components/AccountsRates/Service")
  }
};
</script>

<style lang="scss" scoped>
.services {
}
</style>