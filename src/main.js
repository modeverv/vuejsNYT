// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import axios from "axios";
import Vue from "vue";
import App from "./App";
import Me from "./Me";
import router from "./router";

App;
router;
axios;
Me;

Vue.config.productionTip = false;

/* eslint-disable no-new */

// ./app.js

new Vue({
  el: "#app1",
  components: {
    Me
  },
  template: "<Me/>",
});


new Vue({
  el: "#app2",
  router,
  components: {
    App
  },
  template: "<App/>"
});
