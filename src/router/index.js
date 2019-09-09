import Vue from 'vue';
import VueRouter from 'vue-router';
import ArticleList from '../components/article/ArticleList';
import ErrorMsg from '../components/ErrorMsg.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    mode:'history',
    routes: [
        {
            path: '/',
            component: ArticleList
        },
        {
            path: '/topics/:topic',
            component: ArticleList
        },
        // {
        //     path: '/',
        //     component: ArticleList
        // },
        // {
        //     path: '/',
        //     component: ArticleList
        // },
        // {
        //     path: '/',
        //     component: ArticleList
        // },
        {
            path: '*',
            component: ErrorMsg
        },
    ]
})

export default router;