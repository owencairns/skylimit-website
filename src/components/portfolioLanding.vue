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
];
</script>

<template>
  <div class="container">
    <div class="landing-page">
      <div v-for="(image, index) in images" :key="index" class="card">
        <router-link :to="image.link" class="card-link">
          <img :src="image.source" :alt="image.category" class="image" />
          <div class="overlay">{{ image.category }}</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.landing-page {
  padding-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 30px);
}

.card {
  position: relative;
  width: 350px;
  height: 75vh;
  margin: 10px;
  overflow: hidden;
  cursor: pointer;
  border-radius: 5px;
  transition: transform 0.3s ease;
  display: flex;
  align-items: center;
}

.card:hover {
  transform: scale(1.1);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.card-link {
  width: 100%;
  height: 100%;
  display: block;
}

.image-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  font-size: 3.5vh;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.card:hover .overlay {
  opacity: 1;
}
</style>
