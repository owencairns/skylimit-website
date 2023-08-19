import { createApp, Directive } from "vue";
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
import Contact from './components/Contact.vue'
import Packages from './components/packages.vue'
import WeddingPackages from './components/packages-weddings.vue'
import PersonalPackages from './components/packages-personal.vue'
import CommercialPackages from './components/packages-commercial.vue'
import Portfolio from './components/portfolio.vue'
import PortfolioLanding from './components/portfolioLanding.vue'
import WeddingPortfolio from './components/WeddingPortfolio.vue'

import scrollanimation from "./directives/scrollanimation";
import { firebaseConfig } from './firebaseConfig'

const myComponentRoutes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/packages',
        component: Packages,
        children: [
            {
                path: 'weddings',
                component: WeddingPackages,
            },
            {
                path: 'personal',
                component: PersonalPackages,
            },
            {
                path: 'commercial',
                component: CommercialPackages
            }
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
        ],
    },
    {
        path: '/contact',
        component: Contact
    },
];

const router = createRouter({ routes: myComponentRoutes, history: createWebHashHistory() });

createApp(App)
    .directive('scrollanimation', scrollanimation)
    .component("font-awesome-icon", FontAwesomeIcon)
    .use(router)
    .mount("#app");
