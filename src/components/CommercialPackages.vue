<script setup lang="ts">
</script>

<template>
    <div class="commercial-page">
      <div class="message">
        <h1 class="title">Customized Commercial Media</h1>
        <p class="description">
          At Skylimit Visuals, we understand that each commercial project is unique. That's why we don't offer preset packages for commercial media. Instead, we tailor our services to your specific needs. Whether it's a promotional video, corporate event coverage, or product showcase, we're here to bring your vision to life. Get in touch with us to discuss your project requirements.
        </p>
        <p class="contact-link">
          Interested in working together? <router-link to="/contact">Contact us</router-link> to discuss your project.
        </p>
      </div>
      <div class="navigation">
        <router-link to="/portfolio" class="portfolio-link">Browse Our Portfolio</router-link>
      </div>
    </div>
  </template>
  
  <style scoped>
  .commercial-page {
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 20px;
  }
  
  .message {
    text-align: center;
  }
  
  .title {
    font-size: 36px;
    margin-bottom: 20px;
  }
  
  .description {
    font-size: 18px;
    color: #6b6b6b;
    max-width: 800px;
    margin: 0 auto 20px;
  }
  
  .contact-link {
    font-size: 16px;
    color: #00bcd4;
  }
  
  .navigation {
    margin-top: 40px;
  }
  
  .portfolio-link {
    font-size: 18px;
    color: #00bcd4;
    text-decoration: none;
    transition: color 0.3s;
  }
  
  .portfolio-link:hover {
    color: #008ba3;
  }
  </style>
  