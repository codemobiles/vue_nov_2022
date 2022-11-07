<template>
  <div>
    <h1>Login</h1>
    <form>
      <input type="text" placeholder="Username" v-model="user.username" />
      <br />
      <input type="password" placeholder="Password" v-model="user.password" />
      <br />
      <span>{{ user }}</span
      ><br />
      <button>Login</button>
    </form>
  </div>
</template>

<script lang="ts">
import { reactive } from "vue";
export default {
  setup() {
    const user = reactive({ username: "admin", password: "5555" });
    return { user };
  },
};
</script>

<style></style>
