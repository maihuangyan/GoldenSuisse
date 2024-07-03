import Vue from "vue";
import VueTouch from "vue-touch";

Vue.use(VueTouch);

VueTouch.config.swipe = {
  direction: "horizontal"
};
