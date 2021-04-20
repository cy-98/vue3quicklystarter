import { storeTypes } from './index';

export const counterState = {
    count: 0
}

export const counterMutation = {
    addUser(state: storeTypes) {
        state.count++
    }
}

export const counterStore = {
    state: () => counterState,
    mutations: counterMutation,
}