import Vue from 'vue';
import Router from 'vue-router';
import Feed from './views/Feed.vue';
import Me from './views/Me.vue';
import Mail from './views/Mail.vue';
import Notifications from './views/Notifications.vue';
import Signup from './views/Signup.vue';

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
            component : Notifications
        },
        {
            path: '/mail',
            name: 'mail',
            component : Mail
        },
        {
            path: '/me',
            name: 'me',
            component : Me
        },
        {
            path: '/signup',
            name: 'signup',
            component: Signup
        }
    ],
});
