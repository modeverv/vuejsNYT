<template>
    <div id="app">
        <h1>vue / vue-router</h1>
        <ul>
            <li><router-link to="/nyt">nyt</router-link></li>
            <li><router-link to="/app">app</router-link></li>
        </ul>
        <pre>
            vue.js - vue-routerでゴニョゴニョする。
            まずはvue.jsで作って後からvue-routerでゴニョるのがベストプラクティスっぽい感じで今は考えてる
        </pre>
    </div>
</template>

<style>
li {
  display: inline-block;
  font-size: 2rem;
  margin: 1rem;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
