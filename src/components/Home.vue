<script setup lang="ts">

const weddingVideos = [
  {
    id: 1,
    thumbnail: '/img/weddings/homevidthumb2.webp',
  },
  {
    id: 2,
    thumbnail: '/img/weddings/homevidthumb3.webp',
  },
  {
    id: 3,
    thumbnail: '/img/weddings/homevidthumb4.webp',
  }
]

const commercialVideos = [
  {
    id: 1,
    thumbnail: '/img/commercial/commercialThumb1.webp',
  },
  {
    id: 2,
    thumbnail: '/img/commercial/commercialThumb2.webp',
  },
  {
    id: 3,
    thumbnail: '/img/commercial/commercialThumb3.webp',
  }
];

const personalPhotos = [
  {
    id: 1,
    thumbnail: '/img/personal/personalthumbnail1.webp',
  },
  {
    id: 2,
    thumbnail: '/img/personal/personalthumbnail2.webp',
  },
  {
    id: 3,
    thumbnail: '/img/personal/personalthumbnail3.webp',
  }
];

</script>

<template>
  <div class="page-container">
    <div class="hero">
      <video autoplay loop muted playsinline class="back-vid">
        <source src="/img/logo-home/HomeVid.mp4" type="video/mp4" />
      </video>
      <div class="content">
        <img loading="lazy" src="/img/logo-home/skylimit-fixed.svg" alt="Skylimit Logo" class="skylimit-logo" />
        <router-link to="/contact" class="book-btn">Book Now</router-link>
      </div>
    </div>

    <section class="work wedding-section">
      <div class="work-content">
        <div class="work-description" v-scrollanimation>
          <h3 class="section-heading"><b>Weddings</b></h3>
          <p class="section-description">Preserve your special day with our breathtaking wedding videos. Our diverse range
            of packages caters to weddings of all sizes and styles, ensuring a perfect fit for your needs. From meticulous
            planning to flawless filming and expert editing, we create a captivating narrative that beautifully captures
            your vows, speeches, and cherished moments. With years of experience, we bring confidence and expertise to
            deliver videos that reflect the unique story of your love.</p>
          <p class="section-link">
            <router-link to="/packages/weddings" class="link-btn">Explore More</router-link>
          </p>
        </div>
        <div class="video-grid">
          <div v-for="(video, index) in weddingVideos" :key="index" class="video-item" :class="'video-item-' + index"
            v-scrollanimation>
            <img loading="lazy" :src="video.thumbnail" />
          </div>
        </div>
      </div>
    </section>

    <section class="work commercial-section">
      <div class="work-content">
        <div class="video-grid">
          <div v-for="(video, index) in commercialVideos" :key="index" class="video-item inverse"
            :class="'video-item-' + index" v-scrollanimation>
            <img loading="lazy" :src="video.thumbnail" />
          </div>
        </div>
        <div class="work-description commercial-description" v-scrollanimation>
          <h3 class="section-heading"><b>Commercial</b></h3>
          <p class="section-description">Elevate your brand with our captivating video and photo services. We showcase
            your
            products to leave a lasting impact on your audience. With excellence as our
            commitment, we provide creative freedom to bring your vision to life. Our experienced team collaborates to
            align content with your brand's identity. Discover the power of our expertise and elevate your brand to new
            heights.</p>
          <p class="section-link">
            <router-link to="/packages/commercial" class="link-btn">Explore More</router-link>
          </p>
        </div>
      </div>
    </section>

    <section class="work personal-section">
      <div class="work-content">
        <div class="work-description" v-scrollanimation>
          <h3 class="section-heading"><b>Personal</b></h3>
          <p class="section-description">Capture your cherished moments with our personal video and photo services.
            Whether it's a special occasion, family gathering, or individual portrait, we bring your stories to life. Our
            dedicated team ensures each moment is preserved beautifully. With a range of packages, we cater to your needs
            and style. From planning to editing, we handle every detail, letting you relive your memories. Trust us to
            deliver videos and photos that reflect the uniqueness of your personal journey.</p>
          <p class="section-link">
            <router-link to="/packages/personal" class="link-btn">Explore More</router-link>
          </p>
        </div>
        <div class="video-grid">
          <div v-for="(video, index) in personalPhotos" :key="index" class="video-item" :class="'video-item-' + index"
            v-scrollanimation>
            <img loading="lazy" :src="video.thumbnail" />
          </div>
        </div>
      </div>
    </section>

    <section class="about">
      <div class="company-about">
        <div class="text">
          <h2 class="heading">Who Are We?</h2>
          <div class="description">Our mission is simple yet powerful: Fueled by passion,
            we dedicate ourselves to mastering the skills required to deliver the finest products
            to our customers. We love what we do, and that passion and love is woven into every
            aspect of our work.</div>
        </div>
      </div>
      <div class="personal-about">
        <h3 class="personal-heading">Meet The Team</h3>
        <div class="about-person noah" v-scrollanimation>
          <img loading="lazy" class="pic-person" src="/img/logo-home/Noah.webp" alt="Picture of Noah Ike" />
          <div class="description-person noah">
            <h4 class="name">Noah Ike</h4>
            <h5 class="role">Co-Owner</h5>
            <p class="description">Hey, I'm Noah! A passionate filmmaker and photographer
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
            <p class="description">Hello! I'm Reagan, a seasoned videographer and photographer.
              I've been in the industry for over seven years, focusing on bringing the most
              significant moments to life. My goal is to tell stories, capture those important
              moments, and make the process effortless for our clients.</p>
          </div>
          <img loading="lazy" class="pic-person" src="/img/logo-home/Reagan.webp" alt="Picture of Reagan Berce" />
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
.page-container {
  margin: 0;
  padding: 0;
  max-width: 100vw;
  overflow-x: hidden;
}

