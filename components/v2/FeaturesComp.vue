<template>
  <div>
    <h3>{{heading}}</h3>
    <p>
      {{para}}
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

h3 {
  font-size: 28px;
  font-weight: 400;
  letter-spacing: -0.04em;
}

p {
  font-size: 16px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.02em;
}
</style>