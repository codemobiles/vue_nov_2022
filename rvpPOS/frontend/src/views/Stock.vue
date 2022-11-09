<template>
  <div>
    <div>CodeMobiles</div>
    <ul>
      <li :key="index" v-for="(item, index) in state.dataArray">
        {{ index }}. {{ item }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from "vue";
import api from "@/services/api";

export default {
  setup() {
    const state = reactive({
      dataArray: ["angular", "vue", "react", "flutter"],
    });

    onMounted(() => {
      alert("1234");
    });

    return { state };
  },
};
</script>

<style></style>
