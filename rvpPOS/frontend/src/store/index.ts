import api from "@/services/api";
import { createStore, createLogger } from "vuex";
import router from "@/router";

export default createStore({
  plugins: [createLogger()],
  getters: {
    getCounter(state) {
      return "Counter: " + state.counter;
    },
  },
  state: {
    counter: 0,
  },
  mutations: {
    ADD_COUNTER(state) {
      if (state.counter < 10) {
        state.counter++;
      }
    },
  },
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
    doAddCounter({ commit }) {
      // do something
      setTimeout(() => {
        // this.state.counter++;
        commit("ADD_COUNTER");
      }, 200);
    },
  },
});
