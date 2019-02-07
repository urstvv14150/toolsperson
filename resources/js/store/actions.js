import axios from 'axios'

export const CONTENTS_READ = ({ commit }, status) => {
    console.log(commit)
    console.log(status)
    return axios.get('http://localhost:8888/alldata').then(res => {
        commit('getcontents', res.data)
    })
}
