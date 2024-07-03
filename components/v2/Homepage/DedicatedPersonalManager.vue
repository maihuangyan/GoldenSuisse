<template>
  <section class="bg-white" id="personal">
    <div class="container">
      <div class="row align-items-end">
        <div class="col-lg-9">
          <div class="mb-md-5 mb-3">
            <h2 class="title">Personal Account</h2>
            <h3>Engage with a dedicated personal manager</h3>
          </div>
          <div class="row mb-md-5 mb-3">
            <div class="col-md-7">
              <p class="text-black">
                We provide our HNWI clients with a traditional Swiss personal
                contact in your preferred language.
              </p>
              <p class="text-black">
                Schedule a video-meeting with your dedicated personal manager in
                your mobile app.
              </p>
              <p class="text-black">
                Meet and talk with your dedicated personal manager through our
                private messaging application, by phone or email.
              </p>
            </div>
            <div class="col-md-5">
              <h4>SECURE ENGAGEMENT TECHNOLOGY</h4>
              <ul>
                <li>Video conferencing</li>
                <li>Schedule a meeting</li>
                <li>Private chat</li>
                <li>Encrypted email</li>
                <li>Direct Phone call</li>
              </ul>
            </div>
          </div>
          <div class="individuals-btns">
            <Button text="Become a client" @click="onClickBecomeRegend()"/>
            <Button text="Download app" :invert="true" @click="onClickDownloadApp()"/>
          </div>
        </div>
        <div class="col-lg-3 text-lg-right text-center mt-4 mt-lg-0">
          <img
            src="@/assets/images/iphone13.png"
            alt=""
            class="img-phone img-fluid"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Button from "../Button.vue";

export default {
  components: { Button },
    methods: {
    onClickBecomeRegend() {
      this.$router.push('account/register');
    },
    onClickDownloadApp() {
      this.$router.push('account/download');
    },
  }
};
</script>

<style scoped>
@import "@/assets/css/bootstrap.css";

.individuals-btns {
  display: flex;
  gap: 20px;
}
h3 {
  font-size: 25px;
  font-weight: 400;
  letter-spacing: 0em;
  text-align: justified;
}
h4 {
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.02em;
}

li {
  font-size: 16px;
  font-weight: 400;
  letter-spacing: -0.02em;
}

section {
  padding: 80px 0;
}

@media (min-width: 1199.98px) {
  .img-phone {
    width: 200px;
    height: 403.79px;
    object-fit: cover;
  }
}
@media (max-width: 1199.98px) {
}
@media (max-width: 991.98px) {
}
@media (max-width: 767.98px) {
  .img-phone {
    max-width: 70%;
  }
}
@media (max-width: 575.98px) {
  h3 {
    font-size: 18px;
  }
}
</style>
