import api from "@/services/api";
import { createStore } from "vuex";
import router from "@/router";

export default createStore({
  actions: {
    async doLogin({ commit, dispatch }, { username, password }) {
      let result: boolean = await api.login({ username, password });
      alert(result ? "Login successfully" : "Login failed");
    },
    async doRegister({ commit, dispatch }, { username, password }) {
      let result: boolean = await api.register({ username, password });
      alert(result ? "Register successfully" : "Register failed");
    },
    doLogout() {
      localStorage.clear();
      router.push("/login");
    },
  },
});
