<script setup lang="ts">
import Navbar from './components/Navbar.vue';
</script>

<template>
  <Navbar/>
  <div class="main">
    <router-view/>
  </div>
</template>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
  max-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
}
</style>
