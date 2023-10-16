import { createRouter,createWebHistory } from "vue-router"
import HomePage from './components/homePage.vue';
import HeaderPage from './components/headerPage.vue';
import AboutPage from './components/aboutPage.vue';
import RequirementsPage from './components/requirementsPage.vue';
import DetailsPage from './components/detailsPage.vue';
import InfoPage from './components/infoPage.vue';
import ButtonPage from './components/buttonPage.vue';
import FamilyPage from './components/familyPage.vue';
import InstitutionPage from './components/institutionPage.vue';
import BankPage from './components/bankPage.vue';
import RegisterPage from './components/registerpagePage.vue';
import SummaryPage from './components/summaryPage.vue';
import ProfilePage from './components/profilePage.vue';
import AdminLogin from './components/adminLogin.vue';
import RecoverPage from './components/recoverPage.vue';
import AdminPage from './components/adminPage.vue';



const routes = [
  { path: '/', component: HomePage },
  { path: '/header', component: HeaderPage },
  { path: '/about', component: AboutPage },
  { path: '/documents', component: RequirementsPage },
  { path: '/details', component: DetailsPage },
  { path: '/info', component: InfoPage },
  { path: '/family', component: FamilyPage },
  { path: '/institution', component: InstitutionPage },
  { path: '/fees', component: BankPage },
  { path: '/register', component: RegisterPage },
  { path: '/button', component: ButtonPage },
  { path: '/uploads', component: SummaryPage },
  { path: '/profile', component: ProfilePage},
  { path: '/admin', component: AdminLogin},
  { path: '/recover', component: RecoverPage },
  { path: '/admin-page', component: AdminPage }

];

const router=createRouter({
  history:createWebHistory(),
  routes,
});

export default router; 
