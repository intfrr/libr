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
    }
};

export default AccountService;