<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const photoPackages = [
  {
    name: 'Professional Headshots',
    price: '$100',
    image: '/img/personal/personalpack1.jpeg',
    description: {
      p1: 'Nature or City themed backrounds',
      p2: '5 Picture Minimum',
    }
  },
  {
    name: 'Senior Photography',
    price: '$150',
    image: '/img/personal/personalpack2.jpeg',
    description: {
      p1: '30 Picture Minimum',
      p2: '2 Locations within 10 mile radius',
      p3: '1 Hour Maximum',
    }
  },
  {
    name: 'Personal Photo Shoot',
    price: '$200',
    image: '/img/personal/personalpack3.jpeg',
    description: {
      p1: '30 Picture Minimum',
      p2: '1 Hour Maximum',
    }
  },
  {
    name: 'Family Photography',
    price: '$250',
    image: '/img/personal/personalpack4.jpeg',
    description: {
      p1: '30 Picture Minimum',
      p2: '1 Location',
      p3: '2 Hours Maximum',
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
      <h1 class="title">Our Personal Photography Offerings</h1>
      <p class="subtitle">Elevate your personal photography experience with us, whether it's senior pics, headshots, or
        family photos. Our talented photographers blend creativity and professionalism to beautifully capture your unique
        moments, ensuring they become lasting memories.</p>
    </div>

    <div class="package-section video-packages">
      <h2 class="section-title">Photography Packages</h2>
      <p class="section-description">
        Discover a range of thoughtfully curated packages that resonate with your desires. Should you find any package not
        quite hitting the mark, don't hesitate to ask about our extra enhancements. We're here to make your unique
        requests a reality and create the perfect package just for you!
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
              <button class="book-now-button" @click="redirectToContact('Personal', pack.name)">Book
                Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="gap"></div>
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
}</style>
