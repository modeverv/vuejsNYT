// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//import axios from "axios";
import "babel-polyfill";
import Vue from "vue";
import VueRouter from "vue-router";
import router from "./router.js";
import App from "./App";
import Me from "./Me";

// import router from "./router";

//App;
//router;
//axios;
//Me;

Vue.config.productionTip = false;

/* eslint-disable no-new */

// ./app.js
Vue.use(VueRouter);

new Vue({
  el: "#app",
  router
});



