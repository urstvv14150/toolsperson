import Vue from 'vue'
import mutations from './mutations'

export const CONTENTS_READ = ({ commit }) => {
    return axios.get('http://localhost:8888/alldata').then(res => {
        commit('getcontents', res.data)
    })
}
