<script setup lang="ts">
import { ref } from 'vue';

const homepageVideos = [
  {
    id: 1,
    src: 'src/assets/homepageVideos/video1.mp4',
    thumbnail: 'src/assets/homepageVideos/video1thumbnail.jpg',
  },
  {
    id: 2,
    src: 'src/assets/homepageVideos/video2.mp4',
    thumbnail: 'src/assets/homepageVideos/video2thumbnail.jpg',
  },
  {
    id: 3,
    src: 'src/assets/homepageVideos/video3.mp4',
    thumbnail: 'src/assets/homepageVideos/video3thumbnail.jpg',
  },
  {
    id: 4,
    src: 'src/assets/homepageVideos/video4.mp4',
    thumbnail: 'src/assets/homepageVideos/video4thumbnail.jpg',
  },
]

const videoPlayer = ref(null);

function playVideo(videoSrc) {
  videoPlayer.$refs.videoPlayer.src = videoSrc;
  videoPlayer.$refs.videoPlayer.play();
  videoPlayer.$refs.videoPlayer.requestFullscreen();
}

function onVideoEnd() {
  document.exitFullscreen();
}

</script>

<template>
  <div class="hero">
    <video autoplay loop muted plays-inline class="back-vid">
      <source src="../assets/test-video.webm" type="video/webm" />
    </video>
    <div class="content">
      <router-link to="/" class="book">Book Now</router-link>
    </div>
  </div>
  <section class="video-section">
    <h3>Our Work</h3>
    <div class="video-grid">
      <div v-for="(video, index) in homepageVideos" :key="index" class="video-item" v-motion-slide-visible-once-bottom>
        <img :src="video.thumbnail" @click="playVideo(video.src)" />
        <video ref="videoPlayer" :src="video.src" @ended="onVideoEnd"></video>
      </div>

      <VideoPlayer v-if="isVideoPlayerVisible" :videoSrc="selectedVideoSrc" @close="closeVideoPlayer" />
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
body {
  display: flex;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #fff;
}

.hero {
  width: 90%;
  height: 100vh;
  background-image: linear-gradient(#1d305130, #1d305130);
  position: fixed;
  padding: 0 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  top: 0;
}

.content .book {
  text-decoration: none;
  display: inline-block;
  color: #fff;
  font-size: 24px;
  border: 2px solid #fff;
  padding: 14px 70px;
  border-radius: 50px;
  margin-top: 100px;
}

.content .book:hover {
  background-color: #fff;
  color: #1d3051;
  transition: 0.3s ease-in-out;
}

.video-section h3 {
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

.video-section {
  color: #1d3051;
  margin: 0 auto;
  padding-left: 5%;
  padding-right: 5%;
  padding-bottom: 100px;
}

.video-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(45%, 1fr));
  grid-gap: 30px;
}


.video-item {
  height: 300px;
  background-color: gray;
  border-radius: 5px;
  overflow: hidden;
}

.video-item img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  transition: 0.4s ease all;
}

video:-webkit-full-screen {
  width: 100vw;
  height: 100vh;
}

video:fullscreen {
  width: 100vw;
  height: 100vh;
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
</style>