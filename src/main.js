import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import Chartkick from 'vue-chartkick'
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
// import Vue from 'vue'
// app.use(Chartkick);

const app = createApp(App);
app.mount('#app');

app.use(Chartkick.use(Chart))