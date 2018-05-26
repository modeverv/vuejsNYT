<template>
    <div>
      <MainForm :sections="sections" v-on:changeCategory="getPosts"/>
      <Cards :results="results"/>
  </div>
</template>

<script>

import axios from "axios";
import MainForm from "./form/MainForm.vue";
import Cards from "./parts/Cards.vue";

const NYTBaseUrl = "https://api.nytimes.com/svc/topstories/v2/";
const ApiKey = "80e21f6111484523a164eef4522f8a11";
const SECTIONS =
  "home, arts, automobiles, books, business, fashion, food, health, insider, magazine, movies, national, nyregion, obituaries, opinion, politics, realestate, science, sports, sundayreview, technology, theater, tmagazine, travel, upshot, world"; // From NYTimes

function buildUrl(url) {
  return NYTBaseUrl + url + ".json?api-key=" + ApiKey;
}

export default {
  components: {
    MainForm,
    Cards
  },
  data() {
    return {
      results: [],
      sections: SECTIONS.split(", "),
      section: "home"
    };
  },
  mounted() {
    this.getPosts(this.section);
  },
  methods: {
    getPosts(section) {
      let url = buildUrl(section);
      let _this = this;
      axios
        .get(url)
        .then(response => {
          _this.results = response.data.results;
        })
        .catch(error => {
          if (window.console) {
            window.console.log(error);
          }
        });
    }
  }
};
</script>
