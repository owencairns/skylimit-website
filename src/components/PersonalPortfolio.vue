<script setup>
import { ref, onBeforeMount, onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
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

let slides = [
    {
        id: 1,
        thumbnail: '/img/personalport8.webp',
        title: 'Personal 1'
    },
    {
        id: 2,
        thumbnail: '/img/personalport15.webp',
        title: 'Personal 2'
    },
    {
        id: 3,
        thumbnail: '/img/personalport2.webp',
        title: 'Personal 3'
    },
    {
        id: 4,
        thumbnail: '/img/personalport5.webp',
        title: 'Personal 4'
    },
    {
        id: 5,
        thumbnail: '/img/personalport7.webp',
        title: 'Personal 5'
    },
    {
        id: 6,
        thumbnail: '/img/personalport13.webp',
        title: 'Personal 6'
    },
];

//photo gallery for 15 photos
let photoGallery = [
    {
        id: 1,
        thumbnail: '/img/personalport1.webp',
    },
    {
        id: 2,
        thumbnail: '/img/personalport2.webp',
    },
    {
        id: 3,
        thumbnail: '/img/personalport3.webp',
    },
    {
        id: 4,
        thumbnail: '/img/personalport4.webp',
    },
    {
        id: 5,
        thumbnail: '/img/personalport5.webp',
    },
    {
        id: 6,
        thumbnail: '/img/personalport6.webp',
    },
    {
        id: 7,
        thumbnail: '/img/personalport7.webp',
    },
    {
        id: 8,
        thumbnail: '/img/personalport8.webp',
    },
    {
        id: 9,
        thumbnail: '/img/personalport9.webp',
    },
    {
        id: 10,
        thumbnail: '/img/personalport10.webp',
    },
    {
        id: 11,
        thumbnail: '/img/personalport11.webp',
    },
    {
        id: 12,
        thumbnail: '/img/personalport12.webp',
    },
    {
        id: 13,
        thumbnail: '/img/personalport13.webp',
    },
    {
        id: 14,
        thumbnail: '/img/personalport14.webp',
    },
    {
        id: 15,
        thumbnail: '/img/personalport15.webp',
    },
];

//combine all images and videos into one array, just grab thumbnail
const personalPortImages = slides.concat(photoGallery).map((item) => {
    return item.thumbnail;
});

const loading = ref(true);

// Fetch Firebase Storage URLs for slides
onMounted(async () => {
    try {
        const slidePromises = slides.map(async (slide) => {
            slide.thumbnail = await getStorageUrl(slide.thumbnail);
        });

        const galleryPromises = photoGallery.map(async (item) => {
            item.thumbnail = await getStorageUrl(item.thumbnail);
        });

        await Promise.all([...slidePromises, ...galleryPromises]);

        loading.value = false; // Set loading to false after thumbnails are loaded
    } catch (error) {
        console.error('Error fetching storage URLs:', error);
    }
});

</script>


<template>
    <div v-if="!loading" class="content-container">
        <h1 class="personal-title">Personal Photography Gallery</h1>

        <Swiper class="swiper-container" :loop="true" :slides-per-view="'auto'"
            :autoplay="{ delay: 2000, disableOnInteraction: false }">
            <SwiperSlide class="swiper-slide" v-for="slide in slides" :key="slide.id">
                <img :src="slide.thumbnail" :alt="'slide' + slide.id" class="slide-image" />
            </SwiperSlide>
        </Swiper>

        <section class="favorites-section photo">
            <h2>Our Favorites</h2>
            <div class="grid-container">
                <div class="grid-item" v-for="item in photoGallery" :key="item.id">
                    <img loading="lazy" :src="item.thumbnail" :alt="item.title" class="grid-image" />
                    <div class="image-description">{{ item.title }}</div>
                </div>
            </div>
        </section>
    </div>
    <div v-else>
        <!-- Loading indicator or message -->
        Loading...
    </div>

    <div class="bottom-logo">
        <img loading="lazy" src="/img/Blue-letters-logo.svg" alt="SLV Logo" class="slv-white-logo" />
    </div>
</template>
  
<style scoped>
.content-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
    padding-bottom: 100px;
    text-align: center;
    color: #1d3051;
}

.personal-title {
    color: #fff;
    text-shadow: #00000068 0px 0px 10px;
    font-size: 5rem;
    font-weight: bolder;
    position: absolute;
    margin-top: 100px;
    text-transform: uppercase;
    z-index: 1;
}

.swiper-container {
    z-index: 0;
    width: 100%;
    height: 400px;
    overflow: hidden;
}

.slide-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
}

.swiper-wrapper {
    width: 50%;
}

.swiper-slide {
    text-align: center;
    width: auto;
}

.slide-image {
    height: 400px;
    width: auto;
}

.favorites-section {
    text-align: center;
    padding: 50px 5%;
}

.favorites-section h2 {
    font-size: 2rem;
    font-weight: 400;
    padding-bottom: 20px;
    color: #1d3051;
}

.grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(25vw, 1fr));
    grid-auto-rows: minmax(250px, auto);
    grid-gap: 15px;
}

.grid-item {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.video .grid-item:hover {
    transform: scale(1.05);
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
}

.grid-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
}

.video .image-description {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.9);
    color: #1d3051;
    font-weight: bold;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    transform: translateY(100%);
    transition: transform 0.3s ease;
}

.grid-item:hover .image-description {
    transform: translateY(0);
}

.grid-container {
    display: grid;
    grid-gap: 1vw;
}

.bottom-logo {
    position: relative;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    /* Center the logo horizontally */
    padding-bottom: 100px;
    width: 80%;
    /* Take full width of the container */
    text-align: center;
}

@media (max-width: 1100px) {

    .personal-title {
        font-size: 4rem;
    }
}

@media (min-width: 768px) {

    /* 3 items per row for medium and larger screens */
    .grid-container {
        grid-template-columns: repeat(auto-fill, minmax(25vw, 1fr));
    }
}

@media (min-width: 480px) and (max-width: 767px) {

    /* 2 items per row for smaller screens */
    .personal-title {
        font-size: 3.75rem;
    }

    .grid-container {
        grid-template-columns: repeat(auto-fill, minmax(33.33%, 1fr));
    }
}

@media (max-width: 480px) {

    .personal-title {
        font-size: 3rem;
    }

    .grid-container {
        grid-template-columns: repeat(1, 1fr);
    }
}
</style>
  