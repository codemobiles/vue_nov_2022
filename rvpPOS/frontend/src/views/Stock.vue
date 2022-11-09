<template>
  <div>
    <div>CodeMobiles</div>
    <ul>
      <li :key="item" v-for="(item, index) in ['angular', 'vue', 'react']">
        {{ index }}. {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
