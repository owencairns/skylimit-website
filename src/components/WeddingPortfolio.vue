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
        thumbnail: '/img/wedport1.webp',
        title: 'Wedding 1'
    },
    {
        id: 2,
        thumbnail: '/img/wedport2.webp',
        title: 'Wedding 2'
    },
    {
        id: 3,
        thumbnail: '/img/wedport3.webp',
        title: 'Wedding 3'
    },
    {
        id: 4,
        thumbnail: '/img/wedport2.webp',
        title: 'Wedding 4'
    },
    {
        id: 5,
        thumbnail: '/img/wedport5.webp',
        title: 'Wedding 5'
    },
    {
        id: 6,
        thumbnail: '/img/wedport6.webp',
        title: 'Wedding 6'
    },
];

let videoGallery = [
    {
        id: 0,
        thumbnail: '/img/WedThumb6.webp',
        path: 'G8Etzk8wRTc?si=b5vxiLXOsRDhu1lq',
    },
    {
        id: 1,
        thumbnail: '/img/WedThumb4.webp',
        path: 'V4YQPr5Js6M?si=oUTbueJG8T0HyLSm'
    },
    {
        id: 2,
        thumbnail: '/img/WedThumb3.webp',
        path: 'ic2LcPzceBc?si=J93yWaFpfyDAP-39'
    },
    {
        id: 3,
        thumbnail: '/img/WedThumb2.webp',
        path: 'o3Yw0cOBOEM?si=ikvPdc5Le8SU06wX'
    },
    {
        id: 4,
        thumbnail: '/img/WedThumb1.webp',
        path: '8rGu1kEfBdU?si=UrFvvQu_XTyx-PCS'
    },
    {
        id: 5,
        thumbnail: '/img/WedThumb5.webp',
        path: 'hT2h86be1o8?si=n2fH7LXi19j7UC0e'
    },
];

let photoGallery = [
    {
        id: 1,
        thumbnail: '/img/wedphoto1.webp',
    },
    {
        id: 2,
        thumbnail: '/img/wedphoto2.webp',
    },
    {
        id: 3,
        thumbnail: '/img/wedphoto3.webp',
    },
    {
        id: 4,
        thumbnail: '/img/wedphoto4.webp',
    },
    {
        id: 5,
        thumbnail: '/img/wedphoto5.webp',
    },
    {
        id: 6,
        thumbnail: '/img/wedphoto6.webp',
    },
    {
        id: 7,
        thumbnail: '/img/wedphoto7.webp',
    },
    {
        id: 8,
        thumbnail: '/img/wedphoto8.webp',
    },
    {
        id: 9,
        thumbnail: '/img/wedphoto9.webp',
    },
    {
        id: 10,
        thumbnail: '/img/wedphoto10.webp',
    },
    {
        id: 11,
        thumbnail: '/img/wedphoto11.webp',
    },
    {
        id: 12,
        thumbnail: '/img/wedphoto12.webp',
    }
];

//combine all images and videos into one array, just grab thumbnail
const wedPortImages = slides.concat(videoGallery).concat(photoGallery).map((item) => {
    return item.thumbnail;
});

const wedVidLinks = videoGallery.map((item) => {
    return item.path;
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

        const vidGalleryPromises = videoGallery.map(async (item) => {
            item.thumbnail = await getStorageUrl(item.thumbnail);
        });

        await Promise.all([...slidePromises, ...galleryPromises, ...vidGalleryPromises]);

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
        <!-- Overlay the title on the Swiper component -->
        <h1 class="weddings-title">Wedding Gallery</h1>
        <Swiper class="swiper-container" :loop="true" :slides-per-view="'auto'"
            :autoplay="{ delay: 2000, disableOnInteraction: false }">
            <SwiperSlide class="swiper-slide" v-for="slide in slides" :key="slide.id">
                <img :src="slide.thumbnail" :alt="'slide' + slide.id" class="slide-image" />
            </SwiperSlide>
        </Swiper>

        <section class="favorites-section video">
            <h2>Wedding Videography</h2>
            <div class="grid-container video">
                <div class="grid-item" v-for="item in videoGallery" :key="item.id" @click="loadVideo(item)">
                    <img loading="lazy" class="grid-image grid-image16x9" v-if="activeVideo !== item.id"
                        :src="item.thumbnail" />
                    <div v-if="activeVideo === item.id">
                        <vue-plyr :options="{
                            controls: ['play', 'progress', 'current-time', 'mute', 'fullscreen'],
                            fullscreen: { enabled: true, fallback: true, iosNative: true },
                        }">
                            <div class="plyr__video-embed" id="player">
                                <iframe
                                    :src="'https://www.youtube.com/embed/' + item.path + '?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1'"
                                    allowfullscreen allowtransparency allow="autoplay"
                                    :poster="item.thumbnail"></iframe>
                            </div>
                        </vue-plyr>
                        <div class="image-description">{{ item.title }}</div>
                    </div>
                </div>
            </div>
        </section>

        <section class="favorites-section photo">
            <h2>Wedding Photography</h2>
            <div class="grid-container">
                <div class="grid-item" v-for="item in photoGallery" :key="item.id">
                    <img loading="lazy" :src="item.thumbnail" :alt="item.title" class="grid-image" />
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

.weddings-title {
    color: #fff;
    text-shadow: #00000068 0px 0px 10px;
    font-size: 7rem;
    font-weight: bolder;
    position: absolute;
    margin-top: 100px;
    text-transform: uppercase;
    /* Capitalize the title */
    z-index: 1;
    /* Place the title above other elements */
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
    grid-gap: 15px;
}

.grid-container.video {
    grid-template-columns: repeat(auto-fill, minmax(33.33%, 1fr));
    column-gap: 25px;
    row-gap: 25px;
}

.grid-item {
    position: relative;
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

@media (min-width: 480px) and (max-width: 1200px) {
    .weddings-title {
        font-size: 5rem;
    }
}

@media (max-width: 480px) {

    .weddings-title {
        font-size: 3rem;
    }

    .grid-container {
        grid-template-columns: repeat(1, 1fr);
        row-gap: 25px;
    }

    .grid-container.video {
        grid-template-columns: repeat(1, 1fr);
    }
}
</style>