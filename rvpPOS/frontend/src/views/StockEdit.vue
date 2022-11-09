<template>
  <div>Id: {{ id }}</div>
</template>

<script lang="ts">
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";
export default {
  setup(props) {
    const route = useRoute();
    const id = ref("loading...");

    onMounted(() => {
      id.value = route.params.id.toString();
    });

    return { id };
  },
};
</script>

<style></style>
