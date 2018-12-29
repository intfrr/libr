import Vue from 'vue';
import Vuex from 'vuex';
import User from './model/user';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
    plugins: [createPersistedState()],
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
    getters: {
        user(state) {
            return state.user;
        }
    }
});
