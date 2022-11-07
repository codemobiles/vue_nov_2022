<template>
  <div>Header</div>
  <button @click="handleToggle()">Toggle</button>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  setup() {
    function handleToggle() {}
    return { handleToggle };
  },
};
</script>

<style></style>
