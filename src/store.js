// import Vue from 'vue'
import Vuex from 'vuex'

// Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        def: 'my name is owais',
        searchProduct: '',
        selectCategory: '',
        currentSaleData: {
            date: '',
            value: 0,
            dataset: ''
        },
        products:[
            {
                name:'men Shoes 1',
                filter:'Shoes',
                type:'men shoes',
                img:'https://media.istockphoto.com/id/1350560575/photo/pair-of-blue-running-sneakers-on-white-background-isolated.webp?b=1&s=170667a&w=0&k=20&c=liUSgX6SafJ7HWvefFqR9-pnf3KuH6v1lwQ6iEpePWc=',
                price:'500'
            },
            {
                name:'Men Shoes 2',
                filter:'Shoes',
                type:'men shoes',
                img:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
                price:'500'
            },
            {
                name:'Girl Shoes 1',
                filter:'Shoes',
                type:'women shoes',
                img:'https://thumbs.dreamstime.com/b/blue-shoes-29507491.jpg',
                price:'300'
            },
            {
                name:'Girl Shoes 2',
                filter:'Shoes',
                type:'women shoes',
                img:'https://image.shutterstock.com/image-photo/stability-cushion-running-shoes-new-260nw-1958445436.jpg',
                price:'400'
            },
            {
                name:'Dinner Set 1',
                filter:'Dinner Set',
                type:'dinner set',
                img:'https://umods.pk/cdn/shop/products/WhatsApp-Image-2021-05-27-at-8.44.05-PM-1_1200x1200.jpg?v=1652739565',
                price:'1000'
            },
            {
                name:'Dinner Set 2',
                filter:'Dinner Set',
                type:'dinner set',
                img:'https://lfo.com.pk/cdn/shop/products/1_5e15073f-d0b3-4646-b87a-aa1e17567e8e.png?v=1659091483',
                price:'1200'
            },
            {
                name:'Women Cloths 1',
                filter:'Cloths',
                type:'women cloth',
                img:'https://media.istockphoto.com/id/916092484/photo/women-clothes-hanging-on-hangers-clothing-rails-fashion-design.jpg?s=1024x1024&w=is&k=20&c=m_-tKfvNIumZYwW9V_3JO6ulWMPRLhPvXX0gsbJAe58=',
                price:'1500'
            },
            {
                name:'Women Cloths 2',
                filter:'Cloths',
                type:'women cloths',
                img:'https://media.istockphoto.com/id/1360334655/photo/closeup-of-fashionable-tops-in-trendy-purple-very-peri-lavender-colors-on-a-shopping-rail.jpg?s=1024x1024&w=is&k=20&c=nY3SNe_SWS59rXMfmDeM9huBw1BYZI4GBJoUNXxfpWs=',
                price:'1600'
            },
            {
                name:'Men Cloths 1',
                filter:'Cloths',
                type:'men cloths',
                img:'https://www.pakstyle.pk/img/products/s/p13716-update-pack-of-2-cotton-suits-update.jpg',
                price:'800'
            },
            {
                name:'Men Cloths 2',
                filter:'Cloths',
                type:'men cloths',
                img:'https://assets2.andaazfashion.com/media/catalog/product/cache/1/image/500x750/a12781a7f2ccb3d663f7fd01e1bd2e4e/p/l/plain-silk-black-jacket-style-mens-sherwani-mstv0881-1.jpg',
                price:'200'
            },
        ],
        chartData: {

            daily: [

                { name: "Sunday", value: 0, dataset: "" },
                { name: "Monday", value: 0, dataset: "" },
                { name: "Tuesday", value: 0, dataset: "" },
                { name: "Wednesday", value: 0, dataset: "" },
                { name: "Thursday", value: 0, dataset: "" },
                { name: "Friday", value: 0, dataset: "" },
                { name: "Saturday", value: 0, dataset: "" },

            ],
            weakly: [

                { name: "This Weak", value: 0, dataset: "" },
                { name: "Weak 1", value: 0, dataset: "" },
                { name: "Weak 2", value: 0, dataset: "" },
                { name: "Weak 3", value: 0, dataset: "" },


            ],

            monthly: [

                { name: "January", value: 0, dataset: "" },
                { name: "February", value: 0, dataset: "" },
                { name: "March", value: 0, dataset: "" },
                { name: "April", value: 0, dataset: "" },
                { name: "May", value: 0, dataset: "" },
                { name: "June", value: 0, dataset: "" },
                { name: "July", value: 0, dataset: "" },
                { name: "July", value: 0, dataset: "" },
                { name: "July", value: 0, dataset: "" },
                { name: "August", value: 0, dataset: "" },
                { name: "September", value: 0, dataset: "" },
                { name: "October", value: 0, dataset: "" },
                { name: "November", value: 0, dataset: "" },
                { name: "December", value: 0, dataset: "" },
            ],
            yearly: [

                { name: "This Year", value: 0, dataset: "" },
                { name: "Year 1", value: 0, dataset: "" },
                { name: "Year 2", value: 0, dataset: "" },
                { name: "Year 3", value: 0, dataset: "" },
                { name: "Year 4", value: 0, dataset: "" },

            ]
        }
    },
    getters: {
        getDef: state => state.def,
        getChartData: state => state.chartData,
        getSearchProduct: state => state.searchProduct,
        getSelectCategory: state => state.selectCategory,
        getProducts: state => state.products,
        getCurrentSaleData:state=> state.currentSaleData
    },
    mutations: {
        SEARCH_PRODUCT(state, payload) {
            state.searchProduct = payload;
        },
        SELECT_CATEGORY(state, payload) {
            state.selectCategory = payload;
        },
        PRODUCTS(state, payload){
            state.products.push(payload)
        },
        CURRENT_SALES_DATA(state, payload){
            state.currentSaleData = payload
            console.log('in store ',state.currentSaleData)
        }
    }
})

export default store;