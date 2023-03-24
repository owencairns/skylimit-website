import { createApp } from "vue";
import { createRouter, createWebHashHistory } from 'vue-router';
import "./style.css";
import App from "./App.vue";
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import SignUp from './components/SignUp.vue'

const myComponentRoutes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/signup', component: SignUp },
   ];
  
const router = createRouter({ routes: myComponentRoutes, history: createWebHashHistory() });
createApp(App).use(router).mount("#app");