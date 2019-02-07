import axios from 'axios'

export const CONTENTS_READ = context => {
    return axios.get('http://localhost:8888/alldata').then(res => {
        context.commit('getcontents', res.data)
    })
}
