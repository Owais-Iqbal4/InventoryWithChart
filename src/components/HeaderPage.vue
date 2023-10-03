<template>
    <div class="border border-[black]">
        <div class="w-full p-2 flex">
            <div class="w-full flex gap-[20px] items-center">
                <a href="/chart">Chart</a>
                <a href="/orders">Orders</a>
                <select v-model="selectCategory">
                    <option value="All">Show All</option>
                    <option value="Shoes">Shoes</option>
                    <option value="Cloths">Cloths</option>
                    <option value="Dinner Set">Dinner Set</option>
                </select>
            </div>
            <div class="w-full flex grow-1 gap-1">
                <input type="text" class="w-full" v-model="searchProduct">
                <button class="border border-[black] p-2" @click="SearchProduct">Search</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            searchProduct: '',
            selectCategory: ''
        }
    },
    methods: {
        SearchProduct() {
            this.$store.commit('SEARCH_PRODUCT', this.searchProduct);
        }
    },
    watch: {
        selectCategory() {
       
            this.$store.commit('SELECT_CATEGORY', this.selectCategory);
   
        }
    }
}

</script>
