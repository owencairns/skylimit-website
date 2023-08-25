<script setup lang="ts">
import { ref } from 'vue';

const vidPackages = [
  {
    name: 'Ceremony',
    price: '$1000',
    image: '/img/weddings/vid-ceremony.png',
    description: {
      p1: 'Entire ceremony video',
      p2: '2 camera angles',
    }
  },
  {
    name: 'Bronze',
    price: '$1400',
    image: '/img/weddings/vid-bronze.png',
    description: {
      p1: '3-5 min highlight video',
      p2: '6 hrs coverage',
    }
  },
  {
    name: 'Silver',
    price: '$1800',
    image: '/img/weddings/vid-silver.png',
    description: {
      p1: '4-6 min highlight video',
      p2: 'Drone Footage',
      p3: '8 hrs coverage',
    }
  },
  {
    name: 'Gold',
    price: '$2200',
    image: '/img/weddings/vid-gold.png',
    description: {
      p1: '4-6 min highlight video',
      p2: 'Drone Footage',
      p3: '9 hrs coverage',
      p4: 'Vows included',
      p5: '5 min raw footage'
    }
  },
  {
    name: 'Diamond',
    price: '$3000',
    image: '/img/weddings/vid-diamond.png',
    description: {
      p1: '5-8 min highlight video',
      p2: 'Drone Footage',
      p3: '9 hrs coverage',
      p4: 'Vows included',
      p5: '5 min raw footage',
      p6: 'Speeches as separate video',
      p7: 'Live stream available',
    }
  },
]

const photoPackages = [
{
    name: 'Engagement',
    price: '$500',
    image: '/img/weddings/photo-engagement.jpg',
    description: {
      p1: 'Entire ceremony video',
      p2: '2 camera angles',
    }
  },
  {
    name: 'Bronze',
    price: '$1300',
    image: '/img/weddings/photo-bronze.jpg',
    description: {
      p1: '3-5 min highlight video',
      p2: '6 hrs coverage',
    }
  },
  {
    name: 'Silver',
    price: '$1600',
    image: '/img/weddings/photo-silver.jpg',
    description: {
      p1: '4-6 min highlight video',
      p2: 'Drone Footage',
      p3: '8 hrs coverage',
    }
  },
  {
    name: 'Gold',
    price: '$2000',
    image: '/img/weddings/photo-gold.jpg',
    description: {
      p1: '4-6 min highlight video',
      p2: 'Drone Footage',
      p3: '9 hrs coverage',
      p4: 'Vows included',
      p5: '5 min raw footage'
    }
  },
]

</script>

<template>
  <div class="page-container">
    <div class="heading">
      <div class="background"></div>
      <h1>Our Wedding Offerings</h1>
      <p>Experience the magic of your wedding day through our cinematic storytelling.
        Our team blends creativity with professionalism, ensuring every moment is beautifully
        preserved for you to relive.</p>
    </div>

    <div class="video-packages">
      <h1 class="title">Videography Packages</h1>
      <div class="package-cards">
        <div v-for="(pack, index) in vidPackages" :key="index" class="package-card">
          <div class="card-content">
            <img :src="pack.image" alt="Package Image" class="package-image">
            <h2>{{ pack.name }}</h2>
            <div class="price">{{ pack.price }}</div>
            <div class="description">
              <ul>
                <li v-for="(point, idx) in pack.description" :key="idx">{{ point }}</li>
              </ul>
            </div>
          </div>
          <button class="book-now-button">Book Now</button>
        </div>
      </div>
    </div>

    <div class="gap"></div>

    <div class="photo-packages">
      <h1 class="title">Videography Packages</h1>
      <div class="vid-description">
        Discover a range of thoughtfully curated packages that resonate with your
        desires. Should you find any package not quite hitting the mark,
        don't hesitate to ask about our extra enhancements. We're here to
        make your unique requests a reality and create the perfect package
        just for you!
      </div>
      <div class="package-cards">
        <div v-for="(pack, index) in photoPackages" :key="index" class="package-card">
          <div class="card-content">
            <img :src="pack.image" alt="Package Image" class="package-image">
            <h2>{{ pack.name }}</h2>
            <div class="price">{{ pack.price }}</div>
            <div class="description">
              <ul>
                <li v-for="(point, idx) in pack.description" :key="idx">{{ point }}</li>
              </ul>
            </div>
          </div>
          <button class="book-now-button">Book Now</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  margin-top: 75px;
  position: absolute;
}

.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/img/bg-img1.png');
  background-size: cover;
  background-position: center center;
  z-index: -1;
}

.video-packages,
.photo-packages {
  color: #1d3051;
  background-color: white;
  padding: 20px;
  margin-top: 20px;
}

.title {
  font-size: 24px;
}

.gap {
  height: 300px;
}

.package-cards {
  display: flex;
  gap: 10px;
  margin-bottom: -100px;
  justify-content: space-between;
  padding-left: 2%;
  padding-right: 2%;
}

.package-card {
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  width: calc(33.33% - 20px);
  box-sizing: border-box;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-bottom: 20px;
}

.card-content {
  flex: 1;
}

.package-image {
  width: 100%;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
  margin-bottom: 10px;
}

.description {
  color: #6b6b6b;
  font-size: 0.8rem;
}

.description ul {
  list-style-type: none;
  padding: 0;
}

.description li {
  color: #6b6b6b;
  position: relative;
}

.description li::after {
  color: #00bcd4;
  position: absolute;
  left: -20px;
}

.price {
  color: #f6d7b6;
  font-weight: bold;
  margin-top: 5px;
}

.book-now-button {
  background-color: #00bcd4;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 10px;
}

.book-now-button:hover {
  background-color: #008ba3;
}
</style>
