<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const slvBlue = '#1d3051'
const slvGold = '#F6D7B6'

</script>

<template>
  <header>
    <router-link to="/"><img src="./assets/slv-logo-icon.png" class="logo"/></router-link>
    <div class="links">
      <router-link to="/login" class="link">Login</router-link>
      <router-link to="/about" class="link">About</router-link>
      <router-link to="/" class="link">Home</router-link>
    </div>
  </header>
  <div class="main">
    <router-view/>
  </div>
</template>

<style scoped>



</style>
