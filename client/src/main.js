import { createApp } from 'vue';
//import vue from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import router from './router'; 
//import store from './store';
//import axios from 'axios';

//setting up default vue's http modules for api calls
//vue.config.Vue.config.productionTip = false

//load the token from the localstorage
// vue.prototype.shttp = axios;
// const token = localStorage.getItem("token");
// //if there is a token append default axios authorization headers
// if(token){
//     vue.prototype.shttp.defaults.headers.common['Authorization'] = token; 
//}


// new vue({
//     router,
//     render: h =>h(App)
// }).$mount('#app')


const app = createApp(App);

app.use(router); 

app.mount('#app'); 