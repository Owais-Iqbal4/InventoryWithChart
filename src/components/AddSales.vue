<template>
    <div style="display: flex;gap: 10px; padding-bottom: 10px;">
        <input type="date" v-model="currentSaleData.date">
        <select v-model="currentSaleData.value">
            <option value="">select Price</option>
            <option value="100">100</option>
            <option value="200">200</option>
            <option value="300">300</option>
            <option value="400">400</option>
            <option value="500">500</option>
        </select>
        <select v-model="currentSaleData.dataset">
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
import { data123 } from '../data'
export default {
    data() {
        return {
            currentSaleData: {
                date: '',
                value: 0,
                dataset: ''
            },

        }
    },
    beforeMount() {

        this.AddSales()
    },
    methods: {

        AddSales() {
            // const currentDate = new Date();
            // const year = currentDate.getFullYear(); 
            // const month = String(currentDate.getMonth() + 1).padStart(2, '0');
            // const day = String(currentDate.getDate()).padStart(2, '0'); 

            // const formattedDate = `${year}-${month}-${day}`;
            // if (this.currentSaleData.date && new Date(formattedDate) >= new Date(this.currentSaleData.date)   && this.currentSaleData.value && this.currentSaleData.dataset) {
            //     sales.push(this.currentSaleData)
            //     this.currentSaleData = []
            // }
            // else{
            //     console.log('sorry')
            // }
            // console.log('sales ', sales)




            const selectedDate = new Date(this.currentSaleData.date);

            // Get the current date
            const currentDate = new Date();

            // Calculate the time difference in milliseconds
            const timeDifference = currentDate.getTime() - selectedDate.getTime()

            // Calculate the days difference
            const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));


            // days 
            const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

            // Calculate the index of the day in the daysOfWeek array
            let dayIndex = (currentDate.getDay() - daysDifference) % 7;

            // Get the day name based on the index
            const dayName = daysOfWeek[dayIndex];
          
            if (dayIndex >= 0) {
                let flag = false
                data123['daily'].filter((item) => {
                    if (item.dataset == this.currentSaleData.dataset && item.name == dayName) {
                        item.value = Number(item.value) + Number(this.currentSaleData.value)
                        flag = true
                    }
                })
                if (!flag) {
                    data123['daily'].push({ name: `${dayName}`, value: this.currentSaleData.value, dataset: this.currentSaleData.dataset })
                }
            }

            const weeks = [
                "This Weak", "Weak 1", "Weak 2", "Weak 3",
            ];
            let weekSelected = ''
            if (daysDifference <= 7) {
                weekSelected = weeks[0]
            }
            if (daysDifference > 7 && daysDifference <= 14) {
                weekSelected = weeks[1]
            }
            if (daysDifference > 14 && daysDifference <= 21) {
                weekSelected = weeks[2]
            }
            if (daysDifference > 21 && daysDifference <= 28) {
                weekSelected = weeks[3]
            }

            if (daysDifference >= 0 && daysDifference <= 28) {
                let flag = false
                data123['weakly'].filter((item) => {
                    if (item.dataset == this.currentSaleData.dataset && item.name == weekSelected) {
                        item.value = Number(item.value) + Number(this.currentSaleData.value)
                        flag = true
                    }
                })
                if (!flag) {
                    data123['weakly'].push({ name: `${weekSelected}`, value: this.currentSaleData.value, dataset: this.currentSaleData.dataset })
                }
            }
            const months = [
                "January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
            ];
            const selectedYear = selectedDate.getFullYear();
            const selectedMonth = selectedDate.getMonth();
            const currentYear = currentDate.getFullYear();



            if (selectedYear == currentYear) {
                const selectedMonthName = months[selectedMonth];

                let flag = false
                data123['monthly'].filter((item) => {
                    if (item.dataset == this.currentSaleData.dataset && selectedMonthName == item.name) {
                        item.value = Number(item.value) + Number(this.currentSaleData.value)
                        flag = true
                        
                    }
                })
                if (!flag) {
                    data123['monthly'].push({ name: `${selectedMonthName}`, value: this.currentSaleData.value, dataset: this.currentSaleData.dataset })

                }

            }

            // for year

            const yearDifference = currentYear - selectedYear;

            console.log(`Year difference between selected year (${selectedYear}) and current year (${currentYear}) is: ${yearDifference} years.`);

           let years = ["This Year", "Year 1", "Year 2", "Year 3", "Year 4"]
            let selectedYearName = years[yearDifference]
            if (yearDifference >= 0 && yearDifference < 5) {
                console.log
                let flag = false
                data123['yearly'].filter((item) => {
                    if (item.dataset == this.currentSaleData.dataset && item.name == selectedYearName) {
                        item.value = Number(item.value) + Number(this.currentSaleData.value)
                        flag = true
                    }
                })
                if (!flag) {
                    data123['yearly'].push({ name: `${selectedYearName}`, value: this.currentSaleData.value, dataset: this.currentSaleData.dataset })
                }
            }
            // setInterval(() => {
            //     console.log('set time ', data123)
            // }, 1000);

        }
    }
}
</script>