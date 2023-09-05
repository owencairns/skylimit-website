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
    <h1 class="title">Portfolio</h1>
    <div class="landing-page">
      <div v-for="(image, index) in images" :key="index" class="card">
        <router-link :to="image.link" class="card-link">
          <div class="image-wrapper">
            <img :src="image.source" :alt="image.category" class="image" />
            <div class="overlay">{{ image.category }}</div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding-top: 75px;
  text-align: center;
}

.title {
  color: #1d3051;
  font-size: 2rem;
  text-transform: uppercase;
  margin-bottom: 20px;
}

.landing-page {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 5% 5% 5%;
}

.card {
  position: relative;
  width: 30vw;
  height: 70vh;
  margin: 10px;
  overflow: hidden;
  cursor: pointer;
  border-radius: 5px;
  transition: transform 0.3s ease;
  display: flex;
  align-items: center;
}

.card:hover {
  transform: scale(1.05);
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
  font-size: 18px;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.card:hover .overlay {
  opacity: 1;
}


/* Tablet styles */
@media (min-width: 480px) and (max-width: 1200px) {
  .overlay {
    opacity: 1;
    background-color: transparent;
    font-size: 3vw;
  }
}

/* Mobile styles */
@media (max-width: 480px) {
  .landing-page {
    flex-direction: column;
  }

  .overlay {
    opacity: 1;
    background-color: transparent;
    font-size: 10vw;
  }

  .card {
    width: 100%;
    height: 50vh;
  }
}
</style>
