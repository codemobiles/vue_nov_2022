<template>
  <div>
    <div>1234</div>
    <div>{{ tmp1 }}</div>
  </div>
</template>

<script lang="ts">
export default {
  setup(props) {
    const tmp1: number = 1000;
    return { tmp1 };
  },
};
</script>

<style></style>
