<template>
  <a-card
    title="Create product"
    class="ant-card-body"
    style="box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 5px 0px; width: 700px"
  >
    <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item label="Name" v-bind="validateInfos.name">
        <a-input v-model:value="modelRef.name" />
      </a-form-item>
      <a-form-item label="Price" v-bind="validateInfos.price">
        <a-input-number style="width: 100%" v-model:value="modelRef.price" />
      </a-form-item>
      <a-form-item label="Stock" v-bind="validateInfos.stock">
        <a-input-number
          style="width: 100%"
          type="number"
          v-model:value="modelRef.stock"
        />
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
        <input type="file" @change="onFileSelected" />
      </a-form-item>

      <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-image :width="200" v-bind:src="getProductImage()" />
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
import { defineComponent, reactive, toRaw, onMounted } from "vue";
import { Form } from "ant-design-vue";
import api from "@/services/api";
import filters from "@/services/filters";

import { useRoute, useRouter } from "vue-router";

const useForm = Form.useForm;
export default defineComponent({
  setup() {
    const route = useRoute();
    const router = useRouter();
    const modelRef = reactive({
      product_id: "",
      name: "",
      price: 0,
      stock: 0,
      image: null,
      imageURL: null,
    });

    onMounted(async () => {
      let result = await api.getProductById(route.params.id);
      modelRef.product_id = result.data.product_id;
      modelRef.name = result.data.name;
      modelRef.price = result.data.price;
      modelRef.stock = result.data.stock;
      modelRef.image = result.data.image;
    });

    const { resetFields, validate, validateInfos } = useForm(
      modelRef,
      reactive({
        name: [
          {
            required: true,
            message: "Please input name",
          },
        ],
        price: [
          {
            required: true,
            message: "Please input price",
          },
        ],
        stock: [
          {
            required: true,
            message: "Please input stock",
          },
        ],
      })
    );

    const onSubmit = () => {
      validate()
        .then(async (res) => {
          let formData = new FormData();
          const { name, price, stock, image, product_id } = modelRef;
          formData.append("id", product_id);
          formData.append("name", name);
          formData.append("stock", stock.toString());
          formData.append("price", price.toString());
          if (image) {
            formData.append("image", image!);
          }

          await api.updateProduct(formData);
          router.back();
        })
        .catch((err) => {
          alert(JSON.stringify(err));
        });
    };

    const onFileSelected = (event: any) => {
      const reader = new FileReader();
      reader.onload = (event: any) => {
        modelRef.imageURL = event.target.result;
      };

      reader.readAsDataURL(event.target.files[0]);
      modelRef.image = event.target.files[0];
    };

    const getProductImage = () => {
      if (typeof modelRef.image != "string") {
        return modelRef.imageURL;
      } else {
        return filters.fullImageUrl(modelRef.image);
      }
    };

    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      validateInfos,
      modelRef,
      onSubmit,
      onFileSelected,
      getProductImage,
    };
  },
});
</script>
