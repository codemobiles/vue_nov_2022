<template>
  <div>
    <div>1234</div>
    <div>{{ tmp1 }}</div>
    <div>{{ tmp2 }}</div>
    <div>{{ tmp3 }}</div>
    <button @click="handleClickMe">ClickMe</button>
  </div>
</template>

<script lang="ts">
export default {
  setup(props) {
    const tmp1: number = 1000;
    const tmp2: string = "Lek";
    const tmp3 = "VueJS";

    function handleClickMe() {
      alert("Hey");
    }

    return { tmp1, tmp2, handleClickMe };
  },
};
</script>

<style></style>
