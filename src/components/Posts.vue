<template>
    <div>
        <section class="callout secondary">
        <h5 class="text-center">Filter by Category</h5>
        <form>
            <div class="row">
            <div class="large-12 columns">
                <select v-on:change="getPosts(section)" v-model="section">
                <option v-for="section in sections" :value="section">{{ section }}</option>
                </select>
            </div>
            <!--
            <div class="medium-6 columns">
                <a @click="getPosts(section)" class="button expanded">Retrieve</a>
            </div>
            -->
            </div>
        </form>
    </section>
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
const NYTBaseUrl = "https://api.nytimes.com/svc/topstories/v2/";
const ApiKey = "451ccfb447de47afaac45df8f86f0c08";
const SECTIONS =
  "home, arts, automobiles, books, business, fashion, food, health, insider, magazine, movies, national, nyregion, obituaries, opinion, politics, realestate, science, sports, sundayreview, technology, theater, tmagazine, travel, upshot, world"; // From NYTimes

function buildUrl(url) {
  return NYTBaseUrl + url + ".json?api-key=" + ApiKey;
}

export default {
  data() {
    return {
      results: [],
      sections: SECTIONS.split(", "), // create an array of the sections
      section: "home" // set default section to 'home
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
