import storeTypes from './type';

export const userState = {
  user: ['nill', 'summer'],
};

export const userMutation = {
  add(state: storeTypes, value: string) {
    state.user.push(value);
  },
};

export const user = {
  state: () => userState,
  mutations: userMutation,
};
