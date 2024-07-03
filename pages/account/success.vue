<template lang="pug">
  .success
    section.success__title(data-anim="fadeIn" data-anim-delay="0" :style="{opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 10%)'}") Success
    section.success__subtitle(data-anim="fadeIn" data-anim-delay="0" :style="{opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 10%)'}") Thank you for your interest in becoming a Golden Suisse client. 
      br
      | We just sent you an email with instructions of how to complete your account application.  
</template>

<script>
export default {
  name: "AccountSuccess",
  head: {
    title: "Golden Suisse - Success"
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/_variables.scss";

.success {
  display: grid;
  grid-template-areas:
    ". title title title title title title title title ."
    ". . . . . subtitle subtitle subtitle subtitle .";
  grid-template-columns: 3.75% repeat(8, 11.5625%) 3.75%;
  padding: 295px 0 0 0;

  &__title {
    grid-area: title;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 180px;
    line-height: 39%;
    letter-spacing: -0.04em;
    color: $white;
    padding-bottom: 7.5%;
  }

  &__subtitle {
    grid-area: subtitle;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 150%;
    letter-spacing: -0.02em;
    color: $white;
    padding: 0 13% 0 0;
  }
}

@media (max-width: 1023px) {
  .success {
    grid-template-areas:
      ". title title ."
      ". subtitle subtitle ."
      ". logo logo ."
      ". email email ."
      ". join join ."
      ". app desc .";
    grid-template-columns: 5.4% repeat(2, 44.6%) 5.4%;
    padding: 100px 0 0 0;

    &__title {
      padding: 0;
      padding-bottom: 7%;
      font-size: 48px;
      line-height: 104%;
      letter-spacing: -0.04em;
    }

    &__subtitle {
      font-family: Arial;
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 125%;
      letter-spacing: -0.04em;
      padding: 10% 0 5% 0;
    }
  }
}
</style>
