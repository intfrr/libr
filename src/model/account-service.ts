import API from './api';
import User from './user';
import store from '@/store';

const AccountService = {
    async signUp(user : User) : Promise<void> {
        const response = await API.post('/signup', user);
        const body = await response.json();

        if (response.status !== 200) {
            return Promise.reject(body);
        }

        user.setUserId(body.userId);

        store.commit('setUser', user);
        return Promise.resolve();
    },

    async login(usernameOrEmail : string, password: string) : Promise<User> {
        const user = new User();
        const response = await API.post('/login', {
            "usernameOrEmail" : usernameOrEmail,
            "password" : password
        });

        const body = await response.json();

        if (response.status !== 200) {
            return Promise.reject(body);
        }

        user.setAll(body);
        store.commit('setUser', user);

        return Promise.resolve(user);
    }
};

export default AccountService;