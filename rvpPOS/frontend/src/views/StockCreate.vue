<template>
  <div>
    <div>CodeMobiles</div>
    <a-form>
      <a-form-item label="Name">
        <a-input v-model:value="formState.name" />
      </a-form-item>

      <a-form-item label="Stock">
        <a-input v-model:value="formState.stock" />
      </a-form-item>

      <a-form-item label="Price">
        <a-input v-model:value="formState.price" />
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRaw } from "vue";
import { Form } from "ant-design-vue";
import api from "@/services/api";
import router from "@/router";

export default {
  setup() {
    const formState = reactive({
      name: "product",
      price: 100,
      stock: 300,
      image: null,
      imageURL: null,
    });

    return { formState };
  },
};
</script>

<style></style>
