<template>
      <section>
        <div class="row" v-for="posts in processedPosts">
          <div class="columns large-3 medium-6" v-for="post in posts">
              <Card :post="post"/>
          </div>
        </div>
    </section>
</template>

<script>
import axios from "axios";
import Card from "./Card.vue";

const NYTBaseUrl = "https://api.nytimes.com/svc/topstories/v2/";
const ApiKey = "80e21f6111484523a164eef4522f8a11";
function buildUrl(url) {
  return NYTBaseUrl + url + ".json?api-key=" + ApiKey;
}

export default {
  props: ["section"],
  data() {
    return {
      results: []
    };
  },
  components: { Card },
  watch: {
    section: function(newV, oldV) {
      this.getPosts(newV);
    }
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
          : "https://placehold.it/300x200?text=N/A";
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
