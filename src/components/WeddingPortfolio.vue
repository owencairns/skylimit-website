<script setup>
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

const slides = [
    {
        id: 1,
        thumbnail: '/img/weddings/wedport1.jpg',
        title: 'Wedding 1'
    },
    {
        id: 2,
        thumbnail: '/img/weddings/wedport2.JPG',
        title: 'Wedding 2'
    },
    {
        id: 3,
        thumbnail: '/img/weddings/wedport3.JPG',
        title: 'Wedding 3'
    },
    {
        id: 4,
        thumbnail: '/img/weddings/wedport4.JPG',
        title: 'Wedding 4'
    },
    {
        id: 5,
        thumbnail: '/img/weddings/wedport5.JPG',
        title: 'Wedding 5'
    },
    {
        id: 6,
        thumbnail: '/img/weddings/wedport6.JPG',
        title: 'Wedding 6'
    },
];

const gallery = [
    {
        id: 1,
        thumbnail: '/img/weddings/wedport1.jpg',
        title: 'The Weilers'
    },
    {
        id: 2,
        thumbnail: '/img/weddings/MeganRiley.png',
        title: 'Megan and Riley'
    },
    {
        id: 3,
        thumbnail: '/img/weddings/NikEmily.png',
        title: 'Nik and Emily'
    },
    {
        id: 4,
        thumbnail: '/img/weddings/MarissaBrandon.png',
        title: 'Marissa and Brandon'
    },
    {
        id: 5,
        thumbnail: '/img/weddings/EmilyBrandon.png',
        title: 'Emily and Brandon'
    },
    {
        id: 6,
        thumbnail: '/img/weddings/ErinBrad.png',
        title: 'Erin and Brad'
    },
];

//photo gallery for 12 photos
const photoGallery = [
    {
        id: 1,
        thumbnail: '/img/weddings/wedphoto1.jpeg',
    },
    {
        id: 2,
        thumbnail: '/img/weddings/wedphoto2.jpeg',
    },
    {
        id: 3,
        thumbnail: '/img/weddings/wedphoto3.jpeg',
    },
    {
        id: 4,
        thumbnail: '/img/weddings/wedphoto4.jpeg',
    },
    {
        id: 5,
        thumbnail: '/img/weddings/wedphoto5.jpeg',
    },
    {
        id: 6,
        thumbnail: '/img/weddings/wedphoto6.jpeg',
    },
    {
        id: 7,
        thumbnail: '/img/weddings/wedphoto7.jpeg',
    },
    {
        id: 8,
        thumbnail: '/img/weddings/wedphoto8.jpeg',
    },
    {
        id: 9,
        thumbnail: '/img/weddings/wedphoto9.jpeg',
    },
    {
        id: 10,
        thumbnail: '/img/weddings/wedphoto10.jpeg',
    },
    {
        id: 11,
        thumbnail: '/img/weddings/wedphoto11.jpeg',
    },
    {
        id: 12,
        thumbnail: '/img/weddings/wedphoto12.jpeg',
    }
];

</script>


<template>
    <div class="content-container">
        <h1 class="weddings-title">Wedding Gallery</h1>

        <swiper-container navigation="true" effect="coverflow" loop="true" autoplay-delay="2000" initialSlide="1"
            :slidesPerView="'auto'" :centeredSlides="true" :spaceBetween="-50" :pagination="{
                clickable: true,
            }" :coverflowEffect="{
    depth: 0,
    rotate: 5,
    scale: .90,
}">
            <swiper-slide v-for="slide in slides" :key="slide.id">
                <div class="slide-wrapper">
                    <img :src="slide.thumbnail" :alt="'slide' + slide.id" class="slide-image" />
                </div>
            </swiper-slide>
        </swiper-container>

        <section class="favorites-section video">
            <h2>Wedding Videography</h2>
            <div class="grid-container">
                <div class="grid-item" v-for="item in gallery" :key="item.id">
                    <img :src="item.thumbnail" :alt="item.title" class="grid-image" />
                    <div class="image-description">{{ item.title }}</div>
                </div>
            </div>
        </section>

        <section class="favorites-section photo">
            <h2>Wedding Photography</h2>
            <div class="grid-container">
                <div class="grid-item" v-for="item in photoGallery" :key="item.id">
                    <img :src="item.thumbnail" :alt="item.title" class="grid-image" />
                    <div class="image-description">{{ item.title }}</div>
                </div>
            </div>
        </section>
    </div>

    <div class="bottom-logo">
        <img src="/img/logo-home/Blue-letters-logo.svg" alt="" class="slv-white-logo">
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
    width: 100%;
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

@media (min-width: 768px) {

    /* 3 items per row for medium and larger screens */
    .grid-container {
        grid-template-columns: repeat(auto-fill, minmax(25vw, 1fr));
    }
}

@media (max-width: 767px) {

    /* 2 items per row for smaller screens */
    .grid-container {
        grid-template-columns: repeat(auto-fill, minmax(33.33%, 1fr));
    }
}

@media (max-width: 480px) {

    swiper-container {
        height: 60vh;
    }

    .grid-container {
        grid-template-columns: repeat(1, 1fr);
    }
}
</style>
  