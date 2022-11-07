<template>
  <div>
    <div>1234</div>
    <div>{{ tmp1 }}</div>
  </div>
</template>

<script>
export default {
  setup(props) {
    const tmp1 = 1000;
    return { tmp1 };
  },
};
</script>

<style></style>
