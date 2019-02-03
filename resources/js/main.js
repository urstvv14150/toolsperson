import Vue from 'vue'
import App from './App.vue'

require('./bootstrap')

Vue.component(
    'example-component',
    require('./components/ExampleComponent.vue').default
)

const app = new Vue({
    el: '#app',
    render: h => h(App)
})
