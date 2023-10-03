<template>
  <div>
    <Home />
    <!-- <AddSales /> -->
    <router-view>

    </router-view>
    <!-- <AddSales />
    <BarChart /> -->
  </div>
</template>

<script>
import Home from './components/HomePage.vue'
// import AddSales from './components/AddSales.vue';
// import BarChart from '@/components/BarChart.vue'
// import AddSales from '@/components/AddSales.vue'
export default {
  data() {
    return {

    };
  },
  components: {
    // BarChart,
    // AddSales,
    // AddSales,
    Home
  }


};
</script>
