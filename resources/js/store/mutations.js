export const state = {
    contents: [],
    test: '111'
}

export const mutations = {
    getcontents(state, data) {
        // console.log(data[0].title)
        // for (i = 0; i < data.length; i++) {
        //     data[i].footer = moment(
        //         data[i].createdatetime,
        //         'YYYYMMDD h:mm:ss a'
        //     ).fromNow()
        // }
        // state.contents = data.reverse()
        state.contents = data.reverse()
    },
    setcontents(state, data) {
        state.contents = state.contents.reverse()
        state.contents.push(data)
        state.contents = state.contents.reverse()
    }
}
