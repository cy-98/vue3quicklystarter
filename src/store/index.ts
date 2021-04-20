import { createStore } from 'vuex';
import { counter } from './counter';
import { user } from './user';

export default createStore({
  modules: {
    counter,
    user,
  },
});
