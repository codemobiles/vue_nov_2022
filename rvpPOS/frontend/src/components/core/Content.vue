<template>
  <div
    style="
      display: flex;
      flex-direction: column;
      justify-content: center;

      background-color: yellow;
      height: 300px;
      width: 300px;
    "
  >
    <!-- <RouterView /> -->
    <div style="background-color: red">111</div>
    <div style="background-color: purple">222</div>
    <div style="background-color: green">333</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  components: {},
});
</script>
