<template>
  <div>

    <AddSales />
    <BarChart />
  </div>
</template>

<script>
import BarChart from '@/components/BarChart.vue'
import AddSales from '@/components/AddSales.vue'
export default {
  data() {
    return {

    };
  },
  components: {
    BarChart,
    AddSales
  }


};
</script>
