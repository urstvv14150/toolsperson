export const CONTENTS_READ = context => {
    return axios.get('http://localhost:8888/alldata').then(res => {
        context.commit('getcontents', res.data)
    })
}
export const Login = (context, status) => {
    context.commit('login', status)
}
