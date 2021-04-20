import { StoreOptions } from 'vuex';
import { storeTypes } from './index';

export const userState = {
    user: ['nill', 'summer']
}

export const userMutation = {
    add(state: storeTypes) {
        state.user
    }
}

export const userStore = {
    state: () => userState,
    mutations: userMutation
}