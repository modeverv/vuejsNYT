<template>
  <div class="container" id="app1">
    <ul>
      <li><router-link to="/app">app</router-link></li>
      <li><router-link to="/">index</router-link></li>
    </ul>
    <h3 class="text-center">{{ title }}</h3>
    <Posts/>
  </div>
</template>

<script>
import Posts from "./components/Posts.vue";

export default {
  data() {
    return {
      title: "New York Times with Vue"
    };
  },
  components: {
    Posts
  }
};
</script>

<style scoped>
li {
  display: inline-block;
  font-size: 2rem;
  margin: 1rem;
}
#app1 {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>

