<template>
  <div>
    <div>CodeMobiles</div>
    <a-form @submit="handleSubmit()">
      <a-form-item label="Name">
        <a-input v-model:value="formState.name" />
      </a-form-item>

      <a-form-item label="Stock">
        <a-input v-model:value="formState.stock" />
      </a-form-item>

      <a-form-item label="Price">
        <a-input v-model:value="formState.price" />
      </a-form-item>

      <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
        <input type="file" @change="onFileSelected" />
      </a-form-item>

      <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-image :width="200" v-bind:src="formState.imageURL" />
      </a-form-item>

      <a-button type="primary" @click="handleSubmit()">Submit</a-button>
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

    function handleSubmit() {
      alert(JSON.stringify(formState));
    }

    const onFileSelected = (event: any) => {
      // for preview
      const reader = new FileReader();
      reader.onload = (event: any) => {
        formState.imageURL = event.target.result;
      };

      // for upload
      reader.readAsDataURL(event.target.files[0]);
      formState.image = event.target.files[0];
    };

    return { formState, handleSubmit, onFileSelected };
  },
};
</script>

<style></style>
