<script setup>
import { ref, onBeforeMount } from 'vue';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

onBeforeMount(() => {
  window.scrollTo(0, 0); // Scrolls to the top of the page
});

const slides = [
    {
        id: 1,
        thumbnail: '/img/commercial/comport1.webp',
        title: 'Commercial Image 1'
    },
    {
        id: 2,
        thumbnail: '/img/commercial/comport2.webp',
        title: 'Commercial Image 2'
    },
    {
        id: 3,
        thumbnail: '/img/commercial/comport3.webp',
        title: 'Commercial Image 3'
    },
    {
        id: 4,
        thumbnail: '/img/commercial/comport4.webp',
        title: 'Commercial Image 4'
    },
    {
        id: 5,
        thumbnail: '/img/commercial/comport5.webp',
        title: 'Commercial Image 5'
    },
    {
        id: 6,
        thumbnail: '/img/commercial/comport6.webp',
        title: 'Commercial Image 6'
    },
    {
        id: 7,
        thumbnail: '/img/commercial/comport7.webp',
        title: 'Commercial Image 7'
    },
];

const gallery = [
    {
        id: 1,
        thumbnail: '/img/commercial/comvid4.webp',
        title: 'Quickwater Coffee',
        path: '/img/commercial/QuickwaterCoffee.mp4'
    },
    {
        id: 2,
        thumbnail: '/img/commercial/comvid3.webp',
        title: 'Pop Daddy Pretzels',
        path: '/img/commercial/PopDaddy.mp4'
    },
    {
        id: 3,
        thumbnail: '/img/commercial/comvid1.webp',
        title: 'Praire Bells Barn Event',
        path: '/img/commercial/PraireBellsEvent.mp4'
    },
    {
        id: 4,
        thumbnail: '/img/commercial/comvid2.webp',
        title: 'Jory Strong Event',
        path: '/img/commercial/JoryStrongEvent.mp4'
    },
];

const activeVideo = ref(null);

const loadVideo = (item) => {
    activeVideo.value = item.id;
};

</script>


<template>
    <div class="content-container">
        <h1 class="weddings-title">Commercial Media Gallery</h1>

        <swiper-container navigation="true" effect="coverflow" loop="true" autoplay-delay="2000" initialSlide="2"
            :slidesPerView="'auto'" :centeredSlides="true" :spaceBetween="-50" :pagination="{
                clickable: true,
            }" :coverflowEffect="{
    depth: 0,
    rotate: 5,
    scale: .95,
}">
            <swiper-slide v-for="slide in slides" :key="slide.id">
                <div class="slide-wrapper">
                    <img loading="lazy" :src="slide.thumbnail" :alt="'slide' + slide.id" class="slide-image" />
                </div>
            </swiper-slide>
        </swiper-container>

        <section class="favorites-section">
            <h2>Our Favorites</h2>
            <div class="grid-container">
                <div class="grid-item" v-for="item in gallery" :key="item.id" @click="loadVideo(item)">
                    <img loading="lazy" class="grid-image" v-if="activeVideo !== item.id" :src="item.thumbnail" />
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

    <div class="bottom-logo">
        <img loading="lazy" src="/img/logo-home/Blue-letters-logo.svg" alt="" class="slv-white-logo">
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
    font-size: 3rem;
    font-weight: 400;
    margin-bottom: 20px;
}

swiper-container {
    height: 600px;
}

swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
    height: 100%;
    overflow: hidden;
}

.slide-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
}

.slide-image {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
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

    /* 2 items per row for smaller screens */
    .grid-container {
        grid-template-columns: repeat(auto-fill, minmax(33.33%, 1fr));
        row-gap: 25px;
    }
}

@media (max-width: 480px) {

    /* 1 item per row for narrowest screens */
    .grid-container {
        grid-template-columns: repeat(1, 1fr);
        row-gap: 25px;
    }
}
</style>
  