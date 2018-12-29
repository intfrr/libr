import API from './api';
import User from './user';
import store from '@/store';

const AccountService = {
    async signUp(user : User) : Promise<void> {
        const response = await API.post('/signup', user);
        const data = await response.json();
        user.setUserId(data.userId);

        store.commit('setUser', user);
        return Promise.resolve();
    }
};

export default AccountService;