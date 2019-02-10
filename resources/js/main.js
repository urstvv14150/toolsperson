require('./bootstrap')
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './layouts/App.vue'
import routes from './routes.js'
import store from './store/index.js'
import ElementUi from 'element-ui'
import moment from 'moment'
import 'element-ui/lib/theme-chalk/index.css'
moment.locale('zh-tw')
Vue.use(VueRouter)
Vue.use(ElementUi)
Vue.directive('scroll', {
    bind: function(el, binding) {
        window.addEventListener('scroll', () => {
            let fnc = binding.value
            fnc(el)
        })
    }
})

const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {
    // let loginstatus = window.localStorage.getItem('loginstatus')
    console.log('loginstatus : ' + store.state.loginstatus)
    if (store.state.loginstatus) {
        next()
    } else {
        if (to.meta.requireAuth) {
            next()
        } else {
            next('/login')
        }
    }
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
