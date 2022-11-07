<template>
  <a-layout style="height: 100%">
    <Menu />
    <a-layout>
      <Header />
      <a-layout-content>
        <Content />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import Menu from "@/components/core/Menu.vue";
export default {
  components: { Menu },
  setup() {},
};
</script>

<style></style>
