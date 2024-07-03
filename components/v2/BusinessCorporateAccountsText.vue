<template>
  <div>
    <h3>{{ heading }}</h3>
    <p>
      {{ para }}
    </p>
  </div>
</template>
<script lang="ts">

export default {
  props: ["heading", "para"],
};
</script>

<style scoped>
@import "@/assets/css/bootstrap.css";

p {
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: justify;
  color: #fbf4f4;
}

h3 {
  font-weight: 700;
  font-size: 17px;
  color: #f6f6f6;
}

div {
  border-left: 1px solid #ffffff;
  padding-left: 14px;
}

@media (max-width: 1199.98px) {
}
@media (max-width: 991.98px) {
}
@media (max-width: 767.98px) {
}
@media (max-width: 575.98px) {
  div {
    border-left: 0;
    padding-left: 0;
    border-bottom: 1px solid #ffffff;
  }
}
</style>
