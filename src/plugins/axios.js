import Vue from 'vue'
import axios from 'axios'

Vue.use({
    install(Vue){
        Vue.prototype.$http = axios.create({
            baseURL: process.env.VUE_APP_BASE_URL,
            headers: {
                Authorization: '12345'
            }
        })
    }
})