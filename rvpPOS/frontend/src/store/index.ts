import api from "@/services/api";
import { createStore } from "vuex";

export default createStore({
  actions: {
    async doLogin({ commit, dispatch }, { username, password }) {
      let result = await api.login({ username, password });
      alert(JSON.stringify(result));
    },
  },
});
