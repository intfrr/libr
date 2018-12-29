import Vue from 'vue';
import Vuex from 'vuex';
import User from './model/user';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user : User,
    },
    mutations: {
        setUser(state : any, user : User) : void {
            state.user = user;
        }
    },
    actions: {

    },
});
