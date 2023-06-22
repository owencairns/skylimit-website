<script setup lang="ts">
import { ref } from 'vue';

const weddingVideos = [
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

const commercialVideos = [
  {
    id: 1,
    thumbnail: 'src/assets/homepageVideos/commercialThumb1.png',
  },
  {
    id: 2,
    thumbnail: 'src/assets/homepageVideos/commercialThumb2.jpg',
  },
  {
    id: 3,
    thumbnail: 'src/assets/homepageVideos/commercialThumb3.jpg',
  }
];

</script>

<template>
  <div>
    <div class="hero">
      <video autoplay loop muted plays-inline class="back-vid">
        <source src="../assets/HomepageVid.mp4" type="video/webm" />
      </video>
      <div class="content">
        <router-link to="/" class="book-btn">Book Now</router-link>
      </div>
    </div>

    <section class="work wedding-section">
      <div class="work-content">
        <div class="work-description">
          <h3 class="section-heading"><b>Weddings</b></h3>
          <p class="section-description">Capture the essence of your wedding day.
            We specialize in creating breathtaking videos that preserve the memories of your special moments.
            Our diverse range of packages caters to weddings of all sizes and styles,
            ensuring a perfect fit for your needs. From meticulous planning to flawless
            filming and expert editing, we handle every aspect to create a captivating narrative.
            Trust us to beautifully capture your vows, speeches, and all the cherished moments.
            With years of experience, we bring confidence and expertise to deliver videos that will
            be cherished forever, reflecting the unique story of your love.</p>
          <p class="section-link">
            <router-link to="/weddings" class="link-btn">Explore More</router-link>
          </p>
        </div>
        <div class="video-grid">
          <div v-for="(video, index) in weddingVideos" :key="index" class="video-item">
            <img :src="video.thumbnail" />
          </div>
        </div>
      </div>
    </section>

    <!-- New "Commercial" section -->
    <section class="work commercial-section">
      <div class="work-content">
        <div class="video-grid commercial-videos">
          <div v-for="(video, index) in commercialVideos" :key="index" class="video-item commercial-video-item">
            <div class="gray-box"></div>
            <img :src="video.thumbnail" />
          </div>
        </div>
        <div class="work-description commercial-description">
          <h3 class="section-heading"><b>Commercial</b></h3>
          <p class="section-description"> 
            We are dedicated to crafting short form videos that effectively showcase your products, 
            whether it's mouthwatering snacks or refreshing beverages, leaving a lasting impact on your 
            target audience. With an unwavering commitment to excellence, we provide unparalleled creative 
            freedom and flexibility, ensuring that your vision is brought to life. Our experienced team 
            collaborates closely with you to create content that perfectly aligns with your brand's unique 
            identity. Discover the power of our expertise, passion, and commitment to delivering exceptional 
            results, and elevate your brand to new heights.</p>
            <p class="section-link">
              <router-link to="/commercial" class="link-btn">Explore More</router-link>
            </p>
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
  </div>
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
  z-index: -1;
}

.content {
  text-align: center;
}

.book-btn {
  text-decoration: none;
  display: inline-block;
  color: #fff;
  font-size: 24px;
  border: 2px solid #fff;
  padding: 14px 70px;
  border-radius: 50px;
  margin-top: 150px;
}

.book-btn:hover {
  background-color: #fff;
  color: #1d3051;
  transition: 0.3s ease-in-out;
}

.work {
  background-color: #fff;
  color: #1d3051;
  margin: 0 auto;
  padding-left: 5%;
  padding-right: 5%;
  padding-bottom: 100px;
  position: relative;
}

.work::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: -1;
}

.section-heading {
  font-size: 2.2rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.section-description {
  font-size: 1.3vw;
  font-weight: 400;
  line-height: 1.6;
  color: #777;
}

.section-link .link-btn {
  font-size: 1rem;
  text-decoration: underline;
  color: #007AFF;
}

.work-content {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.work-description {
  width: 50%;
}

.work-description h3 {
  font-size: 2rem;
  font-weight: 400;
}

.work-description p {
  margin-top: 10px;
}

.video-grid {
  display: flex;
  justify-content: center;
  margin: 20px 10px;
  border: 1px solid red;
}

.video-item {
  flex: 0 0 30%; /* Adjust the percentage value as needed */
  margin: 10px;
  padding-top: 40%; /* Adjust the padding-top value for the desired aspect ratio */
  position: relative;
  height: 200px;
  width: 200px;
}

.video-item img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.4s ease all;
  filter: grayscale(1);
  border-radius: 1%;
}

.video-item:hover img {
  filter: none;
}

.work-content {
  flex-direction: row;
}

.video-grid.commercial-videos {
  justify-content: flex-end;
}

.video-item.commercial-video-item {
  margin-left: 10px;
  margin-right: 0;
}

.work.commercial-section {
  background-color: #e5ecf1;
}
.commercial-description {
  text-align: right;
}

.gray-box {
  width: 100%;
  height: 100%;
  background-color: #f1f1f1;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}

.footer {
  background-color: #F6D7B6;
  font-weight: 600;
  color: #1d3051;
  padding: 20px;
  font-size: 14px;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;
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