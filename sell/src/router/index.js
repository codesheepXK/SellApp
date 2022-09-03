import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: () =>
            import ('../views/index.vue'),
        children: [

            {
                path: '',
                redirect: '/home',
            },
            {
                path: '/home',
                name: "home",
                component: () =>
                    import ('../views/Home.vue')
            },
            {
                path: '/order',
                name: "order",
                component: () =>
                    import ('../views/Order.vue')
            },
            {
                path: '/me',
                name: "me",
                component: () =>
                    import ('../views/Me.vue')
            },
            {
                path: '/search',
                name: "search",
                component: () =>
                    import ('../views/Search/Search.vue')
            }
        ]

    },
    {
        path: '/registerUser',
        component: () =>
            import ('../views/Login/RegisterUser.vue')
    },
    {
        path: '/registerShop',
        component: () =>
            import ('../views/Login/RegisterShop.vue')
    },
    {
        path: '/login',
        component: () =>
            import ('../views/Login/Login.vue')
    },
    {
        path: '/shop',
        redirect: '/shopOrder',
        component: () =>
            import ('../views/Shop/ShopDetail.vue'),
        children: [

            {
                path: '/shopOrder',
                component: () =>
                    import ('../views/Shop/ShopOrder.vue')
            },
            {
                path: '/shopInfo',
                component: () =>
                    import ('../views/Shop/ShopInfo.vue')
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    linkActiveClass: 'active',
    routes
})

export default router