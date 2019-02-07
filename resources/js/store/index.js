import Vue from 'vue'
import Vuex from 'vuex'
import { state, mutations } from './mutations'
import * as actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
    state,
    mutations,
    actions,
    strict: true
})

// export default new Vuex.Store({
//     strict: true,
//     state: {
//         contents: []
//     },
//     mutations: {
//         getcontents(state, data) {
//             let i
//             for (i = 0; i < data.length; i++) {
//                 data[i].footer = moment(
//                     data[i].createdatetime,
//                     'YYYYMMDD h:mm:ss a'
//                 ).fromNow()
//             }
//             state.contents = data.reverse()
//         },
//         setcontents(state, data) {
//             state.contents = state.contents.reverse()
//             state.contents.push(data)
//             state.contents = state.contents.reverse()
//         }
//     },
//     actions: {
//         CONTENTS_READ: context => {
//             return axios.get('http://localhost:8888/alldata').then(res => {
//                 context.commit('getcontents', res.data)
//             })
//         }
//     }
// })
