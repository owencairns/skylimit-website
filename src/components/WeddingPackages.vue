<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const vidPackages = [
  {
    name: 'Ceremony',
    price: '$1400',
    image: '/img/weddings/vid-ceremony.png',
    description: {
      p1: 'Entire ceremony video',
      p2: '2 camera angles',
    }
  },
  {
    name: 'Silver',
    price: '$2000',
    image: '/img/weddings/vid-silver.png',
    description: {
      p1: '4-6 min highlight video',
      p2: 'Drone Footage',
      p3: '6 hrs coverage',
    }
  },
  {
    name: 'Gold',
    price: '$2600',
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
    }
  },
]

const photoPackages = [
  {
    name: 'Engagement',
    price: '$250',
    image: '/img/weddings/photo-engagement.jpg',
    description: {
      p1: 'Entire ceremony video',
      p2: '2 camera angles',
    }
  },
  {
    name: 'Silver',
    price: '$1300',
    image: '/img/weddings/photo-bronze.jpg',
    description: {
      p1: '3-5 min highlight video',
      p2: '6 hrs coverage',
    }
  },
  {
    name: 'Gold',
    price: '$1600',
    image: '/img/weddings/photo-silver.jpg',
    description: {
      p1: '4-6 min highlight video',
      p2: 'Drone Footage',
      p3: '8 hrs coverage',
    }
  },
  {
    name: 'Diamond',
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

const service = ref('');
const pack = ref('');

const router = useRouter();

const redirectToContact = (serviceSelected, packSelected) => {
  router.push({
    name: 'contact',
    query: {
      service: serviceSelected,
      package: packSelected,
    },
  });
};
</script>

<template>
  <div class="page-container">
    <div class="heading">
      <div class="background"></div>
      <h1 class="title">Our Wedding Offerings</h1>
      <p class="subtitle">Experience the magic of your wedding day through our cinematic storytelling. Our team blends
        creativity with professionalism, ensuring every moment is beautifully preserved for you to relive.</p>
    </div>

    <div class="package-section video-packages">
      <h2 class="section-title">Videography Packages</h2>
      <p class="section-description">
        Discover a range of thoughtfully curated packages that resonate with your desires. Should you find any package not
        quite hitting the mark, don't hesitate to ask about our extra enhancements. We're here to make your unique
        requests a reality and create the perfect package just for you!
      </p>
      <div class="package-cards">
        <div v-for="(pack, index) in vidPackages" :key="index" class="package-card">
          <div class="card-content">
            <img :src="pack.image" alt="Package Image" class="package-image">
            <h3 class="package-name">{{ pack.name }}</h3>
            <div class="price">{{ pack.price }}</div>
            <ul class="description">
              <li v-for="(point, idx) in pack.description" :key="idx">{{ point }}</li>
            </ul>
            <div class="card-footer">
              <button class="book-now-button" @click="redirectToContact('Wedding Videography', pack.name)">Book
                Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="gap"></div>

    <div class="package-section photo-packages">
      <h2 class="section-title">Photography Packages</h2>
      <p class="section-description">
        Capture the beauty of your special day with our exceptional photography packages. Our skilled photographers will
        artfully document every moment, ensuring your memories are transformed into timeless works of art. Explore our
        carefully crafted packages below, and don't hesitate to inquire about customizations to perfectly match your
        vision.
      </p>
      <div class="package-cards">
        <div v-for="(pack, index) in photoPackages" :key="index" class="package-card">
          <div class="card-content">
            <img :src="pack.image" alt="Package Image" class="package-image">
            <h3 class="package-name">{{ pack.name }}</h3>
            <div class="price">{{ pack.price }}</div>
            <ul class="description">
              <li v-for="(point, idx) in pack.description" :key="idx">{{ point }}</li>
            </ul>
            <div class="card-footer">
              <button class="book-now-button">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  padding-top: 50px;
  position: relative;
  background-color: #1d30514b
}

.heading {
  text-align: center;
  padding: 40px 0;
  background-color: #f6d7b6;
}

.title {
  font-size: 36px;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 18px;
  color: #6b6b6b;
  max-width: 800px;
  margin: 0 auto;
}

.package-section {
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.section-title {
  color: #1d3051;
  font-size: 28px;
  text-align: center;
  margin-bottom: 20px;
}

.section-description {
  font-size: 18px;
  color: #6b6b6b;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 20px;
}

.package-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
  margin-bottom: -20vh;
}

.package-card {
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: 20px;
  flex-grow: 1;
  min-width: calc(15% - 10px);
  /* Adjust the width accordingly */
  max-width: calc(15% - 10px);
  /* Adjust the width accordingly */
  margin-bottom: 20px;
}

.package-name {
  color: #1d3051;
  font-size: 24px;
  margin: 10px 0;
}

.package-image {
  width: 100%;
  height: 200px;
  /* Set a fixed height for consistent dimensions */
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 15px;
}

.price {
  font-size: 20px;
  font-weight: bold;
  color: #f6d7b6;
  margin: 10px 0;
}

.description {
  color: #6b6b6b;
  font-size: 16px;
  text-align: left;
  margin-top: 10px;
  padding-left: 20px;
}

.description li {
  margin-bottom: 5px;
}

.book-now-button {
  background-color: #00bcd4;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 15px;
}

.book-now-button:hover {
  background-color: #008ba3;
}

.card-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.card-footer {
  margin-top: auto;
  text-align: center;
}

.gap {
  height: 30vh;
}

@media (min-width: 480px) and (max-width: 1200px) {
  .package-card {
    min-width: calc(33.33% - 10px);
    max-width: calc(33.33% - 10px);
  }
  .package-cards {
    margin-bottom: 0;
  }
  .gap {
    height: 0;
  }
}

/* New styling for mobile-sized screens */
@media (max-width: 480px) {
  .package-card {
    min-width: 100%;
    max-width: 100%;
  }
  .package-cards {
    margin-bottom: 0;
  }
  .gap {
    height: 0;
  }
}

</style>
