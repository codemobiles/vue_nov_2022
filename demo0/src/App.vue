<template>
  <div>
    <div>1234</div>
    <div>{{ tmp1 }}</div>
    <div>{{ tmp2 }}</div>
  </div>
</template>

<script lang="ts">
export default {
  setup(props) {
    const tmp1: number = 1000;
    const tmp2: string = "Lek";
    return { tmp1, tmp2 };
  },
};
</script>

<style></style>
