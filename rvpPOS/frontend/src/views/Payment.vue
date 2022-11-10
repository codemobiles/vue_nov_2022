<template>
  <div class="flex flex-col pl-7">
    <h1>Payment</h1>
    <span
      >Total: {{ totalNumber }} / Qty: {{ JSON.parse(order_list).length }}</span
    >

    <a-button class="my-5" type="primary" block @click="handlePayment()"
      >Payment</a-button
    >
  </div>
</template>

<script lang="ts">
export default {
  props: ["totalNumber", "order_list"],
  emits: ["onChange", "onCancel"],
  setup(props, { emit }) {
    function handlePayment() {
      emit("onCancel", { message: "Order was cancelled" });
    }

    return { handlePayment };
  },
};
</script>

<style></style>
