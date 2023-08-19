<script setup lang="ts">
import { ref } from 'vue';

const images = [
  {
    category: 'Commercial Media',
    source: '/img/commercial/perrin.jpg',
    link: '/portfolio/commercial'
  },
  {
    category: 'Weddings',
    source: '/img/weddings/wedport5.JPG',
    link: '/portfolio/weddings'
  },
  {
    category: 'Personal',
    source: '/img/personal/personalport1.jpg',
    link: '/portfolio/personal'
  }
]
</script>

<template>
  <div class="container">
    <div class="landing-page">
      <div v-for="(image, index) in images" :key="index">
        <router-link :to="image.link" class="card">
          <img :src="image.source" :alt="image.category" class="image" />
          <div class="overlay">{{ image.category }}</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.landing-page {
  display: flex;
  justify-content: center;
  /* Adjusted to center cards */
  align-items: center;
  height: calc(100vh - 30px);
  /* Adjust the height to account for top padding */
}

.card {
  position: relative;
  width: 350px;
  height: 50vh;
  margin: 10px;
  overflow: hidden;
  cursor: pointer;
  border-radius: 5px;
  transition: transform 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay {
  position: absolute;
  left: 0;
  right: 0;
  padding: 2%;
  color: white;
  font-size: 3.5vw;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
}

.card:hover {
  transform: scale(1.05);
}
</style>