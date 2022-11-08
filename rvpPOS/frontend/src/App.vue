<template>
  <a-layout style="height: 100%">
    <Menu :version="version" v-model:collapsed="collapsed" />
    <a-layout>
      <Header @add="handleAdd()" />
      <a-layout-content>
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
    const collapsed = ref<boolean>(false);

    function handleAdd() {
      version.value = version.value + 1;
      collapsed.value = !collapsed.value;
    }

    return { version, collapsed, handleAdd };
  },
};
</script>

<style></style>
