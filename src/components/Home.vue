<script setup lang="ts">
import { ref } from 'vue';

const weddingVideos = [
  {
    id: 1,
    thumbnail: '/img/weddings/homevidthumb2.jpg',
  },
  {
    id: 2,
    thumbnail: '/img/weddings/homevidthumb3.jpg',
  },
  {
    id: 3,
    thumbnail: '/img/weddings/homevidthumb4.jpg',
  }
]

const commercialVideos = [
  {
    id: 1,
    thumbnail: '/img/commercial/commercialThumb1.jpg',
  },
  {
    id: 2,
    thumbnail: '/img/commercial/commercialThumb2.jpg',
  },
  {
    id: 3,
    thumbnail: '/img/commercial/commercialThumb3.jpg',
  }
];

const personalPhotos = [
  {
    id: 1,
    thumbnail: '/img/personal/personalthumbnail1.jpg',
  },
  {
    id: 2,
    thumbnail: '/img/personal/personalthumbnail2.jpg',
  },
  {
    id: 3,
    thumbnail: '/img/personal/personalthumbnail3.jpg',
  }
];

</script>

<template>
  <div>
    <div class="hero">
      <video autoplay loop muted plays-inline class="back-vid">
        <source src="/img/logo-home/HomepageVid.mp4" type="video/webm" />
      </video>
      <div class="content">
        <img src="/img/logo-home/skylimit-fixed.svg" alt="Skylimit Logo" class="skylimit-logo" />
        <router-link to="/contact" class="book-btn">Book Now</router-link>
      </div>
    </div>

    <section class="work wedding-section">
      <div class="work-content">
        <div class="work-description" v-scrollanimation>
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
          <div v-for="(video, index) in weddingVideos" :key="index" class="video-item" :class="'video-item-' + index"
            v-scrollanimation>
            <img :src="video.thumbnail" />
            <div class="play"><img src="/img/logo-home/icons/playIcon.png" /></div>
          </div>
        </div>
      </div>
    </section>

    <!-- New "Commercial" section -->
    <section class="work commercial-section">
      <div class="work-content">
        <div class="video-grid">
          <div v-for="(video, index) in commercialVideos" :key="index" class="video-item inverse"
            :class="'video-item-' + index" v-scrollanimation>
            <img :src="video.thumbnail" />
            <div class="play"><img src="/img/logo-home/icons/playIcon.png" /></div>
          </div>
        </div>
        <div class="work-description commercial-description" v-scrollanimation>
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

    <section class="work personal-section">
      <div class="work-content">
        <div class="work-description" v-scrollanimation>
          <h3 class="section-heading"><b>Personal</b></h3>
          <p class="section-description">Capture the essence of your wedding day.
            We specialize in creating breathtaking videos that preserve the memories of your special moments.
            Our diverse range of packages caters to weddings of all sizes and styles,
            ensuring a perfect fit for your needs. From meticulous planning to flawless
            filming and expert editing, we handle every aspect to create a captivating narrative.
            Trust us to beautifully capture your vows, speeches, and all the cherished moments.
            With years of experience, we bring confidence and expertise to deliver videos that will
            be cherished forever, reflecting the unique story of your love.</p>
          <p class="section-link">
            <router-link to="/personal" class="link-btn">Explore More</router-link>
          </p>
        </div>
        <div class="video-grid">
          <div v-for="(video, index) in personalPhotos" :key="index" class="video-item" :class="'video-item-' + index"
            v-scrollanimation>
            <img :src="video.thumbnail" />
            <div class="play notPlayable"><img src="/img/logo-home/icons/playIcon.png" /></div>
          </div>
        </div>
      </div>
    </section>

    <section class="about">
      <div class="company-about">
        <div class="text">
          <h2 class="heading">Who Are We?</h2>
          <div class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.</div>
        </div>
      </div>
      <div class="personal-about">
        <h3 class="personal-heading">Meet The Team</h3>
        <div class="about-person noah" v-scrollanimation>
          <img class="pic-person" src="/img/logo-home/noah.jpg" alt="Picture of Noah Ike" />
          <div class="description-person noah">
            <h4 class="name">Noah Ike</h4>
            <h5 class="role">Co-Owner</h5>
            <p class="description">Hey there! I'm Noah, a passionate filmmaker and photographer
              in my final year at Grand Valley State University, pursuing a bachelor's degree
              in Film and Video. With over 5 years of professional experience,
              I thrive on capturing captivating visuals that tell compelling stories. From
              initial planning to final post-production, I absolutely love bringing ideas and
              visions to life by putting all the pieces together.</p>
          </div>
        </div>
        <div class="about-person reagan" v-scrollanimation>
          <div class="description-person noah">
            <h4 class="name">Reagan Berce</h4>
            <h5 class="role">Co-Owner</h5>
            <p class="description">Hey there! I'm Noah, a passionate filmmaker and photographer
              in my final year at Grand Valley State University, pursuing a bachelor's degree
              in Film and Video. With over 5 years of professional experience,
              I thrive on capturing captivating visuals that tell compelling stories. From
              initial planning to final post-production, I absolutely love bringing ideas and
              visions to life by putting all the pieces together.</p>
          </div>
          <img class="pic-person" src="/img/logo-home/reagan.jpg" alt="Picture of Reagan Berce" />
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
html,
body {
  margin: 0;
  padding: 0;
  max-width: 100%;
  overflow-x: hidden;
}

