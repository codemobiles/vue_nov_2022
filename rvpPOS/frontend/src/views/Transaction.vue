<template>
  <div>
    <ul>
      <li v-for="(item, index) in state.dataArray">
        {{ index + 1 }}. {{ item }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import api from "@/services/api";
import { reactive, onMounted } from "vue";
export default {
  setup(props) {
    const state = reactive<any>({
      dataArray: [],
    });

    onMounted(async () => {
      const result = await api.getTransactions();
      state.dataArray = result.data;
    });

    return { state };
  },
};
</script>

<style></style>
