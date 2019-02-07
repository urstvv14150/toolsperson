export default [
    {
        path: '/',
        name: 'search',
        component: require('@/components/home/Search.vue').default
    },
    {
        path: '/submit',
        name: 'submit',
        component: require('@/components/home/Submit.vue').default
    },
    {
        path: '/detailshow/:id',
        name: 'detailshow',
        component: require('@/components/home/DetailShow.vue').default
    },
    {
        path: '*',
        redirect: '/'
    }
]
