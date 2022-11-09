<template>
  <div>
    <div>CodeMobiles</div>
    <ul>
      <li :key="index" v-for="(item, index) in state.dataArray">
        {{ index }}. {{ item.name }}
      </li>
    </ul>
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
