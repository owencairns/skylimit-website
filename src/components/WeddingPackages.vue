<script setup lang="js">
import { ref, onBeforeMount, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { getFirestore, doc, getDoc } from 'firebase/firestore'
import { getStorage, ref as storageRef, getDownloadURL } from 'firebase/storage';

const storage = getStorage(); // Initialize Firebase Storage

// Function to get Firebase Storage URL
const getStorageUrl = async (path) => {
  const storageReference = storageRef(storage, path);
  const url = await getDownloadURL(storageReference);
  return url;
};

onBeforeMount(() => {
  window.scrollTo(0, 0); // Scrolls to the top of the page
});

let vidPackages = ref([]);
let photoPackages = ref([]);

const getPackages = async () => {
  try {
    const db = getFirestore();
    const vidPackagesCol = doc(db, 'PackageDescriptions', 'WeddingVideography');
    const vidPackagesDoc = await getDoc(vidPackagesCol);
    const photoPackagesCol = doc(db, 'PackageDescriptions', 'WeddingPhotography');
    const photoPackagesDoc = await getDoc(photoPackagesCol);

    // Check if the document exists before trying to access its data
    if (vidPackagesDoc.exists() && photoPackagesDoc.exists()) {
      // get each document in the collection and push to the personalpackages array
      const vidPackagesData = vidPackagesDoc.data();
      const photoPackagesData = photoPackagesDoc.data();

      // Convert the Proxy object to a plain JavaScript object
      const vidPackagesObject = JSON.parse(JSON.stringify(vidPackagesData));
      const photoPackagesObject = JSON.parse(JSON.stringify(photoPackagesData));

      // Extract values (packages) as an array
      vidPackages.value = Object.values(vidPackagesObject);
      photoPackages.value = Object.values(photoPackagesObject);

      // sort personalPackages by price, price is a string with a $ in front
      vidPackages.value.sort((a, b) => {
        return a.price.slice(1) - b.price.slice(1);
      });
      photoPackages.value.sort((a, b) => {
        return a.price.slice(1) - b.price.slice(1);
      });

    } else {
      console.error('Document does not exist');
    }
  } catch (error) {
    console.error('Error fetching packages:', error);
  }
}

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


const loading = ref(true);

// Fetch Firebase Storage URLs for slides
onMounted(async () => {
  await getPackages();

  try {
    // Get the Firebase Storage URL for each package
    for (const pack of vidPackages.value) {
      pack.url = await getStorageUrl(pack.image);
      // create a new key: value pair for the image url in each package object, it should be called 'url'
    }

    for (const pack of photoPackages.value) {
      pack.url = await getStorageUrl(pack.image);
      // create a new key: value pair for the image url in each package object, it should be called 'url'
    }


    loading.value = false; // Set loading to false after thumbnails are loaded
  } catch (error) {
    console.error('Error fetching storage URLs:', error);
  }
});

</script>

<template>
  <div class="page-container">
    <div class="heading">
      <div class="background"></div>
      <h1 class="title">Our Wedding Offerings</h1>
      <p class="subtitle">Experience the magic of your wedding day through our cinematic storytelling. Our team blends
        creativity with professionalism, ensuring every moment is beautifully preserved for you to relive.</p>
    </div>

    <div v-if="!loading" class="package-section video-packages">
      <h2 class="section-title">Videography Packages</h2>
      <p class="section-description">
        Discover a range of thoughtfully curated packages that resonate with your desires. Should you find any package not
        quite hitting the mark, don't hesitate to ask about our extra enhancements. We're here to make your unique
        requests a reality and create the perfect package just for you!
      </p>
      <div class="package-cards">
        <div v-for="(pack, index) in vidPackages" :key="index" class="package-card">
          <div class="card-content">
            <img loading="lazy" :src="pack.url" alt="Package Image" class="package-image">
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
    <div v-else>
      <!-- Loading indicator or message -->
      Loading...
    </div>

    <div class="gap"></div>

    <div v-if="!loading" class="package-section photo-packages">
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
            <img loading="lazy" :src="pack.url" alt="Package Image" class="package-image">
            <h3 class="package-name">{{ pack.name }}</h3>
            <div class="price">{{ pack.price }}</div>
            <ul class="description">
              <li v-for="(point, idx) in pack.description" :key="idx">{{ point }}</li>
            </ul>
            <div class="card-footer">
              <button class="book-now-button" @click="redirectToContact('Wedding Photography', pack.name)">Book
                Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <!-- Loading indicator or message -->
      Loading...
    </div>
  </div>
</template>

<style scoped>
.page-container {
  padding-top: 50px;
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