import Vue from 'vue';
import VueRouter from 'vue-router';
import Top from './Top';
import Me from './Me';
import App from './App';

Vue.use(VueRouter);

const routes = [{
    path: '/',
    component: Top
  },
  {
    path: '/nyt',
    component: Me
  },
  {
    path: '/app',
    component: App
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default new VueRouter({
  routes
});




