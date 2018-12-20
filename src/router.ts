import Vue from 'vue';
import Router from 'vue-router';
import Feed from './views/Feed.vue';
import Me from './views/Me.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'feed',
      component: Feed,
    },
    {
      path: '/notifications',
      name: 'notifications',
      component : Me
    },
    {
      path: '/mail',
      name: 'mail',
      component : Me
    },
    {
      path: '/me',
      name: 'me',
      component : Me
    },
  ],
});
