<template>
  <a-layout style="height: 100%">
    <Menu :version="version" />
    <a-layout>
      <Header />
      <a-layout-content>
        <button @click="handleAdd()">Add</button>
        <Content />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { ref } from "vue";
import Menu from "@/components/core/Menu.vue";
import Header from "@/components/core/Header.vue";
import Content from "@/components/core/Content.vue";
export default {
  components: { Menu, Header, Content },
  setup() {
    const version = ref(1);

    function handleAdd() {
      version.value = version.value + 1;
    }

    return { version, handleAdd };
  },
};
</script>

<style></style>
