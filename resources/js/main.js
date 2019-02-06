require('./bootstrap')
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './layouts/App.vue'
import routes from './routes.js'
import store from './store'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(VueRouter)
Vue.use(ElementUi)

const router = new VueRouter({
    routes
})

const app = new Vue({
    el: '#app',
    router,
    store,
    mounted() {
        store.dispatch('CONTENTS_READ')
    },
    render: h => h(App)
})
