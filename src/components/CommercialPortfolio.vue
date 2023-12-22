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
        thumbnail: '/img/comport1.webp',
        title: 'Commercial Image 1'
    },
    {
        id: 2,
        thumbnail: '/img/comport2.webp',
        title: 'Commercial Image 2'
    },
    {
        id: 3,
        thumbnail: '/img/comport3.webp',
        title: 'Commercial Image 3'
    },
    {
        id: 4,
        thumbnail: '/img/comport4.webp',
        title: 'Commercial Image 4'
    },
    {
        id: 5,
        thumbnail: '/img/comport5.webp',
        title: 'Commercial Image 5'
    },
    {
        id: 6,
        thumbnail: '/img/comport6.webp',
        title: 'Commercial Image 6'
    },
    {
        id: 7,
        thumbnail: '/img/comport7.webp',
        title: 'Commercial Image 7'
    },
];

let gallery = [
    {
        id: 1,
        thumbnail: '/img/comvid4.webp',
        title: 'Quickwater Coffee',
        path: '/img/QuickwaterCoffee.mp4'
    },
    {
        id: 2,
        thumbnail: '/img/comvid3.webp',
        title: 'Pop Daddy Pretzels',
        path: '/img/PopDaddy.mp4'
    },
    {
        id: 3,
        thumbnail: '/img/comvid1.webp',
        title: 'Praire Bells Barn Event',
        path: '/img/PraireBellsEvent.mp4'
    },
    {
        id: 4,
        thumbnail: '/img/comvid2.webp',
        title: 'Jory Strong Event',
        path: '/img/JoryStrongEvent.mp4'
    },
];

const loading = ref(true);

// Fetch Firebase Storage URLs for slides
onMounted(async () => {
    try {
        const slidePromises = slides.map(async (slide) => {
            slide.thumbnail = await getStorageUrl(slide.thumbnail);
        });

        const galleryPromises = gallery.map(async (item) => {
            item.thumbnail = await getStorageUrl(item.thumbnail);
        });
        await Promise.all([...slidePromises, ...galleryPromises]);

        loading.value = false; // Set loading to false after thumbnails are loaded
    } catch (error) {
        console.error('Error fetching storage URLs:', error);
    }
});

const activeVideo = ref(null);

const loadVideo = (item) => {
    activeVideo.value = item.id;
};
</script>


<template>
    <div v-if="!loading" class="content-container">
        <h1 class="commercial-title">Commercial Media Gallery</h1>

        <Swiper class="swiper-container" :loop="true" :slides-per-view="'auto'"
            :autoplay="{ delay: 2000, disableOnInteraction: false }">
            <SwiperSlide class="swiper-slide" v-for="slide in slides" :key="slide.id">
                <img :src="slide.thumbnail" :alt="'slide' + slide.id" class="slide-image" />
            </SwiperSlide>
        </Swiper>

        <section class="favorites-section">
            <h2>Our Favorites</h2>
            <div class="grid-container">
                <div class="grid-item" v-for="item in gallery" :key="item.id" @click="loadVideo(item)">
                    <img v-if="!activeVideo || activeVideo !== item.id" :src="item.thumbnail" class="grid-image" />
                    <div v-if="activeVideo === item.id">
                        <vue-plyr class="grid-image"
                            :options="{ controls: ['play', 'progress', 'current-time', 'mute', 'fullscreen'] }">
                            <video controls>
                                <source :src="item.path" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </vue-plyr>
                        <div class="image-description">{{ item.title }}</div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <div v-else>
        <!-- Loading indicator or message -->
        Loading...
    </div>

    <div class="bottom-logo">
        <img loading="lazy" src="/img/Blue-letters-logo.svg" alt="" class="slv-white-logo">
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

.commercial-title {
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
    width: 90%;
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

/* Add this style to hide the placeholder image when video is active */

.grid-item:hover {
    transform: scale(1.05);
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
}

.grid-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
    border-radius: 8px;
}

.image-description {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.9);
    color: #1d3051;
    font-weight: bold;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    transform: translateY(-100%);
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

@media (min-width: 768px) {

    /* 4 items per row for larger screens */
    .grid-container {
        grid-template-columns: repeat(auto-fill, minmax(20%, 1fr));
    }
}

@media (min-width: 480px) and (max-width: 768px) {

    .commercial-title {
        font-size: 4rem;
    }

    /* 2 items per row for smaller screens */
    .grid-container {
        grid-template-columns: repeat(auto-fill, minmax(33.33%, 1fr));
        row-gap: 25px;
    }
}

@media (max-width: 480px) {

    .commercial-title {
        font-size: 3rem;
    }

    /* 1 item per row for narrowest screens */
    .grid-container {
        grid-template-columns: repeat(1, 1fr);
        row-gap: 25px;
    }
}
</style>
  