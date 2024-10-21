import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import HeaderMenu from '@/components/HeaderMenu.vue';
import AppFooter from '@/components/AppFooter.vue';
import AboutPage from '@/components/AboutPage.vue';
import TravelPage from './components/TravelPage.vue';
import ServicePage from './components/ServicePage.vue';
import SubPage from './components/SubPage.vue';
import PromotionPage from './components/PromotionPage.vue';
import NewPage from './components/NewPage.vue';


import './assets/css/style.css';
import './assets/css/bootsnav.css';
import './assets/css/bootstrap.min.css';
import './assets/css/datepicker.css';
import './assets/css/font-awesome.min.css';
import './assets/css/responsive.css';
import './assets/css/jquery-ui.min.css';
import './assets/css/owl.theme.default.min.css';
import './assets/css/owl.carousel.min.css';
import './assets/css/animate.css';
import './assets/css/hover.min.css';



const app = createApp(App);


app.component('HeaderMenu', HeaderMenu);
app.component('AppFooter', AppFooter);
app.component('AboutPage', AboutPage);
app.component('TravelPage', TravelPage);
app.component('ServicePage', ServicePage);
app.component('SubPage', SubPage);
app.component('PromotionPage', PromotionPage);
app.component('NewPage', NewPage);

app.use(router);
app.mount('#app');

