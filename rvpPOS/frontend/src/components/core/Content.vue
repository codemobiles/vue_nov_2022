<template>
  <div
    :style="{
      padding: '24px',
      height: '100%',
      background: '#fff',
      display: 'flex',
      justifyContent: 'center',
    }"
  >
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  components: {},
});
</script>
