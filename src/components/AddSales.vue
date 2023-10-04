<template>
    <div style="display: flex;gap: 10px; padding-bottom: 10px;">
        <input type="date" v-model="getCurrentSaleData.date">
        <select v-model="getCurrentSaleData.value">
            <option value="">select Price</option>
            <option value="100">100</option>
            <option value="200">200</option>
            <option value="300">300</option>
            <option value="400">400</option>
            <option value="500">500</option>
        </select>
        <select v-model="getCurrentSaleData.dataset">
            <option value="">select Product</option>
            <option value="Shoes">Shoes</option>
            <option value="Men Shirt">Men Shirt</option>
            <option value="Women Dress">Women Dress</option>
            <option value="Lady Shoes">Lady Shoes</option>
            <option value="Dinner Set">Dinner Set</option>
        </select>
        <button @click="AddSales">Add Sales</button>

    </div>
</template>
<script>
// import sales from '../sales'
// import { this.getChartData } from '../data'
import { mapGetters } from 'vuex'
import { watch } from 'vue';
import { useStore } from 'vuex'
export default {
    data() {
        return {
            // getCurrentSaleData: {
            //     date: '',
            //     value: 0,
            //     dataset: ''
            // },

        }
    },
    computed: {
        ...mapGetters(['getDef', 'getChartData', 'getCurrentSaleData'])
    },
    beforeMount() {

        this.AddSales()
    },
    methods: {

        // AddSales() {
        //     // const currentDate = new Date();
        //     // const year = currentDate.getFullYear(); 
        //     // const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        //     // const day = String(currentDate.getDate()).padStart(2, '0'); 

        //     // const formattedDate = `${year}-${month}-${day}`;
        //     // if (this.getCurrentSaleData.date && new Date(formattedDate) >= new Date(this.getCurrentSaleData.date)   && this.getCurrentSaleData.value && this.getCurrentSaleData.dataset) {
        //     //     sales.push(this.getCurrentSaleData)
        //     //     this.getCurrentSaleData = []
        //     // }
        //     // else{
        //     //     console.log('sorry')
        //     // }
        //     // console.log('sales ', sales)




        //     const selectedDate = new Date(this.getCurrentSaleData.date);

        //     // Get the current date
        //     const currentDate = new Date();
        //     console.log(currentDate)

        //     // Calculate the time difference in milliseconds
        //     const timeDifference = currentDate.getTime() - selectedDate.getTime()

        //     // Calculate the days difference
        //     const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));


        //     // days 
        //     const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        //     // Calculate the index of the day in the daysOfWeek array
        //     let dayIndex = (currentDate.getDay() - daysDifference) % 7;

        //     // Get the day name based on the index
        //     const dayName = daysOfWeek[dayIndex];

        //     if (dayIndex >= 0) {
        //         let flag = false
        //         this.getChartData['daily'].filter((item) => {
        //             if (item.dataset == this.getCurrentSaleData.dataset && item.name == dayName) {
        //                 item.value = Number(item.value) + Number(this.getCurrentSaleData.value)
        //                 flag = true
        //             }
        //         })
        //         if (!flag) {
        //             this.getChartData['daily'].push({ name: `${dayName}`, value: this.getCurrentSaleData.value, dataset: this.getCurrentSaleData.dataset })
        //         }
        //     }

        //     const weeks = [
        //         "This Weak", "Weak 1", "Weak 2", "Weak 3",
        //     ];
        //     let weekSelected = ''
        //     if (daysDifference <= 7) {
        //         weekSelected = weeks[0]
        //     }
        //     if (daysDifference > 7 && daysDifference <= 14) {
        //         weekSelected = weeks[1]
        //     }
        //     if (daysDifference > 14 && daysDifference <= 21) {
        //         weekSelected = weeks[2]
        //     }
        //     if (daysDifference > 21 && daysDifference <= 28) {
        //         weekSelected = weeks[3]
        //     }

        //     if (daysDifference >= 0 && daysDifference <= 28) {
        //         let flag = false
        //         this.getChartData['weakly'].filter((item) => {
        //             if (item.dataset == this.getCurrentSaleData.dataset && item.name == weekSelected) {
        //                 item.value = Number(item.value) + Number(this.getCurrentSaleData.value)
        //                 flag = true
        //             }
        //         })
        //         if (!flag) {
        //             this.getChartData['weakly'].push({ name: `${weekSelected}`, value: this.getCurrentSaleData.value, dataset: this.getCurrentSaleData.dataset })
        //         }
        //     }
        //     const months = [
        //         "January", "February", "March", "April", "May", "June",
        //         "July", "August", "September", "October", "November", "December"
        //     ];
        //     const selectedYear = selectedDate.getFullYear();
        //     const selectedMonth = selectedDate.getMonth();
        //     const currentYear = currentDate.getFullYear();



        //     if (selectedYear == currentYear) {
        //         const selectedMonthName = months[selectedMonth];

        //         let flag = false
        //         this.getChartData['monthly'].filter((item) => {
        //             if (item.dataset == this.getCurrentSaleData.dataset && selectedMonthName == item.name) {
        //                 item.value = Number(item.value) + Number(this.getCurrentSaleData.value)
        //                 flag = true

        //             }
        //         })
        //         if (!flag) {
        //             this.getChartData['monthly'].push({ name: `${selectedMonthName}`, value: this.getCurrentSaleData.value, dataset: this.getCurrentSaleData.dataset })

        //         }

        //     }

        //     // for year

        //     const yearDifference = currentYear - selectedYear;

        //     console.log(`Year difference between selected year (${selectedYear}) and current year (${currentYear}) is: ${yearDifference} years.`);

        //     let years = ["This Year", "Year 1", "Year 2", "Year 3", "Year 4"]
        //     let selectedYearName = years[yearDifference]
        //     if (yearDifference >= 0 && yearDifference < 5) {
        //         console.log
        //         let flag = false
        //         this.getChartData['yearly'].filter((item) => {
        //             if (item.dataset == this.getCurrentSaleData.dataset && item.name == selectedYearName) {
        //                 item.value = Number(item.value) + Number(this.getCurrentSaleData.value)
        //                 flag = true
        //             }
        //         })
        //         if (!flag) {
        //             this.getChartData['yearly'].push({ name: `${selectedYearName}`, value: this.getCurrentSaleData.value, dataset: this.getCurrentSaleData.dataset })
        //         }
        //     }
        //     // setInterval(() => {
        //     //     console.log('set time ', this.getChartData)
        //     // }, 1000);

        // }
    },
//     setup() {
//     const store = useStore(); // Get the Vuex store instance

//     // Watch for changes in the 'myState' property of the 'myModule' module
//     watch(() => store.state.currentSaleData, (newValue) => {
//       // Perform actions when the state updates
//       console.log('State updated:', newValue);
//       // You can perform additional actions based on the updated state
//     });

//     // Your component logic

//     return {};
//   },
    
}
</script>