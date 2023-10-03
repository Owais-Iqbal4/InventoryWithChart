<template>
    <div class="flex w-full flex-wrap gap-5 p-4">
        <div v-for="(product, index) in  getOrders"
            :key="index">
            <div class="card" style="width: 18rem;">
                <img :src="product.img" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">{{ product.name }}</h5>
                    <p class="card-text">Price : {{ product.price }}</p>
                  
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

        }
    },
    computed: {
        ...mapGetters(['getOrders'])
    }
}
</script>