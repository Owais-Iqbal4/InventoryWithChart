// import Vue from 'vue'
import Vuex from 'vuex'

// Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        def: 'my name is owais',
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
        getChartData: state => state.chartData
    }
})

export default store;