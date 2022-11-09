<template>
  <div>CodeMobiles</div>
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
