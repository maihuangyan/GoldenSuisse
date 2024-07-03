<template>
  <button
    type="button"
    :class="
      invert
        ? 'btn button-general button-light'
        : 'btn button-general button-dark'
    "
    @click="onClick()"
  >
    <span>{{ text }}</span>
  </button>
</template>

<script>
export default {
  props: ["invert", "text"],
  methods: {
    onClick() {
      this.$emit('click');
    }
  }
};
</script>

<style scoped>

.button-general {
  border-radius: 60px !important;
  padding: 10px 35px !important;
}

.button-dark {
  background-color: #000 !important;
  border: 2px solid white !important;
  color: white !important;
}

/* .button-dark:hover {
  background-color: rgba(0, 0, 0, 0.2);
} */

.button-light {
  background-color: white !important;
  border: 2px solid #000 !important;
  color: #000 !important;
}

/* 
.button-light:hover {
  background-color: rgb(180 180 180 / 50%);
} */

.btn {
  position: relative;
  z-index: 1;
  overflow: hidden;
  transition: transform 0.9s cubic-bezier(0.4, 0, 0, 1),
    background-color 0.9s cubic-bezier(0.4, 0, 0, 1),
    color 0.9s cubic-bezier(0.4, 0, 0, 1) !important;
}

.btn span {
  position: relative;
  z-index: 2;
  font-weight: 700 !important;
}

/* .btn::after {
  content: '';
  width: 0;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 60px;
  z-index: 0;
  transition: 0.5s ease all;
} */

.btn.button-dark::after {
  background-color: #fff !important;
}

.btn.button-light::after {
  background-color: #000 !important;
}

.btn:hover::after {
  width: 100%;
}

.btn.button-light:hover span {
  color: #fff !important;
}

.btn.button-light:hover {
  border-color: #fff !important;
  background-color: rgb(156, 156, 156) !important;
}

.btn.button-dark:hover {
  border-color: #000 !important;
  background-color: rgb(129, 129, 129) !important;
}

.btn.button-dark:hover span {
  color: #000 !important;
}

@media (max-width: 575.98px) {
  .button-general {
    padding: 10px 14px !important;
    font-size: 14px !important;
  }
}
</style>
