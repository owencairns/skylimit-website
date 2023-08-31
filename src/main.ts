import { createApp, Directive } from "vue";
import { createRouter, createWebHistory } from 'vue-router';
import "./style.css";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faTimes, faInstagram, faFacebook)

import App from "./App.vue";
import Home from './components/Home.vue'
import Contact from './components/Contact.vue'
import Packages from './components/packages.vue'
import PackagesLanding from './components/packagesLanding.vue'
import WeddingPackages from './components/WeddingPackages.vue'
import CommercialPackages from './components/CommercialPackages.vue'
import Portfolio from './components/portfolio.vue'
import PortfolioLanding from './components/portfolioLanding.vue'
import WeddingPortfolio from './components/WeddingPortfolio.vue'
import PersonalPortfolio from './components/PersonalPortfolio.vue'

import scrollanimation from "./directives/scrollanimation";

import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebaseConfig'

const routes = [
    {
        path: '/',
        component: Home
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
initializeApp(firebaseConfig);

createApp(App)
    .directive('scrollanimation', scrollanimation)
    .component("font-awesome-icon", FontAwesomeIcon)
    .use(router)
    .mount("#app");