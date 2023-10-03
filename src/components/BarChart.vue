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
      <bar-chart v-if="selectedPeriod" :data="chartData" xtitle="Product Sales" ytitle="Time" height="80dvh"></bar-chart>
      <h1 v-else>Please selec Time Duration</h1>
    </div>
  </template>
  
  <script>

  import { data123 } from '../data'
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
        console.log(groupedData)
      
        return Object.entries(groupedData).map(([dataset, values]) => ({
          name: dataset,
          data: values
        }));
      },
    },
    
  };
  </script>
  