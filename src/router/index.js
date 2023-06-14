import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [

        {
            path: '/home',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/',
            redirect: 'log-in',

        },
        {
            path: '/log-in',
            name: 'logIn',
            component: ()=>import('../Security/Pages/log-in.component.vue'),
        }
        ,
        {
            path: '/sign-up',
            name: 'signUp',
            component: ()=>import('../Security/Pages/sign-up.component.vue'),
        },
        {
            path: '/calculator',
            name: 'calculator',
            component: ()=>import('../Calculator/pages/inputData.component.vue'),
        }
        ,/*
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFoundView
        }*/
    ]
})

export default router