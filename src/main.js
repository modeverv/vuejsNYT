// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import axios from 'axios';
import Vue from 'vue';
import App from './App';
import router from './router';

App
router
axios

Vue.config.productionTip = false

/* eslint-disable no-new */
/*
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

*/
const NYTBaseUrl = "https://api.nytimes.com/svc/topstories/v2/";
const ApiKey = "451ccfb447de47afaac45df8f86f0c08";

function buildUrl(url) {
  return NYTBaseUrl + url + ".json?api-key=" + ApiKey
}

// ./app.js
new Vue({
  el: '#app',
  data: {
    results: []
  },
  /*
  mounted() {
    var _this = this
    axios.get('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=451ccfb447de47afaac45df8f86f0c08')

      .then(function (response) {
        _this.results = response.data.results
      })
  }
  */
  mounted() {
    this.getPosts("home")
  },
  methods: {
    getPosts(section) {
      let url = buildUrl(section)
      let _this = this
      axios.get(url).then((response) => {
        _this.results = response.data.results
      }).catch(error => {
        console.log(error)
      })
    }
  },
  computed: {
    processedPosts() {
      let posts = this.results;
      // Add image_url attribute
      posts.map(post => {
        let imgObj = post.multimedia.find(media => media.format === "superJumbo");
        post.image_url = imgObj ? imgObj.url : "http://placehold.it/300x200?text=N/A";
      });
      // Put Array into Chunks
      let i, j, chunkedArray = [],
        chunk = 4;
      for (i = 0, j = 0; i < posts.length; i += chunk, j++) {
        chunkedArray[j] = posts.slice(i, i + chunk);
      }
      return chunkedArray;
    }
  }
})
