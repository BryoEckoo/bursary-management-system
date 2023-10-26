import { createRouter,createWebHistory } from "vue-router"
import HomePage from './components/homePage.vue';
import HeaderPage from './components/headerPage.vue';
import AboutPage from './components/aboutPage.vue';
import DetailsPage from './components/detailsPage.vue';
import InfoPage from './components/infoPage.vue';
import RegisterPage from './components/registerpagePage.vue';
import ProfilePage from './components/profilePage.vue';
import AdminLogin from './components/adminLogin.vue';
import RecoverPage from './components/recoverPage.vue';
import AdminPage from './components/admin/adminPage.vue';



const routes = [
  { path: '/', component: HomePage },
  { path: '/header', component: HeaderPage },
  { path: '/about', component: AboutPage },
  { path: '/details', component: DetailsPage },
  { path: '/info', component: InfoPage },
  { path: '/register', component: RegisterPage },
  { path: '/profile', component: ProfilePage},
  { path: '/admin', component: AdminLogin},
  { path: '/recover', component: RecoverPage },
  { path: '/admin-p1', component: AdminPage }
];

const router=createRouter({
  history:createWebHistory(),
  routes,
});

export default router; 
