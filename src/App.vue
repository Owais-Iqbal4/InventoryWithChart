<template>
  <div>
    <label>Select Time Period:</label>
    <select v-model="selectedPeriod">
      <option value="">Select value</option>
      <option class="text-[red]" value="daily">daily</option>
      <option value="weakly">Weakly</option>
      <option value="monthly">Monthly</option>
      <option value="yearly">Yearly</option>
    </select>
    <bar-chart :data="chartData" :options="chartOptions" xtitle="Time" ytitle="Population"></bar-chart>
  </div>
</template>

<script>
// import dummyData from './data'; // Import your data here
import { data123 } from './data'
export default {
  data() {
    return {
      selectedPeriod: '',
    };
  },
  
  computed: {
    chartData() {
      const groupedData = {};
      data123[this.selectedPeriod]?.forEach(item => {
        if (!groupedData[item.dataset]) {
          groupedData[item.dataset] = [];
        }
        groupedData[item.dataset].push([item.name, item.value]);
      });
      // console.log('groupentries ', groupedData)
      console.log(Object.entries(groupedData).map(([dataset, values]) => ({
        name: dataset,
        data: values
      })))
      return Object.entries(groupedData).map(([dataset, values]) => ({
        name: dataset,
        data: values
      }));
    },
  },
  
};
</script>
