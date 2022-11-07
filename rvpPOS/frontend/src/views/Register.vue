<template>
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

    <h1 className="text-2xl font-bold pb-3">Register</h1>

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
            Register
          </a-button>

          <a-button
            block
            type="default"
            html-type="button"
            @click="$router.push('/login')"
          >
            Cancel
          </a-button>
        </a-space>
      </a-form-item>
    </a-form>
  </a-card>
</template>
<script lang="ts">
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
import { defineComponent, reactive } from "vue";
import type { UnwrapRef } from "vue";
import type { FormProps } from "ant-design-vue";

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
    const formState: UnwrapRef<FormState> = reactive({
      username: "",
      password: "",
    });
    const handleFinish: FormProps["onFinish"] = async (values) => {};
    const handleFinishFailed: FormProps["onFinishFailed"] = (errors) => {
      alert(JSON.stringify(errors));
    };
    return {
      formState,
      handleFinish,
      handleFinishFailed,
    };
  },
});
</script>
