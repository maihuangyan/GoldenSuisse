<template>
  <div class="inner-page">
    <section class="inner-page__section">
      <div class="main-container">
        <h1 class="page-title" data-anim="fadeIn">Personal Advisor</h1>
        <list-sm :list="['English', 'German', 'French', 'Italian', 'Spanish', 'Portuguese']"/>
      </div>
    </section>
    <section class="inner-page__section">
      <custom-video
        largeImgUrl="personal_advisor.jpg"
        smallImgUrl="personal_advisor_xs.jpg"
        title="There for you all the time
"
        subtitle="Swiss Service is our standard"
        subtitleCenter="Exceptional"
      />
    </section>
    <section class="inner-page__section pt_80">
      <div class="main-container">
        <p class="text-big" data-anim="fadeIn">Meet with your Personal <br class="hide-mob">Advisor online for Help, <br class="hide-mob">Support and Advice.</p>
        <div class="grid offset_80" data-anim="fadeIn">
          <p class="grid__col text-sm color-light-gray">We are not required to share <br class="hide-mob">or report client information because <br class="hide-mob">we deal with private property <br class="hide-mob">and ‘non-reportable’ bullion.</p>
          <p class="grid__col text-sm color-light-gray">Your bullion is physically <br class="hide-mob">identifiable and never <br class="hide-mob">mixed with company assets.</p>
          <p class="grid__col text-mid">The Personal Relationship with the Client is very important for us, as well as making ourselves available 24/7/365. All Golden Suisse clients have the advantage of being able to meet their Personal Advisors over video, phone and email, in their own language, using our award-winning technology.</p>
        </div>
        <!--<p class="text-desc text-desc_center color-white offset_100" data-anim="fadeIn">Features</p>-->
        <!--<double-link-list :list="features" class="offset_40"/>-->
      </div>
    </section>
  </div>
</template>

<script>
  import listSm from "@/components/updated/listSm";
  import CustomVideo from "@/components/CustomVideo";
  import DoubleLinkList from "@/components/Products/DoubleLinkList";
  export default {
    head() {
      return {
        title: "Golden Suisse - Personal Advisor",
      }
    },
    components: {
      listSm,
      CustomVideo,
      DoubleLinkList
    },
    data: () => ({
      features: [
        {
          title: 'Savings and Pensions',
          exist: false,
          path: '#'
        },
        {
          title: 'Personal  Accounts',
          exist: false,
          path: '#'
        },
        {
          title: 'Taxation',
          exist: false,
          path: '#'
        },
        {
          title: 'Business Accounts',
          exist: false,
          path: '#'
        },
        {
          title: 'Sucession',
          exist: false,
          path: '#'
        },
        {
          title: 'Bullion Trusts',
          exist: false,
          path: '#'
        }
      ]
    })
  }
</script>

<style lang="scss" scoped>

</style>