.hero {
  width: 100%;
  height: 100vw;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.skylimit-logo {
  height: 35vw;
  width: auto;
  padding-bottom: 10%
}

.book-btn {
  text-decoration: none;
  display: inline-block;
  color: #fff;
  font-size: 24px;
  border: 2px solid #fff;
  padding: 14px 70px;
  border-radius: 50px;
}

.book-btn:hover {
  background-color: #fff;
  color: #1d3051;
  transition: 0.3s ease-in-out;
}

.work {
  background-color: #fff;
  color: #1d3051;
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 2%;
  padding-bottom: 2%;
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
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: 6%;
}


.work-description h3 {
  font-size: 2rem;
  font-weight: 400;
}

.video-grid {
  display: flex;
  justify-content: space-between;
  gap: 2%;
  padding: 20px 10px;
  width: 60%;
}

.video-item {
  position: relative;
  height: 100%;
  width: 100vw;
}

.video-item img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.4s ease all;
  border-radius: 1%;
}

.video-item .play {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: 0.4s ease opacity;
}

.video-item:hover .play {
  cursor: pointer;
  opacity: 1;
}

.video-item:hover .play.notPlayable {
  cursor: pointer;
  opacity: 0;
}

.play img {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 20%;
  width: auto;
}

.work-content {
  flex-direction: row;
}

.work.commercial-section {
  background-color: #e5ecf1;
}

.commercial-description {
  text-align: left;
}

.about {
  background-color: #fff;
  padding-top: 2%;
  padding-bottom: 2%;
  position: relative;
}

.company-about {
  padding-top: 2%;
  padding-bottom: 2%;
  padding-left: 4%;
  padding-right: 4%;
  background-image: url(/img/logo-home/bannerPhoto.png);
  background-position: center top;
  /* Center the background image */
  background-repeat: no-repeat;
  background-size: cover;
  /* Scale the background image to fit the container */
  text-align: center;
}

.company-about .text {
  padding-left: 2%;
  padding-right: 2%;
  padding-bottom: 2%;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
}

.company-about h2 {
  font-weight: bold;
  font-size: 3.5vw;
  margin-bottom: 5px;
}

.company-about .description {
  font-size: 1.7vw;
  font-weight: 500;
}

.personal-about {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.personal-heading {
  font-weight: bold;
  font-size: 3.5vw;
  margin-bottom: 0px;
  color: #1d3051;
}

.about-person {
  display: flex;
  align-items: center;
  padding-left: 5%;
  padding-right: 5%;
  transition: 1.5s ease all;
}

.about-person.before-enter {
  opacity: 0;
}

.about-person.enter {
  opacity: 1;
}


.pic-person {
  width: 30%;
  height: auto;
  border-radius: 30%;
}

.name {
  color: #1d3051;
  font-size: 2.7vw;
  font-weight: bold;
  margin-bottom: 5px;
  /* Added margin-bottom */
}

.role {
  color: #007AFF;
  /* Changed color to light blue */
  font-size: 1.8vw;
  font-weight: 300;
  margin-top: 0;
  /* Removed margin-top */
  margin-bottom: 5px;
  /* Added margin-bottom */
}

.description-person {
  flex: 1;
  color: #777;
  font-weight: 400;
  padding-left: 2%;
  padding-right: 2%;
  font-size: 1.3vw;
  font-weight: 400;
  line-height: 1.6;
  margin-top: 5px;
  /* Added margin-top */
}


.description-person .description {
  text-align: left;
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

.work-description.before-enter {
  opacity: 0;
  transform: translateY(100px);
  transition: all 0.5s ease-out;
}

.work-description.enter {
  opacity: 1;
  transform: translateY(0px);
}

.video-item-0.before-enter {
  opacity: 0;
  transform: translateX(100px);
  transition: all 0.5s ease-out;
}

.video-item-0.enter {
  opacity: 1;
  transform: translateX(0);
}

.video-item-0.inverse.before-enter {
  opacity: 0;
  transform: translateX(-100px);
  transition: all 0.5s ease-out;
}

.video-item-0.inverse.enter {
  opacity: 1;
  transform: translateX(0);
}

.video-item-1.before-enter {
  opacity: 0;
  transform: translateX(100px);
  transition: all 0.5s ease-out;
  transition-delay: 0.1s;
}

.video-item-1.enter {
  opacity: 1;
  transform: translateX(0);
}

.video-item-1.inverse.before-enter {
  opacity: 0;
  transform: translateX(-100px);
  transition: all 0.5s ease-out;
  transition-delay: 0.1s;
}

.video-item-1.inverse.enter {
  opacity: 1;
  transform: translateX(0);
}

.video-item-2.before-enter {
  opacity: 0;
  transform: translateX(100px);
  transition: all 0.5s ease-out;
  transition-delay: 0.2s;
}

.video-item-2.enter {
  opacity: 1;
  transform: translateX(0);
}

.video-item-2.inverse.before-enter {
  opacity: 0;
  transform: translateX(-100px);
  transition: all 0.5s ease-out;
  transition-delay: 0.2s;
}

.video-item-2.inverse.enter {
  opacity: 1;
  transform: translateX(0);
}</style>