import storeTypes from './type';

export const counterState = {
  count: 0,
};

const counterMutation = {
  increment(state: storeTypes) {
    state.count += 1;
  },
};

export const counter = {
  state: () => counterState,
  mutations: counterMutation,
};
