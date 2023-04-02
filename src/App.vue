<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import Navbar from './components/Navbar.vue';

const slvBlue = '#1d3051'
const slvGold = '#F6D7B6'

</script>

<template>
  <Navbar/>
  <div class="main">
    <router-view/>
  </div>
</template>

<style scoped>

</style>
