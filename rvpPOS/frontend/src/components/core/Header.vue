<template>
  <div>Header</div>
  <button @click="handleToggle()">Toggle</button>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  emits: ["add"],
  setup(props, { emit }) {
    function handleToggle() {
      emit("add");
    }
    return { handleToggle };
  },
};
</script>

<style></style>
