import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import Me from './Me';
import Top from './Top';

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
  mode: 'history',
  routes,
});

export default new VueRouter({
  routes
});
