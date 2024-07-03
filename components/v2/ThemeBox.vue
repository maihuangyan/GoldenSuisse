<template>
  <div class="text-center theme-box px-lg-5 px-3 py-lg-5 py-3">
    <h3>{{ heading }}</h3>
    <p>
      {{ para }}
    </p>
    <img
      :src="require(`@/assets/images/${filename}`)"
      alt=""
      class="img-fluid"
    />
  </div>
</template>

<script lang="ts">
export default {
  props: ["heading", "para", "filename"],
};
</script>

<style scoped>
@import "@/assets/css/bootstrap.css";

.theme-box {
  background-color: #d9d9d9;
}
a {
  border-bottom: 1px solid #000;
  display: inline-block;
  margin-top: 16px;
  padding-bottom: 6px;
  font-family: Arial;
  font-weight: 600;
  line-height: 14px;
  letter-spacing: -0.02em;
}

a:hover {
  text-decoration: none;
}

h3 {
  font-size: 24px;
  font-weight: 400;
}
p {
  font-size: 14px;
}

@media (max-width: 1199.98px) {
  p {
    padding: 0 24px;
  }
}
@media (max-width: 991.98px) {
}
@media (max-width: 767.98px) {
}
@media (max-width: 575.98px) {
}
</style>
