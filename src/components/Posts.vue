<template>
    <div>
      <MainForm :sections="sections" v-on:changeCategory="getPosts"/>
      <section>
        <div class="row" v-for="posts in processedPosts">
          <div class="columns large-3 medium-6" v-for="post in posts">
            <div class="card">
            <div class="card-divider">
            {{ post.title }}
            </div>
            <a :href="post.url" target="_blank"><img :src="post.image_url"></a>
            <div class="card-section">
              <p>{{ post.abstract }}</p>
            </div>
          </div>
          </div>
        </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import MainForm from "./form/MainForm.vue";

const NYTBaseUrl = "https://api.nytimes.com/svc/topstories/v2/";
const ApiKey = "80e21f6111484523a164eef4522f8a11";
const SECTIONS =
  "home, arts, automobiles, books, business, fashion, food, health, insider, magazine, movies, national, nyregion, obituaries, opinion, politics, realestate, science, sports, sundayreview, technology, theater, tmagazine, travel, upshot, world"; // From NYTimes

function buildUrl(url) {
  return NYTBaseUrl + url + ".json?api-key=" + ApiKey;
}

export default {
  components: {
    MainForm
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
  computed: {
    processedPosts() {
      let posts = this.results;
      // Add image_url attribute
      posts.map(post => {
        let imgObj = post.multimedia.find(
          media => media.format === "superJumbo"
        );
        post.image_url = imgObj
          ? imgObj.url
          : "http://placehold.it/300x200?text=N/A";
      });
      // Put Array into Chunks
      let i,
        j,
        chunkedArray = [],
        chunk = 4;
      for (i = 0, j = 0; i < posts.length; i += chunk, j++) {
        chunkedArray[j] = posts.slice(i, i + chunk);
      }
      return chunkedArray;
    }
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
