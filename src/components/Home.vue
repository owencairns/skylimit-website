<script setup lang="ts">
import { ref } from 'vue';

const weddingVIdeos = [
  {
    id: 1,
    thumbnail: 'src/assets/homepageVideos/homevidthumb2.png',
  },
  {
    id: 2,
    thumbnail: 'src/assets/homepageVideos/homevidthumb3.png',
  },
  {
    id: 3,
    thumbnail: 'src/assets/homepageVideos/homevidthumb4.png',
  }
]

</script>

<template>
  <div class="hero">
    <video autoplay loop muted plays-inline class="back-vid">
      <source src="../assets/HomepageVid.mp4" type="video/webm" />
    </video>
    <div class="content">
      <router-link to="/" class="book">Book Now</router-link>
    </div>
  </div>
  <section class="work">
    <h3>Our Work</h3>
    <div class="video-grid">
      <div v-for="(video, index) in weddingVIdeos" :key="index" class="video-item"
        v-motion :initial="{opacity: 0, y: 100}" :visibleOnce="{opacity: 1, y: 0}">
        <img :src="video.thumbnail"/>
      </div>
    </div>
  </section>
  <footer class="footer">
    <span>&copy; 2023 Sky Limit Visuals. All rights reserved.</span>
    <div class="social-icons">
      <a href="https://www.facebook.com/skylimitvisuals"><font-awesome-icon class="footer-icon"
          icon="fa-brands fa-facebook" /></a>
      <a href="https://www.instagram.com/skylimitvisuals"><font-awesome-icon class="footer-icon"
          icon="fa-brands fa-instagram" /></a>
    </div>
  </footer>
</template>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
  max-width: 100%;
  overflow-x: hidden;
}

.hero {
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero video {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
}

.content {
  text-align: center;
}

.content .book {
  text-decoration: none;
  display: inline-block;
  color: #fff;
  font-size: 24px;
  border: 2px solid #fff;
  padding: 14px 70px;
  border-radius: 50px;
  margin-top: 150px;
}

.content .book:hover {
  background-color: #fff;
  color: #1d3051;
  transition: 0.3s ease-in-out;
}

.work h3 {
  text-align: center;
  font-size: 2rem;
  font-weight: 400;
}

.back-vid {
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: -1;
}

.work {
  background-color: #fff;
  color: #1d3051;
  margin: 0 auto;
  padding-left: 5%;
  padding-right: 5%;
  padding-bottom: 100px;
}

.video-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 -15px;
}

.video-item {
  width: 25%;
  margin: 10px;
  height: 400px;
  background-color: gray;
  border-radius: 3px;
  overflow: hidden;
}

.video-item img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  transition: 0.4s ease all;
  filter: grayscale(1);

}

.video-item:hover img {
  filter: none;
}

.footer {
  background-color: #F6D7B6;
  font-weight: 600;
  color: #1d3051;
  padding: 20px;
  font-size: 14px;
  display: flex;
  align-items: center;
}

.footer span {
  margin-right: auto;
}


.social-icons {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 300px;
  margin: 0 auto;
}

.social-icons a {
  display: flex;
  justify-content: center;
  width: 40px;
  height: 40px;
  margin-right: 20px;
  text-align: center;
  color: #1d3051;
  font-size: 24px;
}

/* Bouncing arrows styles */
.scroll-indicator {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 50px;
}

.arrow {
  width: 40px;
  height: 40px;
  border: solid #fff;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(45deg);
  animation: bounce 2s infinite;
}

.arrow2 {
  margin-top: 10px;
}

@keyframes bounce {
  0% {
    transform: rotate(45deg) translateY(0);
  }
  20% {
    transform: rotate(45deg) translateY(10px);
  }
  40% {
    transform: rotate(45deg) translateY(0);
  }
  60% {
    transform: rotate(45deg) translateY(10px);
  }
  80% {
    transform: rotate(45deg) translateY(0);
  }
  100% {
    transform: rotate(45deg) translateY(10px);
  }
}

</style>