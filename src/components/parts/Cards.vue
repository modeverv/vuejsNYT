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

import Card from "./Card.vue";

export default {
  props: ["results"],
  components: { Card },
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
  }
};
</script>
