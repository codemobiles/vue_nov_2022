<template>
  <a-card hoverable style="width: 240px">
    <template #cover>
      <img alt="example" src="@/assets/03-vuejs-login.png" />
    </template>

    <form @submit="handleLogin()">
      <input type="text" placeholder="Username" v-model="user.username" />
      <br />
      <input type="password" placeholder="Password" v-model="user.password" />
      <br />
      <span>{{ user }}</span
      ><br />
      <button type="submit">Login</button>
      <button type="button" @click="handleReset()">Reset</button>
    </form>
  </a-card>
</template>

<script lang="ts">
import { reactive } from "vue";
export default {
  setup() {
    const user = reactive({ username: "admin", password: "5555" });

    function handleLogin() {
      alert(JSON.stringify(user));
    }

    function handleReset() {
      user.username = "";
      user.password = "";
    }

    return { user, handleLogin, handleReset };
  },
};
</script>

<style></style>
