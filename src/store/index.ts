import { createStore } from "vuex";
import { counterState, counterStore } from "./counter";
import { userState, userStore } from './user';

export type storeTypes = typeof counterState & typeof userState

export default createStore({
    modules: {
        counterStore,
        userStore,
    },
})
