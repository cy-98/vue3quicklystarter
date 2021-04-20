import { createStore } from "vuex";
import { counterState, counter } from "./counter";
import { userState, user } from './user';

export type storeTypes = typeof counterState & typeof userState

export default createStore({
    state() {
        return {
            ...counterState,
            ...user.state
        }
    },
    mutations: {
        ...counter.mutations,
        ...user.mutations
    },
    actions: {

    }
})