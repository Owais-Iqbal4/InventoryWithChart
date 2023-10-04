<template>
    <div class="flex w-full flex-wrap gap-5 p-4">
        <div v-for="(product, index) in  !getSelectCategory && !getSearchProduct ? getProducts : filterPrdAray"
            :key="index">
            <div class="card" style="width: 18rem;">
                <img :src="product.img" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">{{ product.name }}</h5>
                    <p class="card-text">Price : {{ product.price }}</p>
                    <button class="btn btn-primary" data-toggle="modal" data-target="#DateModal"
                        @click="FinalPurchase(index)">Final Purchase</button>
                </div>
            </div>

        </div>
        <div class="modal fade" id="DateModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="p-5">
                        <h1>This Feature for testing mode </h1>
                        <p>Enter date is necessary to see chart results </p>
                        <input v-model="sellDate" type="date">
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-secondary" :disabled="!sellDate" data-dismiss="modal"
                            @click="OnCLose">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            filterPrdAray: [],
            sellDate: '',
            productIndex: null,
            currentSaleData: {
                date: '',
                value: 0,
                dataset: '',
            }
        }
    },
    methods: {
        FinalPurchase(index) {


            this.productIndex = index

        },
        OnCLose() {
            const currentDate = new Date();
            const year = currentDate.getFullYear();
            const month = String(currentDate.getMonth() + 1).padStart(2, '0');
            const day = String(currentDate.getDate()).padStart(2, '0');
            const formattedDate = `${year}-${month}-${day}`;

            if (new Date(formattedDate) >= new Date(this.sellDate)) {
                this.currentSaleData.value = this.getProducts[this.productIndex].price
                this.currentSaleData.dataset = this.getProducts[this.productIndex].name
                this.currentSaleData.date = this.sellDate
                this.$store.commit('ORDERS', this.getProducts[this.productIndex])
                this.$store.commit('CURRENT_SALES_DATA', this.currentSaleData)
            }
            else {
                alert('Please select current date or below')
            }
        }
    },
    watch: {
        // sellDate() {

        // },
        getSelectCategory() {
            if (this.getSelectCategory == '') {
                this.$store.commit('SEARCH_PRODUCT', '')
            }
            let filterArray = this.getProducts.filter(el => el.filter == this.getSelectCategory)
            // this.$store.commit('PRODUCTS',filterArray)
            this.filterPrdAray = filterArray
            console.log('filterArray ', filterArray)
        },
        getSearchProduct() {

            let filterArray = this.getProducts.filter(el => el.type == this.getSearchProduct)
            // this.$store.commit('PRODUCTS',filterArray)
            this.filterPrdAray = filterArray
            console.log('filterArray ', filterArray)
        }
    },
    computed: {
        ...mapGetters(['getProducts', 'getSelectCategory', 'getSearchProduct'])
    }
}
</script>
