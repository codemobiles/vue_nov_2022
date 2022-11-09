<template>
  <div>
    <div>CodeMobiles</div>
    <ul>
      <li :key="index" v-for="(item, index) in ['angular', 'vue', 'react']">
        {{ index }}. {{ item }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from "vue";
import api from "@/services/api";

export default {};
</script>

<style></style>
