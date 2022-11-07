<template>
  <a-layout style="height: 100%">
    <Menu version="1.0" />
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
import Header from "@/components/core/Header.vue";
import Content from "@/components/core/Content.vue";
export default {
  components: { Menu, Header, Content },
  setup() {},
};
</script>

<style></style>
