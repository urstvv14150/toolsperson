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
        path: '/test',
        name: 'test',
        component: require('@/components/home/Test.vue').default
    }
]
