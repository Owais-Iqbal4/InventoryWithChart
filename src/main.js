import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import store from './store';
import Chartkick from 'vue-chartkick'
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
// import Vue from 'vue'
// app.use(Chartkick);

const app = createApp(App);
app.use(Chartkick.use(Chart))
app.use(store);
app.mount('#app');
