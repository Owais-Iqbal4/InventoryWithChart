import { createRouter, createWebHistory } from 'vue-router';
// import VueRouter from 'vue-router';
import OrdersPage from './components/OrdersPage.vue';
import BarChart from './components/BarChart.vue';
import ProductPage from './components/ProductPage.vue';

// import Vue from 'vue'


// Vue.use(VueRouter);


const routes = [
    { path: '/', component: ProductPage },
    { path: '/chart', component: BarChart },
    { path: '/orders', component: OrdersPage },
   
];

const router = createRouter({
    history: createWebHistory(),
    routes
  });

export default router;