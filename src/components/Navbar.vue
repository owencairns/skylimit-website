<script setup lang="ts">
import { ref } from 'vue';

let scroll = ref(false)
let mobileNavActive = ref(false)

window.addEventListener('scroll', function () {
    if (this.window.scrollY > 0) {
        scroll.value = true
    }
    else {
        scroll.value = false
    }
})

const hideMobileNav = () => {
    mobileNavActive.value = false;
};

</script>

<template>
    <header :class="{ sticky: scroll }">
        <nav class="nav-container">
            <div class="branding">
                <router-link to="/" class="logo" @click="hideMobileNav">
                    <img src="/img/logo-home/slv-logo-icon.png" />
                </router-link>
                <img src="/img/logo-home/skylimit-oneline.svg" class="logo-name">
            </div>
            <!-- Mobile Navigation Icon -->
            <div class="mobile-nav-icon" :class="{ active: mobileNavActive }" @click="mobileNavActive = !mobileNavActive">
                <div class="bar"></div>
                <div class="bar"></div>
            </div>
            <!-- Navigation Links -->
            <ul :class="{ 'mobile-nav-active': mobileNavActive }" class="navigation">
                <li><router-link to="/" class="link" @click="hideMobileNav">Home</router-link></li>
                <li class="dropdown link">
                    <router-link to="/packages" class="link" :class="{'dropbtn' : !mobileNavActive}" @click="hideMobileNav">Services</router-link>
                    <div v-if="!mobileNavActive" class="dropdown-content">
                        <router-link to="/packages/weddings" class="dropdown-link">Weddings</router-link>
                        <router-link to="/packages/personal" class="dropdown-link">Personal</router-link>
                        <router-link to="/packages/commercial" class="dropdown-link">Commercial</router-link>
                    </div>
                </li>
                <li><router-link to="/portfolio" class="link" @click="hideMobileNav">Portfolio</router-link></li>
                <li class="contact-button"><router-link to="/contact" class="link contact-link"
                        @click="hideMobileNav">Contact</router-link></li>
            </ul>
        </nav>
    </header>
</template>
 
<style scoped>
body {
    font-weight: 500;
}

header {
    background-color: transparent;
    z-index: 99;
    width: 100%;
    position: fixed;
    transition: 0.5s ease all;
    top: 0;
    left: 0;
    background-color: #1d3051;
}

.nav-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto;
}

.sticky .link {
    color: #fff;
    font-weight: 400;
    font-size: 13px;
    padding-bottom: 4px;
}

.sticky .branding .logo img {
    height: 50px;
}

.sticky .link:hover {
    color: #F6D7B6;
}

ul,
.link {
    font-weight: 600;
    color: #fff;
    list-style: none;
    text-decoration: none;
    font-size: 14px;
    transition: 0.5s ease all;
    padding-bottom: 4px;
}

.router-link-active {
    color: #F6D7B6;
    cursor: default;
}

.sticky .router-link-active {
    color: #F6D7B6;
}

li {
    text-transform: uppercase;
    padding: 4px;
    margin-left: 16px;
}

.link:hover {
    color: #F6D7B6;
    border-color: #F6D7B6;
}

.branding {
    display: flex;
    align-items: center;
}

.branding .logo img {
    height: 65px;
    padding-top: 5px;
    width: auto;
    transition: 0.5s ease all;
    margin-right: 10px;
}

.branding .logo-name {
    height: 20px;
    width: auto;
    padding-bottom: 10px;
}

.navigation {
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: flex-end;
}

.dropbtn {
    color: #fff;
    text-decoration: none;
}

.dropbtn:hover {
    color: #F6D7B6;
}

.dropbtn:after {
    content: "";
    display: inline-block;
    margin-left: 5px;
    width: 0;
    height: 0;
    vertical-align: middle;
    border-top: 4px solid #fff;
    border-right: 4px solid transparent;
    border-bottom: 0;
    border-left: 4px solid transparent;
    transition: transform 0.3s ease;
}

.dropdown:hover .dropbtn:after {
    transform: rotate(180deg);
}

.dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-content {
    opacity: 0;
    font-weight: 400;
    font-size: 0.8rem;
    display: block;
    position: absolute;
    background-color: #1d3051;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.6);
    z-index: 1;
    left: 0;
    top: 100%;
    transition: 0.4s ease all;
}

.dropdown:hover .dropdown-content {
    opacity: 1;
}

.dropdown-link {
    display: block;
    padding: 8px;
    color: #fff;
    text-decoration: none;
    transition: 0.5s ease all;
}

.dropdown-link:hover {
    background-color: #F6D7B6;
}

/* Media query for mobile devices */
@media (max-width: 802px) {
    .branding .logo img {
        height: 50px;
    }

    .navigation {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: fixed;
        top: 0;
        right: -100%;
        width: 50%;
        height: 100%;
        background-color: #1d3051;
        z-index: -1;
        padding: 0;
        margin: 0;
        list-style: none;
    }

    .navigation li {
        margin: 20px 0;
    }

    .navigation li a {
        font-size: 18px;
        color: #fff;
        text-decoration: none;
        transition: color 0.3s ease;
    }

    .router-link-active {
        color: #F6D7B6;
        cursor: default;
    }

    .mobile-nav-icon {
        display: block;
        cursor: pointer;
        padding-right: 20px;
        z-index: 999;
        padding-bottom: 8px;
    }

    .contact-link {
        color: #1d3051;
    }

    .bar {
        width: 25px;
        height: 3px;
        background-color: #fff;
        margin: 5px 0;
        transition: 0.2s ease all;
    }

    .mobile-nav-active {
        right: 0;
    }

    .mobile-nav-icon.active .bar:nth-child(1) {
        transform: translateY(3.5px) rotate(45deg);
    }

    .mobile-nav-icon.active .bar:nth-child(2) {
        transform: translateY(-3.5px) rotate(-45deg);
    }

    .sticky .link {
        font-weight: 600;
        font-size: 14px;
    }

    .dropbtn:after {
        display: none;
    }

    .dropdown-content {
        z-index: -999;
        opacity: 0;
    }
}
</style>
