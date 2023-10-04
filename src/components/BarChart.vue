<template>
    <div class="p-2">
      <label>Select Time Period:</label>
      <select v-model="selectedPeriod">
        <option value="">Select Interval</option>
        <option class="" value="daily">daily</option>
        <option value="weakly">Weakly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>
      <bar-chart v-if="selectedPeriod" :data="chartData" xtitle="Product Sales" ytitle="Time" height="80dvh"></bar-chart>
      <h1 v-else>Please selec Time Duration</h1>
    </div>
  </template>

  <script>

  import {mapGetters} from 'vuex'
  export default {
    data() {
      return {
        selectedPeriod: '',
      };
    },
    
    computed: {
      ...mapGetters(['getChartData']),
      chartData() {
        const groupedData = {};
        this.getChartData[this.selectedPeriod]?.forEach(item => {
          if (!groupedData[item.dataset]) {
            groupedData[item.dataset] = [];
          }
          groupedData[item.dataset].push([item.name, item.value]);
        });
        // console.log(groupedData)
      
        return Object.entries(groupedData).map(([dataset, values]) => ({
          name: dataset,
          data: values
        }));
      },
    },
    
  };
  </script>
  