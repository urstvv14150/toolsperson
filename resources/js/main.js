require('./bootstrap')
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './layouts/App.vue'
import routes from './routes.js'
import store from './store/index.js'
import ElementUi from 'element-ui'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(VueRouter)
Vue.use(ElementUi)
moment.locale('zh-tw')

const router = new VueRouter({
    routes
})

const app = new Vue({
    el: '#app',
    router,
    store,
    mounted() {
        this.$store.dispatch('CONTENTS_READ')
    },
    render: h => h(App)
})
