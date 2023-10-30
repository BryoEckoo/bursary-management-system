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
import AdminDashboard from '../views/admin/adminPage.vue';
import AdminApplications from '../views/admin/adminApplications.vue';
import AdmBeneficiaries from '../views/admin/admBeneficiaries.vue';
import AmountReport from '../views/admin/amountReport.vue';
import BursaryReport from '../views/admin/bursaryReport.vue';
import WardReport from '../views/admin/wardReport.vue';
import AdmUsers from '../views/admin/adminUsers.vue';



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
  { path: '/admin/dashboard', component: AdminDashboard },
  { path: '/admin/applications', component: AdminApplications },
  { path: '/admin/beneficiaries', component: AdmBeneficiaries,},
  { path: '/admin/reports/amount', component: AmountReport },
  { path: '/admin/reports/bursary', component: BursaryReport },
  { path: '/admin/reports/wards', component: WardReport },
  { path: '/admin/users', component: AdmUsers },
];

const router=createRouter({
  history:createWebHistory(),
  routes,
});

export default router; 
