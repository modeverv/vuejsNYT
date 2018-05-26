<template>
  <div id="app2">
    <img src="./assets/logo.png">
    <ul>
      <li><router-link to="/nyt">nyt</router-link></li>
      <li><router-link to="/">index</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style scoped>
li {
  display: inline-block;
  font-size: 2rem;
  margin: 1rem;
}
#app2 {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
