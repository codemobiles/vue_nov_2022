<template>
  <div>
    <div>CodeMobiles</div>
    <a-table
      :columns="['product_id', 'name', 'stock', 'price']"
      :data-source="state.dataArray"
      :row-key="(record) => record.product_id"
    >
    </a-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from "vue";
import api from "@/services/api";

export default {
  setup() {
    const state = reactive<any>({
      dataArray: [],
    });

    async function loadProduct() {
      const result = await api.getProducts();
      state.dataArray = result.data;
    }

    onMounted(() => {
      loadProduct();
    });

    return { state };
  },
};
</script>

<style></style>
