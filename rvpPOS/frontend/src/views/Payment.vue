<template>
  <div class="flex flex-col pl-7">
    <h1>Payment</h1>
    <span
      >Total: {{ totalNumber }} / Qty: {{ JSON.parse(order_list).length }}</span
    >
  </div>
</template>

<script lang="ts">
export default {
  props: ["totalNumber", "order_list"],
};
</script>

<style></style>
