import { createApp } from "vue";
import { createRouter, createWebHistory } from 'vue-router';
import "./style.css";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'

import VuePlyr from 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css'

/* add icons to the library */
library.add(faTimes, faInstagram, faFacebook)

import App from "./App.vue";
import Home from './components/Home.vue'
import Contact from './components/Contact.vue'
import Packages from './components/packages.vue'
import PackagesLanding from './components/packagesLanding.vue'
import WeddingPackages from './components/WeddingPackages.vue'
import CommercialPackages from './components/CommercialPackages.vue'
import PersonalPackages from './components/PersonalPackages.vue'
import Portfolio from './components/portfolio.vue'
import PortfolioLanding from './components/portfolioLanding.vue'
import WeddingPortfolio from './components/WeddingPortfolio.vue'
import PersonalPortfolio from './components/PersonalPortfolio.vue'
import CommercialPortfolio from './components/CommercialPortfolio.vue'
import Admin from './components/Admin.vue'
import Login from './components/Login.vue'

import scrollanimation from "./directives/scrollanimation";

import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebaseConfig'
import { getAnalytics } from "firebase/analytics";
import { getPerformance } from "firebase/performance";

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/admin',
        name: 'admin',
        component: Admin,
        meta: { requiresAuth: true }
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/packages',
        component: Packages,
        children: [
            {
                path: '',
                component: PackagesLanding,
            },
            {
                path: 'weddings',
                component: WeddingPackages,
            },
            {
                path: 'commercial',
                component: CommercialPackages,
            },
            {
                path: 'personal',
                component: PersonalPackages,
            },
        ],
    },
    {
        path: '/portfolio',
        component: Portfolio,
        children: [
            {
                path: '',
                component: PortfolioLanding,
            },
            {
                path: 'weddings',
                component: WeddingPortfolio,
            },
            {
                path: 'personal',
                component: PersonalPortfolio,
            },
            {
                path: 'commercial',
                component: CommercialPortfolio,
            },
        ],
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firebase Analytics and Performance instances
const analytics = getAnalytics(app);
const performance = getPerformance(app);

createApp(App)
    .directive('scrollanimation', scrollanimation)
    .component("font-awesome-icon", FontAwesomeIcon)
    .use(router)
    .use(VuePlyr, {
        plyr: {}
    })
    .use(analytics)
    .use(performance)
    .mount("#app");