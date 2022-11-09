<template>
  <div>
    <div>CodeMobiles</div>
    <a-table
      :columns="state.headers"
      :data-source="state.dataArray"
      :row-key="(record) => record.product_id"
    >
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'product_id'">
          <span>{{ record.product_id }}</span>
        </template>

        <template v-if="column.key === 'name'">
          <span>{{ record.name }}</span>
        </template>

        <template v-if="column.key === 'image'">
          <img
            :src="`http://localhost:8081/images/${record.image}`"
            alt=""
            style="height: 50px"
          />
        </template>
      </template>
    </a-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from "vue";
import api from "@/services/api";

export default {
  setup() {
    const state = reactive<any>({
      headers: [
        {
          title: "Id",
          align: "left",
          sortable: false,
          key: "product_id",
        },
        { title: "Image", key: "image" },
        { title: "Name", key: "name" },
        { title: "Price", key: "price" },
        { title: "Stock", key: "stock" },
        { title: "Action", key: "action" },
      ],
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
