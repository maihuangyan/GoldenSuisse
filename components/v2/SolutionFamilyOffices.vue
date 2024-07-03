<template>
  <div class="theme-box-2 d-flex flex-column">
    <div class="d-lg-flex align-items-center">
      <h2 class="text-white display-4">{{ heading }}</h2>
      <div class="d-inline-flex ml-lg-5">
        <img
          src="@/assets/images/switzerland.png"
          alt=""
          class="country_image"
        />
        <span class="text-white ml-3">Switzerland</span>
      </div>
    </div>
    <h4 class="text-white display-5 mt-4 mt-md-0">{{ subHeading }}</h4>
    <div class="border-top pb-3 mt-auto"></div>
    <div class="row">
      <div class="col-md-4">
        <p class="text-gray">
          {{ para1 }}
        </p>
      </div>
      <div class="col-md-4">
        <p class="text-gray">
          {{ para2 }}
        </p>
      </div>
      <div class="col-md-4">
        <p class="text-gray">
          {{ para3 }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: ["heading", "subHeading", "para1", "para2", "para3"],
};
</script>

<style scoped>
@import "@/assets/css/bootstrap.css";

.theme-box-2 {
  background-image: url("@/assets/images/bg-banner-1.png");
  height: 550px;
  padding: 40px;
  background-size: cover;
  background-repeat: no-repeat;
}
.border-top {
  border-top: 1px solid #fff;
  /* margin-left: 10px;
  margin-right: 10px; */
}

.country_image {
  height: 25px;
  width: 25px;
}

.text-gray {
  color: #fffcfc;
}
.display-4 {
    font-size: 2rem;
}

@media (max-width: 1199.98px) {
}
@media (max-width: 991.98px) {
  .theme-box-2 {
    height: 500px;
    background-size: cover;
  }
}
@media (max-width: 767.98px) {
}
@media (max-width: 575.98px) {
  .theme-box-2 {
    height: auto;
    padding: 20px;
    background-size: cover;
  }
  .theme-box-2 .display-4 {
    font-size: 2rem;
  }
  .border-top {
    margin-left: 0;
    margin-right: 0;
  }
}
</style>
