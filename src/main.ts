import { createApp } from "vue";
import { createRouter, createWebHashHistory } from 'vue-router';
import { MotionPlugin } from '@vueuse/motion'
import "./style.css";

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
/* add icons to the library */
library.add(faTimes, faInstagram, faFacebook)

import App from "./App.vue";
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import SignUp from './components/SignUp.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'

const myComponentRoutes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/signup', component: SignUp },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
   ];
const router = createRouter({ routes: myComponentRoutes, history: createWebHashHistory() });

createApp(App).use(MotionPlugin).component("font-awesome-icon", FontAwesomeIcon).use(router).mount("#app");
