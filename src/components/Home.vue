<script setup lang="ts">
import { ref, Ref } from 'vue';

</script>

<template>
  <div class="hero">
    <video autoplay loop muted plays-inline class="back-vid">
      <source src="../assets/test-video.webm" type="video/webm"/>
    </video>
    <div class="content">
      <router-link to="/" class="book">Book Now</router-link>
    </div>
  </div>
  <div class="favorites">
    <h3>Some of Our Work</h3>
    <div class="vid1"></div>
    <div class="vid2"></div>
    <div class="vid3"></div>
    <div class="vid4"></div>
    <div class="vid5"></div>
    <div class="vid6"></div>
  </div>
  <section class="video-section">
    <h2>Video Examples</h2>
    <div class="video-grid">
      <div class="video-placeholder"></div>
      <div class="video-placeholder"></div>
      <div class="video-placeholder"></div>
      <div class="video-placeholder"></div>
      <div class="video-placeholder"></div>
      <div class="video-placeholder"></div>
    </div>
  </section>
</template>

<style scoped>

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #fff;
}

.hero {
  width: 90%;
  height: 100vh;
  background-image: linear-gradient(#1d305130, #1d305130);
  position: relative;
  padding: 0 5%;
  display: flex;
  align-items: center;
  justify-content: center;
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
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 30px;
}

.video-placeholder {
  height: 270px;
  background-color: gray;
  border-radius: 5px;
}

</style>