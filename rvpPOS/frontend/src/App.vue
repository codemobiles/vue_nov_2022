<template>
  <a-layout style="height: 100%">
    <Menu v-if="$store.getters['isLogin']" v-model:collapsed="collapsed" />
    <a-layout>
      <Header v-if="$store.getters['isLogin']" v-model:collapsed="collapsed" />
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
    const collapsed = ref<boolean>(false);

    return { collapsed };
  },
};
</script>

<style></style>
