<template>
  <div class="accordion" :id="parent">
    <div class="card" v-bind:key="index" v-for="(item, index) in items">
      <div class="card-sub">
        <div class="card-header" :id="'heading' + index + parent">
          <h2 class="mb-0">
            <button
              class="btn btn-link btn-block text-left"
              type="button"
              data-toggle="collapse"
              :data-target="'#collapse' + index + parent"
              aria-expanded="true"
              :aria-controls="'collapse' + index + parent"
            >
              {{ item.title }}
            </button>
          </h2>
          <img
            src="@/assets/images/plus-icon.png"
            alt=""
            :class="'plus-icon'"
          />
        </div>

        <div
          :id="'collapse' + index + parent"
          :class="'collapse'"
          :aria-labelledby="'heading' + index + parent"
          :data-parent="'#' + parent"
        >
          <div class="card-body">
            {{ item.body }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["items", "parent"],
  data() {
    return {
      index: 0,
    };
  },
  mounted() {
    const AccordionPlusIcons = Array.from(
      document.querySelectorAll(`#${this.$props.parent} .plus-icon`)
    );

    const AccordionCard = Array.from(
      document.querySelectorAll(`#${this.$props.parent} .card-sub`)
    );

    AccordionCard.map((element) => {
      element.addEventListener("click", (e) => {
        e.currentTarget.querySelector(".card-header .btn").click();
        const plusIcon = e.currentTarget.querySelector(".plus-icon");
        if (this.$data.index === 0) {
          if (plusIcon.style.transform === "translateY(-50%) rotate(45deg)") {
            console.log("first-condition");
            this.$data.index = 1;
            plusIcon.style.transform = "translateY(-50%) rotate(0deg)";
          } else {
            console.log("second-condition");
            this.$data.index = 1;
            AccordionPlusIcons.map(
              (elm) => (elm.style.transform = "translateY(-50%) rotate(0deg)")
            );
            plusIcon.style.transform = "translateY(-50%) rotate(45deg)";
          }
        }

        setTimeout(() => {
          this.$data.index = 0;
        }, 100);
      });
    });
  },
};
</script>

<style scoped>
@import "@/assets/css/bootstrap.css";

.card-header {
  background: transparent;
  border-bottom: 0px;
  border-top: 1px solid;
  position: relative;
  z-index: 998;
}

.accordion {
  width: 100%;
}

.accordion > .card {
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.card-header h2 button {
  color: #000;
  width: 50%;
  margin-left: 250px;
}

.card {
  position: relative;
}

.card .btn-block {
  pointer-events: none;
}

.card img {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  transition: 0.2s ease all;
  cursor: pointer;
}

.card:before {
  content: "";
  position: absolute;
  counter-increment: section;
  content: "0" counter(section);
  color: #0000004d;
  top: 31.5px;
  transform: translateY(-50%);
}

.card-header h2 button:hover {
  color: black;
  text-decoration: none;
}

.card-header:first-child {
  border-radius: 0;
}

.card {
  border-radius: 0;
}

/* .collapse:not(.show) {
    display: none;
     position: absolute;
     transition: all ease 1s;
} */

.card-body {
  width: 50%;
  margin-left: auto;
  margin-top: -60px;
  padding-right: 150px;
  opacity: 0;
  color: #616161;
  font-size: 14px;
}

.collapse.show .card-body {
  opacity: 1;
  /* transition: all ease 0.1s; */
}

@media (max-width: 1199.98px) {
}
@media (max-width: 991.98px) {
  .card-header h2 button {
    margin-left: 0;
  }
}
@media (max-width: 767.98px) {
}
@media screen and (orientation: landscape) and (max-width: 991.98px) {
  .card-body {
    padding-right: 70px;
  }
}
@media (max-width: 575.98px) {
  .card-body {
    width: 100%;
    margin-top: 0;
    padding-right: 20px;
    padding-top: 0;
  }
  .card-header h2 button {
    width: 100%;
    margin-left: 0;
  }
}
</style>
