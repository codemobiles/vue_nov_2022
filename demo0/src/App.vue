<template>
  <div>
    <div>1234</div>
    <div>{{ tmp1 }}</div>
    <div>{{ tmp2 }}</div>
    <div>{{ tmp3 }}</div>
    <button @click="handleClickMe()">ClickMe {{ count1 }}</button>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";

export default {
  setup(props) {
    const tmp1: number = 1000;
    const tmp2: string = "Lek";
    const tmp3 = "VueJS";
    let count1 = ref(0);

    function handleClickMe() {
      count1.value = count1.value + 1;
      console.log("count1: " + count1.value.toString());
    }

    return { tmp1, tmp2, count1, handleClickMe };
  },
};
</script>

<style></style>
