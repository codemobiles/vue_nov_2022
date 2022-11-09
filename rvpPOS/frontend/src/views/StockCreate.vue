<template>
  <a-card
    title="Create product"
    class="ant-card-body"
    style="box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 5px 0px; width: 700px"
  >
    <a-form :label-col="{ span: 4 }" :rules="rules">
      <a-form-item label="Name" name="name" has-feedback>
        <a-input v-model:value="formState.name" />
      </a-form-item>
      <a-form-item label="Price" name="price" has-feedback>
        <a-input-number style="width: 100%" v-model:value="formState.price" />
      </a-form-item>
      <a-form-item label="Stock" name="stock" has-feedback>
        <a-input-number
          style="width: 100%"
          type="number"
          v-model:value="formState.stock"
        />
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
        <input type="file" @change="onFileSelected" />
      </a-form-item>

      <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-image :width="200" v-bind:src="formState.imageURL" />
      </a-form-item>

      <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="primary" @click.prevent="onSubmit">Create</a-button>
        <a-button style="margin-left: 10px" @click="$router.push('/stock')"
          >Cancel</a-button
        >
      </a-form-item>
    </a-form>
  </a-card>
</template>
<script lang="ts">
import { defineComponent, reactive, toRaw } from "vue";
import { Form } from "ant-design-vue";
import api from "@/services/api";
import router from "@/router";
import type { RuleObject } from "ant-design-vue/lib/form";
const useForm = Form.useForm;
export default defineComponent({
  setup() {
    const formState = reactive({
      name: "product",
      price: 100,
      stock: 300,
      image: null,
      imageURL: null,
    });

    const onSubmit = async () => {
      let formData = new FormData();
      const { name, price, stock } = formState;
      formData.append("name", name);
      formData.append("stock", stock.toString());
      formData.append("price", price.toString());
      if (formState.image) {
        formData.append("image", formState.image!);
      }
      await api.addProduct(formData);
      router.back();
    };

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

    let validateText = (rule: RuleObject, value: string) => {
      if (formState.name === "" || formState.name.length < 5) {
        return Promise.reject("ชื่อไม่ถูกต้อง");
      }
      return Promise.resolve();
    };

    let validatePrice = (rule: RuleObject, value: string) => {
      console.log(value);
      if (formState.price < 10) {
        return Promise.reject("price must be a least at 10");
      }
      return Promise.resolve();
    };

    let validateStock = (rule: RuleObject, value: string) => {
      console.log(value);
      if (formState.stock < 10) {
        return Promise.reject("stock must be a least at 10");
      }
      return Promise.resolve();
    };

    const rules = {
      name: [{ required: true, validator: validateText, trigger: "change" }],
      price: [{ validator: validatePrice, trigger: "change" }],
      stock: [{ validator: validateStock, trigger: "change" }],
    };

    return {
      rules,
      formState,
      onSubmit,
      onFileSelected,
    };
  },
});
</script>
