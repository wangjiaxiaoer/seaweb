import Vue from 'vue';
import Router from 'vue-router';
import Index from '../views/home/Index.vue';
import ProductAll from '../views/product/ProductAll.vue';
import ProductTop from '../views/product/ProductTop.vue';
import ProductDetail from '../views/product/ProductDetail.vue';
import Diff from '../views/product/diff/Diff.vue';
import Entering from '../views/entering/Entering.vue';
import Ustomized from '../views/ustomized/Ustomized.vue';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    linkActiveClass: 'active',
    routes: [{
            path: '/',
            name: 'Index',
            meta: {
                title: '首页',
                keepAlive: false
            },
            component: Index
        }, {
            path: '/productAll',
            name: 'productAll',
            meta: {
                title: '跨境服务',
                keepAlive: false
            },
            component: ProductAll
        }, {
            path: '/productTop',
            name: 'productTop',
            meta: {
                title: '跨境服务',
                keepAlive: false
            },
            component: ProductTop
        }, {
            path: '/productDetail',
            name: 'productDetail',
            meta: {
                title: '出海服务详情',
                keepAlive: false
            },
            component: ProductDetail
        }, {
            path: '/diff',
            name: 'diff',
            meta: {
                title: '对比',
                keepAlive: false
            },
            component: Diff
        }, {
            path: '/entering',
            name: 'entering',
            meta: {
                title: '服务商入驻',
                keepAlive: false
            },
            component: Entering
        }, {
            path: '/ustomized',
            name: 'ustomized',
            meta: {
                title: '私人订制',
                keepAlive: false
            },
            component: Ustomized
        }, {
            path: '/news/news_list',
            name: 'news_list',
            meta: {
                title: '新闻列表',
                keepAlive: false,
            },
            component: () => import('../views/news/NewsList.vue')
        }, {
            path: '/news/news_detail',
            name: 'news_detail',
            meta: {
                title: '新闻列表',
                keepAlive: false,
            },
            component: () => import('../views/news/NewsDetail.vue')
        },
        {
            path: '/about/:id',
            name: 'about',
            meta: {
                title: '关于我们',
                keepAlive: false,
            },
            component: () => import('../views/about/About.vue')
        },
        {
            path: '/login',
            name: 'login',
            meta: {
                title: '登录',
                keepAlive: false,
            },
            component: () => import('../views/login/Login.vue')
        },
        {
            path: '/register',
            name: 'register',
            meta: {
                title: '关于我们',
                keepAlive: false,
            },
            component: () => import('../views/login/Register.vue')
        },
    ]
})

// router.beforeEach((to, form, next) => {
// const {
//     title,
//     auth
// } = to.meta;
// console.log(to.name, form.name);
// if (auth === true && !$store.state.app.token) {
//     if (form.name === 'Login') return;
//     return toLogin(true, to.fullPath);
// }
// document.title = title || '出海网';

// if (auth) {
//     $store.dispatch('USERINFO').then(() => {
//         next();
//     });
// } else next();
// });
export default router;