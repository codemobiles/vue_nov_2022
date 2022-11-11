<template>
  <div>
    <a-card
      hoverable
      style="
        box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 5px 0px;
        width: 300px;
        height: 500px;
      "
    >
      <template #cover>
        <img alt="example" src="@/assets/03-vuejs-login.png" />
      </template>

      <h1 className="text-2xl font-bold pb-3">
        Login {{ isProd ? "Pro" : "Dev" }}
      </h1>

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
          </a-space>
        </a-form-item>
      </a-form>
    </a-card>
  </div>
</template>
<script lang="ts">
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
import { defineComponent, reactive, computed } from "vue";
import type { UnwrapRef } from "vue";
import type { FormProps } from "ant-design-vue";
// import Tmp from "./Tmp.vue";
import store from "./../store";
import type { User } from "@/models/user.model";
interface FormState {
  username: string;
  password: string;
}
export default defineComponent({
  components: {
    UserOutlined,
    LockOutlined,
  },
  setup() {
    const isProd = import.meta.env.PROD;

    const formState: UnwrapRef<FormState> = reactive<User>({
      username: "admin",
      password: "1234",
    });
    const handleFinish: FormProps["onFinish"] = (values) => {
      store.dispatch({ type: "doLogin", ...formState });
    };
    const handleFinishFailed: FormProps["onFinishFailed"] = (errors) => {
      alert(JSON.stringify(errors));
    };

    const gentleName = computed(() => "Mr. " + formState.username, {
      onTrack(e) {
        // triggered when count.value is tracked as a dependency
        debugger;
      },
      onTrigger(e) {
        // triggered when count.value is mutated
        debugger;
      },
    });

    return {
      gentleName,
      formState,
      handleFinish,
      handleFinishFailed,
      isProd,
    };
  },
});
</script>