.hero {
  padding-top: 150px;
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero video {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

.content {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 100px;
}

.skylimit-logo {
  height: 30vw;
  width: auto;
  padding-bottom: 5%
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
  display: flex;
  align-items: center;
  /* Center vertically */
  justify-content: center;
  /* Center horizontally */
  background-image: url(/img/logo-home/aboutBanner.png);
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
}

/* Update the text styles for better readability */
.company-about .text {
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  padding-bottom: 4%;
  padding-left: 4%;
  padding-right: 4%;
}

.company-about h2 {
  font-weight: bold;
  font-size: 3.5vw;
  /* Adjust font size */
  margin-bottom: 10px;
}

.company-about .description {
  font-size: 1.7vw;
  /* Adjust font size */
  line-height: 1.6;
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
  width: 40%;
  height: auto;
  border-radius: 10px;
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
}

/* Tablet styles */
@media (min-width: 769px) and (max-width: 1024px) {

  /* Adjustments for tablet devices */
  .hero {
    padding-top: 120px;
  }

  .skylimit-logo {
    height: 200px;
  }

  .book-btn {
    font-size: 20px;
    padding: 12px 50px;
  }

  .section-description,
  .description {
    font-size: 16px;
  }

}

/* Mobile styles */
@media (max-width: 768px) {

  .work-content {
    flex-direction: column;
  }

  /* Center justify section titles and descriptions */
  .work-description {
    text-align: center;
  }

  .section-description {
    font-size: 16px;
  }

  /* Adjust video items layout */
  .video-grid {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 20px 0;
  }

  .video-item {
    width: 100%;
    height: 30vh;
    border-radius: 4px;
    /* Full width for stacked video items */
  }

  .commercial-section .work-content {
    flex-direction: column-reverse;
    /* Reverse the order of elements */
    align-items: center;
    /* Center align elements */
  }

  .commercial-description {
    text-align: center;
    margin-bottom: 20px;
    /* Add spacing between title/description and video grid */
  }

  /* Adjust video grid layout for the Commercial section */
  .commercial-section .video-grid {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 20px 0;
  }

  .commercial-section .video-item {
    width: 100%;
    border-radius: 4px;
    /* Full width for stacked video items */
  }

  /* Adjust the images in the personal work video-grid to show the top 10% of the image */
  .personal-section .video-item img {
    object-position: 25% 25%;
  }

  /* Adjust company about layout */
  .company-about h2 {
    font-size: 4.5vw;
    padding: 30px 0;
  }

  .company-about .description {
    margin-top: -20px;
    font-size: 1.2rem;
  }

  .personal-about {
    width: 100%;
    padding: 0;
    margin: 0;
  }

  .personal-heading {
    font-size: 3rem;
    margin-bottom: -70px;
    text-align: center;
    padding-left: 2%;
    padding-right: 2%;
  }

  .about-person {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 20px;
    gap: 20px;
    transition: 1.5s ease all;
  }

  .about-person.before-enter {
    opacity: 0;
  }

  .about-person.enter {
    opacity: 1;
  }

  .pic-person {
    width: 100%;
    height: 100%;
    border-radius: 0;
    object-fit: cover;
    margin-bottom: -10px;
  }

  .name {
    font-size: 24px;
    margin-bottom: 5px;
  }

  .role {
    font-size: 18px;
    font-weight: 300;
  }

  .description-person {
    font-size: 1rem;
    text-align: center;
    padding: 0 20px;
    /* Add horizontal padding to the description */
  }

  .description-person .description {
    text-align: center;
  }

  .about-person.reagan {
    flex-direction: column-reverse;
    padding-bottom: 120px;
  }


  /* Adjust footer */
  .footer {
    display: block;
    /* Stack social icons vertically */
    text-align: center;
    padding: 15px;
  }

  .footer .social-icons {
    margin-top: 10px;
    /* Add some spacing between text and social icons */
  }

  .before-enter {
    opacity: 0;
    transform: translateY(100px);
    transition: all 0.5s ease-out;
  }

}
</style>