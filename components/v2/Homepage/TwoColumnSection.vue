<template>
  <section id="swissNonbank">
    <div class="py-5 bg-white">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h4 class="mb-4 text-black">Heritage and integrity</h4>
            <p class="text-black">
              Golden Suisse operates in a manner reminiscent of Swiss financial institutions from the 19th century. Our approach involves client physical deposits and investments in gold bars and government-issued gold bullion coins. Our cutting-edge technology has been recognized with awards, empowering clients to utilize their own segregated gold stored in Switzerland for making payments, facilitating instant transfers, and conducting credit card purchases worldwide. We prioritize the safety and security of client assets by treating them as tangible private property, without relying on credit, leveraged financial tools, or digital currencies.
            </p>
          </div>
          <div class="col-md-6 text-right">
            <img
              src="@/assets/images/img__1.png"
              alt=""
              class="img-fluid side-image"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import "@/assets/css/bootstrap.css";

p {
  text-align: justify;
}

.side-image {
  height: 300px;
  width: 400px;
  object-fit: cover;
}

@media (max-width: 1199.98px) {
}
@media (max-width: 991.98px) {
  .side-image {
    height: auto;
    width: 100%;
    object-fit: cover;
  }
}
@media (max-width: 767.98px) {
}
@media (max-width: 575.98px) {
}
</style>
