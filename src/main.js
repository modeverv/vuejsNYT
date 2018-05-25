// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import axios from "axios";
import "babel-polyfill";
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
if (!Array.prototype.find) {
  Array.prototype.find = function (predicate) {
    if (this === null) {
      throw new TypeError("Array.prototype.find called on null or undefined");
    }
    if (typeof predicate !== "function") {
      throw new TypeError("predicate must be a function");
    }
    var list = Object(this);
    var length = list.length >>> 0;
    var thisArg = arguments[1];
    var value;
    for (var i = 0; i < length; i++) {
      value = list[i];
      if (predicate.call(thisArg, value, i, list)) {
        return value;
      }
    }
    return undefined;
  };
}

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
