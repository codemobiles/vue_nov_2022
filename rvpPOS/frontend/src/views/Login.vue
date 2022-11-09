<template>
  <div>
    <a-card
      hoverable
      style="
        box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 5px 0px;
        width: 300px;
        height: 550px;
      "
    >
      <template #cover>
        <img alt="example" src="@/assets/03-vuejs-login.png" />
      </template>

      <h1 className="text-2xl font-bold pb-3">Login</h1>

      <a-form
        layout="vertical"
        :model="formState"
        @finish="handleFinish"
        @finishFailed="handleFinishFailed"
      >
        <a-form-item>
          <a-input v-model:value="formState.username" placeholder="Username">
            <template #prefix
              ><UserOutlined style="color: rgba(0, 0, 0, 0.25)"
            /></template>
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input
            v-model:value="formState.password"
            type="password"
            placeholder="Password"
          >
            <template #prefix
              ><LockOutlined style="color: rgba(0, 0, 0, 0.25)"
            /></template>
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-space direction="vertical" style="width: 100%" size="small">
            <a-button block type="primary" html-type="submit">
              Log in
            </a-button>

            <a-button
              block
              type="default"
              html-type="button"
              @click="$router.push('/register')"
            >
              Register
            </a-button>

            <a-button block type="default" @click="$store.state.counter++"
              >Add {{ $store.state.counter }}</a-button
            >
          </a-space>
        </a-form-item>
      </a-form>
    </a-card>
  </div>
</template>

<script lang="ts">
import { reactive } from "vue";
import {
  UserOutlined,
  LockOutlined,
  LogoutOutlined,
} from "@ant-design/icons-vue";
import httpClient from "@/services/httpClient";
import store from "@/store";

export default {
  components: { UserOutlined, LockOutlined, LogoutOutlined },
  setup() {
    const formState = reactive({ username: "admin", password: "1234" });

    async function handleFinish() {
      store.dispatch({ type: "doLogin", ...formState });

      // const result = await httpClient.post("/login", formState);
      // alert(JSON.stringify(result));
    }

    function handleFinishFailed() {
      formState.username = "";
      formState.password = "";
    }

    return { formState, handleFinish, handleFinishFailed };
  },
};
</script>

<style></style>
