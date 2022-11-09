import { createStore } from "vuex";

export default createStore({
  actions: {
    async doLogin({ commit, dispatch }, user) {
      alert(JSON.stringify(user));
    },
  },
});
