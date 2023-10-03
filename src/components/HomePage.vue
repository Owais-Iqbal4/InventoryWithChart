<template>
    <div>
        <HeaderPage />
        <OrdersPage v-if="currentRoute === '/orders'" />
        <BarChart v-else-if="currentRoute === '/chart'" />
        <ProductPage v-else-if="currentRoute === '/'" />
    </div>
</template>

<script>
import HeaderPage from './HeaderPage.vue'
import OrdersPage from './OrdersPage.vue';
import BarChart from './BarChart.vue';
import ProductPage from './ProductPage.vue';


export default {
    data() {
        return {
            currentRoute: window.location.pathname
        }
    },
    components: {
        HeaderPage,
        OrdersPage,
        BarChart,
        ProductPage
    }
}
</script>
