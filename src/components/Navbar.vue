<script setup lang="ts">
import { onMounted, ref, Ref } from 'vue';

let mobile = false
let scroll = ref(false)

window.addEventListener('scroll', function() {
    if (this.window.scrollY > 0) {
        scroll.value = true
    }
    else {
        scroll.value = false
    }
})

</script>

<template>
  <header :class="{ sticky: scroll }">
    <nav>
        <div class="branding">
            <router-link to="/" class="logo"><img src="../assets/slv-logo-icon .png" /></router-link>
        </div>
        <ul v-show="!mobile" class="navigation">
            <li><router-link to="/" class="link">Home</router-link></li>
            <li><router-link to="/portfolio" class="link">Portfolio</router-link></li>
            <li><router-link to="/about" class="link">About</router-link></li>
            <li class="contact-button"><router-link to="/contact" class="link">Contact</router-link></li>
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
}

nav {
    position: relative;
    display: flex;
    flex-direction: row;
    padding: 0 0;
    transition: 0.5s ease all;
    width: 90%;
    margin: 0 auto;
}

header.sticky {
    background-color: #1d3051;
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
    color: #1d3051;
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
    padding: 8px;
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
}

.navigation {
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: flex-end;
}

</style>
