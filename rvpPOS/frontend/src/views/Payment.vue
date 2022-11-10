<template>
  <div class="flex flex-col pl-7">
    <h1>Payment</h1>
    <span
      >Total: {{ totalNumber }} / Qty: {{ JSON.parse(order_list).length }}</span
    >

    <a-button class="my-5" type="primary" block>Payment</a-button>
  </div>
</template>

<script lang="ts">
export default {
  props: ["totalNumber", "order_list"],
};
</script>

<style></style>
