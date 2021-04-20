import { storeTypes } from './index';

export const counterState = {
    count: 0
}

export const counterMutation = (state: storeTypes) => {
    state.count++
}

export const counter = {
    state: counterState,
    mutations: counterMutation,
}