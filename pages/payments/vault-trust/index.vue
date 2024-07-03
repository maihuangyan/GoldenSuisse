<template lang="pug">
  .vaultTrust
    section.vaultTrust__title(data-anim="fadeIn" data-anim-delay="0" :style="{opacity: this.$store.state.isMobile ? 1 : 0, transform: this.$store.state.isMobile ? 'translate(0, 0)' : 'translate(0, 10%)'}") Vaulting and Security
    section.vaultTrust__maskGroup
      ProductsMaskGroup(:list="innerPages")
    section.vaultTrust__about1(data-anim="fadeIn" data-anim-delay=".3" :style="{opacity: this.$store.state.isMobile ? 1 : 0}") Bullion is audited regularly, by independent auditors against existing stock lists. None of our employees has physical access to the vault.
    section.vaultTrust__about2(data-anim="fadeIn" data-anim-delay=".3" :style="{opacity: this.$store.state.isMobile ? 1 : 0}") Clients can also opt to withdraw their holdings physically at the vault by scheduling a vault visitation or alternatively have their holdings delivered anywhere in the world.
    section.vaultTrust__about3(data-anim="fadeIn" data-anim-delay=".3" :style="{opacity: this.$store.state.isMobile ? 1 : 0}")
      | Client ownership data is stored in the Safest Data Centre, in Switzerland on our Private Servers.
      br
      br
      | Using military-grade cybersecurity, client data is attributed with the highest level of protection.
    section.vaultTrust__figureLeft(data-anim="fadeIn" data-anim-delay=".3" :style="{opacity: this.$store.state.isMobile ? 1 : 0}")
    section.vaultTrust__figureRight(data-anim="fadeIn" data-anim-delay=".3" :style="{opacity: this.$store.state.isMobile ? 1 : 0}")
    section.vaultTrust__schedule
      .vaultTrust__schedule_container
        FlowButton(label="SCHEDULE AN ADVISORY CALL" link="https://calendly.com/goldensuisse")
</template>

<script>
  import { mapGetters } from 'vuex'
  import ProductsMaskGroup from "@/components/Products/ProductsMaskGroup";
  import FlowButton from "@/components/FlowButton";
export default {
  name: "VaultTrust",
  head: {
    title: "Golden Suisse - Vault and Trust"
  },
  components: {
    ProductsMaskGroup,
    FlowButton
  },
  computed: {
    ...mapGetters([
      'whitePages/getPagesArray'
    ]),
    innerPages() {
      let categ, pathArray;
      if (this.$route.path.slice(-1) != '/') {
        categ = this.$route.path.split('/').pop();
      }
      else {
        pathArray = this.$route.path.split('/');
        categ = pathArray[pathArray.length - 2];
      }
      let whitePages = JSON.parse(JSON.stringify(this['whitePages/getPagesArray'](categ)));
      if (pathArray) {
        categ = '';
      }
      else {
        categ = categ + '/';
      }
      for (let obj in whitePages) {
        whitePages[obj].path = `${categ}${whitePages[obj].path}`;
      }
      return whitePages;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/_variables.scss";

.vaultTrust {
  display: grid;
  grid-template-areas:
    ". title title title title title title title title ."
    "maskGroup maskGroup maskGroup maskGroup maskGroup maskGroup maskGroup maskGroup maskGroup maskGroup"
    ". about1 . about2 . about3 about3 about3 about3 ."
    ". figureLeft figureLeft figureLeft figureLeft figureRight figureRight figureRight figureRight ."
    ". schedule schedule schedule schedule schedule schedule schedule schedule .";
  grid-template-columns: 3.75% repeat(8, 11.5625%) 3.75%;
  padding: 295px 0 0 0;

  &__title {
    grid-area: title;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 180px;
    line-height: 100%;
    letter-spacing: -0.04em;
    color: $white;
    padding-bottom: 8%;
  }

  &__maskGroup {
    grid-area: maskGroup;
    padding-bottom: 5%;
  }

  &__about1 {
    grid-area: about1;
    font-family: Arial;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 229%;
    letter-spacing: -0.02em;
    color: $lightGrey;
    padding: 0;
    padding-bottom: 16.5%;
  }

  &__about2 {
    grid-area: about2;
    font-family: Arial;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 229%;
    letter-spacing: -0.02em;
    color: $lightGrey;
    padding: 0;
    padding-bottom: 16.5%;
  }

  &__about3 {
    grid-area: about3;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 80px;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: $white;
    padding: 0;
    padding-bottom: 16.5%;
  }

  &__about4 {
    display: none;
  }

  &__figureLeft {
    grid-area: figureLeft;
    border-top: 2px solid $white;
    border-right: 2px solid $white;
    height: 160px;
  }

  &__figureRight {
    grid-area: figureRight;
    border-top: 2px solid $white;
    height: 160px;
  }

  &__schedule {
    grid-area: schedule;
    display: flex;
    justify-content: center;
    padding: 4% 0 8% 0;

    &_container {
      width: 370px;
    }
  }
}

@media (max-width: 1100px) {
  .vaultTrust {
    &__title {
      font-size: 160px;
    }
  }
}

@media (max-width: 1023px) {
  .vaultTrust {
    grid-template-areas:
      ". title title ."
      "maskGroup maskGroup maskGroup maskGroup"
      ". about1 about1 ."
      ". about2 about2 ."
      ". about4 about4 ."
      ". figureLeft figureRight ."
      ". schedule schedule .";
    grid-template-columns: 5.4% repeat(2, 44.6%) 5.4%;
    padding: 100px 0 0 0;

    &__title {
      padding: 0;
      font-size: 48px;
      line-height: 146%;
    }

    &__about1,
    &__about2 {
      font-weight: normal;
      font-size: 20px;
      line-height: 150%;
      color: $white;
      padding: 0 12% 0 0;
    }

    &__about1 {
      padding-top: 10%;
    }

    &__about2 {
      padding-bottom: 13%;
    }

    &__about3 {
      display: none;
    }

    &__about4 {
      grid-area: about4;
      display: block;
      padding: 0 18.6% 25% 0;
      font-family: Arial;
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 125%;
      letter-spacing: -0.02em;
      color: $white;
    }

    &__figureLeft {
      height: 80px;
    }

    &__figureRight {
      height: 80px;
    }

    &__schedule {
      padding: 18% 0 5% 0;
    }
  }
}
</style>
