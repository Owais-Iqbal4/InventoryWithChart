<template>
    <div class="border border-[black]">
        <div class="w-full p-2 flex">
            <div class="w-full flex gap-[20px] items-center">
                <router-link to="/">Products</router-link>
                <router-link to="/chart">Chart</router-link>
                <router-link to="/orders">Orders</router-link>
                <!-- <a href="/chart">Chart</a>
                <a href="/orders">Orders</a> -->
                <select v-model="selectCategory">

                    <option disabled>Select Category</option>
                    <option value="">Show All</option>
                    <option value="Shoes">Shoes</option>
                    <option value="Cloths">Cloths</option>
                    <option value="Dinner Set">Dinner Set</option>
                </select>
                <div>
                    <!-- <button type="button" class=" btn-primary" data-toggle="modal" data-target="#exampleModal">open modal</button> -->
                    <button class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Add New Product</button>

                    <!-- Modal -->
                    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog"
                        aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="p-5">

                                    <p>product name</p>
                                    <input v-model="newProduct.name" type="text">
                                    <p>filter (Shoes, Cloths)</p>
                                    <input v-model="newProduct.filter" type="text">
                                    <p>type (men cloths, women cloths)</p>
                                    <input v-model="newProduct.type" type="text">
                                    <p>upload image</p>
                                    <input @change="handleImageUpload" accept="image/*" type="file">
                                    <p>price</p>
                                    <input v-model="newProduct.price" type="text">
                                </div>
                                <div class="modal-footer">
                                    <button class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button class="btn btn-primary" data-dismiss="modal" :disabled="!filled"
                                        @click="SaveNewProduct">Save
                                        changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full flex grow-1 gap-1">
                <input type="text" class="w-full" v-model="searchProduct">
                <button class="border border-[black] p-2" @click="SearchProduct">Search</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            searchProduct: '',
            selectCategory: '',
            filled: false,
            newProduct: {
                name: '',
                filter: '',
                type: '',
                img: '',
                price: null,
            }
        }
    },
    computed: {
        ...mapGetters(['getCurrentSaleData', 'getChartData'])
    },
    methods: {
        SearchProduct() {
            this.$store.commit('SEARCH_PRODUCT', this.searchProduct);
        },
        SaveNewProduct() {
            this.$store.commit('PRODUCTS', this.newProduct)
            this.filled = false

        },
        handleImageUpload(event) {
            const file = event.target.files[0]; // Get the uploaded file
            if (file) {
                const reader = new FileReader();

                reader.onload = () => {
                    let imageUrl = reader.result; // Set the data URL as the image URL
                    this.newProduct.img = imageUrl
                };

                reader.readAsDataURL(file); // Read the file as a data URL

            }
        }
    },
    watch: {
        selectCategory() {

            this.$store.commit('SELECT_CATEGORY', this.selectCategory);

        },
        newProduct: {

            handler() {
                if (
                    this.newProduct.name &&
                    this.newProduct.filter &&
                    this.newProduct.type &&
                    this.newProduct.img &&
                    this.newProduct.price) {
                    this.filled = true
                }
            },
            deep: true,
        },
        getCurrentSaleData: {
            handler() {
                const selectedDate = new Date(this.getCurrentSaleData.date);

                // Get the current date
                const currentDate = new Date();
                // console.log(currentDate)
                
               

                    // Calculate the time difference in milliseconds
                    const timeDifference = currentDate.getTime() - selectedDate.getTime()

                    // Calculate the days difference
                    const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));


                    // days 
                    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

                    // Calculate the index of the day in the daysOfWeek array
                    let dayIndex = (currentDate.getDay() + daysDifference) % 7;

                    // Get the day name based on the index
                    const dayName = daysOfWeek[dayIndex];
                    console.log('index', dayIndex, 'daysDifference ', daysDifference)
                    if (dayIndex >= 0 && daysDifference <= 7) {
                        let flag = false
                        this.getChartData['daily'].filter((item) => {
                            if (item.dataset == this.getCurrentSaleData.dataset && item.name == dayName) {
                                item.value = Number(item.value) + Number(this.getCurrentSaleData.value)
                                flag = true
                            }
                        })
                        if (!flag) {
                            this.getChartData['daily'].push({ name: `${dayName}`, value: this.getCurrentSaleData.value, dataset: this.getCurrentSaleData.dataset })
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
                        this.getChartData['weakly'].filter((item) => {
                            if (item.dataset == this.getCurrentSaleData.dataset && item.name == weekSelected) {
                                item.value = Number(item.value) + Number(this.getCurrentSaleData.value)
                                flag = true
                            }
                        })
                        if (!flag) {
                            this.getChartData['weakly'].push({ name: `${weekSelected}`, value: this.getCurrentSaleData.value, dataset: this.getCurrentSaleData.dataset })
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
                        this.getChartData['monthly'].filter((item) => {
                            if (item.dataset == this.getCurrentSaleData.dataset && selectedMonthName == item.name) {
                                item.value = Number(item.value) + Number(this.getCurrentSaleData.value)
                                flag = true

                            }
                        })
                        if (!flag) {
                            this.getChartData['monthly'].push({ name: `${selectedMonthName}`, value: this.getCurrentSaleData.value, dataset: this.getCurrentSaleData.dataset })

                        }

                    }

                    // for year

                    const yearDifference = currentYear - selectedYear;

                    // console.log(`Year difference between selected year (${selectedYear}) and current year (${currentYear}) is: ${yearDifference} years.`);

                    let years = ["This Year", "Year 1", "Year 2", "Year 3", "Year 4"]
                    let selectedYearName = years[yearDifference]
                    if (yearDifference >= 0 && yearDifference < 5) {
                        
                        let flag = false
                        this.getChartData['yearly'].filter((item) => {
                            if (item.dataset == this.getCurrentSaleData.dataset && item.name == selectedYearName) {
                                item.value = Number(item.value) + Number(this.getCurrentSaleData.value)
                                flag = true
                            }
                        })
                        if (!flag) {
                            this.getChartData['yearly'].push({ name: `${selectedYearName}`, value: this.getCurrentSaleData.value, dataset: this.getCurrentSaleData.dataset })
                        }
                    }
                    // setInterval(() => {
                    //     console.log('set time ', this.getChartData)
                    // }, 1000);
               
               

            },
            deep: true
        }

    }
}

</script>
