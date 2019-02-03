import Vue from 'vue'
import App from './layouts/App.vue'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUi)

require('./bootstrap')

const app = new Vue({
    el: '#app',
    render: h => h(App)
})
